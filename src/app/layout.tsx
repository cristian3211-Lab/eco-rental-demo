import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eco-Rental | Arriendo de Maquinaria Pesada en Chile",
    template: "%s | Eco-Rental",
  },
  description:
    "Arriendo de maquinaria pesada en Chile. Excavadoras, rodillos, motoniveladoras con operadores certificados y soporte 24/7.",
  keywords: [
    "arriendo maquinaria pesada",
    "excavadoras Chile",
    "rodillos compactadores",
    "motoniveladoras",
    "retroexcavadoras",
    "arriendo equipos construcción",
  ],
  openGraph: {
    title: "Eco-Rental | Arriendo de Maquinaria Pesada en Chile",
    description:
      "Más de 20 años de experiencia en arriendo de maquinaria pesada para minería, construcción y sector forestal.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Ir al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
