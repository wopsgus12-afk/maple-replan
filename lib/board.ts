import { hashPasswordSha256 } from "@/lib/passwordHash";
import { getSupabase } from "@/lib/supabase/client";

export type BoardKind = "brag" | "tips";

export type CommunityPost = {
  id: number;
  board_type: BoardKind;
  title: string;
  content: string;
  author: string;
  created_at: string;
};

export type CreatePostInput = {
  boardType: BoardKind;
  title: string;
  content: string;
  author: string;
  password: string;
};

export type UpdatePostInput = {
  title: string;
  content: string;
  author: string;
};

const TABLE = "community_posts";

export async function fetchPosts(
  boardType: BoardKind,
  searchQuery?: string
): Promise<CommunityPost[]> {
  const supabase = getSupabase();
  let query = supabase
    .from(TABLE)
    .select("id, board_type, title, content, author, created_at")
    .eq("board_type", boardType)
    .order("created_at", { ascending: false })
    .limit(100);

  const q = searchQuery?.trim();
  if (q) {
    const escaped = q.replace(/[%_]/g, "\\$&");
    const pattern = `%${escaped}%`;
    query = query.or(`title.ilike.${pattern},content.ilike.${pattern}`);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data ?? []) as CommunityPost[];
}

export async function createPost(input: CreatePostInput): Promise<CommunityPost> {
  const supabase = getSupabase();
  const password_hash = await hashPasswordSha256(input.password);

  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      board_type: input.boardType,
      title: input.title.trim(),
      content: input.content.trim(),
      author: input.author.trim(),
      password_hash,
    })
    .select("id, board_type, title, content, author, created_at")
    .single();

  if (error) throw new Error(error.message);
  return data as CommunityPost;
}

export async function verifyPostPassword(postId: number, password: string): Promise<boolean> {
  const supabase = getSupabase();
  const { data, error } = await supabase.rpc("verify_community_post_password", {
    p_id: postId,
    p_password: password,
  });
  if (error) throw new Error(error.message);
  return Boolean(data);
}

export async function updatePost(
  postId: number,
  password: string,
  input: UpdatePostInput
): Promise<CommunityPost> {
  const supabase = getSupabase();
  const { data, error } = await supabase.rpc("update_community_post", {
    p_id: postId,
    p_password: password,
    p_title: input.title.trim(),
    p_content: input.content.trim(),
    p_author: input.author.trim(),
  });

  if (error) throw new Error(error.message);
  if (!data) {
    throw new Error("비밀번호가 일치하지 않거나 수정할 수 없습니다.");
  }
  return data as CommunityPost;
}

export async function deletePost(postId: number, password: string): Promise<void> {
  const supabase = getSupabase();
  const { data, error } = await supabase.rpc("delete_community_post", {
    p_id: postId,
    p_password: password,
  });

  if (error) throw new Error(error.message);
  if (!data) {
    throw new Error("비밀번호가 일치하지 않거나 삭제할 수 없습니다.");
  }
}

export function subscribeToBoard(
  boardType: BoardKind,
  onChange: () => void
): () => void {
  const supabase = getSupabase();
  const channel = supabase
    .channel(`community_posts:${boardType}`)
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: TABLE,
        filter: `board_type=eq.${boardType}`,
      },
      () => {
        onChange();
      }
    )
    .subscribe();

  return () => {
    void supabase.removeChannel(channel);
  };
}

export function formatPostDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } catch {
    return iso.slice(0, 10);
  }
}

export function validateBoardPassword(password: string): string | null {
  if (password.length < 4) return "비밀번호는 4자 이상 입력해 주세요.";
  if (password.length > 32) return "비밀번호는 32자 이하로 입력해 주세요.";
  return null;
}
