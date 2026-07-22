-- 메이플 재획 정산 · 커뮤니티 게시판
-- Supabase Dashboard → SQL Editor → New query → 전체 붙여넣기 → Run

-- 1) 게시글 테이블 (자랑 게시판 + 사냥터 팁 공용)
create table if not exists public.community_posts (
  id bigint generated always as identity primary key,
  board_type text not null check (board_type in ('brag', 'tips')),
  title text not null check (char_length(trim(title)) >= 1 and char_length(title) <= 200),
  content text not null check (char_length(trim(content)) >= 1 and char_length(content) <= 10000),
  author text not null check (char_length(trim(author)) >= 1 and char_length(author) <= 32),
  password_hash text check (password_hash is null or char_length(password_hash) = 64),
  created_at timestamptz not null default now()
);

-- 기존 테이블에 비밀번호 컬럼만 없을 때
alter table public.community_posts
  add column if not exists password_hash text;

create index if not exists idx_community_posts_board_created
  on public.community_posts (board_type, created_at desc);

-- 2) Realtime (새 글이 올라오면 다른 유저 화면에도 반영)
alter table public.community_posts replica identity full;

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'community_posts'
  ) then
    alter publication supabase_realtime add table public.community_posts;
  end if;
exception
  when duplicate_object then null;
end $$;

-- 3) RLS (익명 읽기·쓰기 — 회원가입 없는 오픈 게시판)
alter table public.community_posts enable row level security;

drop policy if exists "community_posts_select" on public.community_posts;
create policy "community_posts_select"
  on public.community_posts for select
  using (true);

drop policy if exists "community_posts_insert" on public.community_posts;
create policy "community_posts_insert"
  on public.community_posts for insert
  with check (true);

-- 3-1) 게시글 수정·삭제 (비밀번호 검증 RPC — anon 키로 직접 UPDATE/DELETE 불가)
create extension if not exists pgcrypto;

create or replace function public.community_post_password_ok(p_id bigint, p_password text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  stored text;
begin
  select password_hash into stored from community_posts where id = p_id;
  if stored is null or stored = '' then
    return false;
  end if;
  return stored = encode(digest(p_password, 'sha256'), 'hex');
end;
$$;

create or replace function public.verify_community_post_password(p_id bigint, p_password text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select public.community_post_password_ok(p_id, p_password);
$$;

create or replace function public.delete_community_post(p_id bigint, p_password text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.community_post_password_ok(p_id, p_password) then
    return false;
  end if;
  delete from community_posts where id = p_id;
  return found;
end;
$$;

create or replace function public.update_community_post(
  p_id bigint,
  p_password text,
  p_title text,
  p_content text,
  p_author text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  row community_posts%rowtype;
begin
  if not public.community_post_password_ok(p_id, p_password) then
    return null;
  end if;

  update community_posts
  set
    title = trim(p_title),
    content = trim(p_content),
    author = trim(p_author)
  where id = p_id
  returning * into row;

  return jsonb_build_object(
    'id', row.id,
    'board_type', row.board_type,
    'title', row.title,
    'content', row.content,
    'author', row.author,
    'created_at', row.created_at
  );
end;
$$;

grant execute on function public.verify_community_post_password(bigint, text) to anon, authenticated;
grant execute on function public.delete_community_post(bigint, text) to anon, authenticated;
grant execute on function public.update_community_post(bigint, text, text, text, text) to anon, authenticated;

-- 4) 개발자에게 한마디 · 방명록 (닉네임 + 비밀번호 해시 + 내용)
create table if not exists public.developer_guestbook (
  id bigint generated always as identity primary key,
  nickname text not null check (
    char_length(trim(nickname)) >= 2 and char_length(nickname) <= 16
  ),
  password_hash text not null check (char_length(password_hash) = 64),
  content text not null check (
    char_length(trim(content)) >= 5 and char_length(content) <= 500
  ),
  created_at timestamptz not null default now()
);

create index if not exists idx_developer_guestbook_created
  on public.developer_guestbook (created_at desc);

alter table public.developer_guestbook replica identity full;

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'developer_guestbook'
  ) then
    alter publication supabase_realtime add table public.developer_guestbook;
  end if;
exception
  when duplicate_object then null;
end $$;

alter table public.developer_guestbook enable row level security;

drop policy if exists "developer_guestbook_select" on public.developer_guestbook;
create policy "developer_guestbook_select"
  on public.developer_guestbook for select
  using (true);

drop policy if exists "developer_guestbook_insert" on public.developer_guestbook;
create policy "developer_guestbook_insert"
  on public.developer_guestbook for insert
  with check (true);

-- (선택) 예전에 password 컬럼으로 만든 경우 → 앱과 맞추기
-- alter table public.developer_guestbook rename column password to password_hash;

-- ============================================================
-- 가이드 페이지 조회수 (목록 BEST / 조회수 표시)
-- ============================================================
create table if not exists public.guide_page_views (
  slug text primary key,
  view_count bigint not null default 0 check (view_count >= 0),
  updated_at timestamptz not null default now()
);

alter table public.guide_page_views enable row level security;

drop policy if exists "guide_page_views_select" on public.guide_page_views;
create policy "guide_page_views_select"
  on public.guide_page_views for select
  using (true);

create or replace function public.increment_guide_view(p_slug text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count bigint;
  clean text;
begin
  clean := trim(coalesce(p_slug, ''));
  if clean = '' then
    return 0;
  end if;

  insert into public.guide_page_views (slug, view_count, updated_at)
  values (clean, 1, now())
  on conflict (slug) do update
    set view_count = public.guide_page_views.view_count + 1,
        updated_at = now()
  returning view_count into new_count;

  return new_count;
end;
$$;

grant execute on function public.increment_guide_view(text) to anon, authenticated;

-- ============================================================
-- 가이드 추천수 (본문 추천 버튼 / 목록 표기)
-- ============================================================
alter table public.guide_page_views
  add column if not exists recommend_count bigint not null default 0;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'guide_page_views_recommend_count_check'
  ) then
    alter table public.guide_page_views
      add constraint guide_page_views_recommend_count_check
      check (recommend_count >= 0);
  end if;
exception
  when duplicate_object then null;
end $$;

create or replace function public.increment_guide_recommend(p_slug text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count bigint;
  clean text;
begin
  clean := trim(coalesce(p_slug, ''));
  if clean = '' then
    return 0;
  end if;

  insert into public.guide_page_views (slug, view_count, recommend_count, updated_at)
  values (clean, 0, 1, now())
  on conflict (slug) do update
    set recommend_count = public.guide_page_views.recommend_count + 1,
        updated_at = now()
  returning recommend_count into new_count;

  return new_count;
end;
$$;

grant execute on function public.increment_guide_recommend(text) to anon, authenticated;
