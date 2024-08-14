/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "randomuser.me"],
  },
  experimental: {
    // Remova ou ajuste essas opções conforme necessário
    // reactRoot: true,
    // suppressHydrationWarning: true,
  },
};

export default nextConfig;
