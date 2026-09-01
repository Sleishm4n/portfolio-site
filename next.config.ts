import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "192.168.86.250:3000",
    "192.168.86.250",
    "*.local",
    "*"
  ],
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.scdn.co",
            },
            {
                protocol: "https",
                hostname: "*.spotifycdn.com",
            },
        ],
    },
};

export default nextConfig;
