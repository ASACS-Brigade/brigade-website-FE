/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep runtime helpers when the host packages traced server dependencies.
  outputFileTracingIncludes: {
    "/*": ["./node_modules/@swc/helpers/**/*", "./node_modules/tslib/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
