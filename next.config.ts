import type { NextConfig } from "next";

const basePath = "/maple";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: `${basePath}/`,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
