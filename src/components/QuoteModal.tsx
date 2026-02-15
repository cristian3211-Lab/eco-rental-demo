"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { categories } from "@/data/categories";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  prefilledMachine?: string;
};

function formatRut(value: string): string {
  let clean = value.replace(/[^0-9kK]/g, "").toUpperCase();
  if (clean.length === 0) return "";
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  if (body.length === 0) return dv;
  const formatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted}-${dv}`;
}

function validateRut(rut: string): boolean {
  const clean = rut.replace(/[.\-]/g, "");
  if (clean.length < 2) return false;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1).toUpperCase();
  let sum = 0;
  let mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  const expected = 11 - (sum % 11);
  const dvExpected =
    expected === 11 ? "0" : expected === 10 ? "K" : String(expected);
  return dv === dvExpected;
}

export default function QuoteModal({
  isOpen,
  onClose,
  prefilledMachine = "",
}: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [rut, setRut] = useState("");
  const [rutError, setRutError] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleRutChange(value: string) {
    const formatted = formatRut(value);
    setRut(formatted);
    if (formatted.length > 3) {
      setRutError(!validateRut(formatted));
    } else {
      setRutError(false);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (rut && !validateRut(rut)) {
      setRutError(true);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRut("");
      setRutError(false);
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
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
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
                      <label
                        htmlFor="q-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
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
                      <label
                        htmlFor="q-phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="q-email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
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
                      <label
                        htmlFor="q-rut"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        RUT
                      </label>
                      <input
                        id="q-rut"
                        type="text"
                        value={rut}
                        onChange={(e) => handleRutChange(e.target.value)}
                        className={`w-full rounded-lg border px-3 py-2.5 text-sm focus:ring-1 focus:outline-none ${
                          rutError
                            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                            : "border-gray-300 focus:border-primary focus:ring-primary"
                        }`}
                        placeholder="12.345.678-9"
                        maxLength={12}
                      />
                      {rutError && (
                        <p className="mt-1 text-xs text-red-500">
                          RUT inválido
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="q-empresa"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Empresa
                    </label>
                    <input
                      id="q-empresa"
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="q-machine"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Maquinaria requerida
                    </label>
                    <select
                      id="q-machine"
                      defaultValue={prefilledMachine}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Seleccionar...</option>
                      {categories.map((cat) => (
                        <option key={cat.name} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="q-message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark cursor-pointer"
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
