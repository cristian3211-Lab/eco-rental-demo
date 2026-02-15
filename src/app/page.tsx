"use client";

import Link from "next/link";
import { motion } from "motion/react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import MagneticButton from "@/components/animations/MagneticButton";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import QuoteButton from "@/components/QuoteButton";
import FAQ from "@/components/FAQ";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";

const benefits = [
  {
    title: "Operadores Certificados",
    description: "Personal calificado con certificaciones vigentes y amplia experiencia en terreno.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Soporte 24/7",
    description: "Asistencia técnica disponible las 24 horas, los 7 días de la semana.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Flota Moderna",
    description: "Equipos de las mejores marcas: Caterpillar, Volvo, CASE, SsangYong.",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  },
  {
    title: "Cobertura Nacional",
    description: "Servicio de arriendo de maquinaria en todo el territorio chileno.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Años de experiencia" },
  { value: 500, suffix: "+", label: "Proyectos completados" },
  { value: 50, suffix: "+", label: "Equipos disponibles" },
  { value: 24, suffix: "/7", label: "Soporte técnico" },
];

const steps = [
  { title: "Contacto", description: "Cuéntanos tu proyecto y requerimientos de maquinaria" },
  { title: "Cotización", description: "Recibe una cotización personalizada en menos de 24 horas" },
  { title: "Entrega", description: "Desplegamos equipos y operadores certificados en terreno" },
  { title: "Soporte", description: "Asistencia técnica 24/7 durante toda la operación" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-accent pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light opacity-90" />

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-light mb-6"
              >
                Líderes en arriendo de maquinaria
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
              >
                Maquinaria pesada para{" "}
                <motion.span
                  className="text-primary-light inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  tu proyecto
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-6 text-lg leading-8 text-gray-300 max-w-xl"
              >
                Arriendo de excavadoras, rodillos, motoniveladoras y más.
                Operadores certificados y soporte técnico 24/7 en todo Chile.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton>
                  <QuoteButton className="block rounded-lg bg-primary px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl">
                    Cotizar Ahora
                  </QuoteButton>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/catalogo"
                    className="block rounded-lg border-2 border-white/30 px-8 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Ver Catálogo
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <motion.svg
                  className="w-48 h-48 text-primary-light/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </motion.svg>
                <motion.div
                  className="absolute -top-4 -right-4 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
                >
                  +50 Equipos
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - GSAP CountUp */}
      <section className="relative -mt-8 z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-xl bg-white p-6 text-center shadow-lg border border-gray-100">
                <p className="text-3xl font-bold text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                </p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Brand Logos */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400 mb-8 uppercase tracking-wider">
            Marcas que manejamos
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {[...brands, ...brands].map((brand, i) => (
                <span key={`${brand.slug}-${i}`} className="shrink-0 text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors select-none">
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories - GSAP ScrollReveal */}
      <section className="py-24 bg-white" id="maquinaria">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestra Maquinaria
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Amplio catálogo de equipos para minería, construcción y sector
              forestal
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <ScrollReveal
                key={cat.name}
                animation={i % 2 === 0 ? "fadeUp" : "scaleIn"}
                delay={i * 0.1}
              >
                <Link
                  href="/catalogo"
                  className="group block rounded-2xl border border-gray-200 p-8 transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
                  <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {cat.specs}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Cómo Funciona?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Arrienda maquinaria en 4 simples pasos
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {steps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold mb-6">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits - Motion Stagger */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Respaldados por más de 20 años de experiencia en el sector
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title} className="h-full">
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
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
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} animation={i % 2 === 0 ? "fadeUp" : "scaleIn"} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 p-8 transition-all hover:border-primary hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={ind.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{ind.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{ind.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor respaldo
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <blockquote className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-gray-600">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role} — {t.company}</p>
                  </div>
                </blockquote>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Section - Parallax */}
      <section className="bg-accent py-20 overflow-hidden">
        <ScrollReveal animation="scaleIn">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Necesitas maquinaria para tu proyecto?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Contáctanos hoy y recibe una cotización personalizada sin compromiso
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton>
                <QuoteButton className="block w-full rounded-lg bg-primary px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark">
                  Solicitar Cotización
                </QuoteButton>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://wa.me/56957146992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg border-2 border-white/30 px-8 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-white/10"
                >
                  WhatsApp Directo
                </a>
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
