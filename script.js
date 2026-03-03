const lessons = [
  {
    id: 1,
    slug: "tema-1-numeros-reales",
    title: "Números reales",
    objective: "Clasificar y representar números enteros, racionales e irracionales."
  },
  {
    id: 2,
    slug: "tema-2-operaciones-basicas",
    title: "Operaciones básicas",
    objective: "Aplicar suma, resta, multiplicación y división con prioridad de operaciones."
  },
  {
    id: 3,
    slug: "tema-3-potencias-y-raices",
    title: "Potencias y raíces",
    objective: "Resolver expresiones con exponentes y radicales."
  },
  {
    id: 4,
    slug: "tema-4-jerarquia-operaciones",
    title: "Jerarquía de operaciones",
    objective: "Usar correctamente paréntesis, exponentes y operaciones combinadas."
  },
  {
    id: 5,
    slug: "tema-5-algebra-basica",
    title: "Álgebra básica",
    objective: "Manipular expresiones, simplificar términos y resolver ecuaciones simples."
  },
  {
    id: 6,
    slug: "tema-6-ecuaciones-lineales",
    title: "Ecuaciones lineales",
    objective: "Resolver ecuaciones y problemas de primer grado con una incógnita."
  },
  {
    id: 7,
    slug: "tema-7-proporciones",
    title: "Razones y proporciones",
    objective: "Comparar magnitudes y resolver problemas de proporcionalidad."
  },
  {
    id: 8,
    slug: "tema-8-porcentajes",
    title: "Porcentajes",
    objective: "Calcular incrementos, descuentos y variaciones porcentuales."
  },
  {
    id: 9,
    slug: "tema-9-decimales",
    title: "Números decimales",
    objective: "Operar y convertir decimales de forma precisa."
  },
  {
    id: 10,
    slug: "tema-10-fracciones",
    title: "Fracciones",
    objective: "Simplificar, comparar y operar fracciones."
  }
];

const timeline = document.getElementById("timeline");

if (timeline) {
  const cards = lessons
    .map(
      (lesson) => `
        <article class="card">
          <small>Tema ${lesson.id}</small>
          <h3>${lesson.title}</h3>
          <p>${lesson.objective}</p>
          <a href="temas/${lesson.slug}.html" aria-label="Ir al tema ${lesson.id}">Ver tema</a>
        </article>
      `
    )
    .join("");

  timeline.innerHTML = cards;
}
