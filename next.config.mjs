/** type {import('next').NextConfig} */
/* const nextConfig = {};

export default nextConfig;
 */
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out", // Where your static files will be exported
  assetPrefix: process.env.NODE_ENV === "production" ? "/Rado_ReactStudy/" : "", // Set asset prefix for production
  images: {
    unoptimized: true, // Disable Next.js image optimization since GitHub Pages does not support it
  },
};

export default nextConfig;
