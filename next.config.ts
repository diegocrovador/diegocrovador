import type { NextConfig } from "next";

// Exportação estática: o site vira HTML/CSS/JS puro e pode ser hospedado
// gratuitamente (GitHub Pages, Netlify, Vercel...).
//
// No GitHub Pages o site fica em /diegocrovador. O workflow de deploy define
// BASE_PATH=/diegocrovador; localmente fica vazio e o site roda na raiz.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
