import { Language } from './translations';
import { challengeDays as frenchChallengeDays, bonusAffirmations as frenchAffirmations, checklistsData as frenchChecklists, softLifeGuide as frenchSoftLifeGuide, bonusSections as frenchBonusSections, fiftyThingsAlone as frenchFiftyThingsAlone, softLifeTips as frenchSoftLifeTips } from './challenge-data';

export interface TranslatedChallengeDay {
  day: number;
  week: number;
  weekTitle: string;
  weekObjective: string;
  title: string;
  content: string;
  affirmation: string;
  actions: {
    beauty: string;
    mental: string;
    lifestyle: string;
  };
}

// Helper functions to get translated content
export function getChallengeDays(lang: Language): TranslatedChallengeDay[] {
  // For now, return French data for all languages until full translations are complete
  // This ensures the app works immediately
  if (lang === 'fr') {
    return frenchChallengeDays;
  }
  // Return partial translations for EN/ES (first 3 days), then fallback to French
  const translated = challengeDaysData[lang];
  if (translated && translated.length > 0) {
    // Merge: use translated days where available, fallback to French for the rest
    return frenchChallengeDays.map((frDay, index) => {
      return translated[index] || frDay;
    });
  }
  return frenchChallengeDays;
}

export function getAffirmations(lang: Language): string[] {
  return affirmationsData[lang] && affirmationsData[lang].length > 0 ? affirmationsData[lang] : frenchAffirmations;
}

export function getChecklists(lang: Language) {
  return checklistsData[lang] && checklistsData[lang].length > 0 ? checklistsData[lang] : frenchChecklists;
}

export function getSoftLifeGuide(lang: Language) {
  return softLifeGuideData[lang] && Object.keys(softLifeGuideData[lang]).length > 0 ? softLifeGuideData[lang] : frenchSoftLifeGuide;
}

export function getBonusSections(lang: Language) {
  return bonusSectionsData[lang] && bonusSectionsData[lang].length > 0 ? bonusSectionsData[lang] : frenchBonusSections;
}

export function getFiftyThingsAlone(lang: Language): string[] {
  return fiftyThingsAloneData[lang] && fiftyThingsAloneData[lang].length > 0 ? fiftyThingsAloneData[lang] : frenchFiftyThingsAlone;
}

export function getSoftLifeTips(lang: Language): string[] {
  return softLifeTipsData[lang] && softLifeTipsData[lang].length > 0 ? softLifeTipsData[lang] : frenchSoftLifeTips;
}

// ============================================================================
// CHALLENGE DAYS - 30 DAYS TRANSLATIONS
// ============================================================================

