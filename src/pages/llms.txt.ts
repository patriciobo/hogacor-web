import type { APIRoute } from "astro";
import { COMPROMISOS, FAQ_COVACHA, FAQ_GENERAL, FAQ_MODULOS, PROCESO, STEEL_FRAME } from "../content";
import { COVACHAS, MODULOS, SITE, anios } from "../site";

// Resumen en Markdown para asistentes de IA (convención llmstxt.org). Se genera de los mismos datos que el sitio.
export const GET: APIRoute = () => {
  const faq = (items: { q: string; a: string }[]) => items.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");
  const body = `# ${SITE.nombre} ${SITE.bajada}

> Empresa constructora de ${SITE.ciudad}, Argentina, fundada en ${SITE.fundacion} (${anios} años de trayectoria) con más de ${SITE.obrasTerminadas} obras terminadas. Diseña y construye ampliaciones de viviendas en planta baja y planta alta, viviendas y módulos habitacionales en Steel Frame. Trabaja con presupuesto detallado por etapas, contrato firmado y pagos atados al avance de obra.

- Zona de trabajo: ${SITE.zona}. Módulos y Covachas con traslado y montaje en la provincia de Córdoba (incluye sierras y zonas rurales).
- Contacto: WhatsApp ${SITE.whatsappTexto} (+${SITE.whatsapp}); teléfono ${SITE.telefono} (${SITE.telefonoE164}).${SITE.email ? ` Email: ${SITE.email}.` : ""}
- Presupuesto y visita: sin cargo.
- Sitio: ${SITE.url}

## Páginas

- [Inicio](${SITE.url}/): servicios, forma de trabajo, ventajas del Steel Frame y preguntas frecuentes.
- [Ampliaciones](${SITE.url}/ampliaciones): habitaciones, oficinas, gimnasios, quinchos y plantas altas con dormitorio, vestidor y baño en suite.
- [Módulos habitacionales](${SITE.url}/modulos): modelos H1, H2 y H3 de 18 a 30 m².
- [Covacha](${SITE.url}/covacha): módulo habitable compacto de 18 m² y versión Mini de 12 m².

## Compromisos con el cliente

${COMPROMISOS.map((c) => `- **${c.titulo}.** ${c.texto}`).join("\n")}

## Cómo trabajamos

${PROCESO.map((p, i) => `${i + 1}. **${p.titulo}.** ${p.texto}`).join("\n")}

## Módulos habitacionales

${MODULOS.map((m) => `- **${m.nombre}** — ${m.resumen}. ${m.m2} m², ${m.medidas}. ${m.usos}`).join("\n")}

## Covacha

${COVACHAS.map((c) => `- **${c.nombre}** — ${c.m2} m², ${c.medidas}. Incluye: ${c.incluye.join(", ").toLowerCase()}.`).join("\n")}

## Por qué Steel Frame

${STEEL_FRAME.map((s) => `- **${s.titulo}.** ${s.texto}`).join("\n")}

## Preguntas frecuentes

${faq([...FAQ_GENERAL, ...FAQ_MODULOS, ...FAQ_COVACHA])}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
