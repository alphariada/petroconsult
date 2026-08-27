/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.112"],
  async redirects() {
    return [
      {
        source: "/portofoliu",
        destination: "/despre-noi",
        permanent: true,
      },
      {
        source: "/portofoliu/",
        destination: "/despre-noi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