const challengeDaysData: Record<Language, TranslatedChallengeDay[]> = {
  fr: [
    // Week 1 - Day 1
    {
      day: 1,
      week: 1,
      weekTitle: "Reset & Nettoyage de vie",
      weekObjective: "Faire de la place, alléger le mental, repartir sur de bonnes bases.",
      title: "Grand Reset",
      content: "Aujourd'hui, tu appuies sur \"reset\". Prends quelques minutes pour respirer, t'ancrer, et poser l'intention de te choisir.",
      affirmation: "Je deviens une version plus légère et plus alignée de moi-même.",
      actions: {
        beauty: "Fais un double nettoyage du visage et hydrate profondément.",
        mental: "Écris tout ce qui te pèse en ce moment. Sans filtre.",
        lifestyle: "Range ton espace principal (bureau, lit, salon)."
      }
    },
    // Week 1 - Day 2
    {
      day: 2,
      week: 1,
      weekTitle: "Reset & Nettoyage de vie",
      weekObjective: "Faire de la place, alléger le mental, repartir sur de bonnes bases.",
      title: "Hydratation intérieure & extérieure",
      content: "Le glow commence par l'intérieur.",
      affirmation: "Je nourris mon corps, mon esprit et mon énergie.",
      actions: {
        beauty: "Applique une crème hydratante ou un masque hydratant.",
        mental: "Prends 5 minutes pour respirer profondément.",
        lifestyle: "Bois au moins 6 verres d'eau aujourd'hui et commence ton tracker d'hydratation."
      }
    },
    // Week 1 - Day 3
    {
      day: 3,
      week: 1,
      weekTitle: "Reset & Nettoyage de vie",
      weekObjective: "Faire de la place, alléger le mental, repartir sur de bonnes bases.",
      title: "Détox digitale",
      content: "Ce que tu consommes influence ton humeur.",
      affirmation: "Je choisis ce qui nourrit ma paix.",
      actions: {
        beauty: "Fais un masque visage ou un soin rapide.",
        mental: "Crée une playlist \"good vibes only\".",
        lifestyle: "Supprime les applications, photos et comptes qui ne t'apportent rien."
      }
    },
    // Week 1 - Day 4
    {
      day: 4,
      week: 1,
      weekTitle: "Reset & Nettoyage de vie",
      weekObjective: "Faire de la place, alléger le mental, repartir sur de bonnes bases.",
      title: "Organisation rapide & douce",
      content: "Une vie organisée crée un esprit apaisé.",
      affirmation: "Je deviens une femme alignée, organisée et sereine.",
      actions: {
        beauty: "Fais une routine minimaliste (nettoyage + hydratation).",
        mental: "Écris 10 affirmations de confiance.",
        lifestyle: "Planifie ta semaine (3 priorités max)."
      }
    },
    // Week 1 - Day 5
    {
      day: 5,
      week: 1,
      weekTitle: "Reset & Nettoyage de vie",
      weekObjective: "Faire de la place, alléger le mental, repartir sur de bonnes bases.",
      title: "Corps & Énergie",
      content: "L'énergie du corps influence ton glow.",
      affirmation: "Je prends soin de mon corps avec douceur.",
      actions: {
        beauty: "Exfolie légèrement ton corps et hydrate.",
        mental: "Pratique 1 minute de respiration profonde.",
        lifestyle: "Marche 10 à 15 minutes."
      }
    },
    // Week 1 - Day 6
    {
      day: 6,
      week: 1,
      weekTitle: "Reset & Nettoyage de vie",
      weekObjective: "Faire de la place, alléger le mental, repartir sur de bonnes bases.",
      title: "Détox émotionnelle",
      content: "Temps de laisser aller.",
      affirmation: "Je me libère de ce qui ne me sert plus.",
      actions: {
        beauty: "Fais une routine self-care relaxante.",
        mental: "Écris une lettre (que tu ne liras pas) sur ce que tu dois libérer.",
        lifestyle: "Désencombre un tiroir ou une petite zone."
      }
    },
    // Week 1 - Day 7
    {
      day: 7,
      week: 1,
      weekTitle: "Reset & Nettoyage de vie",
      weekObjective: "Faire de la place, alléger le mental, repartir sur de bonnes bases.",
      title: "Bilan Semaine 1",
      content: "Comment te sens-tu ? Qu'est-ce qui a changé ? Quel petit pas t'a fait du bien ?",
      affirmation: "Je suis fière de prendre soin de moi.",
      actions: {
        beauty: "Fais un soin qui te fait plaisir.",
        mental: "Note tes réussites de la semaine.",
        lifestyle: "Prépare une intention pour la semaine à venir."
      }
    },
    // Week 2 - Day 8
    {
      day: 8,
      week: 2,
      weekTitle: "Beauté & Self-care",
      weekObjective: "Installer une routine simple, efficace et féminine.",
      title: "Stabiliser ta routine skincare",
      content: "Aujourd'hui, on définit une routine skincare simple et efficace.",
      affirmation: "Je rayonne naturellement.",
      actions: {
        beauty: "Définis une routine simple matin/soir (3 étapes).",
        mental: "Respire et centre-toi 2 minutes.",
        lifestyle: "Note tes produits préférés."
      }
    },
    // Week 2 - Day 9
    {
      day: 9,
      week: 2,
      weekTitle: "Beauté & Self-care",
      weekObjective: "Installer une routine simple, efficace et féminine.",
      title: "Soin cheveux profond",
      content: "Tes cheveux méritent aussi des soins profonds.",
      affirmation: "Je me traite comme une reine.",
      actions: {
        beauty: "Fais un masque nourrissant ou un bain d'huile.",
        mental: "Prends un moment sans écran.",
        lifestyle: "Range tes produits cheveux / accessoires."
      }
    },
    // Week 2 - Day 10
    {
      day: 10,
      week: 2,
      weekTitle: "Beauté & Self-care",
      weekObjective: "Installer une routine simple, efficace et féminine.",
      title: "Routine \"Femme Fatale\" minimaliste",
      content: "Le maquillage minimaliste peut être très impactant.",
      affirmation: "Je suis élégante et assurée.",
      actions: {
        beauty: "Maquillage léger mais impactant (gloss, mascara, glow).",
        mental: "Adopte une posture confiante.",
        lifestyle: "Choisis une tenue où tu te sens magnifique."
      }
    },
    // Week 2 - Day 11
    {
      day: 11,
      week: 2,
      weekTitle: "Beauté & Self-care",
      weekObjective: "Installer une routine simple, efficace et féminine.",
      title: "Look frais en 5 minutes",
      content: "Un look rapide ne veut pas dire négligé.",
      affirmation: "Je mérite de me sentir belle au quotidien.",
      actions: {
        beauty: "Teint frais, cheveux coiffés simplement.",
        mental: "Écris 3 choses que tu aimes chez toi.",
        lifestyle: "Rafraîchis ton sac / organise l'intérieur."
      }
    },
    // Week 2 - Day 12
    {
      day: 12,
      week: 2,
      weekTitle: "Beauté & Self-care",
      weekObjective: "Installer une routine simple, efficace et féminine.",
      title: "Posture & élégance",
      content: "L'élégance commence par la posture.",
      affirmation: "Je marche avec assurance et grâce.",
      actions: {
        beauty: "Un soin rapide.",
        mental: "Respire avec la poitrine ouverte.",
        lifestyle: "Pratique 3 minutes de posture élégante (dos droit, épaules ouvertes)."
      }
    },
    // Week 2 - Day 13
    {
      day: 13,
      week: 2,
      weekTitle: "Beauté & Self-care",
      weekObjective: "Installer une routine simple, efficace et féminine.",
      title: "Self-care mains & pieds",
      content: "Les détails font la différence.",
      affirmation: "Je prends soin des détails qui me font du bien.",
      actions: {
        beauty: "Coupe, lime, hydrate, vernis si tu veux.",
        mental: "Ralentis ta journée 10 minutes.",
        lifestyle: "Crée un rituel self-care hebdomadaire."
      }
    },
    // Week 2 - Day 14
    {
      day: 14,
      week: 2,
      weekTitle: "Beauté & Self-care",
      weekObjective: "Installer une routine simple, efficace et féminine.",
      title: "Bilan Semaine 2",
      content: "Quels changements vois-tu au niveau beauté ? Quel rituel te fait le plus de bien ?",
      affirmation: "J'investis dans mon bien-être.",
      actions: {
        beauty: "Fais ton rituel skincare préféré.",
        mental: "Note les changements que tu observes.",
        lifestyle: "Prépare tes produits pour la semaine à venir."
      }
    },
    // Week 3 - Day 15
    {
      day: 15,
      week: 3,
      weekTitle: "Mindset & Confiance",
      weekObjective: "Développer une mentalité forte, douce et magnétique.",
      title: "Vision Board Féminin",
      content: "Visualise la femme que tu veux devenir.",
      affirmation: "Je deviens la femme que je visualise.",
      actions: {
        beauty: "Un soin rapide.",
        mental: "Crée un vision board (Canva ou papier).",
        lifestyle: "Affiche-le quelque part."
      }
    },
    // Week 3 - Day 16
    {
      day: 16,
      week: 3,
      weekTitle: "Mindset & Confiance",
      weekObjective: "Développer une mentalité forte, douce et magnétique.",
      title: "Affirmations puissantes",
      content: "Les mots ont un pouvoir créateur.",
      affirmation: "Je suis capable, digne et confiante.",
      actions: {
        beauty: "Ta routine habituelle.",
        mental: "Écris 20 affirmations puissantes.",
        lifestyle: "Lis-les à voix haute."
      }
    },
    // Week 3 - Day 17
    {
      day: 17,
      week: 3,
      weekTitle: "Mindset & Confiance",
      weekObjective: "Développer une mentalité forte, douce et magnétique.",
      title: "Journal \"Femme Confiante\"",
      content: "Que ferait la version confiante de toi ?",
      affirmation: "Je choisis la confiance.",
      actions: {
        beauty: "Soin détente.",
        mental: "Écris ce que ferait la version confiante de toi.",
        lifestyle: "Applique une micro-action immédiatement."
      }
    },
    // Week 3 - Day 18
    {
      day: 18,
      week: 3,
      weekTitle: "Mindset & Confiance",
      weekObjective: "Développer une mentalité forte, douce et magnétique.",
      title: "Stop aux pensées négatives",
      content: "Transforme tes pensées négatives en pensées positives.",
      affirmation: "Mes pensées créent ma réalité, je choisis le positif.",
      actions: {
        beauty: "Routine rapide.",
        mental: "Note tes pensées négatives et transforme-les.",
        lifestyle: "Fais un mini rituel d'ancrage (bougie, thé…)."
      }
    },
    // Week 3 - Day 19
    {
      day: 19,
      week: 3,
      weekTitle: "Mindset & Confiance",
      weekObjective: "Développer une mentalité forte, douce et magnétique.",
      title: "Routine matinale douce",
      content: "Commence la journée avec douceur et intention.",
      affirmation: "Je me réveille avec douceur et intention.",
      actions: {
        beauty: "Rafraîchis ton visage.",
        mental: "Choisis 3 choses qui te donnent envie pour la journée.",
        lifestyle: "Organise ta matinée à ton rythme."
      }
    },
    // Week 3 - Day 20
    {
      day: 20,
      week: 3,
      weekTitle: "Mindset & Confiance",
      weekObjective: "Développer une mentalité forte, douce et magnétique.",
      title: "Petits plaisirs du quotidien",
      content: "Le bonheur est dans les petites choses.",
      affirmation: "Je mérite de profiter de chaque instant.",
      actions: {
        beauty: "Un geste beauté simple.",
        mental: "Liste 10 petits plaisirs faciles.",
        lifestyle: "Réalise-en au moins 2 aujourd'hui."
      }
    },
    // Week 3 - Day 21
    {
      day: 21,
      week: 3,
      weekTitle: "Mindset & Confiance",
      weekObjective: "Développer une mentalité forte, douce et magnétique.",
      title: "Bilan Semaine 3",
      content: "Comment ton mindset évolue ? Quelle pensée t'a portée cette semaine ?",
      affirmation: "Je deviens mentalement plus forte chaque jour.",
      actions: {
        beauty: "Fais un soin qui te fait plaisir.",
        mental: "Note tes progrès mentaux.",
        lifestyle: "Prépare une intention pour la semaine à venir."
      }
    },
    // Week 4 - Day 22
    {
      day: 22,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Routine du soir Glow",
      content: "Les soirées sacrées préparent de beaux matins.",
      affirmation: "Mes soirées sont un moment sacré pour moi.",
      actions: {
        beauty: "Démaquillage profond + hydratation.",
        mental: "Gratitude pour 3 choses.",
        lifestyle: "Prépare ta journée de demain."
      }
    },
    // Week 4 - Day 23
    {
      day: 23,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Meal Prep simple",
      content: "Une alimentation simple et saine nourrit le corps et l'esprit.",
      affirmation: "Je nourris mon corps avec amour et simplicité.",
      actions: {
        beauty: "Soin express.",
        mental: "Simplifie tes repas.",
        lifestyle: "Prépare 1 à 2 recettes simples pour la semaine."
      }
    },
    // Week 4 - Day 24
    {
      day: 24,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Glow Up wardrobe",
      content: "Porte des vêtements qui te font sentir bien.",
      affirmation: "Je mérite de me sentir bien dans ce que je porte.",
      actions: {
        beauty: "Parfum + look propre.",
        mental: "Écris comment tu veux te sentir dans tes vêtements.",
        lifestyle: "Fais un mini tri et garde les pièces qui te mettent en valeur."
      }
    },
    // Week 4 - Day 25
    {
      day: 25,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Espace beauté organisé",
      content: "Un espace organisé crée une énergie fluide.",
      affirmation: "Je crée un espace qui soutient ma féminité.",
      actions: {
        beauty: "Range tes produits.",
        mental: "Élimine ce que tu n'utilises pas.",
        lifestyle: "Crée un coin beauté agréable."
      }
    },
    // Week 4 - Day 26
    {
      day: 26,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Hydratation maximale",
      content: "L'hydratation est la clé d'un glow naturel.",
      affirmation: "Je prends soin de moi avec constance.",
      actions: {
        beauty: "Masque hydratant.",
        mental: "Vérifie ton niveau d'énergie.",
        lifestyle: "Remplis ton tracker d'hydratation."
      }
    },
    // Week 4 - Day 27
    {
      day: 27,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Journée Soft Life",
      content: "Le soft life, c'est choisir la douceur.",
      affirmation: "Je mérite le calme, la douceur et la beauté.",
      actions: {
        beauty: "Un geste qui te fait du bien.",
        mental: "Ralentis ton rythme.",
        lifestyle: "Fais 3 activités qui apaisent (bougie, musique douce, bain…)."
      }
    },
    // Week 4 - Day 28
    {
      day: 28,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Social Glow Up",
      content: "Entoure-toi de personnes positives.",
      affirmation: "Je cultive des relations belles et enrichissantes.",
      actions: {
        beauty: "Une routine simple.",
        mental: "Contacte une personne qui te fait du bien.",
        lifestyle: "Planifie une sortie ou un moment convivial."
      }
    },
    // Week 4 - Day 29
    {
      day: 29,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Préparer le mois prochain",
      content: "Continue ton voyage vers la meilleure version de toi-même.",
      affirmation: "Je me prépare pour la suite de mon évolution.",
      actions: {
        beauty: "Soin rapide.",
        mental: "Fixe 3 objectifs pour le mois à venir.",
        lifestyle: "Planifie tes routines."
      }
    },
    // Week 4 - Day 30
    {
      day: 30,
      week: 4,
      weekTitle: "Lifestyle, Habitudes & Énergie féminine",
      weekObjective: "Créer un style de vie aligné, beau et durable.",
      title: "Bilan final & célébration",
      content: "Tu y es ✨ Comment te sens-tu ? Qu'est-ce qui a le plus changé ? Quel est ton plus beau progrès ?",
      affirmation: "Je suis fière de moi. Ce n'est que le début.",
      actions: {
        beauty: "Fais un soin spécial pour célébrer.",
        mental: "Note tes accomplissements du mois.",
        lifestyle: "Célèbre ton progrès !"
      }
    },
  ],
  en: [
    // Week 1 - Day 1
    {
      day: 1,
      week: 1,
      weekTitle: "Reset & Life Cleanup",
      weekObjective: "Make space, lighten the mind, start fresh on good foundations.",
      title: "Grand Reset",
      content: "Today, you hit \"reset\". Take a few minutes to breathe, ground yourself, and set the intention to choose yourself.",
      affirmation: "I am becoming a lighter and more aligned version of myself.",
      actions: {
        beauty: "Do a double cleanse and deeply hydrate your face.",
        mental: "Write down everything weighing on you right now. No filter.",
        lifestyle: "Tidy your main space (desk, bed, living room)."
      }
    },
    // Week 1 - Day 2
    {
      day: 2,
      week: 1,
      weekTitle: "Reset & Life Cleanup",
      weekObjective: "Make space, lighten the mind, start fresh on good foundations.",
      title: "Inner & Outer Hydration",
      content: "The glow starts from within.",
      affirmation: "I nourish my body, mind and energy.",
      actions: {
        beauty: "Apply a moisturizer or hydrating mask.",
        mental: "Take 5 minutes to breathe deeply.",
        lifestyle: "Drink at least 6 glasses of water today and start your hydration tracker."
      }
    },
    // Week 1 - Day 3
    {
      day: 3,
      week: 1,
      weekTitle: "Reset & Life Cleanup",
      weekObjective: "Make space, lighten the mind, start fresh on good foundations.",
      title: "Digital Detox",
      content: "What you consume influences your mood.",
      affirmation: "I choose what nourishes my peace.",
      actions: {
        beauty: "Do a face mask or quick treatment.",
        mental: "Create a \"good vibes only\" playlist.",
        lifestyle: "Delete apps, photos and accounts that don't serve you."
      }
    },
  ],
  es: [
    // Week 1 - Day 1
    {
      day: 1,
      week: 1,
      weekTitle: "Reinicio & Limpieza de vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar de nuevo con buenas bases.",
      title: "Gran Reinicio",
      content: "Hoy, presionas \"reiniciar\". Toma unos minutos para respirar, anclarte y establecer la intención de elegirte a ti misma.",
      affirmation: "Me estoy convirtiendo en una versión más ligera y alineada de mí misma.",
      actions: {
        beauty: "Haz una doble limpieza facial e hidrata profundamente.",
        mental: "Escribe todo lo que te pesa en este momento. Sin filtro.",
        lifestyle: "Ordena tu espacio principal (escritorio, cama, sala)."
      }
    },
    // Week 1 - Day 2
    {
      day: 2,
      week: 1,
      weekTitle: "Reinicio & Limpieza de vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar de nuevo con buenas bases.",
      title: "Hidratación interior y exterior",
      content: "El brillo comienza desde adentro.",
      affirmation: "Nutro mi cuerpo, mi mente y mi energía.",
      actions: {
        beauty: "Aplica una crema hidratante o mascarilla hidratante.",
        mental: "Toma 5 minutos para respirar profundamente.",
        lifestyle: "Bebe al menos 6 vasos de agua hoy y comienza tu rastreador de hidratación."
      }
    },
    // Week 1 - Day 3
    {
      day: 3,
      week: 1,
      weekTitle: "Reinicio & Limpieza de vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar de nuevo con buenas bases.",
      title: "Detox digital",
      content: "Lo que consumes influye en tu estado de ánimo.",
      affirmation: "Elijo lo que nutre mi paz.",
      actions: {
        beauty: "Haz una mascarilla facial o un tratamiento rápido.",
        mental: "Crea una playlist \"solo buenas vibras\".",
        lifestyle: "Elimina aplicaciones, fotos y cuentas que no te aportan nada."
      }
    },
  ]
};

