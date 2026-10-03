// Textos reutilizados en páginas y datos estructurados (FAQPage, HowTo).
// Las respuestas están escritas para que una persona —o un asistente de IA— las pueda citar tal cual.

import { SITE, anios } from "./site";

/**
 * Compromisos que se presentan como diferenciales. Responden a los miedos más comunes de quien
 * contrata una obra: pagar por adelantado y que la obra no avance, costos que cambian y falta de comunicación.
 */
export const COMPROMISOS = [
  {
    titulo: "Pagás por avance, no por adelantado",
    texto: "La obra se divide en etapas con un porcentaje del presupuesto asignado a cada una. Cada pago corresponde a una etapa que podés ver terminada.",
  },
  {
    titulo: "Presupuesto detallado y contrato firmado",
    texto: "Antes de empezar recibís el presupuesto por etapas, con materiales y marcas especificados, y un contrato con plazos y condiciones por escrito.",
  },
  {
    titulo: "Seguimiento semanal con fotos",
    texto: "Te mantenemos al tanto del avance con fotos y un resumen de lo hecho. Sabés en qué etapa está tu obra sin tener que preguntar.",
  },
  {
    titulo: "Obras terminadas que podés conocer",
    texto: `Llevamos más de ${SITE.obrasTerminadas} obras finalizadas en ${anios} años. Si querés, te ponemos en contacto con clientes anteriores.`,
  },
] as const;

export const PROCESO = [
  {
    titulo: "Primera charla",
    texto: "Nos contás qué necesitás por WhatsApp o teléfono. Te orientamos sobre opciones, tiempos y rangos de costo, sin compromiso.",
  },
  {
    titulo: "Visita y relevamiento",
    texto: "Vamos al lugar, medimos y evaluamos la estructura existente, accesos e instalaciones. Para ampliaciones en planta alta verificamos que la casa lo permita.",
  },
  {
    titulo: "Proyecto y presupuesto por etapas",
    texto: "Diseñamos el espacio a tu medida y te entregamos un presupuesto dividido en etapas, con materiales, marcas y plazos.",
  },
  {
    titulo: "Contrato",
    texto: "Firmamos un contrato con el alcance, el precio de cada etapa, el cronograma y las condiciones de pago atadas al avance.",
  },
  {
    titulo: "Obra con seguimiento",
    texto: "Construimos etapa por etapa con equipo propio. Recibís fotos y novedades del avance y solo pagás cada etapa cuando está cumplida.",
  },
  {
    titulo: "Entrega y postventa",
    texto: "Recorremos la obra juntos antes de la entrega y quedamos disponibles para cualquier ajuste posterior.",
  },
] as const;

export const STEEL_FRAME = [
  {
    titulo: "Obra más rápida",
    texto: "Es construcción en seco: no hay que esperar fraguados y gran parte del trabajo se prepara fuera de la obra. Los plazos son notablemente menores que con ladrillo.",
  },
  {
    titulo: "Mejor aislación",
    texto: "Las paredes llevan aislante térmico y acústico en su interior. La casa necesita menos calefacción en invierno y menos aire acondicionado en verano.",
  },
  {
    titulo: "Menos impacto en tu día a día",
    texto: "Menos escombros, menos polvo y menos ruido. Ideal para ampliar mientras seguís viviendo en tu casa.",
  },
  {
    titulo: "Liviano y resistente",
    texto: "La estructura de perfiles de acero galvanizado pesa mucho menos que la mampostería, lo que permite sumar una planta alta sin sobrecargar la casa existente (previa verificación).",
  },
  {
    titulo: "Sistema reconocido",
    texto: "Desde 2018 el Steel Framing está reconocido como sistema constructivo tradicional en Argentina (Resolución 5-E/2018 de la Secretaría de Vivienda y Hábitat).",
  },
  {
    titulo: "Terminación igual a la tradicional",
    texto: "Por fuera y por dentro la terminación es la de una casa convencional: revoque texturado, placas, revestimientos, cerámicos y aberturas de aluminio.",
  },
] as const;

export type Faq = { q: string; a: string };

