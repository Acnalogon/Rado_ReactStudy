/** type {import('next').NextConfig} */
/* const nextConfig = {};

export default nextConfig;
 */
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to export the app as static files
  distDir: "out", // Directory where exported files will be stored
};

export default nextConfig;
