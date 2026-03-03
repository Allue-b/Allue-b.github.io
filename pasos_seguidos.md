# Pasos seguidos para crear la web de ruta de matematicas

1. Se creo la estructura base del proyecto en una carpeta vacia.
2. Se construyo `index.html` con:
   - Hero principal y navegacion.
   - Seccion de ruta de aprendizaje.
   - Secciones de beneficios y FAQ.
   - Metadatos SEO (`title`, `description`, `canonical`, Open Graph, Twitter).
   - Datos estructurados JSON-LD tipo `Course`.
3. Se diseno `styles.css` con una estetica moderna:
   - Paleta de color personalizada.
   - Tarjetas visuales para temas.
   - Layout responsive para movil y escritorio.
4. Se programo `script.js` para pintar dinamicamente los 10 temas en la portada.
5. Se generaron 10 paginas internas en `temas/`:
   - Desde tema 1 (numeros reales) hasta tema 10 (fracciones).
   - Cada pagina incluye metadatos SEO propios.
   - Cada pagina tiene navegacion entre tema anterior y siguiente.
   - Se agrego JSON-LD tipo `BreadcrumbList` para SEO semantico.
6. Se agregaron archivos tecnicos SEO:
   - `robots.txt` para rastreo.
   - `sitemap.xml` con URLs de portada y temas.
7. Se creo este documento (`pasos_seguidos.md`) como registro del proceso.
8. Se exporto este contenido a PDF para entrega final en la carpeta del proyecto.

## Nota de publicacion
Antes de publicar, reemplazar `https://tudominio.com` por el dominio real en:
- `index.html`
- `temas/*.html`
- `robots.txt`
- `sitemap.xml`
