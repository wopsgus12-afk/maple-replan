import fs from "fs";
import path from "path";

const root = process.cwd();
const distDir = path.join(root, "dist-electron");
const publicReleaseDir = path.join(root, "public", "releases");
const outReleaseDir = path.join(root, "out", "releases");
const targetName = "maple-replan-setup-0.1.0.exe";

function findInstaller() {
  if (!fs.existsSync(distDir)) return null;
  const files = fs.readdirSync(distDir);
  const setup = files.find((f) => f.endsWith(".exe") && f.includes("Setup"));
  return setup ? path.join(distDir, setup) : null;
}

const src = findInstaller();
if (!src) {
  console.warn(
    "[copy-installer] dist-electron 설치 파일 없음 — 먼저 npm run electron:build 실행"
  );
  process.exit(0);
}

fs.mkdirSync(publicReleaseDir, { recursive: true });
const publicDest = path.join(publicReleaseDir, targetName);
fs.copyFileSync(src, publicDest);
console.log(`[copy-installer] public: ${publicDest}`);

if (fs.existsSync(path.join(root, "out"))) {
  fs.mkdirSync(outReleaseDir, { recursive: true });
  const outDest = path.join(outReleaseDir, targetName);
  fs.copyFileSync(src, outDest);
  console.log(`[copy-installer] out: ${outDest}`);
}
