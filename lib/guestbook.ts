import { hashPasswordSha256 } from "@/lib/passwordHash";
import { getSupabase } from "@/lib/supabase/client";

const TABLE = "developer_guestbook";

export type GuestbookEntry = {
  id: number;
  nickname: string;
  content: string;
  created_at: string;
};

export type CreateGuestbookInput = {
  nickname: string;
  password: string;
  content: string;
};

export async function fetchGuestbookEntries(): Promise<GuestbookEntry[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from(TABLE)
    .select("id, nickname, content, created_at")
    .order("created_at", { ascending: false })
    .limit(80);

  if (error) throw new Error(error.message);
  return (data ?? []) as GuestbookEntry[];
}

export async function createGuestbookEntry(
  input: CreateGuestbookInput
): Promise<GuestbookEntry> {
  const supabase = getSupabase();
  const password_hash = await hashPasswordSha256(input.password);

  const { data, error } = await supabase
    .from(TABLE)
    .insert({
      nickname: input.nickname.trim(),
      content: input.content.trim(),
      password_hash,
    })
    .select("id, nickname, content, created_at")
    .single();

  if (error) throw new Error(error.message);
  return data as GuestbookEntry;
}

export function subscribeToGuestbook(onChange: () => void): () => void {
  const supabase = getSupabase();
  const channel = supabase
    .channel("developer_guestbook")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: TABLE },
      () => {
        onChange();
      }
    )
    .subscribe();

  return () => {
    void supabase.removeChannel(channel);
  };
}

export function formatGuestbookDate(iso: string): string {
  try {
    const d = new Date(iso);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMin = Math.floor(diffMs / 60_000);
    if (diffMin < 1) return "방금 전";
    if (diffMin < 60) return `${diffMin}분 전`;
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 24) return `${diffHr}시간 전`;
    const diffDay = Math.floor(diffHr / 24);
    if (diffDay < 7) return `${diffDay}일 전`;
    return d.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } catch {
    return iso.slice(0, 10);
  }
}
