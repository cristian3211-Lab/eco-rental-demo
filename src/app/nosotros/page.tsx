"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import QuoteButton from "@/components/QuoteButton";
import MagneticButton from "@/components/animations/MagneticButton";
import { industries } from "@/data/industries";

export default function NosotrosPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-accent py-12 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Nosotros</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Sobre Eco-Rental
          </h1>
          <p className="mt-2 text-gray-300">
            Más de 20 años liderando el arriendo de maquinaria pesada en Chile
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                Nuestra Historia
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Experiencia y compromiso desde 2004
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Eco-Rental nace como respuesta a la necesidad del mercado chileno de contar con un servicio integral de arriendo de maquinaria pesada. Desde nuestros inicios, nos hemos enfocado en ofrecer equipos de primera línea con operadores altamente calificados.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Con presencia en las principales regiones del país, hemos participado en más de 500 proyectos de minería, construcción, agricultura y obras civiles, consolidándonos como un referente en el sector.
              </p>
            </FadeIn>

            <FadeIn direction="left">
              <div className="rounded-2xl bg-accent p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">20+</p>
                    <p className="mt-2 text-sm text-gray-300">Años de experiencia</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">500+</p>
                    <p className="mt-2 text-sm text-gray-300">Proyectos completados</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">50+</p>
                    <p className="mt-2 text-sm text-gray-300">Equipos disponibles</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">12</p>
                    <p className="mt-2 text-sm text-gray-300">Marcas asociadas</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Misión, Visión y Valores
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Misión */}
            <StaggerItem>
              <div className="rounded-2xl bg-white p-8 border border-gray-200 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 0v.07M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">Misión</h3>
                <p className="mt-3 text-gray-600 leading-7">
                  Proveer soluciones integrales de arriendo de maquinaria pesada, con equipos de alta calidad, operadores certificados y soporte continuo para garantizar el éxito de cada proyecto.
                </p>
              </div>
            </StaggerItem>

            {/* Visión */}
            <StaggerItem>
              <div className="rounded-2xl bg-white p-8 border border-gray-200 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">Visión</h3>
                <p className="mt-3 text-gray-600 leading-7">
                  Ser la empresa líder en arriendo de maquinaria pesada en Chile, reconocida por la calidad de servicio, innovación tecnológica y compromiso con la seguridad y el medio ambiente.
                </p>
              </div>
            </StaggerItem>

            {/* Valores */}
            <StaggerItem>
              <div className="rounded-2xl bg-white p-8 border border-gray-200 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">Valores</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Seguridad en cada operación",
                    "Calidad y excelencia",
                    "Compromiso con el cliente",
                    "Innovación constante",
                    "Integridad y transparencia",
                  ].map((valor) => (
                    <li key={valor} className="flex items-center gap-2 text-gray-600">
                      <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {valor}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industrias que Atendemos
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones especializadas para cada sector productivo
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <ScrollReveal
                key={industry.name}
                animation={i % 2 === 0 ? "fadeUp" : "scaleIn"}
                delay={i * 0.1}
              >
                <div className="rounded-2xl border border-gray-200 p-8 hover:border-primary hover:shadow-lg transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={industry.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Philosophy Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro Equipo
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con la excelencia
            </p>
          </FadeIn>

          <ScrollReveal animation="scaleIn">
            <div className="rounded-2xl bg-accent p-10 lg:p-16 text-center text-white">
              <h3 className="text-2xl font-bold">
                Operadores Certificados y Calificados
              </h3>
              <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-7">
                Nuestro equipo de operadores cuenta con certificaciones vigentes, evaluaciones psicomotoras y sensoriales, y equipamiento de protección personal completo. Cada profesional es seleccionado rigurosamente para garantizar la seguridad y eficiencia en cada proyecto.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="rounded-xl bg-white/10 p-6">
                  <p className="text-lg font-semibold text-white">Certificaciones Vigentes</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6">
                  <p className="text-lg font-semibold text-white">Evaluaciones Psicomotoras</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6">
                  <p className="text-lg font-semibold text-white">EPP Completo</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20 overflow-hidden">
        <ScrollReveal animation="scaleIn">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para potenciar tu proyecto?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Contáctanos y recibe una cotización personalizada
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton>
                <QuoteButton className="block w-full rounded-lg bg-primary px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark">
                  Solicitar Cotización
                </QuoteButton>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contacto"
                  className="block w-full rounded-lg border-2 border-white/30 px-8 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  Contactar
                </Link>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
