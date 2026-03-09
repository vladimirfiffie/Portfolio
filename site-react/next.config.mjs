/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["aceternity-ui"] = new URL(
      "src/shims/aceternity-ui.jsx",
      import.meta.url
    ).pathname;
    return config;
  },
};

export default nextConfig;
