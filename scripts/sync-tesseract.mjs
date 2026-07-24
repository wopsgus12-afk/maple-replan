/**
 * Keep public/tesseract worker/core in sync with installed tesseract.js packages.
 * Language packs (*.traineddata.gz) are committed under public/tesseract/lang/.
 */
import fs from "fs";
import path from "path";

const root = process.cwd();
const destDir = path.join(root, "public", "tesseract");

const copies = [
  ["node_modules/tesseract.js/dist/worker.min.js", "worker.min.js"],
  [
    "node_modules/tesseract.js-core/tesseract-core-simd.wasm.js",
    "tesseract-core-simd.wasm.js",
  ],
  [
    "node_modules/tesseract.js-core/tesseract-core-simd.wasm",
    "tesseract-core-simd.wasm",
  ],
  [
    "node_modules/tesseract.js-core/tesseract-core-simd.js",
    "tesseract-core-simd.js",
  ],
];

fs.mkdirSync(destDir, { recursive: true });

for (const [fromRel, toName] of copies) {
  const from = path.join(root, fromRel);
  const to = path.join(destDir, toName);
  if (!fs.existsSync(from)) {
    console.warn(`[sync-tesseract] missing ${fromRel}`);
    continue;
  }
  fs.copyFileSync(from, to);
  console.log(`[sync-tesseract] ${toName}`);
}
