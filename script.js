const lessons = [
  {
    id: 1,
    slug: "tema-1-numeros-reales",
    title: "Números reales",
    title_en: "Real Numbers",
    objective:
      "Clasificar y representar números enteros, racionales e irracionales.",
    objective_en:
      "Classify and represent integers, rational and irrational numbers.",
  },
  {
    id: 2,
    slug: "tema-2-operaciones-basicas",
    title: "Operaciones básicas",
    title_en: "Basic Operations",
    objective:
      "Aplicar suma, resta, multiplicación y división con prioridad de operaciones.",
    objective_en:
      "Apply addition, subtraction, multiplication and division with operation priority.",
  },
  {
    id: 3,
    slug: "tema-3-potencias-y-raices",
    title: "Potencias y raíces",
    title_en: "Powers and Roots",
    objective: "Resolver expresiones con exponentes y radicales.",
    objective_en: "Solve expressions with exponents and radicals.",
  },
  {
    id: 4,
    slug: "tema-4-jerarquia-operaciones",
    title: "Jerarquía de operaciones",
    title_en: "Order of Operations",
    objective:
      "Usar correctamente paréntesis, exponentes y operaciones combinadas.",
    objective_en:
      "Correctly use parentheses, exponents and combined operations.",
  },
  {
    id: 5,
    slug: "tema-5-algebra-basica",
    title: "Álgebra básica",
    title_en: "Basic Algebra",
    objective:
      "Manipular expresiones, simplificar términos y resolver ecuaciones simples.",
    objective_en:
      "Manipulate expressions, simplify terms and solve simple equations.",
  },
  {
    id: 6,
    slug: "tema-6-ecuaciones-lineales",
    title: "Ecuaciones lineales",
    title_en: "Linear Equations",
    objective:
      "Resolver ecuaciones y problemas de primer grado con una incógnita.",
    objective_en: "Solve equations and first-degree problems with one unknown.",
  },
  {
    id: 7,
    slug: "tema-7-proporciones",
    title: "Razones y proporciones",
    title_en: "Ratios and Proportions",
    objective: "Comparar magnitudes y resolver problemas de proporcionalidad.",
    objective_en: "Compare magnitudes and solve proportionality problems.",
  },
  {
    id: 8,
    slug: "tema-8-porcentajes",
    title: "Porcentajes",
    title_en: "Percentages",
    objective: "Calcular incrementos, descuentos y variaciones porcentuales.",
    objective_en: "Calculate increases, discounts and percentage variations.",
  },
  {
    id: 9,
    slug: "tema-9-decimales",
    title: "Números decimales",
    title_en: "Decimal Numbers",
    objective: "Operar y convertir decimales de forma precisa.",
    objective_en: "Operate and convert decimals accurately.",
  },
  {
    id: 10,
    slug: "tema-10-fracciones",
    title: "Fracciones",
    title_en: "Fractions",
    objective: "Simplificar, comparar y operar fracciones.",
    objective_en: "Simplify, compare and operate fractions.",
  },
];

let currentLang = "es";

function switchLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  document.querySelectorAll("[data-es], [data-en]").forEach((el) => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) el.textContent = text;
  });
  // Update lessons
  updateTimeline();
  // Update button text
  const langBtn = document.getElementById("lang-toggle");
  langBtn.textContent = currentLang === "es" ? "EN" : "ES";
  // Update title
  document.title =
    currentLang === "es"
      ? "Ruta de Aprendizaje de Matemáticas | Tema 1 al 10"
      : "Mathematics Learning Path | Topic 1 to 10";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const darkBtn = document.getElementById("dark-toggle");
  darkBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function updateTimeline() {
  if (timeline) {
    const cards = lessons
      .map(
        (lesson) => `
          <article class="card">
            <small>${currentLang === "es" ? "Tema" : "Topic"} ${lesson.id}</small>
            <h3>${currentLang === "es" ? lesson.title : lesson.title_en}</h3>
            <p>${currentLang === "es" ? lesson.objective : lesson.objective_en}</p>
            <a href="temas/${lesson.slug}.html" aria-label="${currentLang === "es" ? "Ir al tema" : "Go to topic"} ${lesson.id}">${currentLang === "es" ? "Ver tema" : "View topic"}</a>
          </article>
        `,
      )
      .join("");

    timeline.innerHTML = cards;
  }
}

const timeline = document.getElementById("timeline");

if (timeline) {
  updateTimeline();
}

// Event listeners
document
  .getElementById("lang-toggle")
  .addEventListener("click", switchLanguage);
document
  .getElementById("dark-toggle")
  .addEventListener("click", toggleDarkMode);
