import type { NextConfig } from "next";

/** gg-pass.com 루트(/) = 메이플 재획 정산기 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
