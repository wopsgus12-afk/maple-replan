import type { Metadata } from "next";
import { getEnSlugForKo, getKoSlugForEn } from "@/lib/enSeoPosts";
import { absoluteUrl, guideAbsoluteUrl } from "@/lib/site";
import type { Locale } from "@/lib/locale";
import { guidePath, homePath, localizedPath } from "@/lib/locale";

/**
 * Build alternates.languages only when both locales exist for the same content.
 * Never invent EN/KO pairs for unpaired guides.
 * Canonical URLs never include a trailing slash.
 */
export function guideLanguageAlternates(
  locale: Locale,
  slug: string
): NonNullable<Metadata["alternates"]> {
  const selfPath = guidePath(locale, slug);
  const selfUrl = absoluteUrl(selfPath);

  if (locale === "ko") {
    const enSlug = getEnSlugForKo(slug);
    if (!enSlug) {
      return { canonical: selfUrl };
    }
    return {
      canonical: selfUrl,
      languages: {
        ko: selfUrl,
        en: guideAbsoluteUrl("en", enSlug),
        "x-default": selfUrl,
      },
    };
  }

  const koSlug = getKoSlugForEn(slug);
  if (!koSlug) {
    return { canonical: selfUrl };
  }
  const koUrl = guideAbsoluteUrl("ko", koSlug);
  return {
    canonical: selfUrl,
    languages: {
      ko: koUrl,
      en: selfUrl,
      "x-default": koUrl,
    },
  };
}

type SharedSection = "/" | "/guide" | "/privacy" | "/terms";

/** Home / section pages that always exist in both locales. */
export function sectionLanguageAlternates(
  locale: Locale,
  path: SharedSection
): NonNullable<Metadata["alternates"]> {
  const koUrl = absoluteUrl(path);
  const enUrl = absoluteUrl(path === "/" ? "/en" : `/en${path}`);
  const selfUrl = locale === "en" ? enUrl : koUrl;
  return {
    canonical: selfUrl,
    languages: {
      ko: koUrl,
      en: enUrl,
      "x-default": koUrl,
    },
  };
}

export function localeHomeAlternates(locale: Locale) {
  return sectionLanguageAlternates(locale, "/");
}

export function otherLocaleHome(locale: Locale): string {
  return homePath(locale === "ko" ? "en" : "ko");
}

export function otherLocaleGuideIndex(locale: Locale): string {
  return localizedPath(locale === "ko" ? "en" : "ko", "/guide");
}
