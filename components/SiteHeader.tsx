"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "재획 정산기", match: (p: string) => p === "/" },
  {
    href: "/guide/",
    label: "가이드",
    match: (p: string) => p === "/guide" || p.startsWith("/guide/"),
  },
  {
    href: "/community/",
    label: "자랑 게시판",
    match: (p: string) => p === "/community" || p.startsWith("/community/"),
  },
] as const;

const SECONDARY = [
  { href: "/tips/", label: "유저 팁" },
  { href: "/feedback/", label: "피드백" },
] as const;

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1) || "/";
  }
  return pathname || "/";
}

export function SiteHeader() {
  const pathname = normalizePath(usePathname() || "/");

  return (
    <header className="sticky top-0 z-40 border-b border-maple-border/60 bg-maple-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5">
        <Link
          href="/"
          className="shrink-0 text-sm font-bold text-maple-gold hover:text-maple-gold/90"
        >
          메이플 재획 정산
        </Link>

        <nav
          aria-label="주요 메뉴"
          className="flex flex-1 flex-wrap items-center justify-center gap-1 sm:gap-1.5"
        >
          {NAV.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "maple-tab maple-tab-active"
                    : "maple-tab maple-tab-inactive"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <nav
          aria-label="보조 메뉴"
          className="flex shrink-0 items-center gap-2 text-[11px]"
        >
          {SECONDARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