// ============================================================================
// AFFIRMATIONS - 20 AFFIRMATIONS TRANSLATIONS
// ============================================================================

const affirmationsData: Record<Language, string[]> = {
  fr: [
    "Je mérite le bonheur et l'amour",
    "Je suis assez, exactement comme je suis",
    "Je rayonne de confiance et de grâce",
    "J'attire des expériences positives",
    "Je mérite d'être traitée avec respect",
    "Je suis capable de réaliser mes rêves",
    "Ma valeur ne dépend pas de l'opinion des autres",
    "Je suis en train de devenir la meilleure version de moi-même",
    "Je mérite d'aimer et d'être aimée",
    "Je choisis la joie chaque jour",
    "Je suis forte, résiliente et belle",
    "Je fais confiance à mon intuition",
    "Je mérite le succès que je désire",
    "Je suis une femme digne de respect",
    "J'embrasse ma féminité unique",
    "Je crée ma propre réalité",
    "Je suis entourée d'amour et de positivité",
    "Je mérite une vie pleine de douceur",
    "Je suis un chef-d'œuvre en évolution",
    "Je choisis de me libérer des doutes"
  ],
  en: [
    "I deserve happiness and love",
    "I am enough, exactly as I am",
    "I radiate confidence and grace",
    "I attract positive experiences",
    "I deserve to be treated with respect",
    "I am capable of achieving my dreams",
    "My worth doesn't depend on others' opinions",
    "I am becoming the best version of myself",
    "I deserve to love and be loved",
    "I choose joy every day",
    "I am strong, resilient and beautiful",
    "I trust my intuition",
    "I deserve the success I desire",
    "I am a woman worthy of respect",
    "I embrace my unique femininity",
    "I create my own reality",
    "I am surrounded by love and positivity",
    "I deserve a life full of softness",
    "I am a masterpiece in progress",
    "I choose to free myself from doubts"
  ],
  es: [
    "Merezco la felicidad y el amor",
    "Soy suficiente, exactamente como soy",
    "Irradio confianza y gracia",
    "Atraigo experiencias positivas",
    "Merezco ser tratada con respeto",
    "Soy capaz de realizar mis sueños",
    "Mi valor no depende de la opinión de los demás",
    "Estoy convirtiéndome en la mejor versión de mí misma",
    "Merezco amar y ser amada",
    "Elijo la alegría cada día",
    "Soy fuerte, resiliente y hermosa",
    "Confío en mi intuición",
    "Merezco el éxito que deseo",
    "Soy una mujer digna de respeto",
    "Abrazo mi feminidad única",
    "Creo mi propia realidad",
    "Estoy rodeada de amor y positividad",
    "Merezco una vida llena de dulzura",
    "Soy una obra maestra en evolución",
    "Elijo liberarme de las dudas"
  ]
};

