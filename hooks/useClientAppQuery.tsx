"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  Suspense,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  buildAppHref,
  buildAppPath,
  parseMainTab,
  type AppUrlParams,
  type MainTab,
} from "@/lib/appTab";

function readWindowSearch(): URLSearchParams {
  if (typeof window === "undefined") return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

type AppQueryContextValue = {
  mainTab: MainTab;
  articleSlug: string | null;
  postId: string | null;
  setMainTab: (tab: MainTab) => void;
  openArticle: (slug: string) => void;
  closeArticle: () => void;
  openPost: (tab: MainTab, postId: number) => void;
  closePost: (tab: MainTab) => void;
  push: (opts: AppUrlParams) => void;
  replace: (opts: AppUrlParams) => void;
  back: () => void;
};

const AppQueryContext = createContext<AppQueryContextValue | null>(null);

function applyUrl(opts: AppUrlParams, mode: "push" | "replace") {
  const href = buildAppHref(opts);
  const fullPath = buildAppPath(opts);

  if (typeof window !== "undefined") {
    const current = `${window.location.pathname}${window.location.search}`;
    if (current !== fullPath) {
      if (mode === "push") {
        window.history.pushState({ app: "gg-pass" }, "", fullPath);
      } else {
        window.history.replaceState({ app: "gg-pass" }, "", fullPath);
      }
    }
    window.dispatchEvent(new Event("app-query-change"));
  }

  return href;
}

function AppQueryProviderInner({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  /** pathname이 안 바뀌는 ?tab= / &article= 변경을 즉시 반영 (GitHub Pages static) */
  const [queryParams, setQueryParams] = useState<URLSearchParams>(() => new URLSearchParams());

  const syncFromBrowser = useCallback(() => {
    setQueryParams(readWindowSearch());
  }, []);

  useEffect(() => {
    syncFromBrowser();
  }, [searchParams, syncFromBrowser]);

  useEffect(() => {
    const onNav = () => syncFromBrowser();
    window.addEventListener("popstate", onNav);
    window.addEventListener("app-query-change", onNav);
    return () => {
      window.removeEventListener("popstate", onNav);
      window.removeEventListener("app-query-change", onNav);
    };
  }, [syncFromBrowser]);

  const navigate = useCallback(
    (opts: AppUrlParams, mode: "push" | "replace", immediate = true) => {
      const next = new URLSearchParams();
      const tab = opts.tab ?? "calculator";
      if (tab !== "calculator") next.set("tab", tab);
      if (opts.article) next.set("article", opts.article);
      if (opts.post != null && opts.post !== "") next.set("post", String(opts.post));

      if (immediate) setQueryParams(next);

      const href = applyUrl(opts, mode);
      if (mode === "push") {
        router.push(href, { scroll: false });
      } else {
        router.replace(href, { scroll: false });
      }
      queueMicrotask(syncFromBrowser);
    },
    [router, syncFromBrowser]
  );

  const mainTab = parseMainTab(queryParams.get("tab"));
  const articleSlug = queryParams.get("article");
  const postId = queryParams.get("post");

  const setMainTab = useCallback(
    (tab: MainTab) => navigate({ tab }, "replace"),
    [navigate]
  );

  const openArticle = useCallback(
    (slug: string) => {
      navigate({ tab: "guides", article: slug }, "push");
    },
    [navigate]
  );

  const closeArticle = useCallback(() => {
    if (articleSlug) {
      window.history.back();
      queueMicrotask(syncFromBrowser);
      return;
    }
    navigate({ tab: "guides" }, "replace");
  }, [articleSlug, navigate, syncFromBrowser]);

  const openPost = useCallback(
    (tab: MainTab, id: number) => {
      navigate({ tab, post: id }, "push");
    },
    [navigate]
  );

  const closePost = useCallback(
    (tab: MainTab) => {
      if (postId) {
        window.history.back();
        queueMicrotask(syncFromBrowser);
        return;
      }
      navigate({ tab }, "replace");
    },
    [postId, navigate, syncFromBrowser]
  );

  const push = useCallback((opts: AppUrlParams) => navigate(opts, "push"), [navigate]);
  const replace = useCallback((opts: AppUrlParams) => navigate(opts, "replace"), [navigate]);

  const back = useCallback(() => {
    window.history.back();
    queueMicrotask(syncFromBrowser);
  }, [syncFromBrowser]);

  const value = useMemo(
    () => ({
      mainTab,
      articleSlug,
      postId,
      setMainTab,
      openArticle,
      closeArticle,
      openPost,
      closePost,
      push,
      replace,
      back,
    }),
    [
      mainTab,
      articleSlug,
      postId,
      setMainTab,
      openArticle,
      closeArticle,
      openPost,
      closePost,
      push,
      replace,
      back,
    ]
  );

  return <AppQueryContext.Provider value={value}>{children}</AppQueryContext.Provider>;
}

export function AppQueryProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <AppQueryProviderInner>{children}</AppQueryProviderInner>
    </Suspense>
  );
}

export function useAppQuery(): AppQueryContextValue {
  const ctx = useContext(AppQueryContext);
  if (!ctx) {
    throw new Error("useAppQuery must be used within AppQueryProvider");
  }
  return ctx;
}

/** @deprecated useAppQuery — 하위 호환 */
export function useClientAppQuery() {
  return useAppQuery();
}

/** trailingSlash 정적 호스팅: …/index.html → 슬래시 경로로 정리 */
export function useStaticHostingPathFix() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;
    if (!pathname.endsWith("/index.html")) return;
    const clean = pathname.replace(/\/index\.html$/, "/") || "/";
    window.location.replace(`${clean}${search}${hash}`);
  }, []);
}
