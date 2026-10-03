# Hogacor · sitio institucional

Landing estática (Astro) de Hogacor Soluciones Constructivas, Córdoba.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # chequeo de tipos + build estático en dist/
npm run preview
```

`dist/` es HTML/CSS estático: se puede publicar en Cloudflare Pages, Netlify, Vercel o cualquier hosting
(comando de build `npm run build`, carpeta de salida `dist`).

## Dónde editar

- `src/site.ts`: datos de la empresa (dominio, teléfono, WhatsApp, email, redes, año de fundación, cantidad de obras,
  localidades) y fichas de módulos y Covacha. Todo el sitio, los datos estructurados y `llms.txt` leen de acá.
- `src/content.ts`: compromisos, proceso de trabajo, ventajas del Steel Frame y preguntas frecuentes.
- `src/assets/img/`: imágenes (Astro las convierte a WebP en varios tamaños al compilar).
- Si cambia el dominio, actualizarlo en `src/site.ts` **y** en `astro.config.mjs` (`site`).

## SEO y búsqueda con IA

- Títulos, descripciones, canonical, Open Graph y Twitter por página.
- Datos estructurados JSON-LD: `GeneralContractor` (empresa, zona, contacto), `Service`, `Product` (módulos y Covacha),
  `FAQPage` y `BreadcrumbList`.
- `sitemap-index.xml` automático.
- `robots.txt` que permite explícitamente a buscadores y asistentes de IA (GPTBot, ClaudeBot, PerplexityBot, etc.).
- `llms.txt`: resumen en Markdown de la empresa, servicios y preguntas frecuentes para asistentes de IA.
- Preguntas frecuentes redactadas como respuestas completas y citables.

## Después de publicar

1. Dar de alta el dominio en Google Search Console y Bing Webmaster Tools y enviar `/sitemap-index.xml`.
2. Crear o reclamar el perfil de empresa en Google (Google Business Profile) con el mismo nombre, teléfono y zona
   que figuran en el sitio, y cargar su URL en `SITE.redes.googleMaps`.
3. Pedir reseñas a clientes de obras terminadas: es la señal de confianza que más pesa al elegir constructora.
4. Reemplazar las imágenes ilustrativas por fotos reales de obras a medida que estén disponibles.
