"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "¿Cuál es el plazo mínimo de arriendo?",
    answer:
      "El plazo mínimo varía según el equipo. Generalmente ofrecemos arriendos desde 1 mes, pero para proyectos especiales podemos evaluar plazos más cortos. Contáctanos para revisar tu caso.",
  },
  {
    question: "¿Los equipos incluyen operador?",
    answer:
      "Sí, todos nuestros equipos se arriendan con operadores certificados y con experiencia comprobada. El operador está incluido en la tarifa de arriendo, junto con su alimentación y hospedaje cuando corresponda.",
  },
  {
    question: "¿En qué zonas operan?",
    answer:
      "Operamos en todo Chile, desde la Región de Arica y Parinacota hasta la Región de Magallanes. Contamos con logística propia para el traslado de equipos a cualquier punto del país.",
  },
  {
    question: "¿Qué incluye el servicio de arriendo?",
    answer:
      "Nuestro servicio incluye el equipo, operador certificado, mantención preventiva, seguro todo riesgo, soporte técnico 24/7 y transporte al lugar de trabajo. Solo necesitas indicarnos qué necesitas y dónde.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Puedes solicitar una cotización de tres formas: completando el formulario de cotización en nuestro sitio web, escribiéndonos por WhatsApp, o llamándonos directamente. Respondemos todas las cotizaciones en menos de 24 horas hábiles.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Resolvemos tus dudas sobre nuestro servicio de arriendo
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-5 w-5 shrink-0 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