// ============================================================================
// SOFT LIFE TIPS - 10 TIPS TRANSLATIONS
// ============================================================================

const softLifeTipsData: Record<Language, string[]> = {
  fr: [
    "Prends 5 minutes chaque matin pour t'étirer doucement",
    "Allume une bougie pendant ta routine du soir",
    "Écoute une playlist calme pendant ton commute",
    "Prépare ton outfit la veille",
    "Bois une tasse de thé ou de café sans écran",
    "Écris 3 gratitudes chaque matin",
    "Crée un coin confortable pour lire ou méditer",
    "Utilise des serviettes douces et parfumées",
    "Ajoute des fleurs fraîches à ton espace",
    "Pratique la respiration profonde quand tu es stressée"
  ],
  en: [
    "Take 5 minutes each morning to stretch gently",
    "Light a candle during your evening routine",
    "Listen to a calm playlist during your commute",
    "Prepare your outfit the night before",
    "Drink a cup of tea or coffee without screens",
    "Write 3 gratitudes each morning",
    "Create a comfortable corner for reading or meditating",
    "Use soft and scented towels",
    "Add fresh flowers to your space",
    "Practice deep breathing when you're stressed"
  ],
  es: [
    "Toma 5 minutos cada mañana para estirarte suavemente",
    "Enciende una vela durante tu rutina nocturna",
    "Escucha una playlist tranquila durante tu trayecto",
    "Prepara tu outfit la noche anterior",
    "Bebe una taza de té o café sin pantallas",
    "Escribe 3 gratitudes cada mañana",
    "Crea un rincón cómodo para leer o meditar",
    "Usa toallas suaves y perfumadas",
    "Añade flores frescas a tu espacio",
    "Practica la respiración profunda cuando estés estresada"
  ]
};

