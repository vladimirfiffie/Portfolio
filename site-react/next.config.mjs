/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      "aceternity-ui": "./src/shims/aceternity-ui.jsx",
    },
  },
};

export default nextConfig;
