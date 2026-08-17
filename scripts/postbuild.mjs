import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "out");

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

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
    if (!ent.name.endsWith(".html") || ent.name === "index.html" || ent.name === "404.html") {
      continue;
    }
    const destDir = path.join(dir, ent.name.slice(0, -".html".length));
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(full, path.join(destDir, "index.html"));
  }
}

mirrorHtmlAsIndex(outDir);

/** 예전 /maple/ 북마크 → 루트(/) */
const legacyRedirect = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0; url=/" />
  <link rel="canonical" href="https://gg-pass.com" />
  <title>이동 중…</title>
</head>
<body><p><a href="/">메이플 재획 정산으로 이동</a></p></body>
</html>`;

const legacyDir = path.join(outDir, "maple");
fs.mkdirSync(legacyDir, { recursive: true });
fs.writeFileSync(path.join(legacyDir, "index.html"), legacyRedirect);
