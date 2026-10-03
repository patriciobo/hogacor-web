// Datos de la empresa: un solo lugar para editar teléfono, dominio, cifras y redes.
// Todo el sitio (textos, JSON-LD, llms.txt) lee de acá.

export const SITE = {
  nombre: "Hogacor",
  bajada: "Soluciones Constructivas",
  /** Dominio público definitivo (sin barra final). Se usa en canonical, sitemap y datos estructurados. */
  url: "https://hogacor.com.ar",
  ciudad: "Córdoba",
  provincia: "Córdoba",
  pais: "AR",
  zona: "Córdoba Capital y alrededores",
  /** Localidades que se mencionan como zona de trabajo (SEO local). */
  localidades: ["Córdoba Capital", "Villa Allende", "Mendiolaza", "Saldán", "Río Ceballos", "Villa Carlos Paz", "Malagueño", "La Calera", "Alta Gracia"],
  telefono: "351 665-8789",
  telefonoE164: "+5493516658789",
  whatsapp: "5493513505985",
  whatsappTexto: "351 350-5985",
  email: "",
  fundacion: 2017,
  obrasTerminadas: 30,
  /** Perfiles públicos; dejar vacío lo que no exista. */
  redes: {
    instagram: "",
    facebook: "",
    googleMaps: "",
  },
} as const;

export const anios = new Date().getFullYear() - SITE.fundacion;

export function waLink(mensaje = "Hola Hogacor, quiero consultar por un proyecto.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const MODULOS = [
  {
    id: "h1",
    nombre: "Módulo H1",
    resumen: "1 habitación + baño",
    m2: 18,
    medidas: "6,00 × 3,00 m",
    ambientes: ["1 dormitorio amplio y luminoso", "1 baño completo", "Galería de acceso"],
    usos: "Dormitorio extra, suite para visitas o alquiler temporario.",
  },
  {
    id: "h2",
    nombre: "Módulo H2",
    resumen: "1 habitación + cocina-living + baño",
    m2: 24,
    medidas: "8,00 × 3,00 m",
    ambientes: ["1 dormitorio", "Cocina y living-comedor integrados", "1 baño completo"],
    usos: "Monoambiente independiente para una persona o pareja.",
  },
  {
    id: "h3",
    nombre: "Módulo H3",
    resumen: "2 habitaciones + cocina-living + baño",
    m2: 30,
    medidas: "10,00 × 3,00 m",
    ambientes: ["2 dormitorios en los extremos", "Cocina y living-comedor integrados", "1 baño completo"],
    usos: "Vivienda compacta para familia chica o cabaña de alquiler.",
  },
] as const;

export const COVACHAS = [
  {
    id: "covacha",
    nombre: "Covacha",
    m2: 18,
    medidas: "6,00 × 3,00 m",
    incluye: ["Dormitorio confortable", "Baño privado", "Kitchenette equipada", "Aislación térmica y acústica", "Deck de acceso"],
  },
  {
    id: "covacha-mini",
    nombre: "Covacha Mini",
    m2: 12,
    medidas: "4,00 × 3,00 m",
    incluye: ["Dormitorio confortable", "Baño con ducha e inodoro", "Aberturas de aluminio con DVH", "Revestimiento exterior de alta calidad", "Estructura híbrida metal + steel frame"],
  },
] as const;
