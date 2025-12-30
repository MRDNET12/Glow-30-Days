export interface ChallengeDay {
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

export const challengeDays: ChallengeDay[] = [
  // Semaine 1
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
  // Semaine 2
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
  // Semaine 3
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
  // Semaine 4
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
  }
];

export const bonusAffirmations = [
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
];

export const softLifeTips = [
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
];

// Checklists détaillées
export const checklistsData = [
  {
    id: 'morning-routine',
    title: 'Morning Routine',
    icon: '☀️',
    description: 'Commence ta journée avec intention et douceur',
    items: [
      { text: 'Boire un grand verre d\'eau citronnée', checked: false },
      { text: 'Étirements doux pendant 5 minutes', checked: false },
      { text: 'Méditation ou respiration profonde (3-5 min)', checked: false },
      { text: 'Routine skincare complète', checked: false },
      { text: 'Petit-déjeuner nutritif et équilibré', checked: false },
      { text: 'Écrire 3 gratitudes du jour', checked: false },
      { text: 'Affirmation positive devant le miroir', checked: false },
      { text: 'Planifier les 3 priorités de la journée', checked: false }
    ]
  },
  {
    id: 'evening-routine',
    title: 'Evening Routine',
    icon: '🌙',
    description: 'Termine ta journée en beauté et prépare un sommeil réparateur',
    items: [
      { text: 'Ranger ton espace (15 min max)', checked: false },
      { text: 'Préparer l\'outfit du lendemain', checked: false },
      { text: 'Double nettoyage du visage', checked: false },
      { text: 'Routine skincare du soir complète', checked: false },
      { text: 'Journaling : noter 3 moments positifs', checked: false },
      { text: 'Lecture inspirante (10-15 min)', checked: false },
      { text: 'Tisane relaxante ou lait doré', checked: false },
      { text: 'Éteindre les écrans 30 min avant de dormir', checked: false },
      { text: 'Méditation ou musique douce', checked: false }
    ]
  },
  {
    id: 'weekly-selfcare',
    title: 'Weekly Self-Care',
    icon: '💆‍♀️',
    description: 'Prends soin de toi chaque semaine avec ces rituels',
    items: [
      { text: 'Masque visage hydratant ou purifiant', checked: false },
      { text: 'Gommage corps sous la douche', checked: false },
      { text: 'Soin des cheveux (masque ou huile)', checked: false },
      { text: 'Manucure/pédicure maison', checked: false },
      { text: 'Bain relaxant avec sels ou huiles', checked: false },
      { text: 'Session yoga ou stretching (30 min)', checked: false },
      { text: 'Faire le tri dans ton espace', checked: false },
      { text: 'Préparer tes repas healthy pour la semaine', checked: false },
      { text: 'Moment créatif (dessin, écriture, musique)', checked: false },
      { text: 'Appeler un proche qui te fait du bien', checked: false }
    ]
  },
  {
    id: 'monthly-goals',
    title: 'Monthly Goals',
    icon: '🎯',
    description: 'Fixe et atteins tes objectifs mensuels',
    items: [
      { text: 'Définir 3 objectifs principaux du mois', checked: false },
      { text: 'Créer un vision board pour le mois', checked: false },
      { text: 'Planifier les étapes concrètes', checked: false },
      { text: 'Bloquer du temps dans ton agenda', checked: false },
      { text: 'Identifier les obstacles potentiels', checked: false },
      { text: 'Célébrer les victoires de la semaine', checked: false },
      { text: 'Ajuster la stratégie si nécessaire', checked: false },
      { text: 'Faire un bilan de progression', checked: false },
      { text: 'Récompenser tes efforts', checked: false },
      { text: 'Préparer les intentions du mois suivant', checked: false }
    ]
  }
];

