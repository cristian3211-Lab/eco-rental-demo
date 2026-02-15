"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { contactInfo } from "@/data/contact";
import FadeIn from "@/components/animations/FadeIn";
import ScrollReveal from "@/components/animations/ScrollReveal";

// ---------------------------------------------------------------------------
// RUT validation helpers
// ---------------------------------------------------------------------------
function formatRut(value: string): string {
  const clean = value.replace(/[^0-9kK]/g, "");
  if (clean.length <= 1) return clean;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1).toUpperCase();
  const formatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted}-${dv}`;
}

function validateRut(rut: string): boolean {
  const clean = rut.replace(/[^0-9kK]/g, "");
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
  const expectedDv =
    expected === 11 ? "0" : expected === 10 ? "K" : String(expected);
  return dv === expectedDv;
}

// ---------------------------------------------------------------------------
// Contact info cards (title / value / icon pattern)
// ---------------------------------------------------------------------------
const contactCards = [
  {
    title: "Direccion",
    value: contactInfo.address,
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "Telefono",
    value: contactInfo.phone,
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    title: "Email",
    value: contactInfo.email,
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    title: "Horario",
    value: contactInfo.hours,
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rut, setRut] = useState("");
  const [rutError, setRutError] = useState("");

  function handleRutChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatRut(e.target.value);
    setRut(formatted);
    if (formatted.length > 3) {
      setRutError(validateRut(formatted) ? "" : "RUT invalido");
    } else {
      setRutError("");
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  /** Render the value of a contact card -- clickable for phone & email */
  function renderContactValue(card: (typeof contactCards)[number]) {
    if (card.title === "Telefono") {
      return (
        <a
          href={`tel:${contactInfo.phoneRaw}`}
          className="mt-1 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          {card.value}
        </a>
      );
    }
    if (card.title === "Email") {
      return (
        <a
          href={`mailto:${contactInfo.email}`}
          className="mt-1 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          {card.value}
        </a>
      );
    }
    return <p className="mt-1 text-sm text-gray-600">{card.value}</p>;
  }

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-accent py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Contacto
            </h1>
            <p className="mt-2 text-gray-300">
              Solicita una cotizacion o resuelve tus dudas
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* -------- Form -------- */}
          <ScrollReveal animation="fadeUp" className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Solicitar Cotizacion
              </h2>

              {submitted ? (
                <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-green-500"
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
                  <h3 className="mt-4 text-lg font-semibold text-green-800">
                    Solicitud enviada
                  </h3>
                  <p className="mt-2 text-sm text-green-700">
                    Nos pondremos en contacto contigo a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre + Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nombre completo *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder="Juan Perez"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Empresa
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder="Constructora ABC"
                      />
                    </div>
                  </div>

                  {/* RUT + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="rut"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        RUT
                      </label>
                      <input
                        id="rut"
                        name="rut"
                        type="text"
                        value={rut}
                        onChange={handleRutChange}
                        maxLength={12}
                        className={`w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none ${
                          rutError
                            ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                        }`}
                        placeholder="12.345.678-5"
                      />
                      {rutError && (
                        <p className="mt-1 text-xs text-red-500">{rutError}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                        placeholder="juan@empresa.cl"
                      />
                    </div>
                  </div>

                  {/* Telefono */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefono *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  {/* Tipo de maquinaria */}
                  <div>
                    <label
                      htmlFor="machine"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tipo de maquinaria
                    </label>
                    <select
                      id="machine"
                      name="machine"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    >
                      <option value="">Seleccionar...</option>
                      <option>Excavadora</option>
                      <option>Rodillo</option>
                      <option>Motoniveladora</option>
                      <option>Retroexcavadora</option>
                      <option>Bulldozer</option>
                      <option>Minicargador</option>
                      <option>Transporte</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                      placeholder="Describe tu proyecto y requerimientos..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Enviar Cotizacion
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* -------- Contact Info -------- */}
          <ScrollReveal
            animation="fadeUp"
            delay={0.15}
            className="lg:col-span-2 space-y-6"
          >
            {contactCards.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 rounded-xl border border-gray-200 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
                      d={info.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {info.title}
                  </h3>
                  {renderContactValue(info)}
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <iframe
                src={contactInfo.maps.embedUrl}
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion Eco-Rental"
              />
            </div>

            {/* WhatsApp CTA - main */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp.main.number}?text=${encodeURIComponent(contactInfo.whatsapp.main.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 text-white font-semibold transition-colors hover:bg-green-600"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar por WhatsApp
            </a>

            {/* WhatsApp CTA - quotes */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp.quotes.number}?text=${encodeURIComponent(contactInfo.whatsapp.quotes.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border-2 border-green-500 px-6 py-4 text-green-600 font-semibold transition-colors hover:bg-green-50"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizaciones WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
