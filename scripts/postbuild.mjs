import fs from "fs";
import path from "path";

const SITE_URL = "https://gg-pass.com";
const outDir = path.join(process.cwd(), "out");

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

const SKIP_MIRROR_NAMES = new Set([
  "index.html",
  "404.html",
  "sitemap.xml.html",
  "robots.txt.html",
]);

const NON_INDEXABLE_PREFIXES = ["/overlay", "/maple", "/download", "/404"];

/**
 * GitHub Pages: trailingSlash false emits guide.html + guide/slug.html.
 * Mirror each page HTML as a folder index.html so both /guide/slug (canonical)
 * and legacy /guide/slug/ keep working.
 */
function mirrorHtmlAsIndex(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.name.startsWith(".") || ent.name === "_next") continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      mirrorHtmlAsIndex(full);
      continue;
    }
    if (!ent.name.endsWith(".html") || SKIP_MIRROR_NAMES.has(ent.name)) {
      continue;
    }
    const destDir = path.join(dir, ent.name.slice(0, -".html".length));
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(full, path.join(destDir, "index.html"));
  }
}

mirrorHtmlAsIndex(outDir);

function toPosix(rel) {
  return rel.split(path.sep).join("/");
}

function htmlRelToPath(relPosix) {
  let p = relPosix;
  if (p.endsWith("/index.html")) {
    p = p.slice(0, -"/index.html".length);
  } else if (p === "index.html") {
    p = "";
  } else if (p.endsWith(".html")) {
    p = p.slice(0, -".html".length);
  } else {
    return null;
  }
  return p ? `/${p}` : "/";
}

function isIndexablePath(pathname) {
  if (pathname === "/") return true;
  return !NON_INDEXABLE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function collectHtmlFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith(".") || ent.name === "_next") continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      collectHtmlFiles(full, acc);
      continue;
    }
    if (ent.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function sitemapPriority(pathname) {
  if (pathname === "/") return "1.0";
  if (pathname === "/en") return "0.95";
  if (pathname === "/guide" || pathname === "/en/guide") return "0.9";
  if (pathname.startsWith("/guide/") || pathname.startsWith("/en/guide/")) {
    return "0.8";
  }
  if (pathname === "/community") return "0.7";
  if (pathname === "/tips") return "0.6";
  if (pathname === "/feedback") return "0.4";
  return "0.3";
}

function sitemapChangefreq(pathname) {
  if (pathname === "/guide" || pathname === "/en/guide") return "daily";
  if (pathname === "/community") return "daily";
  if (pathname === "/feedback") return "monthly";
  if (
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/en/privacy" ||
    pathname === "/en/terms" ||
    pathname === "/en/about" ||
    pathname === "/en/contact"
  ) {
    return "yearly";
  }
  return "weekly";
}

function xmlEscape(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Rewrite sitemap.xml from HTML that actually exists in `out/`.
 * Next.js metadata routes can emit a sitemap.xml *directory* on static export,
 * which GitHub Pages serves as HTTP 500.
 */
function writeCleanSitemap() {
  const sitemapPath = path.join(outDir, "sitemap.xml");
  if (fs.existsSync(sitemapPath)) {
    fs.rmSync(sitemapPath, { recursive: true, force: true });
  }

  const lastmod = new Date().toISOString().slice(0, 10);
  const paths = new Set();

  for (const file of collectHtmlFiles(outDir)) {
    const rel = toPosix(path.relative(outDir, file));
    const pathname = htmlRelToPath(rel);
    if (!pathname || !isIndexablePath(pathname)) continue;
    if (pathname !== "/" && pathname.endsWith("/")) continue;
    paths.add(pathname);
  }

  const sorted = [...paths].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });

  const body = sorted
    .map((pathname) => {
      const loc = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;
      return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${sitemapChangefreq(pathname)}</changefreq>
    <priority>${sitemapPriority(pathname)}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  fs.writeFileSync(sitemapPath, xml);
  console.log(`[postbuild] sitemap.xml rewritten with ${sorted.length} canonical URLs`);
}

writeCleanSitemap();

/** 예전 /maple/ 북마크 → 루트(/) — noindex so it cannot compete with canonical home */
const legacyRedirect = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex, nofollow" />
  <meta http-equiv="refresh" content="0; url=/" />
  <link rel="canonical" href="https://gg-pass.com" />
  <title>이동 중…</title>
</head>
<body><p><a href="/">메이플 재획 정산으로 이동</a></p></body>
</html>`;

const legacyDir = path.join(outDir, "maple");
fs.mkdirSync(legacyDir, { recursive: true });
fs.writeFileSync(path.join(legacyDir, "index.html"), legacyRedirect);
