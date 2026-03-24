import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/Gong", // uncomment for GitHub Pages without custom domain
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
