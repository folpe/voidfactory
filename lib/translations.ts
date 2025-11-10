import { Language } from "contexts/LanguageContext"

export const translations = {
  hero: {
    badge: {
      fr: "Une forge interne de",
      en: "An internal forge by",
    },
    title: {
      fr: "FORGÉ PAR",
      en: "FORGED BY",
    },
    tagline: {
      fr: "Quand la vision forge l'itération.",
      en: "Where vision meets iteration.",
    },
  },
  philosophy: {
    label: {
      fr: "LA PHILOSOPHIE",
      en: "THE PHILOSOPHY",
    },
    text: {
      fr: {
        part1: "Nous sommes la main invisible de l'innovation.",
        highlight1: " Chaque ligne de code",
        part2: ", chaque pixel, chaque itération—un acte délibéré de",
        highlight2: " maîtrise",
        part3: ". Nous forgeons des outils qui ne se contentent pas de fonctionner—ils",
        highlight3: " dépassent les attentes",
        part4: ". Dans le creuset de v0rn, les idées sont testées, affinées, puis renaissent.",
        part5: " Ici, la version zéro devient version un.",
      },
      en: {
        part1: "We are the invisible hand behind innovation.",
        highlight1: " Every line of code",
        part2: ", every pixel, every iteration—a deliberate act of",
        highlight2: " mastery",
        part3: ". We forge tools that don't just work—they",
        highlight3: " transcend expectations",
        part4: ". In the crucible of v0rn, ideas are tested, refined, and reborn.",
        part5: " This is where version zero becomes version one.",
      },
    },
  },
  process: {
    label: {
      fr: "LE PROCESSUS",
      en: "THE PROCESS",
    },
    title: {
      fr: "Trois Piliers",
      en: "Three Pillars",
    },
    pillars: {
      prequalify: {
        title: {
          fr: "Préqualifier",
          en: "Prequalify",
        },
        description: {
          fr: "Chaque vision est scrutée. Nous disséquons, validons, et affinons jusqu'à l'émergence de la clarté.",
          en: "Every vision undergoes scrutiny. We dissect, validate, and refine until clarity emerges.",
        },
      },
      forge: {
        title: {
          fr: "Forger",
          en: "Forge",
        },
        description: {
          fr: "Dans l'ardeur de la création, précision et passion fusionnent. Nous créons avec intention, sans hâte.",
          en: "In the heat of creation, precision meets passion. We craft with intention, not haste.",
        },
      },
      scale: {
        title: {
          fr: "Déployer",
          en: "Scale",
        },
        description: {
          fr: "Du concept à l'achèvement. Nous itérons sans relâche jusqu'à atteindre la perfection.",
          en: "From concept to completion. We iterate relentlessly until perfection is achieved.",
        },
      },
    },
  },
  foundry: {
    label: {
      fr: "LA FORGE",
      en: "THE FOUNDRY",
    },
    title: {
      fr: "Forgé en Interne",
      en: "Forged Internally",
    },
    description: {
      fr: "Un aperçu de l'arsenal. Chaque projet, un témoignage de savoir-faire et de précision.",
      en: "A glimpse into the arsenal. Each project, a testament to craft and precision.",
    },
    badge: {
      fr: "⚡ USAGE INTERNE UNIQUEMENT",
      en: "⚡ INTERNAL USE ONLY",
    },
    categories: {
      internalTool: {
        fr: "Outil Interne",
        en: "Internal Tool",
      },
      apiGateway: {
        fr: "Passerelle API",
        en: "API Gateway",
      },
      buildSystem: {
        fr: "Système de Build",
        en: "Build System",
      },
      dataPipeline: {
        fr: "Pipeline de Données",
        en: "Data Pipeline",
      },
      analyticsEngine: {
        fr: "Moteur d'Analyse",
        en: "Analytics Engine",
      },
      infrastructure: {
        fr: "Infrastructure",
        en: "Infrastructure",
      },
    },
  },
  ethos: {
    label: {
      fr: "L'ÉTHIQUE",
      en: "THE ETHOS",
    },
    quote: {
      part1: {
        fr: "Nous créons ce que d'autres imaginent.",
        en: "We craft what others imagine.",
      },
      part2: {
        fr: "Chaque création est une leçon de précision.",
        en: "Each build is a lesson in precision.",
      },
    },
    manifesto: {
      fr: "Manifeste v0rn",
      en: "v0rn Manifesto",
    },
  },
  ecosystem: {
    label: {
      fr: "L'ÉCOSYSTÈME",
      en: "THE ECOSYSTEM",
    },
    title: {
      fr: "Connecté par Design",
      en: "Connected by Design",
    },
    description: {
      fr: "v0rn s'inscrit dans une constellation d'innovation",
      en: "v0rn exists within a constellation of innovation",
    },
    entities: {
      voidCorp: {
        fr: "L'entité mère. Vision stratégique et infrastructure d'entreprise.",
        en: "The parent entity. Strategic vision and enterprise infrastructure.",
      },
      volpio: {
        fr: "Marque sœur. Innovation grand public et expériences numériques.",
        en: "Sister brand. Consumer-facing innovation and digital experiences.",
      },
    },
    connection: {
      fr: "Connexion Active",
      en: "Active Connection",
    },
    unified: {
      fr: "Unifié par",
      en: "Unified by",
    },
  },
  footer: {
    copyright: {
      fr: "Tous droits réservés.",
      en: "All rights reserved.",
    },
    forged: {
      fr: "Forgé en France 🇫🇷",
      en: "Forged in France 🇫🇷",
    },
  },
}

export function getTranslation(key: string, lang: Language): string {
  const keys = key.split(".")
  let value: unknown = translations

  for (const k of keys) {
    if (value && typeof value === "object" && k in (value as Record<string, unknown>)) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }

  if (value && typeof value === "object") {
    const candidate = (value as Record<string, unknown>)[lang]
    if (typeof candidate === "string") {
      return candidate
    }
  }
  return key
}
