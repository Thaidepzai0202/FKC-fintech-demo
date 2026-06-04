import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a self-contained .next/standalone bundle (pruned node_modules + server.js)
  // for upload to cPanel shared hosting (Passenger / Node.js Selector).
  output: "standalone",
  // Shared hosting has no platform-native `sharp`; skip runtime image optimization
  // so the bundle carries no OS-specific binaries and runs on the Linux server as-is.
  images: { unoptimized: true },
  allowedDevOrigins: ["bay-thehun-jones-cloud.trycloudflare.com"],
};

export default nextConfig;
