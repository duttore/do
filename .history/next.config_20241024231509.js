/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables React Strict Mode, a development mode feature for highlighting potential problems.
  reactStrictMode: true,
  
  // Enables SWC minification for better performance.
  swcMinify: true,

  // Configure external image domains
  images: {
    domains: ['milanimacchinepercucire.com'], // Add your image domains here
  },

  // Environment variable validation if needed
  env: {
    MY_API_KEY: process.env.MY_API_KEY, // Example of using environment variables
  },

  // Additional configurations like i18n or rewrites can be added here
};

export default nextConfig;