// ============================================================================
// 50 THINGS TO DO ALONE - TRANSLATIONS
// ============================================================================

const fiftyThingsAloneData: Record<Language, string[]> = {
  fr: [
    'Aller boire un café dans un endroit cosy',
    'Faire une longue balade en nature',
    'Essayer un nouveau restaurant en solo',
    'Tenir un journal de gratitude',
    'Lire un roman dans un parc ou un café',
    'S\'offrir un bouquet de fleurs',
    'Tester un nouveau hobby créatif (peinture, collage, crochet…)',
    'Ranger et réorganiser un coin de sa maison',
    'Faire une séance de yoga ou de stretching',
    'Regarder un film ou une série qui fait du bien',
    'Méditer 5 à 10 minutes',
    'Faire une séance d\'affirmations positives devant le miroir',
    'Faire une promenade sans téléphone',
    'Cuisiner un plat qu\'on adore',
    'Faire un vision board (tableau de vision)',
    'Apprendre quelque chose sur YouTube (tuto beauté, DIY, culture…)',
    'Aller au musée seule',
    'Prendre un bain relaxant',
    'Faire une liste de ses objectifs du mois',
    'Tenir un journal d\'émotions ou de pensées',
    'Visiter une librairie et s\'offrir un livre',
    'Aller au cinéma seule',
    'Faire une sieste réparatrice',
    'Trier et renouveler sa garde-robe',
    'Écrire une lettre à son "soi futur"',
    'Tester une nouvelle activité sportive',
    'Explorer un nouveau quartier de la ville',
    'Se faire un soin beauté maison (masque visage, gommage…)',
    'Aller à la plage / au lac si possible',
    'Faire un puzzle ou un jeu de logique',
    'Écouter un podcast inspirant',
    'Créer un carnet de souvenirs ou de photos',
    'Se faire un brunch maison',
    'Aller dans un salon de thé pour se détendre',
    'Prendre le temps de rêver et de ne rien faire',
    'Aller à un atelier ou cours (cuisine, danse, art…)',
    'Tester une nouvelle coiffure ou routine beauté',
    'Faire une balade au marché local',
    'Regarder le coucher de soleil',
    'Créer une liste de ses valeurs personnelles',
    'Boire un chocolat chaud sous un plaid',
    'Faire du shopping seule',
    'Aller dans une bibliothèque et feuilleter des magazines',
    'Essayer un défi créatif (30 jours de dessins, d\'écriture…)',
    'Organiser un "date solo" (restaurant, activité, balade)',
    'Écrire un poème ou une petite histoire',
    'Se réveiller tôt pour profiter du calme du matin',
    'Écrire dans un journal pendant 5 minutes dans un lieu calme',
    'Faire du tri dans ses réseaux sociaux',
    'Planifier un mini voyage ou une sortie solo'
  ],
  en: [
    'Go for coffee in a cozy place',
    'Take a long walk in nature',
    'Try a new restaurant solo',
    'Keep a gratitude journal',
    'Read a novel in a park or café',
    'Buy yourself a bouquet of flowers',
    'Try a new creative hobby (painting, collage, crochet…)',
    'Organize and rearrange a corner of your home',
    'Do a yoga or stretching session',
    'Watch a movie or series that feels good',
    'Meditate for 5 to 10 minutes',
    'Do a positive affirmations session in front of the mirror',
    'Take a walk without your phone',
    'Cook a dish you love',
    'Create a vision board',
    'Learn something on YouTube (beauty tutorial, DIY, culture…)',
    'Go to a museum alone',
    'Take a relaxing bath',
    'Make a list of your monthly goals',
    'Keep a journal of emotions or thoughts',
    'Visit a bookstore and buy yourself a book',
    'Go to the cinema alone',
    'Take a restorative nap',
    'Sort and refresh your wardrobe',
    'Write a letter to your "future self"',
    'Try a new sports activity',
    'Explore a new neighborhood in the city',
    'Give yourself a home beauty treatment (face mask, scrub…)',
    'Go to the beach / lake if possible',
    'Do a puzzle or logic game',
    'Listen to an inspiring podcast',
    'Create a memory or photo journal',
    'Make yourself a homemade brunch',
    'Go to a tea room to relax',
    'Take time to dream and do nothing',
    'Attend a workshop or class (cooking, dance, art…)',
    'Try a new hairstyle or beauty routine',
    'Take a walk at the local market',
    'Watch the sunset',
    'Create a list of your personal values',
    'Drink hot chocolate under a blanket',
    'Go shopping alone',
    'Go to a library and browse magazines',
    'Try a creative challenge (30 days of drawing, writing…)',
    'Organize a "solo date" (restaurant, activity, walk)',
    'Write a poem or short story',
    'Wake up early to enjoy the morning calm',
    'Journal for 5 minutes in a quiet place',
    'Clean up your social media',
    'Plan a mini trip or solo outing'
  ],
  es: [
    'Ir a tomar un café en un lugar acogedor',
    'Dar un largo paseo en la naturaleza',
    'Probar un nuevo restaurante sola',
    'Llevar un diario de gratitud',
    'Leer una novela en un parque o café',
    'Comprarte un ramo de flores',
    'Probar un nuevo hobby creativo (pintura, collage, crochet…)',
    'Organizar y reorganizar un rincón de tu casa',
    'Hacer una sesión de yoga o estiramiento',
    'Ver una película o serie que te haga sentir bien',
    'Meditar de 5 a 10 minutos',
    'Hacer una sesión de afirmaciones positivas frente al espejo',
    'Dar un paseo sin teléfono',
    'Cocinar un plato que adores',
    'Crear un vision board (tablero de visión)',
    'Aprender algo en YouTube (tutorial de belleza, DIY, cultura…)',
    'Ir al museo sola',
    'Tomar un baño relajante',
    'Hacer una lista de tus objetivos del mes',
    'Llevar un diario de emociones o pensamientos',
    'Visitar una librería y comprarte un libro',
    'Ir al cine sola',
    'Tomar una siesta reparadora',
    'Ordenar y renovar tu guardarropa',
    'Escribir una carta a tu "yo futuro"',
    'Probar una nueva actividad deportiva',
    'Explorar un nuevo barrio de la ciudad',
    'Hacerte un tratamiento de belleza casero (mascarilla facial, exfoliante…)',
    'Ir a la playa / lago si es posible',
    'Hacer un rompecabezas o juego de lógica',
    'Escuchar un podcast inspirador',
    'Crear un diario de recuerdos o fotos',
    'Hacerte un brunch casero',
    'Ir a una tetería para relajarte',
    'Tomarte tiempo para soñar y no hacer nada',
    'Asistir a un taller o clase (cocina, danza, arte…)',
    'Probar un nuevo peinado o rutina de belleza',
    'Dar un paseo por el mercado local',
    'Ver el atardecer',
    'Crear una lista de tus valores personales',
    'Beber chocolate caliente bajo una manta',
    'Ir de compras sola',
    'Ir a una biblioteca y hojear revistas',
    'Probar un desafío creativo (30 días de dibujo, escritura…)',
    'Organizar una "cita contigo misma" (restaurante, actividad, paseo)',
    'Escribir un poema o una pequeña historia',
    'Despertarte temprano para disfrutar de la calma matutina',
    'Escribir en un diario durante 5 minutos en un lugar tranquilo',
    'Limpiar tus redes sociales',
    'Planificar un mini viaje o salida sola'
  ]
};

const checklistsData: Record<Language, any> = { fr: [], en: [], es: [] };
const softLifeGuideData: Record<Language, any> = { fr: {}, en: {}, es: {} };
const bonusSectionsData: Record<Language, any> = { fr: [], en: [], es: [] };

