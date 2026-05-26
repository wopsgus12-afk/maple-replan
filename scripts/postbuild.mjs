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

