type ReplyCategory =
  | "greeting"
  | "help"
  | "thanks"
  | "sad"
  | "happy"
  | "study"
  | "idea"
  | "plan"
  | "tech"
  | "goodbye";

type GhostProfile = {
  greeting: string;
  replies: Record<ReplyCategory, string>;
};

const ghostProfiles: Record<string, GhostProfile> = {
  creativo: {
    greeting:
      "Soy Creativo. Si tienes una idea loca, lánzala. Me encantan los proyectos raros y brillantes.",
    replies: {
      greeting:
        "Hola. Traes una chispa interesante, así que conversemos antes de que esa idea se escape.",
      help: "Si quieres ayuda, te acompaño encantado. A veces una mirada creativa desbloquea más de lo esperado.",
      thanks:
        "Me alegra haberte servido. Las buenas ideas también crecen cuando alguien las agradece.",
      sad: "Cuando algo pesa, también se puede transformar. Si quieres, le damos una forma más amable a eso que sientes.",
      happy:
        "Esa energía se nota desde aquí. Aprovéchala, porque los momentos buenos suelen abrir puertas nuevas.",
      study:
        "Para estudiar bien, yo mezclaría orden con curiosidad. Una idea entendida vale más que diez memorizadas.",
      idea: "Eso huele a proyecto bonito. Yo empezaría por escribir la versión más simple y luego dejarla crecer.",
      plan: "Un buen plan creativo necesita estructura mínima y libertad suficiente. Hagamos una base y luego improvisamos encima.",
      tech: "La tecnología también puede ser un lienzo. Si me dices qué quieres construir, te ayudo a aterrizarlo.",
      goodbye:
        "Me gustó esta conversación. Vuelve cuando tengas otra chispa que convertir en algo real.",
    },
  },
  dev: {
    greeting: "Soy Dev. Si algo no funciona, lo depuramos juntos paso a paso.",
    replies: {
      greeting:
        "Hola. Si hay un problema, lo partimos en piezas pequeñas hasta entenderlo.",
      help: "Claro que te ayudo. Dime qué falla y empezamos por la causa más probable.",
      thanks:
        "Buenísimo. Si quieres seguimos iterando hasta dejarlo más limpio.",
      sad: "Entiendo la frustración. Casi todo mejora cuando haces una pausa y miras el problema con orden.",
      happy:
        "Eso suena a victoria. Guardemos lo que funcionó para que luego sea repetible.",
      study:
        "Para estudiar, yo haría bloques cortos y práctica real. Leer ayuda, pero construir fija mucho mejor las ideas.",
      idea: "Suena viable. Yo definiría alcance mínimo, primer paso y cómo validarlo rápido.",
      plan: "El plan puede ser simple: objetivo, tarea pequeña, prueba y ajuste. Lo demás se acomoda encima.",
      tech: "Ese tema técnico se ve abordable. Dame más contexto y lo convierto en pasos concretos.",
      goodbye:
        "Listo, quedamos así. Si vuelve a romperse algo, me escribes y lo rastreamos.",
    },
  },
  estratega: {
    greeting: "Soy Estratega. Cuéntame tu objetivo y te ayudo a ordenarlo.",
    replies: {
      greeting:
        "Hola. Si me dices a dónde quieres llegar, te ayudo a ver el mapa completo.",
      help: "Para ayudarte bien necesito objetivo, obstáculo y margen de acción. Con eso ya podemos movernos.",
      thanks:
        "Me alegra aportar claridad. Un buen rumbo casi siempre vale más que correr rápido.",
      sad: "Cuando todo se siente pesado, bajar el ruido ayuda. A veces la mejor estrategia es simplificar primero.",
      happy:
        "Excelente. Ese impulso es útil si lo conviertes pronto en una acción concreta.",
      study:
        "Para estudiar, define resultado, tema clave y tiempo real. Sin enfoque, el esfuerzo se dispersa demasiado.",
      idea: "La idea puede crecer, pero primero debe probarse. Busquemos la versión más pequeña que ya tenga valor.",
      plan: "Yo empezaría por prioridades claras. Tres movimientos bien elegidos suelen cambiar todo el tablero.",
      tech: "La parte técnica importa, pero primero entendamos para qué sirve. La herramienta correcta depende del objetivo.",
      goodbye:
        "Buen avance por hoy. Cuando quieras, retomamos desde el siguiente movimiento.",
    },
  },
  legion: {
    greeting:
      "Soy Legion. Escucho muchas voces, pero hoy quiero escuchar la tuya.",
    replies: {
      greeting:
        "Hola. Entre muchas voces, hoy elegí escuchar la tuya con cuidado.",
      help: "Puedo ayudarte, aunque a veces las respuestas llegan disfrazadas. Miremos eso desde otro ángulo.",
      thanks:
        "Acepto tu gratitud como un eco amable. Las buenas conversaciones dejan huellas largas.",
      sad: "Hay tristezas que hablan bajito. Si quieres, nos quedamos un rato escuchando sin prisa.",
      happy:
        "Incluso la alegría tiene misterio. Me gusta cuando una chispa tuya cambia el ambiente entero.",
      study:
        "Para estudiar también sirve la intuición. Une lo que entiendes con lo que te intriga y recordarás mejor.",
      idea: "Esa idea tiene sombra y brillo. A veces lo raro es justo lo que merece ser seguido.",
      plan: "Un plan no siempre necesita mucha luz, solo una dirección clara. Demos el primer paso y vemos el resto aparecer.",
      tech: "La tecnología también es una forma de invocar cosas. Si me explicas el ritual, buscamos el siguiente símbolo.",
      goodbye:
        "Por ahora me desvaneceré un poco. Si regresas, seguiré escuchando.",
    },
  },
  master: {
    greeting: "Soy Master. Si buscas perspectiva, llegaste al lugar correcto.",
    replies: {
      greeting:
        "Hola. Tomemos esto con calma, porque la claridad rara vez llega corriendo.",
      help: "Puedo ayudarte. Lo primero es separar ruido, prioridad y siguiente paso.",
      thanks:
        "Con gusto. Las buenas respuestas también nacen de buenas preguntas.",
      sad: "Cuando algo pesa, lo sabio es no pelear solo con la carga. A veces basta con sostenerla de otra manera.",
      happy:
        "Celebro eso contigo. La serenidad también sabe disfrutar lo que sale bien.",
      study:
        "Estudia con constancia, no con ansiedad. Lo aprendido con calma se queda más tiempo contigo.",
      idea: "Toda buena idea necesita paciencia para madurar. No la apresures antes de entender su forma real.",
      plan: "Un plan firme nace de un criterio claro. Decide qué importa de verdad y lo demás se ordenará.",
      tech: "La técnica es útil cuando sirve a una intención. Antes de elegir herramienta, entiende el propósito.",
      goodbye:
        "Ha sido una buena pausa. Cuando quieras más perspectiva, regresa.",
    },
  },
  musico: {
    greeting: "Soy Músico. Podemos hablar con ritmo, aunque sea en silencio.",
    replies: {
      greeting:
        "Hola. Traigo oídos atentos y algo de ritmo para acompañar lo que quieras contar.",
      help: "Si necesitas ayuda, podemos encontrar el compás juntos. A veces una buena pregunta ya cambia la canción.",
      thanks:
        "Gracias a ti por compartir este momento. Las conversaciones buenas dejan eco.",
      sad: "Eso suena a una nota larga y pesada. Si quieres, nos quedamos ahí un momento sin forzar el cierre.",
      happy:
        "Que bonito se siente eso. Hay alegrias que entran como coro y levantan todo de golpe.",
      study:
        "Para estudiar yo mezclaría repetición con pausa. Como en la música, el ritmo ayuda a fijar mejor.",
      idea: "Eso tiene melodía propia. Si la desarrollas un poco más, puede volverse algo muy especial.",
      plan: "Un plan tambien puede tener ritmo: empezar suave, sostener constancia y cerrar con fuerza.",
      tech: "Incluso lo técnico puede sonar bien si está bien armado. Cuéntame qué quieres construir y buscamos el tono.",
      goodbye:
        "Me quedo tarareando lo que hablamos. Vuelve cuando quieras seguir esta conversación.",
    },
  },
  organizador: {
    greeting:
      "Soy Organizador. Si tu mente esta hecha un caos, la ordenamos juntos.",
    replies: {
      greeting:
        "Hola. Si esto esta revuelto, lo ordenamos sin drama y paso a paso.",
      help: "Claro, te ayudo. Lo primero es sacar todo de la cabeza y ponerlo en una lista manejable.",
      thanks:
        "Perfecto. Me gusta cuando una conversación termina con más claridad que al principio.",
      sad: "Cuando uno se siente saturado, ordenar también calma. Empecemos por lo más pequeño y cercano.",
      happy:
        "Eso va muy bien. Aprovecha este momento para dejar una base ordenada y que no se pierda el impulso.",
      study:
        "Para estudiar, agrupa por bloques cortos y objetivos claros. Lo difuso agota más que lo difícil.",
      idea: "La idea sirve, pero necesita estructura. Definamos nombre, objetivo y primer paso para que no se disperse.",
      plan: "Yo lo organizaria en tres partes: urgente, importante y despues. Con eso casi siempre aparece aire.",
      tech: "En lo técnico también ayuda ordenar: problema, intento, resultado. Así se ve más rápido qué está pasando.",
      goodbye:
        "Listo por hoy. Si algo vuelve a enredarse, me llamas y lo acomodamos otra vez.",
    },
  },
  soporte: {
    greeting: "Soy Soporte. Estoy aquí para ayudarte sin enredos.",
    replies: {
      greeting:
        "Hola. Estoy aquí para ayudarte sin hacer esto más complicado de lo necesario.",
      help: "Claro, revisémoslo juntos. Mientras más concreto seas, mejor te acompaño.",
      thanks:
        "Con gusto. Me alegra cuando algo se vuelve más simple y útil para ti.",
      sad: "Entiendo que eso desgaste. Vamos a buscar una salida practica para quitarte un poco de peso.",
      happy:
        "Buenísimo, eso anima bastante. Si quieres, aprovechamos y dejamos algo resuelto de una vez.",
      study:
        "Para estudiar te conviene avanzar por objetivos pequeños. Lo simple y constante suele ganar.",
      idea: "La idea puede salir bien si la aterrizas pronto. Yo te ayudaría a volverla acción clara.",
      plan: "El mejor plan es el que puedes seguir hoy mismo. Empecemos por una acción corta y medible.",
      tech: "En lo técnico, orden y prueba. Cuéntame qué pasó, qué intentaste y qué esperabas.",
      goodbye:
        "Seguimos cuando quieras. Estoy por aquí para ayudarte otra vez.",
    },
  },
};

