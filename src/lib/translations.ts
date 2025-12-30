export type Language = 'fr' | 'en' | 'es';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    challenge: string;
    journal: string;
    trackers: string;
    routine: string;
    visionBoard: string;
    bonus: string;
    settings: string;
  };
  
  // Onboarding
  onboarding: {
    title: string;
    subtitle: string;
    description: string;
    startButton: string;
  };
  
  // Language Selection
  languageSelection: {
    title: string;
    subtitle: string;
    selectLanguage: string;
    continue: string;
  };
  
  // Dashboard
  dashboard: {
    welcome: string;
    progress: string;
    daysCompleted: string;
    currentDay: string;
    startDay: string;
    continueChallenge: string;
    quickActions: string;
    todayChallenge: string;
    viewDetails: string;
    week: string;
    day: string;
    today: string;
    steps: string;
    myBonus: string;
    affirmationsGuides: string;
  };
  
  // Challenge
  challenge: {
    title: string;
    day: string;
    completed: string;
    notCompleted: string;
    markComplete: string;
    markIncomplete: string;
    notes: string;
    addNotes: string;
    saveNotes: string;
    viewDay: string;
    congratulations: string;
    dayCompletedTitle: string;
    dayCompletedMessage: string;
    seeYouTomorrow: string;
    keepGoing: string;
    lockedDay: string;
    completeCurrentDay: string;
    week: string;
    yourDailyActions: string;
    beauty: string;
    mental: string;
    lifestyle: string;
    notesPlaceholder: string;
    completedButton: string;
    completeButton: string;
    progression: string;
    days: string;
  };
  
  // Journal
  journal: {
    title: string;
    newEntry: string;
    editEntry: string;
    deleteEntry: string;
    date: string;
    mood: string;
    feelings: string;
    glow: string;
    learned: string;
    freeContent: string;
    save: string;
    cancel: string;
    confirmDelete: string;
    entries: string;
    expressFreely: string;
    moodLabel: string;
    moodPlaceholder: string;
    glowLabel: string;
    glowPlaceholder: string;
    learnedLabel: string;
    learnedPlaceholder: string;
    freeContentLabel: string;
    freeContentPlaceholder: string;
    addEntry: string;
    history: string;
    noEntries: string;
    free: string;
  };
  
  // Trackers
  trackers: {
    title: string;
    today: string;
    waterGlasses: string;
    sleepHours: string;
    sleep: string;
    mood: string;
    activityMinutes: string;
    activity: string;
    skincare: string;
    habits: string;
    save: string;
    dailyHabits: string;
    meditation5min: string;
    journaling: string;
    gratitude: string;
    exercise: string;
    reading: string;
    noScrollBeforeSleep: string;
    hydration: string;
    glasses: string;
    hoursPlaceholder: string;
    minutes: string;
    activityPlaceholder: string;
    skincareCompleted: string;
    dailyRoutine: string;
  };
  
  // Routine
  routine: {
    title: string;
    customize: string;
    step: string;
    markComplete: string;
    completed: string;
    save: string;
    dailyRoutine: string;
    steps: string;
    completedToday: string;
    markWhenDone: string;
    completedMessage: string;
  };
  
  // Vision Board
  visionBoard: {
    title: string;
    addImage: string;
    addCaption: string;
    imageUrl: string;
    caption: string;
    add: string;
    delete: string;
    download: string;
    images: string;
    uploadImage: string;
    captionPlaceholder: string;
    myImages: string;
    noImages: string;
    addInspiringImages: string;
    dailyAffirmation: string;
  };
  
  // Bonus
  bonus: {
    title: string;
    affirmations: string;
    checklists: string;
    miniGuide: string;
    duration: string;
    completed: string;
    fiftyThingsAlone: string;
    completedItems: string;
    writtenAffirmations: string;
    affirmationsDescription: string;
    checklistsDescription: string;
    softLifeGuide: string;
    softLifeDescription: string;
    softLifeContent: string;
    steps: string;
    practicalTips: string;
    examples: string;
    result: string;
    whyItWorks: string;
  };
  
  // Settings
  settings: {
    title: string;
    theme: string;
    light: string;
    dark: string;
    notifications: string;
    enabled: string;
    disabled: string;
    language: string;
    selectLanguage: string;
    export: string;
    exportDescription: string;
    exportAllData: string;
  };
  
  // Common
  common: {
    close: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    yes: string;
    no: string;
    loading: string;
    error: string;
    success: string;
  };
}

