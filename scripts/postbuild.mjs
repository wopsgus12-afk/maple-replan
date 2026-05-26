import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "out");

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

/** 예전 /maple/ 북마크 → 루트(/) */
const legacyRedirect = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0; url=/" />
  <link rel="canonical" href="https://gg-pass.com/" />
  <title>이동 중…</title>
</head>
<body><p><a href="/">메이플 재획 정산으로 이동</a></p></body>
</html>`;

const legacyDir = path.join(outDir, "maple");
fs.mkdirSync(legacyDir, { recursive: true });
fs.writeFileSync(path.join(legacyDir, "index.html"), legacyRedirect);
