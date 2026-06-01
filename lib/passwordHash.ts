/** 클라이언트·Supabase RPC(pgcrypto digest)와 동일한 SHA-256 hex */
export async function hashPasswordSha256(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