export const FAQ_GENERAL: Faq[] = [
  {
    q: "¿Qué hace Hogacor?",
    a: `Hogacor es una empresa constructora de ${SITE.ciudad}, Argentina, con ${anios} años de trayectoria y más de ${SITE.obrasTerminadas} obras terminadas. Diseña y construye ampliaciones de viviendas (habitaciones, plantas altas, oficinas, quinchos, gimnasios), viviendas y módulos habitacionales en Steel Frame.`,
  },
  {
    q: "¿En qué zonas trabajan?",
    a: `Trabajamos en ${SITE.zona}. Los módulos habitacionales y las Covachas se trasladan y montan también en zonas rurales y de sierras de la provincia de Córdoba; consultanos por tu ubicación.`,
  },
  {
    q: "¿Cómo se paga una obra con Hogacor?",
    a: "La obra se divide en etapas y cada etapa tiene asignado un porcentaje del presupuesto. Los pagos se acuerdan por contrato y están atados al avance: pagás cada etapa a medida que se cumple, no la obra completa por adelantado.",
  },
  {
    q: "¿Cuánto cuesta construir o ampliar en Steel Frame?",
    a: "Depende de la superficie, las terminaciones, el terreno y si la obra es en planta baja o alta. Hacemos la visita y el presupuesto detallado por etapas sin cargo, para que conozcas el costo real de tu proyecto antes de decidir.",
  },
  {
    q: "¿Cuánto tarda una ampliación en Steel Frame?",
    a: "Una habitación con baño suele resolverse en pocas semanas, bastante menos que con construcción húmeda. El plazo exacto queda escrito en el contrato junto con el cronograma de cada etapa.",
  },
  {
    q: "¿El Steel Frame es seguro y duradero?",
    a: "Sí. La estructura es de perfiles de acero galvanizado, que no se pudren ni los ataca la humedad o los insectos. Es un sistema reconocido como tradicional en Argentina desde 2018 y se usa en todo el mundo para viviendas permanentes.",
  },
  {
    q: "¿Se puede construir una planta alta sobre mi casa?",
    a: "En muchos casos sí, porque el Steel Frame es liviano. Antes de presupuestar verificamos el estado de la estructura existente para confirmar que puede recibir la ampliación.",
  },
  {
    q: "¿Puedo seguir viviendo en mi casa durante la obra?",
    a: "Sí. La construcción en seco genera mucho menos polvo, ruido y escombros, y organizamos la obra para afectar lo menos posible tu rutina.",
  },
  {
    q: "¿Hacen llave en mano?",
    a: "Sí, es opcional. Podemos encargarnos de todo, desde el proyecto hasta las terminaciones e instalaciones, o de la parte que necesites.",
  },
  {
    q: "¿Cómo sé cómo avanza mi obra?",
    a: "Te enviamos fotos y un resumen del avance de cada etapa. Además podés visitar la obra cuando quieras, coordinando con el equipo.",
  },
  {
    q: "¿Puedo ver obras terminadas o hablar con clientes anteriores?",
    a: `Sí. Con más de ${SITE.obrasTerminadas} obras finalizadas, te ponemos en contacto con clientes que ya construyeron con nosotros para que te cuenten su experiencia.`,
  },
];

export const FAQ_MODULOS: Faq[] = [
  {
    q: "¿Qué es un módulo habitacional?",
    a: "Es una unidad habitable completa —dormitorio, baño y, según el modelo, cocina-living— construida con estructura metálica y Steel Frame. Se instala en tu terreno en mucho menos tiempo que una construcción tradicional.",
  },
  {
    q: "¿Qué medidas tienen los módulos H1, H2 y H3?",
    a: "El H1 mide 6 × 3 m (18 m²) con 1 habitación y baño; el H2 mide 8 × 3 m (24 m²) con 1 habitación, cocina-living y baño; el H3 mide 10 × 3 m (30 m²) con 2 habitaciones, cocina-living y baño.",
  },
  {
    q: "¿Se pueden personalizar?",
    a: "Sí. Los modelos son una base: podemos adaptar distribución, medidas, aberturas y terminaciones a tu terreno y a tu uso.",
  },
  {
    q: "¿Qué necesito en el terreno?",
    a: "Un acceso para el traslado y una base nivelada. En la visita evaluamos el terreno y te indicamos qué hace falta para las conexiones de agua, cloaca y electricidad.",
  },
];

export const FAQ_COVACHA: Faq[] = [
  {
    q: "¿Qué es una Covacha?",
    a: "Covacha es el módulo habitable compacto de Hogacor: un espacio completo con dormitorio, baño y, en la versión estándar, kitchenette, pensado para escapadas, visitas, oficina o alquiler turístico.",
  },
  {
    q: "¿Qué diferencia hay entre Covacha y Covacha Mini?",
    a: "La Covacha estándar mide 6 × 3 m (18 m²) e incluye kitchenette equipada. La Covacha Mini mide 4 × 3 m (12 m²) con dormitorio y baño con ducha. Ambas tienen aislación térmica y acústica y aberturas de aluminio.",
  },
  {
    q: "¿Se puede instalar en las sierras o en zonas rurales?",
    a: "Sí. Están pensadas para eso: se trasladan y montan en el lugar con bajo impacto en el terreno.",
  },
];

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
