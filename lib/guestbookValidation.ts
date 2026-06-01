const URL_PATTERN = /https?:\/\/|www\./i;
const REPEAT_CHAR = /(.)\1{6,}/;
const SPAM_KEYWORDS = ["카지노", "대출", "무료충전", "텔레그램", "광고문의"];

export type GuestbookFieldErrors = {
  nickname?: string;
  password?: string;
  content?: string;
};

export function validateGuestbookInput(input: {
  nickname: string;
  password: string;
  content: string;
  honeypot?: string;
}): GuestbookFieldErrors {
  const errors: GuestbookFieldErrors = {};
  const nickname = input.nickname.trim();
  const password = input.password;
  const content = input.content.trim();

  if (input.honeypot?.trim()) {
    errors.content = "등록할 수 없습니다.";
    return errors;
  }

  if (nickname.length < 2) {
    errors.nickname = "닉네임은 2자 이상 입력해 주세요.";
  } else if (nickname.length > 16) {
    errors.nickname = "닉네임은 16자 이하로 입력해 주세요.";
  } else if (!/^[\p{L}\p{N}_\s·.-]+$/u.test(nickname)) {
    errors.nickname = "닉네임은 한글·영문·숫자만 사용할 수 있습니다.";
  }

  if (password.length < 4) {
    errors.password = "비밀번호는 4자 이상 입력해 주세요.";
  } else if (password.length > 32) {
    errors.password = "비밀번호는 32자 이하로 입력해 주세요.";
  }

  if (content.length < 5) {
    errors.content = "내용은 5자 이상 입력해 주세요.";
  } else if (content.length > 500) {
    errors.content = "내용은 500자 이하로 입력해 주세요.";
  } else if (REPEAT_CHAR.test(content)) {
    errors.content = "동일 문자 반복은 등록할 수 없습니다.";
  } else if (URL_PATTERN.test(content)) {
    errors.content = "URL·링크는 등록할 수 없습니다.";
  } else if (SPAM_KEYWORDS.some((word) => content.includes(word))) {
    errors.content = "등록할 수 없는 내용입니다.";
  }

  return errors;
}

const RATE_LIMIT_MS = 30_000;
const RATE_KEY = "maple-guestbook-last-submit";

export function checkGuestbookRateLimit(): string | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(RATE_KEY);
  if (!raw) return null;
  const last = Number(raw);
  if (!Number.isFinite(last)) return null;
  const elapsed = Date.now() - last;
  if (elapsed < RATE_LIMIT_MS) {
    const sec = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
    return `${sec}초 후에 다시 등록할 수 있습니다.`;
  }
  return null;
}

export function markGuestbookSubmitted(): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(RATE_KEY, String(Date.now()));
}
