"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/locale";
import { guideIndexPath, homePath } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";

type Props = {
  locale?: Locale;
};

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1) || "/";
  }
  return pathname || "/";
}

export function SiteHeader({ locale = "ko" }: Props) {
  const t = ui(locale);
  const pathname = normalizePath(usePathname() || "/");
  const prefix = locale === "en" ? "/en" : "";

  const nav = [
    {
      href: homePath(locale),
      label: t.navCalculator,
      match: (p: string) => p === prefix || p === `${prefix}/` || p === (locale === "en" ? "/en" : "/"),
    },
    {
      href: guideIndexPath(locale),
      label: t.navGuides,
      match: (p: string) =>
        p === `${prefix}/guide` || p.startsWith(`${prefix}/guide/`) || p === "/guide" || p.startsWith("/guide/"),
    },
  ] as const;

  // Korean community boards stay KO-only (user content is Korean).
  const koOnlyNav =
    locale === "ko"
      ? [
          {
            href: "/community/",
            label: t.navShowcase,
            match: (p: string) => p === "/community" || p.startsWith("/community/"),
          },
        ]
      : [];

  const secondary =
    locale === "ko"
      ? [
          { href: "/tips/", label: t.navTips },
          { href: "/feedback/", label: t.navFeedback },
        ]
      : [];

  const otherLocale: Locale = locale === "ko" ? "en" : "ko";
  const switchHref =
    pathname.startsWith("/guide") || pathname.startsWith("/en/guide")
      ? guideIndexPath(otherLocale)
      : homePath(otherLocale);

  return (
    <header className="sticky top-0 z-40 border-b border-maple-border/60 bg-maple-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5">
        <Link
          href={homePath(locale)}
          className="shrink-0 text-sm font-bold text-maple-gold hover:text-maple-gold/90"
        >
          {t.brand}
        </Link>

        <nav
          aria-label={t.navAria}
          className="flex flex-1 flex-wrap items-center justify-center gap-1 sm:gap-1.5"
        >
          {[...nav, ...koOnlyNav].map((item) => {
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

        <div className="flex shrink-0 items-center gap-3 text-[11px]">
          {secondary.length > 0 && (
            <nav aria-label={t.secondaryAria} className="flex items-center gap-2">
              {secondary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-maple-muted underline-offset-2 hover:text-maple-gold hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
          <Link
            href={switchHref}
            hrefLang={otherLocale}
            aria-label={t.langSwitchAria}
            className="font-medium text-maple-gold underline-offset-2 hover:underline"
          >
            {t.langSwitchLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
