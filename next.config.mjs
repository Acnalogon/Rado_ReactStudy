/** type {import('next').NextConfig} */
/* const nextConfig = {};

export default nextConfig;
 */
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensure full static export
  distDir: "out", // Export directory
  assetPrefix: process.env.NODE_ENV === "production" ? "/Rado_ReactStudy/" : "", // GitHub Pages specific asset prefix
  images: {
    unoptimized: true, // Disable image optimization
  },
  trailingSlash: true,
};

export default nextConfig;