export const translations: Record<Language, Translation> = {
  fr: {
    nav: {
      home: 'Accueil',
      challenge: 'Challenge',
      journal: 'Journal',
      trackers: 'Trackers',
      routine: 'Routine',
      visionBoard: 'Vision Board',
      bonus: 'Bonus',
      settings: 'Profil',
    },
    onboarding: {
      title: 'Glow Up Challenge',
      subtitle: '30 jours pour rayonner',
      description: 'Transforme ta vie en 30 jours avec des défis quotidiens, du journaling, et des outils de bien-être.',
      startButton: 'Commencer le Challenge',
    },
    languageSelection: {
      title: 'Bienvenue',
      subtitle: 'Choisissez votre langue',
      selectLanguage: 'Sélectionner la langue',
      continue: 'Continuer',
    },
    dashboard: {
      welcome: 'Bienvenue',
      progress: 'Progression',
      daysCompleted: 'jours complétés',
      currentDay: 'Jour actuel',
      startDay: 'Commencer le jour',
      continueChallenge: 'Continuer le challenge',
      quickActions: 'Actions rapides',
      todayChallenge: 'Challenge du jour',
      viewDetails: 'Voir les détails',
      week: 'Semaine',
      day: 'Jour',
      today: 'Aujourd\'hui',
      steps: 'étapes',
      myBonus: 'Mes Bonus',
      affirmationsGuides: 'Affirmations & Guides',
    },
    challenge: {
      title: 'Challenge 30 Jours',
      day: 'Jour',
      completed: 'Complété',
      notCompleted: 'Non complété',
      markComplete: 'Marquer comme complété',
      markIncomplete: 'Marquer comme non complété',
      notes: 'Notes',
      addNotes: 'Ajouter des notes',
      saveNotes: 'Sauvegarder les notes',
      viewDay: 'Voir le jour',
      congratulations: 'Félicitations ! 🎉',
      dayCompletedTitle: 'Jour complété avec succès !',
      dayCompletedMessage: 'Tu as terminé le défi d\'aujourd\'hui. Continue comme ça !',
      seeYouTomorrow: 'On se retrouve demain pour le prochain défi ! 💪',
      keepGoing: 'Continue ton Glow Up !',
      lockedDay: 'Jour verrouillé',
      completeCurrentDay: 'Complète d\'abord le jour actuel pour débloquer celui-ci.',
      week: 'Semaine',
      yourDailyActions: 'Tes Actions du Jour',
      beauty: 'Beauté',
      mental: 'Mental',
      lifestyle: 'Lifestyle',
      notesPlaceholder: 'Note tes pensées, tes ressentis...',
      completedButton: 'Jour Complété ✓',
      completeButton: 'J\'ai complété ce jour',
      progression: 'Progression',
      days: 'jours',
    },
    journal: {
      title: 'Mon Journal',
      newEntry: 'Nouvelle entrée',
      editEntry: 'Modifier l\'entrée',
      deleteEntry: 'Supprimer l\'entrée',
      date: 'Date',
      mood: 'Humeur',
      feelings: 'Ressentis',
      glow: 'Glow du jour',
      learned: 'Apprentissages',
      freeContent: 'Contenu libre',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      confirmDelete: 'Êtes-vous sûr de vouloir supprimer cette entrée ?',
      entries: 'entrées',
      expressFreely: 'Exprime-toi librement',
      moodLabel: 'Comment je me sens aujourd\'hui ?',
      moodPlaceholder: 'Ton humeur du moment...',
      glowLabel: 'Qu\'est-ce qui m\'a apporté du glow ?',
      glowPlaceholder: 'Les petits moments de joie...',
      learnedLabel: 'Qu\'est-ce que j\'ai appris ?',
      learnedPlaceholder: 'Tes découvertes et apprentissages...',
      freeContentLabel: 'Journal libre',
      freeContentPlaceholder: 'Écris tout ce qui te passe par la tête...',
      addEntry: 'Ajouter au Journal',
      history: 'Historique',
      noEntries: 'Aucune entrée pour le moment',
      free: 'Libre',
    },
    trackers: {
      title: 'Mes Trackers',
      today: 'Aujourd\'hui',
      waterGlasses: 'Verres d\'eau',
      sleepHours: 'Heures de sommeil',
      sleep: 'Sommeil',
      mood: 'Humeur',
      activityMinutes: 'Minutes d\'activité',
      activity: 'Activité',
      skincare: 'Routine skincare',
      habits: 'Habitudes',
      save: 'Sauvegarder',
      dailyHabits: 'Habitudes quotidiennes',
      meditation5min: 'Méditation 5 min',
      journaling: 'Journaling',
      gratitude: 'Gratitude',
      exercise: 'Exercice',
      reading: 'Lecture',
      noScrollBeforeSleep: 'Pas de scroll avant de dormir',
      hydration: 'Hydratation',
      glasses: 'verres',
      hoursPlaceholder: 'Nombre d\'heures',
      minutes: 'min',
      activityPlaceholder: 'Minutes d\'activité',
      skincareCompleted: 'Skincare complété',
      dailyRoutine: 'Routine du jour',
    },
    routine: {
      title: 'Ma Routine',
      customize: 'Personnaliser',
      step: 'Étape',
      markComplete: 'Marquer comme complété',
      completed: 'Complété aujourd\'hui',
      save: 'Sauvegarder',
      dailyRoutine: 'Routine Quotidienne',
      steps: 'étapes',
      completedToday: 'Routine complétée aujourd\'hui ?',
      markWhenDone: 'Marque quand tu as fini',
      completedMessage: 'Routine Glow Up complétée aujourd\'hui ! ✨',
    },
    visionBoard: {
      title: 'Vision Board',
      addImage: 'Ajouter une image',
      addCaption: 'Ajouter une légende',
      imageUrl: 'URL de l\'image',
      caption: 'Légende',
      add: 'Ajouter',
      delete: 'Supprimer',
      download: 'Télécharger',
      images: 'images',
      uploadImage: 'Upload une image qui t\'inspire',
      captionPlaceholder: 'Une description ou affirmation...',
      myImages: 'Mes Images',
      noImages: 'Aucune image pour le moment',
      addInspiringImages: 'Ajoute des images qui t\'inspirent',
      dailyAffirmation: 'Affirmation du jour',
    },
    bonus: {
      title: 'Mes Bonus',
      affirmations: 'Affirmations',
      checklists: 'Checklists',
      miniGuide: 'Mini-Guide',
      duration: 'Durée',
      completed: 'complétées',
      fiftyThingsAlone: '50 choses à faire seule',
      completedItems: 'complétées',
      writtenAffirmations: 'Affirmations Écrites',
      affirmationsDescription: 'Des affirmations puissantes pour ton quotidien',
      checklistsDescription: 'Des listes pour t\'organiser et te motiver',
      softLifeGuide: 'Mini-Guide Soft Life',
      softLifeDescription: 'Crée une vie douce et alignée',
      softLifeContent: '5 étapes pour une vie plus douce',
      steps: 'étapes',
      practicalTips: 'Conseils pratiques',
      examples: 'Exemples',
      result: 'Résultat',
      whyItWorks: 'Pourquoi ça marche',
    },
    settings: {
      title: 'Profil',
      theme: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      notifications: 'Notifications',
      enabled: 'Activées',
      disabled: 'Désactivées',
      language: 'Langue',
      selectLanguage: 'Choisir la langue',
      export: 'Exporter les données',
      exportDescription: 'Téléchargez toutes vos données au format JSON',
      exportAllData: 'Exporter toutes les données',
    },
    common: {
      close: 'Fermer',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      add: 'Ajouter',
      yes: 'Oui',
      no: 'Non',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
    },
  },
  en: {
    nav: {
      home: 'Home',
      challenge: 'Challenge',
      journal: 'Journal',
      trackers: 'Trackers',
      routine: 'Routine',
      visionBoard: 'Vision Board',
      bonus: 'Bonus',
      settings: 'Profile',
    },
    onboarding: {
      title: 'Glow Up Challenge',
      subtitle: '30 days to shine',
      description: 'Transform your life in 30 days with daily challenges, journaling, and wellness tools.',
      startButton: 'Start the Challenge',
    },
    languageSelection: {
      title: 'Welcome',
      subtitle: 'Choose your language',
      selectLanguage: 'Select language',
      continue: 'Continue',
    },
    dashboard: {
      welcome: 'Welcome',
      progress: 'Progress',
      daysCompleted: 'days completed',
      currentDay: 'Current day',
      startDay: 'Start day',
      continueChallenge: 'Continue challenge',
      quickActions: 'Quick actions',
      todayChallenge: 'Today\'s challenge',
      viewDetails: 'View details',
      week: 'Week',
      day: 'Day',
      today: 'Today',
      steps: 'steps',
      myBonus: 'My Bonus',
      affirmationsGuides: 'Affirmations & Guides',
    },
    challenge: {
      title: '30-Day Challenge',
      day: 'Day',
      completed: 'Completed',
      notCompleted: 'Not completed',
      markComplete: 'Mark as complete',
      markIncomplete: 'Mark as incomplete',
      notes: 'Notes',
      addNotes: 'Add notes',
      saveNotes: 'Save notes',
      viewDay: 'View day',
      congratulations: 'Congratulations! 🎉',
      dayCompletedTitle: 'Day completed successfully!',
      dayCompletedMessage: 'You\'ve finished today\'s challenge. Keep it up!',
      seeYouTomorrow: 'See you tomorrow for the next challenge! 💪',
      keepGoing: 'Keep up your Glow Up!',
      lockedDay: 'Locked day',
      completeCurrentDay: 'Complete the current day first to unlock this one.',
      week: 'Week',
      yourDailyActions: 'Your Daily Actions',
      beauty: 'Beauty',
      mental: 'Mental',
      lifestyle: 'Lifestyle',
      notesPlaceholder: 'Write your thoughts, feelings...',
      completedButton: 'Day Completed ✓',
      completeButton: 'I completed this day',
      progression: 'Progress',
      days: 'days',
    },
    journal: {
      title: 'My Journal',
      newEntry: 'New entry',
      editEntry: 'Edit entry',
      deleteEntry: 'Delete entry',
      date: 'Date',
      mood: 'Mood',
      feelings: 'Feelings',
      glow: 'Today\'s glow',
      learned: 'Learnings',
      freeContent: 'Free content',
      save: 'Save',
      cancel: 'Cancel',
      confirmDelete: 'Are you sure you want to delete this entry?',
      entries: 'entries',
      expressFreely: 'Express yourself freely',
      moodLabel: 'How do I feel today?',
      moodPlaceholder: 'Your current mood...',
      glowLabel: 'What brought me glow today?',
      glowPlaceholder: 'Small moments of joy...',
      learnedLabel: 'What did I learn?',
      learnedPlaceholder: 'Your discoveries and learnings...',
      freeContentLabel: 'Free journal',
      freeContentPlaceholder: 'Write whatever comes to mind...',
      addEntry: 'Add to Journal',
      history: 'History',
      noEntries: 'No entries yet',
      free: 'Free',
    },
    trackers: {
      title: 'My Trackers',
      today: 'Today',
      waterGlasses: 'Water glasses',
      sleepHours: 'Sleep hours',
      sleep: 'Sleep',
      mood: 'Mood',
      activityMinutes: 'Activity minutes',
      activity: 'Activity',
      skincare: 'Skincare routine',
      habits: 'Habits',
      save: 'Save',
      dailyHabits: 'Daily Habits',
      meditation5min: '5 min Meditation',
      journaling: 'Journaling',
      gratitude: 'Gratitude',
      exercise: 'Exercise',
      reading: 'Reading',
      noScrollBeforeSleep: 'No scrolling before bed',
      hydration: 'Hydration',
      glasses: 'glasses',
      hoursPlaceholder: 'Number of hours',
      minutes: 'min',
      activityPlaceholder: 'Activity minutes',
      skincareCompleted: 'Skincare completed',
      dailyRoutine: 'Daily routine',
    },
    routine: {
      title: 'My Routine',
      customize: 'Customize',
      step: 'Step',
      markComplete: 'Mark as complete',
      completed: 'Completed today',
      save: 'Save',
      dailyRoutine: 'Daily Routine',
      steps: 'steps',
      completedToday: 'Routine completed today?',
      markWhenDone: 'Mark when done',
      completedMessage: 'Glow Up Routine completed today! ✨',
    },
    visionBoard: {
      title: 'Vision Board',
      addImage: 'Add image',
      addCaption: 'Add caption',
      imageUrl: 'Image URL',
      caption: 'Caption',
      add: 'Add',
      delete: 'Delete',
      download: 'Download',
      images: 'images',
      uploadImage: 'Upload an image that inspires you',
      captionPlaceholder: 'A description or affirmation...',
      myImages: 'My Images',
      noImages: 'No images yet',
      addInspiringImages: 'Add images that inspire you',
      dailyAffirmation: 'Daily affirmation',
    },
    bonus: {
      title: 'My Bonuses',
      affirmations: 'Affirmations',
      checklists: 'Checklists',
      miniGuide: 'Mini-Guide',
      duration: 'Duration',
      completed: 'completed',
      fiftyThingsAlone: '50 things to do alone',
      completedItems: 'completed',
      writtenAffirmations: 'Written Affirmations',
      affirmationsDescription: 'Powerful affirmations for your daily life',
      checklistsDescription: 'Lists to organize and motivate you',
      softLifeGuide: 'Soft Life Mini-Guide',
      softLifeDescription: 'Create a gentle and aligned life',
      softLifeContent: '5 steps for a softer life',
      steps: 'steps',
      practicalTips: 'Practical Tips',
      examples: 'Examples',
      result: 'Result',
      whyItWorks: 'Why it works',
    },
    settings: {
      title: 'Profile',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      notifications: 'Notifications',
      enabled: 'Enabled',
      disabled: 'Disabled',
      language: 'Language',
      selectLanguage: 'Choose language',
      export: 'Export data',
      exportDescription: 'Download all your data in JSON format',
      exportAllData: 'Export all data',
    },
    common: {
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      yes: 'Yes',
      no: 'No',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      challenge: 'Desafío',
      journal: 'Diario',
      trackers: 'Rastreadores',
      routine: 'Rutina',
      visionBoard: 'Tablero de Visión',
      bonus: 'Bonus',
      settings: 'Perfil',
    },
    onboarding: {
      title: 'Desafío Glow Up',
      subtitle: '30 días para brillar',
      description: 'Transforma tu vida en 30 días con desafíos diarios, diario personal y herramientas de bienestar.',
      startButton: 'Comenzar el Desafío',
    },
    languageSelection: {
      title: 'Bienvenida',
      subtitle: 'Elige tu idioma',
      selectLanguage: 'Seleccionar idioma',
      continue: 'Continuar',
    },
    dashboard: {
      welcome: 'Bienvenida',
      progress: 'Progreso',
      daysCompleted: 'días completados',
      currentDay: 'Día actual',
      startDay: 'Comenzar día',
      continueChallenge: 'Continuar desafío',
      quickActions: 'Acciones rápidas',
      todayChallenge: 'Desafío de hoy',
      viewDetails: 'Ver detalles',
      week: 'Semana',
      day: 'Día',
      today: 'Hoy',
      steps: 'pasos',
      myBonus: 'Mis Bonus',
      affirmationsGuides: 'Afirmaciones y Guías',
    },
    challenge: {
      title: 'Desafío de 30 Días',
      day: 'Día',
      completed: 'Completado',
      notCompleted: 'No completado',
      markComplete: 'Marcar como completado',
      markIncomplete: 'Marcar como no completado',
      notes: 'Notas',
      addNotes: 'Agregar notas',
      saveNotes: 'Guardar notas',
      viewDay: 'Ver día',
      congratulations: '¡Felicitaciones! 🎉',
      dayCompletedTitle: '¡Día completado con éxito!',
      dayCompletedMessage: 'Has terminado el desafío de hoy. ¡Sigue así!',
      seeYouTomorrow: '¡Nos vemos mañana para el próximo desafío! 💪',
      keepGoing: '¡Continúa tu Glow Up!',
      lockedDay: 'Día bloqueado',
      completeCurrentDay: 'Completa primero el día actual para desbloquear este.',
      week: 'Semana',
      yourDailyActions: 'Tus Acciones del Día',
      beauty: 'Belleza',
      mental: 'Mental',
      lifestyle: 'Estilo de vida',
      notesPlaceholder: 'Escribe tus pensamientos, sentimientos...',
      completedButton: 'Día Completado ✓',
      completeButton: 'He completado este día',
      progression: 'Progreso',
      days: 'días',
    },
    journal: {
      title: 'Mi Diario',
      newEntry: 'Nueva entrada',
      editEntry: 'Editar entrada',
      deleteEntry: 'Eliminar entrada',
      date: 'Fecha',
      mood: 'Estado de ánimo',
      feelings: 'Sentimientos',
      glow: 'Brillo del día',
      learned: 'Aprendizajes',
      freeContent: 'Contenido libre',
      save: 'Guardar',
      cancel: 'Cancelar',
      confirmDelete: '¿Estás segura de que quieres eliminar esta entrada?',
      entries: 'entradas',
      expressFreely: 'Exprésate libremente',
      moodLabel: '¿Cómo me siento hoy?',
      moodPlaceholder: 'Tu estado de ánimo actual...',
      glowLabel: '¿Qué me trajo brillo hoy?',
      glowPlaceholder: 'Pequeños momentos de alegría...',
      learnedLabel: '¿Qué aprendí?',
      learnedPlaceholder: 'Tus descubrimientos y aprendizajes...',
      freeContentLabel: 'Diario libre',
      freeContentPlaceholder: 'Escribe lo que se te ocurra...',
      addEntry: 'Agregar al Diario',
      history: 'Historial',
      noEntries: 'Sin entradas aún',
      free: 'Libre',
    },
    trackers: {
      title: 'Mis Rastreadores',
      today: 'Hoy',
      waterGlasses: 'Vasos de agua',
      sleepHours: 'Horas de sueño',
      sleep: 'Sueño',
      mood: 'Estado de ánimo',
      activityMinutes: 'Minutos de actividad',
      activity: 'Actividad',
      skincare: 'Rutina de cuidado de la piel',
      habits: 'Hábitos',
      save: 'Guardar',
      dailyHabits: 'Hábitos diarios',
      meditation5min: 'Meditación 5 min',
      journaling: 'Diario personal',
      gratitude: 'Gratitud',
      exercise: 'Ejercicio',
      reading: 'Lectura',
      noScrollBeforeSleep: 'No desplazarse antes de dormir',
      hydration: 'Hidratación',
      glasses: 'vasos',
      hoursPlaceholder: 'Número de horas',
      minutes: 'min',
      activityPlaceholder: 'Minutos de actividad',
      skincareCompleted: 'Skincare completado',
      dailyRoutine: 'Rutina diaria',
    },
    routine: {
      title: 'Mi Rutina',
      customize: 'Personalizar',
      step: 'Paso',
      markComplete: 'Marcar como completado',
      completed: 'Completado hoy',
      save: 'Guardar',
      dailyRoutine: 'Rutina diaria',
      steps: 'pasos',
      completedToday: '¿Rutina completada hoy?',
      markWhenDone: 'Marcar cuando termines',
      completedMessage: '¡Rutina Glow Up completada hoy! ✨',
    },
    visionBoard: {
      title: 'Tablero de Visión',
      addImage: 'Agregar imagen',
      addCaption: 'Agregar leyenda',
      imageUrl: 'URL de la imagen',
      caption: 'Leyenda',
      add: 'Agregar',
      delete: 'Eliminar',
      download: 'Descargar',
      images: 'imágenes',
      uploadImage: 'Subir una imagen que te inspire',
      captionPlaceholder: 'Una descripción o afirmación...',
      myImages: 'Mis Imágenes',
      noImages: 'Sin imágenes aún',
      addInspiringImages: 'Agrega imágenes que te inspiren',
      dailyAffirmation: 'Afirmación del día',
    },
    bonus: {
      title: 'Mis Bonus',
      affirmations: 'Afirmaciones',
      checklists: 'Listas de verificación',
      miniGuide: 'Mini-Guía',
      duration: 'Duración',
      completed: 'completadas',
      fiftyThingsAlone: '50 cosas para hacer sola',
      completedItems: 'completadas',
      writtenAffirmations: 'Afirmaciones Escritas',
      affirmationsDescription: 'Afirmaciones poderosas para tu vida diaria',
      checklistsDescription: 'Listas para organizarte y motivarte',
      softLifeGuide: 'Mini-Guía de Vida Suave',
      softLifeDescription: 'Crea una vida suave y alineada',
      softLifeContent: '5 pasos para una vida más suave',
      steps: 'pasos',
      practicalTips: 'Consejos prácticos',
      examples: 'Ejemplos',
      result: 'Resultado',
      whyItWorks: 'Por qué funciona',
    },
    settings: {
      title: 'Perfil',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
      notifications: 'Notificaciones',
      enabled: 'Activadas',
      disabled: 'Desactivadas',
      language: 'Idioma',
      selectLanguage: 'Elegir idioma',
      export: 'Exportar datos',
      exportDescription: 'Descarga todos tus datos en formato JSON',
      exportAllData: 'Exportar todos los datos',
    },
    common: {
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      add: 'Agregar',
      yes: 'Sí',
      no: 'No',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
    },
  },
};


