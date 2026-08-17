export type MainTab = "calculator" | "guides" | "brag" | "tips" | "feedback";

export const MAIN_TABS: MainTab[] = [
  "calculator",
  "guides",
  "brag",
  "tips",
  "feedback",
];

/** gg-pass.com 루트 배포 — basePath 없음 */
export const APP_BASE_PATH =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_PATH) || "";

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

export function buildAppHref({ tab = "calculator", article, post }: AppUrlParams = {}): string {
  // Legacy article query → static guide route
  if (article) {
    return `/guide/${article}`;
  }
  if (tab === "guides") {
    return "/guide";
  }
  if (tab === "brag") {
    const qs = post != null && post !== "" ? `?post=${encodeURIComponent(String(post))}` : "";
    return `/community${qs}`;
  }
  if (tab === "tips") {
    const qs = post != null && post !== "" ? `?post=${encodeURIComponent(String(post))}` : "";
    return `/tips${qs}`;
  }
  if (tab === "feedback") {
    return "/feedback";
  }
  const params = new URLSearchParams();
  if (tab !== "calculator") {
    params.set("tab", tab);
  }
  if (post != null && post !== "") {
    params.set("post", String(post));
  }
  const qs = params.toString();
  return qs ? `/?${qs}` : "/";
}

export function toPublicAppPath(href: string): string {
  const base = APP_BASE_PATH.replace(/\/$/, "") || "";
  if (!base) return href.startsWith("/") ? href : `/${href}`;
  if (href === "/" || href === "") return `${base}/`;
  return `${base}${href.startsWith("/") ? href : `/${href}`}`;
}

export function buildAppPath(opts: AppUrlParams = {}): string {
  const path = toPublicAppPath(buildAppHref(opts));
  if (typeof window === "undefined") {
    return path;
  }
  return `${window.location.origin}${path}`;
}

export function buildAppAbsoluteUrl(opts: AppUrlParams = {}): string {
  return buildAppPath(opts);
}
