-- 메이플 재획 정산 · 커뮤니티 게시판
-- Supabase Dashboard → SQL Editor → New query → 전체 붙여넣기 → Run

-- 1) 게시글 테이블 (자랑 게시판 + 사냥터 팁 공용)
create table if not exists public.community_posts (
  id bigint generated always as identity primary key,
  board_type text not null check (board_type in ('brag', 'tips')),
  title text not null check (char_length(trim(title)) >= 1 and char_length(title) <= 200),
  content text not null check (char_length(trim(content)) >= 1 and char_length(content) <= 10000),
  author text not null check (char_length(trim(author)) >= 1 and char_length(author) <= 32),
  created_at timestamptz not null default now()
);

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