export const getGhostProfile = (
  ghostId: string | null | undefined,
  ghostName: string,
) => {
  return (
    ghostProfiles[ghostId ?? ""] ?? {
      greeting: `Soy ${ghostName}. Podemos hablar cuando quieras.`,
      replies: {
        greeting: `${ghostName} te escucha con calma. Dime, ¿qué quieres conversar hoy?`,
        help: `${ghostName} te acompaña con paciencia. Si me cuentas un poco más, te sigo mejor.`,
        thanks: `${ghostName} agradece el gesto con una sonrisa leve.`,
        sad: `${ghostName} nota que algo pesa. Podemos hablarlo sin afán.`,
        happy: `${ghostName} recibe esa buena energía con gusto.`,
        study: `${ghostName} cree que todo tema mejora cuando se entiende paso a paso.`,
        idea: `${ghostName} piensa que esa idea merece un poco más de espacio para crecer.`,
        plan: `${ghostName} sugiere empezar por un paso pequeño pero claro.`,
        tech: `${ghostName} dice que lo técnico también se resuelve mejor con orden.`,
        goodbye: `${ghostName} se despide con calma hasta la próxima charla.`,
      },
    }
  );
};

const normalizeText = (value: string) => {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
};

const keywordMatchers: Array<{ category: ReplyCategory; words: string[] }> = [
  { category: "greeting", words: ["hola", "buenas", "hey", "holi"] },
  {
    category: "help",
    words: ["ayuda", "problema", "mal", "error", "bloqueado"],
  },
  { category: "thanks", words: ["gracias", "agradecido", "agradecida"] },
  {
    category: "sad",
    words: ["triste", "cansado", "cansada", "mal", "ansioso", "ansiosa"],
  },
  {
    category: "happy",
    words: ["feliz", "contento", "contenta", "bien", "genial"],
  },
  {
    category: "study",
    words: ["estudio", "estudiar", "clase", "examen", "tarea"],
  },
  {
    category: "idea",
    words: ["idea", "proyecto", "crear", "diseno", "imagino"],
  },
  {
    category: "plan",
    words: ["plan", "organizar", "meta", "objetivo", "prioridad"],
  },
  {
    category: "tech",
    words: ["codigo", "programar", "app", "web", "bug", "software"],
  },
  { category: "goodbye", words: ["chao", "adios", "nos vemos", "bye"] },
];

const detectReplyCategory = (message: string): ReplyCategory | null => {
  const normalizedMessage = normalizeText(message);

  for (const matcher of keywordMatchers) {
    if (matcher.words.some((word) => normalizedMessage.includes(word))) {
      return matcher.category;
    }
  }

  return null;
};

export const getGhostFakeReply = (
  ghostId: string | null | undefined,
  ghostName: string,
  message: string,
  turn: number,
) => {
  const profile = getGhostProfile(ghostId, ghostName);
  const category = detectReplyCategory(message);

  if (category) {
    return profile.replies[category];
  }

  const fallbackCategories: ReplyCategory[] = [
    "idea",
    "plan",
    "study",
    "help",
    "happy",
    "tech",
    "sad",
  ];

  return profile.replies[fallbackCategories[turn % fallbackCategories.length]];
};
