"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import type { FormEvent } from "react";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  Cotización enviada
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Te contactaremos a la brevedad.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Cotización Rápida
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Completa tus datos y te responderemos en menos de 24 hrs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="q-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre *
                      </label>
                      <input
                        id="q-name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="q-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        id="q-phone"
                        type="tel"
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="q-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      id="q-email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="tu@email.cl"
                    />
                  </div>

                  <div>
                    <label htmlFor="q-machine" className="block text-sm font-medium text-gray-700 mb-1">
                      Maquinaria requerida
                    </label>
                    <select
                      id="q-machine"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Seleccionar...</option>
                      <option>Excavadora</option>
                      <option>Rodillo</option>
                      <option>Motoniveladora</option>
                      <option>Retroexcavadora</option>
                      <option>Bulldozer</option>
                      <option>Minicargador</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="q-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Detalle
                    </label>
                    <textarea
                      id="q-message"
                      rows={3}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                      placeholder="Ubicación, plazo, cantidad de equipos..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Enviar Cotización
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
