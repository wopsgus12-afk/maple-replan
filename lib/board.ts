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
  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      board_type: input.boardType,
      title: input.title.trim(),
      content: input.content.trim(),
      author: input.author.trim(),
    })
    .select("id, board_type, title, content, author, created_at")
    .single();

  if (error) throw new Error(error.message);
  return data as CommunityPost;
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
