import type { NextConfig } from "next";

const basePath = "/maple";

/**
 * Static export — gg-pass.com
 * - basePath / assetPrefix: 메이플 앱·정적 에셋 → /maple, /maple/_next/static/...
 * - app/maple/* 라우트와 함께 사용 (URL은 /maple 한 번만)
 * - 루트(/) 대문은 app/page.tsx (basePath 미적용)
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