// Mini-Guide Soft Life en 5 étapes
export const softLifeGuide = {
  title: 'Mini-Guide Soft Life',
  subtitle: 'Crée une vie douce, alignée et épanouie en 5 étapes',
  steps: [
    {
      number: 1,
      title: 'Ralentis et Respire',
      icon: '🌸',
      description: 'La soft life commence par ralentir le rythme',
      content: 'Apprends à dire non aux choses qui ne te servent pas. Crée des moments de pause dans ta journée : 5 minutes de respiration profonde le matin, une pause thé sans écran l\'après-midi, 10 minutes de méditation le soir. La douceur commence quand tu arrêtes de courir.',
      tips: [
        'Bloque des "rendez-vous avec toi-même" dans ton agenda',
        'Pratique la respiration 4-7-8 (inspire 4s, retiens 7s, expire 8s)',
        'Crée une playlist "slow living" pour tes moments calmes'
      ]
    },
    {
      number: 2,
      title: 'Crée un Espace Sacré',
      icon: '🕯️',
      description: 'Ton environnement influence ton énergie',
      content: 'Transforme ton espace en sanctuaire. Désencombre, ajoute des bougies parfumées, des plantes, des textures douces. Choisis des couleurs apaisantes (beige, blanc cassé, rose poudré). Ton espace doit te faire sentir en paix dès que tu y entres.',
      tips: [
        'Règle des 3 : garde seulement ce qui est beau, utile ou significatif',
        'Ajoute des fleurs fraîches chaque semaine',
        'Investis dans de belles serviettes et draps doux',
        'Crée un coin lecture/méditation cosy'
      ]
    },
    {
      number: 3,
      title: 'Nourris Ton Corps avec Amour',
      icon: '🥗',
      description: 'La soft life passe par prendre soin de ton temple',
      content: 'Mange des aliments qui te font du bien, pas juste ce qui est rapide. Prépare tes repas avec intention. Hydrate-toi. Bouge ton corps avec douceur (yoga, marche, danse). Dors suffisamment. Ton corps mérite d\'être traité comme une reine.',
      tips: [
        'Prépare des "aesthetic meals" qui nourrissent corps et âme',
        'Bois de l\'eau dans un joli verre ou une bouteille cute',
        'Fais du sport une célébration, pas une punition',
        'Crée une routine skincare qui te fait plaisir'
      ]
    },
    {
      number: 4,
      title: 'Protège Ton Énergie',
      icon: '✨',
      description: 'Choisis consciemment ce que tu consommes',
      content: 'Fais le tri dans tes relations, ton feed Instagram, tes conversations. Entoure-toi de personnes qui t\'élèvent. Consomme du contenu inspirant. Limite les nouvelles négatives. Apprends à mettre des limites saines. Ton énergie est précieuse.',
      tips: [
        'Unfollow tout ce qui ne t\'inspire pas ou te fait sentir mal',
        'Crée des playlists qui élèvent ton mood',
        'Pratique le "non" sans culpabilité',
        'Entoure-toi de personnes qui célèbrent ta croissance'
      ]
    },
    {
      number: 5,
      title: 'Cultive la Gratitude et la Joie',
      icon: '💖',
      description: 'La soft life est un état d\'esprit',
      content: 'Célèbre les petites victoires. Écris tes gratitudes quotidiennes. Trouve de la beauté dans l\'ordinaire. Ris souvent. Sois douce avec toi-même. La vie douce n\'est pas parfaite, elle est intentionnelle et remplie de moments précieux.',
      tips: [
        'Tiens un journal de gratitude (3 choses par jour)',
        'Célèbre tes progrès, même les plus petits',
        'Crée des rituels qui te font sourire',
        'Pratique l\'auto-compassion comme tu le ferais avec ta meilleure amie'
      ]
    }
  ]
};

// Sections Bonus supplémentaires
export const bonusSections = [
  {
    id: 'petits-succes',
    title: 'La liste des petits succès',
    icon: '🏆',
    color: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    iconColor: 'text-green-600 dark:text-green-400',
    duration: '2 à 4 minutes',
    description: 'Célèbre tes victoires quotidiennes',
    content: {
      intro: 'Durée : 2 à 4 minutes',
      steps: [
        'Note trois petites réussites réalisées cette semaine (même minimes).',
        'Décris pourquoi ces réussites sont importantes pour toi.',
        'Relis cette liste chaque matin pour te rappeler que tu es capable.'
      ],
      why: 'L\'auto-valorisation aide à renforcer la confiance et à réduire le sentiment d\'échec.',
      examples: []
    }
  },
  {
    id: 'question-soir',
    title: 'La question du soir',
    icon: '🌙',
    color: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    duration: '30 secondes',
    description: 'Écoute ton intuition profonde',
    content: {
      intro: '« Si mon cœur savait déjà, quelle serait sa réponse ? »',
      subtitle: 'Rituel (30 secondes) :',
      steps: [
        'Pense à ton blocage.',
        'Pose la question.',
        'Note le premier mot qui vient.'
      ],
      why: 'Au réveil, on se sent plus clair, le cœur sait déjà.',
      examples: [
        { question: 'Dois-je quitter ce job ?', answer: 'Liberté' },
        { question: 'Cette amitié me convient ?', answer: 'Épuisée' }
      ]
    }
  },
  {
    id: 'limites-paix',
    title: '8 limites pour préserver ta paix intérieure',
    icon: '🛡️',
    color: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
    duration: 'À pratiquer au quotidien',
    description: 'Protège ton énergie et ton bien-être',
    content: {
      intro: 'Apprends à poser des limites saines pour préserver ta paix intérieure.',
      steps: [
        'Ne pas répondre aux messages après une certaine heure',
        'Couper court aux conversations trop négatives',
        'Refuser de prêter quelque chose si tu n\'es pas à l\'aise',
        'Dire non à une invitation sans culpabiliser',
        'Limiter le contact avec une personne envahissante',
        'Refuser de parler d\'un sujet sensible',
        'Demander du temps pour réfléchir avant de répondre',
        'Dire non à une faveur qui te met dans l\'inconfort'
      ],
      why: 'Poser des limites n\'est pas égoïste, c\'est essentiel pour ton bien-être mental et émotionnel.',
      examples: []
    }
  }
];
