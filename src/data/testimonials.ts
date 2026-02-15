export type Testimonial = {
  name: string;
  company: string;
  role: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    company: "Constructora Altiplano",
    role: "Gerente de Operaciones",
    text: "Llevamos 5 años trabajando con Eco-Rental y la calidad de sus equipos y operadores es excepcional. Siempre cumplen con los plazos y el soporte técnico es inmediato.",
  },
  {
    name: "María José Contreras",
    company: "Minera del Pacífico",
    role: "Jefa de Proyectos",
    text: "La disponibilidad de maquinaria y la rapidez en la cotización nos ha permitido ejecutar proyectos sin retrasos. El equipo de Eco-Rental entiende las necesidades del sector minero.",
  },
  {
    name: "Roberto Fuentes",
    company: "Vialidad Sur S.A.",
    role: "Director de Obras",
    text: "Excelente servicio de arriendo. Los equipos siempre están en óptimas condiciones y los operadores son profesionales certificados. Totalmente recomendable.",
  },
];
