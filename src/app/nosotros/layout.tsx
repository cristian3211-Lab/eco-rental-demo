import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y valores de Eco-Rental. Más de 20 años liderando el arriendo de maquinaria pesada en Chile.",
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
