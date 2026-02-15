import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misi\u00f3n y valores de Eco-Rental. M\u00e1s de 20 a\u00f1os liderando el arriendo de maquinaria pesada en Chile.",
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
