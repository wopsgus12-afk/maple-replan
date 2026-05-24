export type FeedbackPayload = {
  nickname: string;
  message: string;
};

/** Mock submit — replace with Supabase insert when backend is ready. */
export async function submitFeedback(_payload: FeedbackPayload): Promise<void> {
  await Promise.resolve();
}
