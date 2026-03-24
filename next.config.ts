import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Gong",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
