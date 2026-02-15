"use client";

import { useState } from "react";
import Link from "next/link";

type Machine = {
  id: number;
  name: string;
  category: string;
  brand: string;
  weight: string;
  power: string;
  fuel: string;
  image: string;
};

const machines: Machine[] = [
  { id: 1, name: "Excavadora CAT 320", category: "Excavadoras", brand: "Caterpillar", weight: "22 ton", power: "162 HP", fuel: "Diésel", image: "bg-amber-100" },
  { id: 2, name: "Excavadora Volvo EC210", category: "Excavadoras", brand: "Volvo", weight: "21 ton", power: "159 HP", fuel: "Diésel", image: "bg-blue-100" },
  { id: 3, name: "Excavadora CAT 330", category: "Excavadoras", brand: "Caterpillar", weight: "30 ton", power: "204 HP", fuel: "Diésel", image: "bg-amber-100" },
  { id: 4, name: "Rodillo CASE SV212", category: "Rodillos", brand: "CASE", weight: "12 ton", power: "130 HP", fuel: "Diésel", image: "bg-red-100" },
  { id: 5, name: "Rodillo CAT CS56", category: "Rodillos", brand: "Caterpillar", weight: "10 ton", power: "125 HP", fuel: "Diésel", image: "bg-amber-100" },
  { id: 6, name: "Motoniveladora CAT 140", category: "Motoniveladoras", brand: "Caterpillar", weight: "15 ton", power: "185 HP", fuel: "Diésel", image: "bg-amber-100" },
  { id: 7, name: "Motoniveladora Volvo G930", category: "Motoniveladoras", brand: "Volvo", weight: "14 ton", power: "175 HP", fuel: "Diésel", image: "bg-blue-100" },
  { id: 8, name: "Retroexcavadora CASE 580SV", category: "Retroexcavadoras", brand: "CASE", weight: "8 ton", power: "97 HP", fuel: "Diésel", image: "bg-red-100" },
  { id: 9, name: "Bulldozer CAT D6", category: "Bulldozer", brand: "Caterpillar", weight: "20 ton", power: "215 HP", fuel: "Diésel", image: "bg-amber-100" },
  { id: 10, name: "Minicargador CASE SR175", category: "Minicargadores", brand: "CASE", weight: "2.6 ton", power: "60 HP", fuel: "Diésel", image: "bg-red-100" },
  { id: 11, name: "Minicargador CAT 236D3", category: "Minicargadores", brand: "Caterpillar", weight: "3 ton", power: "74 HP", fuel: "Diésel", image: "bg-amber-100" },
  { id: 12, name: "Excavadora SsangYong SY215", category: "Excavadoras", brand: "SsangYong", weight: "21 ton", power: "150 HP", fuel: "Diésel", image: "bg-green-100" },
];

const allCategories = ["Todas", ...Array.from(new Set(machines.map((m) => m.category)))];
const allBrands = ["Todas", ...Array.from(new Set(machines.map((m) => m.brand)))];

export default function CatalogoPage() {
  const [category, setCategory] = useState("Todas");
  const [brand, setBrand] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = machines.filter((m) => {
    const matchCat = category === "Todas" || m.category === category;
    const matchBrand = brand === "Todas" || m.brand === brand;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchBrand && matchSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-accent py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Catálogo</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Catálogo de Maquinaria
          </h1>
          <p className="mt-2 text-gray-300">
            Encuentra el equipo ideal para tu proyecto
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Buscar
            </label>
            <input
              id="search"
              type="text"
              placeholder="Ej: Excavadora CAT..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div className="sm:w-48">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Categoría
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            >
              {allCategories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="sm:w-48">
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
              Marca
            </label>
            <select
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
            >
              {allBrands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          Mostrando {filtered.length} de {machines.length} equipos
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-500">No se encontraron equipos con los filtros seleccionados.</p>
            <button
              onClick={() => { setCategory("Todas"); setBrand("Todas"); setSearch(""); }}
              className="mt-4 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((machine) => (
              <article
                key={machine.id}
                className="group rounded-2xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg hover:border-primary/30"
              >
                {/* Image placeholder */}
                <div className={`${machine.image} h-48 flex items-center justify-center`}>
                  <svg className="h-20 w-20 text-gray-400/50" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>

                <div className="p-6">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                    {machine.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{machine.name}</h3>

                  {/* Specs */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                      </svg>
                      {machine.weight}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      {machine.power}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      </svg>
                      {machine.brand}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 0012 2.25a6.556 6.556 0 003.362 2.964z" />
                      </svg>
                      {machine.fuel}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/contacto"
                      className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                    >
                      Cotizar
                    </Link>
                    <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                      Más Info
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
