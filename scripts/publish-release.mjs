import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const distDir = path.join(process.cwd(), "dist-electron");
const tag = "v0.1.0";
const assetName = "maple-replan-setup-0.1.0.exe";

const setup = fs.existsSync(distDir)
  ? fs.readdirSync(distDir).find((f) => f.endsWith(".exe") && f.includes("Setup"))
  : null;

if (!setup) {
  console.error("설치 파일 없음. npm run electron:build 먼저 실행하세요.");
  process.exit(1);
}

const src = path.join(distDir, setup);
const staging = path.join(process.cwd(), "dist-electron", assetName);
if (path.basename(src) !== assetName) {
  fs.copyFileSync(src, staging);
}

const run = spawnSync(
  "gh",
  ["release", "upload", tag, staging, "--clobber"],
  { stdio: "inherit", shell: true }
);

if (run.status !== 0) {
  console.log("릴리스가 없으면: gh release create v0.1.0 --title \"v0.1.0\" --notes \"Windows 설치 프로그램\"");
  process.exit(run.status ?? 1);
}

console.log(
  `업로드 완료: https://github.com/wopsgus12-afk/maple-replan/releases/download/${tag}/${assetName}`
);
