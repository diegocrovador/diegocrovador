// Caminho para arquivos da pasta public/, respeitando o basePath do GitHub Pages.
// Os links do Next (<Link>) já fazem isso sozinhos; imagens e ícones não.
export const asset = (path: string) =>
  path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path;
