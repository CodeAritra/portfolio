import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: process.env.LOCAL_NETWORK_IP
    ? [process.env.LOCAL_NETWORK_IP, "localhost"]
    : ["localhost"],
};

export default nextConfig;