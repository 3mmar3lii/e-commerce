import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // ده الدومين الافتراضي بتاع ImageKit
        port: "",
        pathname: "/**", // معناها اسمح بأي مسار جوة الدومين ده
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ده اللي هيحل الإيرور اللي في الصورة
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
