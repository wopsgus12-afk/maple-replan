import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "out");

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

const nextSrc = path.join(outDir, "_next");
const nextDest = path.join(outDir, "maple", "_next");

if (fs.existsSync(nextSrc)) {
  fs.mkdirSync(path.dirname(nextDest), { recursive: true });
  fs.cpSync(nextSrc, nextDest, { recursive: true });
}

/** basePath `/maple` — public/download → gg-pass.com/maple/download/ */
const downloadSrc = path.join(outDir, "download");
const downloadDest = path.join(outDir, "maple", "download");
if (fs.existsSync(downloadSrc)) {
  fs.mkdirSync(downloadDest, { recursive: true });
  fs.cpSync(downloadSrc, downloadDest, { recursive: true });
}

