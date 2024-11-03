/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'milanimacchinepercucire.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.macchinecucire.com', // Updated with "www."
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mondocucito.it',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dottorcucito.it',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
