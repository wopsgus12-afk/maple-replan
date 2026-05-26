export type MainTab = "calculator" | "guides" | "brag" | "tips" | "feedback";

export const MAIN_TABS: MainTab[] = [
  "calculator",
  "guides",
  "brag",
  "tips",
  "feedback",
];

/** 메이플 앱 URL 접두사 (gg-pass.com/maple/, 로컬 /maple/) */
export const APP_BASE_PATH =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH) || "/maple";

export function parseMainTab(value: string | null | undefined): MainTab {
  if (value && (MAIN_TABS as string[]).includes(value)) {
    return value as MainTab;
  }
  return "calculator";
}

export type AppUrlParams = {
  tab?: MainTab;
  article?: string | null;
  post?: string | number | null;
};

/** Next Link·router용 (basePath `/maple` 기준 상대 경로) */
export function buildAppHref({ tab = "calculator", article, post }: AppUrlParams = {}): string {
  const params = new URLSearchParams();
  if (tab !== "calculator") {
    params.set("tab", tab);
  }
  if (article) {
    params.set("article", article);
  }
  if (post != null && post !== "") {
    params.set("post", String(post));
  }
  const qs = params.toString();
  return qs ? `/?${qs}` : "/";
}

/** 브라우저 주소창·history용 절대 경로 (`/maple/?tab=guides`) */
export function toPublicAppPath(href: string): string {
  const base = APP_BASE_PATH.replace(/\/$/, "") || "";
  if (!base) return href.startsWith("/") ? href : `/${href}`;
  if (href === "/" || href === "") return `${base}/`;
  return `${base}${href.startsWith("/") ? href : `/${href}`}`;
}

/** pathname + search (`/maple/?tab=guides`) — history API용 */
export function buildAppPath(opts: AppUrlParams = {}): string {
  return toPublicAppPath(buildAppHref(opts));
}

/** 절대 URL (`http://localhost:3000/maple/...`) */
export function buildAppAbsoluteUrl(opts: AppUrlParams = {}): string {
  const path = buildAppPath(opts);
  if (typeof window === "undefined") {
    return path;
  }
  return `${window.location.origin}${path}`;
}
