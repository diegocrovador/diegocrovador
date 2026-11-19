import type { NextConfig } from "next";

// Exportação estática: o site vira HTML/CSS/JS puro e pode ser hospedado
// gratuitamente (GitHub Pages, Netlify, Vercel...).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
