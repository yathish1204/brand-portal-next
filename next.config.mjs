/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      { protocol: "https", hostname: "trigent.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "www.iconfinder.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
