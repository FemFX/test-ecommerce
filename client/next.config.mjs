/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "img-prod-cms-rt-microsoft-com.akamaized.net",
      },
    ],
  },
};

export default nextConfig;
