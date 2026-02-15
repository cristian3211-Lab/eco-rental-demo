import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Maquinaria",
  description:
    "Explora nuestro catálogo completo de maquinaria pesada en arriendo: excavadoras, rodillos, motoniveladoras, bulldozers y más. Filtra por categoría, marca y disponibilidad.",
};

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
