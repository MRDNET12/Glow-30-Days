export interface ChallengeDayTranslations {
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

export interface BonusSectionTranslations {
  title: string;
  description: string;
  duration: string;
  content: {
    intro?: string;
    subtitle?: string;
    steps: string[];
    why: string;
    examples?: Array<{ question: string; answer: string }>;
  };
}

export interface ChecklistTranslations {
  title: string;
  description: string;
  items: Array<{ text: string; checked: boolean }>;
}

export interface SoftLifeGuideTranslations {
  title: string;
  subtitle: string;
  steps: Array<{
    title: string;
    description: string;
    content: string;
    tips: string[];
  }>;
}

export const challengeDaysTranslations: Record<'en' | 'es', ChallengeDayTranslations[]> = {
  en: [
    // Week 1
    {
      weekTitle: "Reset & Life Cleanse",
      weekObjective: "Make space, lighten your mind, start on a good foundation.",
      title: "Grand Reset",
      content: "Today, you press \"reset\". Take a few minutes to breathe, ground yourself, and set the intention to choose yourself.",
      affirmation: "I am becoming a lighter and more aligned version of myself.",
      actions: {
        beauty: "Do a double cleanse of your face and hydrate deeply.",
        mental: "Write down everything weighing on you right now. Without filter.",
        lifestyle: "Tidy up your main space (desk, bed, living room)."
      }
    },
    {
      weekTitle: "Reset & Life Cleanse",
      weekObjective: "Make space, lighten your mind, start on a good foundation.",
      title: "Inner & Outer Hydration",
      content: "Glow starts from within.",
      affirmation: "I nourish my body, mind, and energy.",
      actions: {
        beauty: "Apply a moisturizer or hydrating mask.",
        mental: "Take 5 minutes to breathe deeply.",
        lifestyle: "Drink at least 6 glasses of water today and start your hydration tracker."
      }
    },
    {
      weekTitle: "Reset & Life Cleanse",
      weekObjective: "Make space, lighten your mind, start on a good foundation.",
      title: "Digital Detox",
      content: "What you consume influences your mood.",
      affirmation: "I choose what nourishes my peace.",
      actions: {
        beauty: "Do a face mask or quick treatment.",
        mental: "Create a \"good vibes only\" playlist.",
        lifestyle: "Delete apps, photos, and accounts that bring you nothing."
      }
    },
    {
      weekTitle: "Reset & Life Cleanse",
      weekObjective: "Make space, lighten your mind, start on a good foundation.",
      title: "Quick & Gentle Organization",
      content: "An organized life creates a peaceful mind.",
      affirmation: "I am becoming an aligned, organized, and serene woman.",
      actions: {
        beauty: "Do a minimalist routine (cleansing + hydration).",
        mental: "Write 10 confidence affirmations.",
        lifestyle: "Plan your week (3 priorities max)."
      }
    },
    {
      weekTitle: "Reset & Life Cleanse",
      weekObjective: "Make space, lighten your mind, start on a good foundation.",
      title: "Body & Energy",
      content: "Body energy influences your glow.",
      affirmation: "I take care of my body with gentleness.",
      actions: {
        beauty: "Gently exfoliate your body and hydrate.",
        mental: "Practice 1 minute of deep breathing.",
        lifestyle: "Walk for 10 to 15 minutes."
      }
    },
    {
      weekTitle: "Reset & Life Cleanse",
      weekObjective: "Make space, lighten your mind, start on a good foundation.",
      title: "Emotional Detox",
      content: "Time to let go.",
      affirmation: "I free myself from what no longer serves me.",
      actions: {
        beauty: "Do a relaxing self-care routine.",
        mental: "Write a letter (that you won't read) about what you need to release.",
        lifestyle: "Declutter a drawer or small area."
      }
    },
    {
      weekTitle: "Reset & Life Cleanse",
      weekObjective: "Make space, lighten your mind, start on a good foundation.",
      title: "Week 1 Review",
      content: "How do you feel? What has changed? What small step made you feel good?",
      affirmation: "I am proud to take care of myself.",
      actions: {
        beauty: "Do a treatment that makes you happy.",
        mental: "Note your successes of the week.",
        lifestyle: "Prepare an intention for the coming week."
      }
    },
    // Week 2
    {
      weekTitle: "Beauty & Self-care",
      weekObjective: "Establish a simple, effective, and feminine routine.",
      title: "Stabilize Your Skincare Routine",
      content: "Today, we define a simple and effective skincare routine.",
      affirmation: "I glow naturally.",
      actions: {
        beauty: "Define a simple morning/evening routine (3 steps).",
        mental: "Breathe and center yourself for 2 minutes.",
        lifestyle: "Note your favorite products."
      }
    },
    {
      weekTitle: "Beauty & Self-care",
      weekObjective: "Establish a simple, effective, and feminine routine.",
      title: "Deep Hair Care",
      content: "Your hair also deserves deep care.",
      affirmation: "I treat myself like a queen.",
      actions: {
        beauty: "Do a nourishing mask or oil bath.",
        mental: "Take a moment without screens.",
        lifestyle: "Organize your hair products / accessories."
      }
    },
    {
      weekTitle: "Beauty & Self-care",
      weekObjective: "Establish a simple, effective, and feminine routine.",
      title: "Minimalist \"Femme Fatale\" Routine",
      content: "Minimalist makeup can be very impactful.",
      affirmation: "I am elegant and confident.",
      actions: {
        beauty: "Light but impactful makeup (gloss, mascara, glow).",
        mental: "Adopt a confident posture.",
        lifestyle: "Choose an outfit where you feel beautiful."
      }
    },
    {
      weekTitle: "Beauty & Self-care",
      weekObjective: "Establish a simple, effective, and feminine routine.",
      title: "Fresh Look in 5 Minutes",
      content: "A quick look doesn't mean neglected.",
      affirmation: "I deserve to feel beautiful every day.",
      actions: {
        beauty: "Fresh complexion, simply styled hair.",
        mental: "Write 3 things you like about yourself.",
        lifestyle: "Refresh your bag / organize the inside."
      }
    },
    {
      weekTitle: "Beauty & Self-care",
      weekObjective: "Establish a simple, effective, and feminine routine.",
      title: "Posture & Elegance",
      content: "Elegance starts with posture.",
      affirmation: "I walk with confidence and grace.",
      actions: {
        beauty: "A quick treatment.",
        mental: "Breathe with an open chest.",
        lifestyle: "Practice 3 minutes of elegant posture (straight back, open shoulders)."
      }
    },
    {
      weekTitle: "Beauty & Self-care",
      weekObjective: "Establish a simple, effective, and feminine routine.",
      title: "Hands & Feet Self-care",
      content: "Details make the difference.",
      affirmation: "I take care of the details that make me feel good.",
      actions: {
        beauty: "Cut, file, hydrate, polish if you want.",
        mental: "Slow down your day for 10 minutes.",
        lifestyle: "Create a weekly self-care ritual."
      }
    },
    {
      weekTitle: "Beauty & Self-care",
      weekObjective: "Establish a simple, effective, and feminine routine.",
      title: "Week 2 Review",
      content: "What changes do you see in terms of beauty? Which ritual makes you feel the best?",
      affirmation: "I invest in my well-being.",
      actions: {
        beauty: "Do your favorite skincare ritual.",
        mental: "Note the changes you observe.",
        lifestyle: "Prepare your products for the coming week."
      }
    },
    // Week 3
    {
      weekTitle: "Mindset & Confidence",
      weekObjective: "Develop a strong, gentle, and magnetic mindset.",
      title: "Feminine Vision Board",
      content: "Visualize the woman you want to become.",
      affirmation: "I am becoming the woman I visualize.",
      actions: {
        beauty: "A quick treatment.",
        mental: "Create a vision board (Canva or paper).",
        lifestyle: "Display it somewhere."
      }
    },
    {
      weekTitle: "Mindset & Confidence",
      weekObjective: "Develop a strong, gentle, and magnetic mindset.",
      title: "Powerful Affirmations",
      content: "Words have creative power.",
      affirmation: "I am capable, worthy, and confident.",
      actions: {
        beauty: "Your usual routine.",
        mental: "Write 20 powerful affirmations.",
        lifestyle: "Read them out loud."
      }
    },
    {
      weekTitle: "Mindset & Confidence",
      weekObjective: "Develop a strong, gentle, and magnetic mindset.",
      title: "\"Confident Woman\" Journal",
      content: "What would the confident version of you do?",
      affirmation: "I choose confidence.",
      actions: {
        beauty: "Relaxing treatment.",
        mental: "Write what the confident version of you would do.",
        lifestyle: "Apply a micro-action immediately."
      }
    },
    {
      weekTitle: "Mindset & Confidence",
      weekObjective: "Develop a strong, gentle, and magnetic mindset.",
      title: "Stop Negative Thoughts",
      content: "Transform your negative thoughts into positive ones.",
      affirmation: "My thoughts create my reality, I choose the positive.",
      actions: {
        beauty: "Quick routine.",
        mental: "Note your negative thoughts and transform them.",
        lifestyle: "Do a mini grounding ritual (candle, tea...)."
      }
    },
    {
      weekTitle: "Mindset & Confidence",
      weekObjective: "Develop a strong, gentle, and magnetic mindset.",
      title: "Gentle Morning Routine",
      content: "Start the day with gentleness and intention.",
      affirmation: "I wake up with gentleness and intention.",
      actions: {
        beauty: "Refresh your face.",
        mental: "Choose 3 things that give you desire for the day.",
        lifestyle: "Organize your morning at your own pace."
      }
    },
    {
      weekTitle: "Mindset & Confidence",
      weekObjective: "Develop a strong, gentle, and magnetic mindset.",
      title: "Daily Little Pleasures",
      content: "Happiness is in the little things.",
      affirmation: "I deserve to enjoy every moment.",
      actions: {
        beauty: "A simple beauty gesture.",
        mental: "List 10 easy little pleasures.",
        lifestyle: "Do at least 2 today."
      }
    },
    {
      weekTitle: "Mindset & Confidence",
      weekObjective: "Develop a strong, gentle, and magnetic mindset.",
      title: "Week 3 Review",
      content: "How is your mindset evolving? What thought carried you this week?",
      affirmation: "I am becoming mentally stronger every day.",
      actions: {
        beauty: "Do a treatment that makes you happy.",
        mental: "Note your mental progress.",
        lifestyle: "Prepare an intention for the coming week."
      }
    },
    // Week 4
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Glow Evening Routine",
      content: "Sacred evenings prepare beautiful mornings.",
      affirmation: "My evenings are a sacred moment for me.",
      actions: {
        beauty: "Deep makeup removal + hydration.",
        mental: "Gratitude for 3 things.",
        lifestyle: "Prepare your day for tomorrow."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Simple Meal Prep",
      content: "Simple and healthy eating nourishes body and mind.",
      affirmation: "I nourish my body with love and simplicity.",
      actions: {
        beauty: "Express treatment.",
        mental: "Simplify your meals.",
        lifestyle: "Prepare 1 to 2 simple recipes for the week."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Glow Up Wardrobe",
      content: "Wear clothes that make you feel good.",
      affirmation: "I deserve to feel good in what I wear.",
      actions: {
        beauty: "Perfume + clean look.",
        mental: "Write how you want to feel in your clothes.",
        lifestyle: "Do a mini sort and keep pieces that enhance you."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Organized Beauty Space",
      content: "An organized space creates fluid energy.",
      affirmation: "I create a space that supports my femininity.",
      actions: {
        beauty: "Organize your products.",
        mental: "Eliminate what you don't use.",
        lifestyle: "Create a pleasant beauty corner."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Maximum Hydration",
      content: "Hydration is the key to natural glow.",
      affirmation: "I take care of myself with consistency.",
      actions: {
        beauty: "Hydrating mask.",
        mental: "Check your energy level.",
        lifestyle: "Fill your hydration tracker."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Soft Life Day",
      content: "Soft life is choosing gentleness.",
      affirmation: "I deserve calm, gentleness, and beauty.",
      actions: {
        beauty: "A gesture that makes you feel good.",
        mental: "Slow down your pace.",
        lifestyle: "Do 3 soothing activities (candle, soft music, bath...)."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Social Glow Up",
      content: "Surround yourself with positive people.",
      affirmation: "I cultivate beautiful and enriching relationships.",
      actions: {
        beauty: "A simple routine.",
        mental: "Contact a person who makes you feel good.",
        lifestyle: "Plan an outing or friendly moment."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Prepare for Next Month",
      content: "Continue your journey toward the best version of yourself.",
      affirmation: "I prepare for the continuation of my evolution.",
      actions: {
        beauty: "Quick treatment.",
        mental: "Set 3 goals for the coming month.",
        lifestyle: "Plan your routines."
      }
    },
    {
      weekTitle: "Lifestyle, Habits & Feminine Energy",
      weekObjective: "Create an aligned, beautiful, and sustainable lifestyle.",
      title: "Final Review & Celebration",
      content: "You made it ✨ How do you feel? What changed the most? What is your most beautiful progress?",
      affirmation: "I am proud of myself. This is just the beginning.",
      actions: {
        beauty: "Do a special treatment to celebrate.",
        mental: "Note your accomplishments of the month.",
        lifestyle: "Celebrate your progress!"
      }
    }
  ],
  es: [
    // Semana 1
    {
      weekTitle: "Reinicio y Limpieza de Vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar con buenas bases.",
      title: "Gran Reinicio",
      content: "Hoy, presionas \"reiniciar\". Toma unos minutos para respirar, anclarte y establecer la intención de elegirte a ti misma.",
      affirmation: "Me convierto en una versión más ligera y alineada de mí misma.",
      actions: {
        beauty: "Haz una doble limpieza del rostro e hidrata profundamente.",
        mental: "Escribe todo lo que te pesa en este momento. Sin filtro.",
        lifestyle: "Ordena tu espacio principal (escritorio, cama, sala)."
      }
    },
    {
      weekTitle: "Reinicio y Limpieza de Vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar con buenas bases.",
      title: "Hidratación Interior y Exterior",
      content: "El brillo comienza desde adentro.",
      affirmation: "Nutro mi cuerpo, mente y energía.",
      actions: {
        beauty: "Aplica una crema hidratante o una mascarilla hidratante.",
        mental: "Toma 5 minutos para respirar profundamente.",
        lifestyle: "Bebe al menos 6 vasos de agua hoy y comienza tu rastreador de hidratación."
      }
    },
    {
      weekTitle: "Reinicio y Limpieza de Vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar con buenas bases.",
      title: "Desintoxicación Digital",
      content: "Lo que consumes influye en tu estado de ánimo.",
      affirmation: "Elijo lo que nutre mi paz.",
      actions: {
        beauty: "Haz una mascarilla facial o un tratamiento rápido.",
        mental: "Crea una lista de reproducción \"solo buenas vibras\".",
        lifestyle: "Elimina las aplicaciones, fotos y cuentas que no te aportan nada."
      }
    },
    {
      weekTitle: "Reinicio y Limpieza de Vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar con buenas bases.",
      title: "Organización Rápida y Suave",
      content: "Una vida organizada crea una mente tranquila.",
      affirmation: "Me convierto en una mujer alineada, organizada y serena.",
      actions: {
        beauty: "Haz una rutina minimalista (limpieza + hidratación).",
        mental: "Escribe 10 afirmaciones de confianza.",
        lifestyle: "Planifica tu semana (máximo 3 prioridades)."
      }
    },
    {
      weekTitle: "Reinicio y Limpieza de Vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar con buenas bases.",
      title: "Cuerpo y Energía",
      content: "La energía del cuerpo influye en tu brillo.",
      affirmation: "Cuido mi cuerpo con suavidad.",
      actions: {
        beauty: "Exfolia ligeramente tu cuerpo e hidrata.",
        mental: "Practica 1 minuto de respiración profunda.",
        lifestyle: "Camina de 10 a 15 minutos."
      }
    },
    {
      weekTitle: "Reinicio y Limpieza de Vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar con buenas bases.",
      title: "Desintoxicación Emocional",
      content: "Tiempo de dejar ir.",
      affirmation: "Me libero de lo que ya no me sirve.",
      actions: {
        beauty: "Haz una rutina de autocuidado relajante.",
        mental: "Escribe una carta (que no leerás) sobre lo que necesitas liberar.",
        lifestyle: "Despeja un cajón o una pequeña zona."
      }
    },
    {
      weekTitle: "Reinicio y Limpieza de Vida",
      weekObjective: "Hacer espacio, aligerar la mente, empezar con buenas bases.",
      title: "Balance Semana 1",
      content: "¿Cómo te sientes? ¿Qué ha cambiado? ¿Qué pequeño paso te hizo sentir bien?",
      affirmation: "Estoy orgullosa de cuidarme a mí misma.",
      actions: {
        beauty: "Haz un tratamiento que te haga feliz.",
        mental: "Nota tus éxitos de la semana.",
        lifestyle: "Prepara una intención para la semana que viene."
      }
    },
    // Semana 2
    {
      weekTitle: "Belleza y Autocuidado",
      weekObjective: "Establecer una rutina simple, efectiva y femenina.",
      title: "Estabiliza Tu Rutina de Skincare",
      content: "Hoy, definimos una rutina de skincare simple y efectiva.",
      affirmation: "Brillo naturalmente.",
      actions: {
        beauty: "Define una rutina simple mañana/noche (3 pasos).",
        mental: "Respira y céntrate durante 2 minutos.",
        lifestyle: "Nota tus productos favoritos."
      }
    },
    {
      weekTitle: "Belleza y Autocuidado",
      weekObjective: "Establecer una rutina simple, efectiva y femenina.",
      title: "Cuidado Profundo del Cabello",
      content: "Tu cabello también merece cuidados profundos.",
      affirmation: "Me trato como una reina.",
      actions: {
        beauty: "Haz una mascarilla nutritiva o un baño de aceite.",
        mental: "Toma un momento sin pantallas.",
        lifestyle: "Ordena tus productos de cabello / accesorios."
      }
    },
    {
      weekTitle: "Belleza y Autocuidado",
      weekObjective: "Establecer una rutina simple, efectiva y femenina.",
      title: "Rutina Minimalista \"Femme Fatale\"",
      content: "El maquillaje minimalista puede ser muy impactante.",
      affirmation: "Soy elegante y confiada.",
      actions: {
        beauty: "Maquillaje ligero pero impactante (brillo labial, máscara de pestañas, brillo).",
        mental: "Adopta una postura confiada.",
        lifestyle: "Elige un atuendo donde te sientas hermosa."
      }
    },
    {
      weekTitle: "Belleza y Autocuidado",
      weekObjective: "Establecer una rutina simple, efectiva y femenina.",
      title: "Look Fresco en 5 Minutos",
      content: "Un look rápido no significa descuidado.",
      affirmation: "Merezco sentirme hermosa todos los días.",
      actions: {
        beauty: "Tez fresca, cabello peinado simplemente.",
        mental: "Escribe 3 cosas que te gustan de ti misma.",
        lifestyle: "Refresca tu bolso / organiza el interior."
      }
    },
    {
      weekTitle: "Belleza y Autocuidado",
      weekObjective: "Establecer una rutina simple, efectiva y femenina.",
      title: "Postura y Elegancia",
      content: "La elegancia comienza con la postura.",
      affirmation: "Camino con confianza y gracia.",
      actions: {
        beauty: "Un tratamiento rápido.",
        mental: "Respira con el pecho abierto.",
        lifestyle: "Practica 3 minutos de postura elegante (espalda recta, hombros abiertos)."
      }
    },
    {
      weekTitle: "Belleza y Autocuidado",
      weekObjective: "Establecer una rutina simple, efectiva y femenina.",
      title: "Autocuidado de Manos y Pies",
      content: "Los detalles hacen la diferencia.",
      affirmation: "Cuido los detalles que me hacen sentir bien.",
      actions: {
        beauty: "Corta, lima, hidrata, esmalta si quieres.",
        mental: "Ralentiza tu día durante 10 minutos.",
        lifestyle: "Crea un ritual semanal de autocuidado."
      }
    },
    {
      weekTitle: "Belleza y Autocuidado",
      weekObjective: "Establecer una rutina simple, efectiva y femenina.",
      title: "Balance Semana 2",
      content: "¿Qué cambios ves en términos de belleza? ¿Qué ritual te hace sentir mejor?",
      affirmation: "Invierto en mi bienestar.",
      actions: {
        beauty: "Haz tu ritual de skincare favorito.",
        mental: "Nota los cambios que observas.",
        lifestyle: "Prepara tus productos para la semana que viene."
      }
    },
    // Semana 3
    {
      weekTitle: "Mentalidad y Confianza",
      weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
      title: "Tablero de Visión Femenino",
      content: "Visualiza la mujer que quieres llegar a ser.",
      affirmation: "Me convierto en la mujer que visualizo.",
      actions: {
        beauty: "Un tratamiento rápido.",
        mental: "Crea un tablero de visión (Canva o papel).",
        lifestyle: "Muestralo en algún lugar."
      }
    },
    {
      weekTitle: "Mentalidad y Confianza",
      weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
      title: "Afirmaciones Poderosas",
      content: "Las palabras tienen poder creativo.",
      affirmation: "Soy capaz, digna y confiada.",
      actions: {
        beauty: "Tu rutina habitual.",
        mental: "Escribe 20 afirmaciones poderosas.",
        lifestyle: "Léelas en voz alta."
      }
    },
    {
      weekTitle: "Mentalidad y Confianza",
      weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
      title: "Diario \"Mujer Confiada\"",
      content: "¿Qué haría la versión confiada de ti?",
      affirmation: "Elijo la confianza.",
      actions: {
        beauty: "Tratamiento relajante.",
        mental: "Escribe lo que haría la versión confiada de ti.",
        lifestyle: "Aplica una micro-acción inmediatamente."
      }
    },
    {
      weekTitle: "Mentalidad y Confianza",
      weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
      title: "Detén los Pensamientos Negativos",
      content: "Transforma tus pensamientos negativos en positivos.",
      affirmation: "Mis pensamientos crean mi realidad, elijo lo positivo.",
      actions: {
        beauty: "Rutina rápida.",
        mental: "Nota tus pensamientos negativos y transfórmalos.",
        lifestyle: "Haz un mini ritual de anclaje (vela, té...)."
      }
    },
    {
      weekTitle: "Mentalidad y Confianza",
      weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
      title: "Rutina Matutina Suave",
      content: "Comienza el día con suavidad e intención.",
      affirmation: "Me despierto con suavidad e intención.",
      actions: {
        beauty: "Refresca tu rostro.",
        mental: "Elige 3 cosas que te dan ganas para el día.",
        lifestyle: "Organiza tu mañana a tu propio ritmo."
      }
    },
    {
      weekTitle: "Mentalidad y Confianza",
      weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
      title: "Pequeños Placeres Cotidianos",
      content: "La felicidad está en las pequeñas cosas.",
      affirmation: "Merezco disfrutar de cada momento.",
      actions: {
        beauty: "Un gesto de belleza simple.",
        mental: "Enumera 10 pequeños placeres fáciles.",
        lifestyle: "Realiza al menos 2 hoy."
      }
    },
    {
      weekTitle: "Mentalidad y Confianza",
      weekObjective: "Desarrollar una mentalidad fuerte, suave y magnética.",
      title: "Balance Semana 3",
      content: "¿Cómo está evolucionando tu mentalidad? ¿Qué pensamiento te sostuvo esta semana?",
      affirmation: "Me vuelvo mentalmente más fuerte cada día.",
      actions: {
        beauty: "Haz un tratamiento que te haga feliz.",
        mental: "Nota tu progreso mental.",
        lifestyle: "Prepara una intención para la semana que viene."
      }
    },
    // Semana 4
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Rutina Nocturna Glow",
      content: "Las noches sagradas preparan hermosas mañanas.",
      affirmation: "Mis noches son un momento sagrado para mí.",
      actions: {
        beauty: "Limpieza profunda de maquillaje + hidratación.",
        mental: "Gratitud por 3 cosas.",
        lifestyle: "Prepara tu día de mañana."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Meal Prep Simple",
      content: "Una alimentación simple y saludable nutre cuerpo y mente.",
      affirmation: "Nutro mi cuerpo con amor y simplicidad.",
      actions: {
        beauty: "Tratamiento exprés.",
        mental: "Simplifica tus comidas.",
        lifestyle: "Prepara 1 a 2 recetas simples para la semana."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Glow Up Wardrobe",
      content: "Viste ropa que te haga sentir bien.",
      affirmation: "Merezco sentirme bien con lo que uso.",
      actions: {
        beauty: "Perfume + look limpio.",
        mental: "Escribe cómo quieres sentirte en tu ropa.",
        lifestyle: "Haz una mini selección y guarda las piezas que te favorecen."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Espacio de Belleza Organizado",
      content: "Un espacio organizado crea energía fluida.",
      affirmation: "Creo un espacio que apoya mi feminidad.",
      actions: {
        beauty: "Ordena tus productos.",
        mental: "Elimina lo que no usas.",
        lifestyle: "Crea un rincón de belleza agradable."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Hidratación Máxima",
      content: "La hidratación es la clave de un brillo natural.",
      affirmation: "Cuido de mí misma con constancia.",
      actions: {
        beauty: "Mascarilla hidratante.",
        mental: "Verifica tu nivel de energía.",
        lifestyle: "Llena tu rastreador de hidratación."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Día de Vida Suave",
      content: "La vida suave es elegir la suavidad.",
      affirmation: "Merezco calma, suavidad y belleza.",
      actions: {
        beauty: "Un gesto que te haga sentir bien.",
        mental: "Ralentiza tu ritmo.",
        lifestyle: "Haz 3 actividades relajantes (vela, música suave, baño...)."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Glow Up Social",
      content: "Rodéate de personas positivas.",
      affirmation: "Cultivo relaciones hermosas y enriquecedoras.",
      actions: {
        beauty: "Una rutina simple.",
        mental: "Contacta a una persona que te hace sentir bien.",
        lifestyle: "Planifica una salida o momento amigable."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Preparar el Mes Próximo",
      content: "Continúa tu viaje hacia la mejor versión de ti misma.",
      affirmation: "Me preparo para la continuación de mi evolución.",
      actions: {
        beauty: "Tratamiento rápido.",
        mental: "Establece 3 objetivos para el mes que viene.",
        lifestyle: "Planifica tus rutinas."
      }
    },
    {
      weekTitle: "Estilo de Vida, Hábitos y Energía Femenina",
      weekObjective: "Crear un estilo de vida alineado, hermoso y sostenible.",
      title: "Balance Final y Celebración",
      content: "Lo lograste ✨ ¿Cómo te sientes? ¿Qué cambió más? ¿Cuál es tu progreso más hermoso?",
      affirmation: "Estoy orgullosa de mí misma. Esto es solo el comienzo.",
      actions: {
        beauty: "Haz un tratamiento especial para celebrar.",
        mental: "Nota tus logros del mes.",
        lifestyle: "¡Celebra tu progreso!"
      }
    }
  ]
};

export const bonusAffirmationsTranslations: Record<'en' | 'es', string[]> = {
  en: [
    "I deserve happiness and love",
    "I am enough, exactly as I am",
    "I radiate confidence and grace",
    "I attract positive experiences",
    "I deserve to be treated with respect",
    "I am capable of achieving my dreams",
    "My worth does not depend on others' opinions",
    "I am becoming the best version of myself",
    "I deserve to love and be loved",
    "I choose joy every day",
    "I am strong, resilient, and beautiful",
    "I trust my intuition",
    "I deserve the success I desire",
    "I am a woman worthy of respect",
    "I embrace my unique femininity",
    "I create my own reality",
    "I am surrounded by love and positivity",
    "I deserve a life full of gentleness",
    "I am a masterpiece in evolution",
    "I choose to free myself from doubts"
  ],
  es: [
    "Merezco la felicidad y el amor",
    "Soy suficiente, exactamente como soy",
    "Irradio confianza y gracia",
    "Atraigo experiencias positivas",
    "Merezco ser tratada con respeto",
    "Soy capaz de lograr mis sueños",
    "Mi valor no depende de la opinión de los demás",
    "Me estoy convirtiendo en la mejor versión de mí misma",
    "Merezco amar y ser amada",
    "Elijo la alegría cada día",
    "Soy fuerte, resiliente y hermosa",
    "Confío en mi intuición",
    "Merezco el éxito que deseo",
    "Soy una mujer digna de respeto",
    "Abrazo mi feminidad única",
    "Creo mi propia realidad",
    "Estoy rodeada de amor y positividad",
    "Merezco una vida llena de suavidad",
    "Soy una obra maestra en evolución",
    "Elijo liberarme de las dudas"
  ]
};

export const checklistsDataTranslations: Record<'en' | 'es', ChecklistTranslations[]> = {
  en: [
    {
      title: 'Morning Routine',
      description: 'Start your day with intention and gentleness',
      items: [
        { text: 'Drink a large glass of lemon water', checked: false },
        { text: 'Gentle stretching for 5 minutes', checked: false },
        { text: 'Meditation or deep breathing (3-5 min)', checked: false },
        { text: 'Complete skincare routine', checked: false },
        { text: 'Nutritious and balanced breakfast', checked: false },
        { text: 'Write 3 gratitudes of the day', checked: false },
        { text: 'Positive affirmation in front of the mirror', checked: false },
        { text: 'Plan the 3 priorities of the day', checked: false }
      ]
    },
    {
      title: 'Evening Routine',
      description: 'End your day beautifully and prepare for restful sleep',
      items: [
        { text: 'Tidy your space (15 min max)', checked: false },
        { text: 'Prepare tomorrow\'s outfit', checked: false },
        { text: 'Double face cleansing', checked: false },
        { text: 'Complete evening skincare routine', checked: false },
        { text: 'Journaling: note 3 positive moments', checked: false },
        { text: 'Inspiring reading (10-15 min)', checked: false },
        { text: 'Relaxing herbal tea or golden milk', checked: false },
        { text: 'Turn off screens 30 min before sleeping', checked: false },
        { text: 'Meditation or soft music', checked: false }
      ]
    },
    {
      title: 'Weekly Self-Care',
      description: 'Take care of yourself each week with these rituals',
      items: [
        { text: 'Hydrating or purifying face mask', checked: false },
        { text: 'Body scrub in the shower', checked: false },
        { text: 'Hair care (mask or oil)', checked: false },
        { text: 'Home manicure/pedicure', checked: false },
        { text: 'Relaxing bath with salts or oils', checked: false },
        { text: 'Yoga or stretching session (30 min)', checked: false },
        { text: 'Declutter your space', checked: false },
        { text: 'Prepare healthy meals for the week', checked: false },
        { text: 'Creative moment (drawing, writing, music)', checked: false },
        { text: 'Call a loved one who makes you feel good', checked: false }
      ]
    },
    {
      title: 'Monthly Goals',
      description: 'Set and achieve your monthly goals',
      items: [
        { text: 'Define 3 main goals of the month', checked: false },
        { text: 'Create a vision board for the month', checked: false },
        { text: 'Plan concrete steps', checked: false },
        { text: 'Block time in your calendar', checked: false },
        { text: 'Identify potential obstacles', checked: false },
        { text: 'Celebrate weekly victories', checked: false },
        { text: 'Adjust strategy if necessary', checked: false },
        { text: 'Do a progress review', checked: false },
        { text: 'Reward your efforts', checked: false },
        { text: 'Prepare intentions for the next month', checked: false }
      ]
    }
  ],
  es: [
    {
      title: 'Rutina Matutina',
      description: 'Comienza tu día con intención y suavidad',
      items: [
        { text: 'Bebe un vaso grande de agua con limón', checked: false },
        { text: 'Estiramientos suaves durante 5 minutos', checked: false },
        { text: 'Meditación o respiración profunda (3-5 min)', checked: false },
        { text: 'Rutina completa de skincare', checked: false },
        { text: 'Desayuno nutritivo y equilibrado', checked: false },
        { text: 'Escribe 3 gratitudes del día', checked: false },
        { text: 'Afirmación positiva frente al espejo', checked: false },
        { text: 'Planifica las 3 prioridades del día', checked: false }
      ]
    },
    {
      title: 'Rutina Nocturna',
      description: 'Termina tu día con belleza y prepara un sueño reparador',
      items: [
        { text: 'Ordena tu espacio (máximo 15 min)', checked: false },
        { text: 'Prepara el atuendo de mañana', checked: false },
        { text: 'Doble limpieza facial', checked: false },
        { text: 'Rutina completa de skincare nocturno', checked: false },
        { text: 'Diario personal: anota 3 momentos positivos', checked: false },
        { text: 'Lectura inspiradora (10-15 min)', checked: false },
        { text: 'Tisana relajante o leche dorada', checked: false },
        { text: 'Apaga las pantallas 30 min antes de dormir', checked: false },
        { text: 'Meditación o música suave', checked: false }
      ]
    },
    {
      title: 'Autocuidado Semanal',
      description: 'Cuídate cada semana con estos rituales',
      items: [
        { text: 'Mascarilla facial hidratante o purificante', checked: false },
        { text: 'Exfoliación corporal en la ducha', checked: false },
        { text: 'Cuidado del cabello (mascarilla o aceite)', checked: false },
        { text: 'Manicura/pedicura en casa', checked: false },
        { text: 'Baño relajante con sales o aceites', checked: false },
        { text: 'Sesión de yoga o estiramientos (30 min)', checked: false },
        { text: 'Haz el orden en tu espacio', checked: false },
        { text: 'Prepara comidas saludables para la semana', checked: false },
        { text: 'Momento creativo (dibujo, escritura, música)', checked: false },
        { text: 'Llama a un ser querido que te hace sentir bien', checked: false }
      ]
    },
    {
      title: 'Objetivos Mensuales',
      description: 'Establece y alcanza tus objetivos mensuales',
      items: [
        { text: 'Define 3 objetivos principales del mes', checked: false },
        { text: 'Crea un tablero de visión para el mes', checked: false },
        { text: 'Planifica pasos concretos', checked: false },
        { text: 'Bloquea tiempo en tu agenda', checked: false },
        { text: 'Identifica obstáculos potenciales', checked: false },
        { text: 'Celebra las victorias de la semana', checked: false },
        { text: 'Ajusta la estrategia si es necesario', checked: false },
        { text: 'Haz un balance de progreso', checked: false },
        { text: 'Recompensa tus esfuerzos', checked: false },
        { text: 'Prepara las intenciones del mes siguiente', checked: false }
      ]
    }
  ]
};

export const softLifeGuideTranslations: Record<'en' | 'es', SoftLifeGuideTranslations> = {
  en: {
    title: 'Soft Life Mini-Guide',
    subtitle: 'Create a gentle, aligned, and fulfilling life in 5 steps',
    steps: [
      {
        title: 'Slow Down and Breathe',
        description: 'Soft life starts by slowing down the pace',
        content: 'Learn to say no to things that don\'t serve you. Create pause moments in your day: 5 minutes of deep breathing in the morning, a screen-free tea break in the afternoon, 10 minutes of meditation in the evening. Gentleness begins when you stop running.',
        tips: [
          'Block "appointments with yourself" in your calendar',
          'Practice 4-7-8 breathing (inhale 4s, hold 7s, exhale 8s)',
          'Create a "slow living" playlist for your calm moments'
        ]
      },
      {
        title: 'Create a Sacred Space',
        description: 'Your environment influences your energy',
        content: 'Transform your space into a sanctuary. Declutter, add scented candles, plants, soft textures. Choose soothing colors (beige, off-white, powder pink). Your space should make you feel at peace as soon as you enter.',
        tips: [
          'Rule of 3: keep only what is beautiful, useful, or meaningful',
          'Add fresh flowers every week',
          'Invest in beautiful towels and soft sheets',
          'Create a cozy reading/meditation corner'
        ]
      },
      {
        title: 'Nourish Your Body with Love',
        description: 'Soft life means taking care of your temple',
        content: 'Eat foods that make you feel good, not just what\'s quick. Prepare your meals with intention. Hydrate. Move your body gently (yoga, walking, dancing). Sleep enough. Your body deserves to be treated like a queen.',
        tips: [
          'Prepare "aesthetic meals" that nourish body and soul',
          'Drink water in a pretty glass or cute bottle',
          'Make exercise a celebration, not a punishment',
          'Create a skincare routine that makes you happy'
        ]
      },
      {
        title: 'Protect Your Energy',
        description: 'Consciously choose what you consume',
        content: 'Sort your relationships, your Instagram feed, your conversations. Surround yourself with people who lift you up. Consume inspiring content. Limit negative news. Learn to set healthy boundaries. Your energy is precious.',
        tips: [
          'Unfollow everything that doesn\'t inspire you or makes you feel bad',
          'Create playlists that elevate your mood',
          'Practice saying "no" without guilt',
          'Surround yourself with people who celebrate your growth'
        ]
      },
      {
        title: 'Cultivate Gratitude and Joy',
        description: 'Soft life is a state of mind',
        content: 'Celebrate small victories. Write your daily gratitudes. Find beauty in the ordinary. Laugh often. Be gentle with yourself. A gentle life isn\'t perfect, it\'s intentional and filled with precious moments.',
        tips: [
          'Keep a gratitude journal (3 things per day)',
          'Celebrate your progress, even the smallest',
          'Create rituals that make you smile',
          'Practice self-compassion as you would with your best friend'
        ]
      }
    ]
  },
  es: {
    title: 'Mini-Guía de Vida Suave',
    subtitle: 'Crea una vida suave, alineada y plena en 5 pasos',
    steps: [
      {
        title: 'Ralentiza y Respira',
        description: 'La vida suave comienza ralentizando el ritmo',
        content: 'Aprende a decir no a las cosas que no te sirven. Crea momentos de pausa en tu día: 5 minutos de respiración profunda por la mañana, un descanso para tomar té sin pantallas por la tarde, 10 minutos de meditación por la noche. La suavidad comienza cuando dejas de correr.',
        tips: [
          'Bloquea "citas contigo misma" en tu agenda',
          'Practica la respiración 4-7-8 (inhala 4s, retén 7s, exhala 8s)',
          'Crea una lista de reproducción "vida lenta" para tus momentos tranquilos'
        ]
      },
      {
        title: 'Crea un Espacio Sagrado',
        description: 'Tu entorno influye en tu energía',
        content: 'Transforma tu espacio en un santuario. Despeja, añade velas aromáticas, plantas, texturas suaves. Elige colores relajantes (beige, blanco roto, rosa polvo). Tu espacio debe hacerte sentir en paz tan pronto como entres.',
        tips: [
          'Regla del 3: guarda solo lo que sea hermoso, útil o significativo',
          'Añade flores frescas cada semana',
          'Invierte en toallas hermosas y sábanas suaves',
          'Crea un rincón acogedor de lectura/meditación'
        ]
      },
      {
        title: 'Nutre Tu Cuerpo con Amor',
        description: 'La vida suave pasa por cuidar tu templo',
        content: 'Come alimentos que te hagan sentir bien, no solo lo que sea rápido. Prepara tus comidas con intención. Hidrátate. Mueve tu cuerpo con suavidad (yoga, caminar, bailar). Duerme lo suficiente. Tu cuerpo merece ser tratado como una reina.',
        tips: [
          'Prepara "comidas estéticas" que nutran cuerpo y alma',
          'Bebe agua en un vaso bonito o botella linda',
          'Haz del ejercicio una celebración, no un castigo',
          'Crea una rutina de skincare que te haga feliz'
        ]
      },
      {
        title: 'Protege Tu Energía',
        description: 'Elige conscientemente lo que consumes',
        content: 'Haz una selección en tus relaciones, tu feed de Instagram, tus conversaciones. Rodéate de personas que te eleven. Consume contenido inspirador. Limita las noticias negativas. Aprende a establecer límites saludables. Tu energía es preciosa.',
        tips: [
          'Deja de seguir todo lo que no te inspire o te haga sentir mal',
          'Crea listas de reproducción que eleven tu estado de ánimo',
          'Practica decir "no" sin culpa',
          'Rodéate de personas que celebren tu crecimiento'
        ]
      },
      {
        title: 'Cultiva la Gratitud y la Alegría',
        description: 'La vida suave es un estado mental',
        content: 'Celebra las pequeñas victorias. Escribe tus gratitudes diarias. Encuentra belleza en lo ordinario. Ríe a menudo. Sé suave contigo misma. La vida suave no es perfecta, es intencional y llena de momentos preciosos.',
        tips: [
          'Mantén un diario de gratitud (3 cosas por día)',
          'Celebra tu progreso, incluso el más pequeño',
          'Crea rituales que te hagan sonreír',
          'Practica la autocompasión como lo harías con tu mejor amiga'
        ]
      }
    ]
  }
};

export const bonusSectionsTranslations: Record<'en' | 'es', BonusSectionTranslations[]> = {
  en: [
    {
      title: 'The List of Small Successes',
      description: 'Celebrate your daily victories',
      duration: '2 to 4 minutes',
      content: {
        intro: 'Duration: 2 to 4 minutes',
        steps: [
          'Note three small successes achieved this week (even minimal ones).',
          'Describe why these successes are important to you.',
          'Reread this list every morning to remind yourself that you are capable.'
        ],
        why: 'Self-valuation helps strengthen confidence and reduce the feeling of failure.',
        examples: []
      }
    },
    {
      title: 'The Evening Question',
      description: 'Listen to your deep intuition',
      duration: '30 seconds',
      content: {
        intro: '"If my heart already knew, what would its answer be?"',
        subtitle: 'Ritual (30 seconds):',
        steps: [
          'Think about your blockage.',
          'Ask the question.',
          'Note the first word that comes.'
        ],
        why: 'Upon waking, we feel clearer, the heart already knows.',
        examples: [
          { question: 'Should I leave this job?', answer: 'Freedom' },
          { question: 'Does this friendship suit me?', answer: 'Exhausted' }
        ]
      }
    },
    {
      title: '8 Boundaries to Preserve Your Inner Peace',
      description: 'Protect your energy and well-being',
      duration: 'To practice daily',
      content: {
        intro: 'Learn to set healthy boundaries to preserve your inner peace.',
        steps: [
          'Not responding to messages after a certain time',
          'Cutting short overly negative conversations',
          'Refusing to lend something if you\'re not comfortable',
          'Saying no to an invitation without guilt',
          'Limiting contact with an intrusive person',
          'Refusing to talk about a sensitive topic',
          'Asking for time to think before responding',
          'Saying no to a favor that puts you in discomfort'
        ],
        why: 'Setting boundaries is not selfish, it\'s essential for your mental and emotional well-being.',
        examples: []
      }
    },
    {
      title: '50 Things to Do Alone',
      description: 'Enjoy precious moments with yourself',
      duration: 'Personal bucket list',
      content: {
        intro: 'Discover the pleasure of your own company with these 50 enriching activities.',
        steps: [],
        why: 'Spending time alone strengthens independence, self-confidence, and allows you to know yourself better.',
        examples: []
      }
    }
  ],
  es: [
    {
      title: 'La Lista de Pequeños Éxitos',
      description: 'Celebra tus victorias diarias',
      duration: '2 a 4 minutos',
      content: {
        intro: 'Duración: 2 a 4 minutos',
        steps: [
          'Anota tres pequeños éxitos logrados esta semana (incluso mínimos).',
          'Describe por qué estos éxitos son importantes para ti.',
          'Vuelve a leer esta lista cada mañana para recordarte que eres capaz.'
        ],
        why: 'La autovaloración ayuda a fortalecer la confianza y reducir el sentimiento de fracaso.',
        examples: []
      }
    },
    {
      title: 'La Pregunta de la Noche',
      description: 'Escucha tu intuición profunda',
      duration: '30 segundos',
      content: {
        intro: '"Si mi corazón ya supiera, ¿cuál sería su respuesta?"',
        subtitle: 'Ritual (30 segundos):',
        steps: [
          'Piensa en tu bloqueo.',
          'Haz la pregunta.',
          'Anota la primera palabra que venga.'
        ],
        why: 'Al despertar, nos sentimos más claras, el corazón ya sabe.',
        examples: [
          { question: '¿Debería dejar este trabajo?', answer: 'Libertad' },
          { question: '¿Esta amistad me conviene?', answer: 'Agotada' }
        ]
      }
    },
    {
      title: '8 Límites para Preservar Tu Paz Interior',
      description: 'Protege tu energía y bienestar',
      duration: 'Para practicar a diario',
      content: {
        intro: 'Aprende a establecer límites saludables para preservar tu paz interior.',
        steps: [
          'No responder a mensajes después de cierta hora',
          'Cortar conversaciones demasiado negativas',
          'Negarse a prestar algo si no te sientes cómoda',
          'Decir no a una invitación sin culpar',
          'Limitar el contacto con una persona invasiva',
          'Negarse a hablar de un tema sensible',
          'Pedir tiempo para pensar antes de responder',
          'Decir no a un favor que te pone en incomodidad'
        ],
        why: 'Establecer límites no es egoísta, es esencial para tu bienestar mental y emocional.',
        examples: []
      }
    },
    {
      title: '50 Cosas para Hacer Sola',
      description: 'Disfruta momentos preciosos contigo misma',
      duration: 'Lista personal de deseos',
      content: {
        intro: 'Descubre el placer de tu propia compañía con estas 50 actividades enriquecedoras.',
        steps: [],
        why: 'Pasar tiempo sola fortalece la independencia, la confianza en ti misma y permite conocerte mejor.',
        examples: []
      }
    }
  ]
};

export const fiftyThingsAloneTranslations: Record<'en' | 'es', string[]> = {
  en: [
    'Go for coffee in a cozy place',
    'Take a long walk in nature',
    'Try a new restaurant solo',
    'Keep a gratitude journal',
    'Read a novel in a park or café',
    'Buy yourself a bouquet of flowers',
    'Try a new creative hobby (painting, collage, crochet...)',
    'Tidy and reorganize a corner of your home',
    'Do a yoga or stretching session',
    'Watch a movie or series that makes you feel good',
    'Meditate for 5 to 10 minutes',
    'Do a session of positive affirmations in front of the mirror',
    'Take a walk without your phone',
    'Cook a dish you love',
    'Make a vision board',
    'Learn something on YouTube (beauty tutorial, DIY, culture...)',
    'Go to a museum alone',
    'Take a relaxing bath',
    'Make a list of your monthly goals',
    'Keep an emotion or thought journal',
    'Visit a bookstore and treat yourself to a book',
    'Go to the cinema alone',
    'Take a restorative nap',
    'Sort and renew your wardrobe',
    'Write a letter to your "future self"',
    'Try a new sports activity',
    'Explore a new neighborhood in the city',
    'Do a home beauty treatment (face mask, scrub...)',
    'Go to the beach / lake if possible',
    'Do a puzzle or logic game',
    'Listen to an inspiring podcast',
    'Create a memory or photo book',
    'Make yourself a brunch at home',
    'Go to a tea room to relax',
    'Take time to dream and do nothing',
    'Go to a workshop or class (cooking, dance, art...)',
    'Try a new hairstyle or beauty routine',
    'Take a walk at the local market',
    'Watch the sunset',
    'Create a list of your personal values',
    'Drink hot chocolate under a blanket',
    'Go shopping alone',
    'Go to a library and browse magazines',
    'Try a creative challenge (30 days of drawings, writing...)',
    'Organize a "solo date" (restaurant, activity, walk)',
    'Write a poem or short story',
    'Wake up early to enjoy the morning calm',
    'Write in a journal for 5 minutes in a quiet place',
    'Sort through your social media',
    'Plan a mini trip or solo outing'
  ],
  es: [
    'Ir a tomar un café en un lugar acogedor',
    'Hacer una caminata larga en la naturaleza',
    'Probar un nuevo restaurante en solitario',
    'Llevar un diario de gratitud',
    'Leer una novela en un parque o café',
    'Comprarte un ramo de flores',
    'Probar un nuevo hobby creativo (pintura, collage, crochet...)',
    'Ordenar y reorganizar un rincón de tu casa',
    'Hacer una sesión de yoga o estiramientos',
    'Ver una película o serie que te haga sentir bien',
    'Meditar de 5 a 10 minutos',
    'Hacer una sesión de afirmaciones positivas frente al espejo',
    'Hacer una caminata sin teléfono',
    'Cocinar un plato que ames',
    'Hacer un tablero de visión',
    'Aprender algo en YouTube (tutorial de belleza, DIY, cultura...)',
    'Ir al museo sola',
    'Tomar un baño relajante',
    'Hacer una lista de tus objetivos del mes',
    'Llevar un diario de emociones o pensamientos',
    'Visitar una librería y regalarte un libro',
    'Ir al cine sola',
    'Tomar una siesta reparadora',
    'Ordenar y renovar tu guardarropa',
    'Escribir una carta a tu "yo futuro"',
    'Probar una nueva actividad deportiva',
    'Explorar un nuevo barrio de la ciudad',
    'Hacerte un tratamiento de belleza en casa (mascarilla facial, exfoliación...)',
    'Ir a la playa / al lago si es posible',
    'Hacer un rompecabezas o juego de lógica',
    'Escuchar un podcast inspirador',
    'Crear un álbum de recuerdos o fotos',
    'Hacerte un brunch en casa',
    'Ir a una sala de té para relajarte',
    'Tomarte tiempo para soñar y no hacer nada',
    'Ir a un taller o clase (cocina, baile, arte...)',
    'Probar un nuevo peinado o rutina de belleza',
    'Hacer una caminata al mercado local',
    'Ver el atardecer',
    'Crear una lista de tus valores personales',
    'Tomar chocolate caliente bajo una manta',
    'Ir de compras sola',
    'Ir a una biblioteca y hojear revistas',
    'Probar un desafío creativo (30 días de dibujos, escritura...)',
    'Organizar una "cita en solitario" (restaurante, actividad, caminata)',
    'Escribir un poema o una historia corta',
    'Despertarte temprano para disfrutar de la calma de la mañana',
    'Escribir en un diario durante 5 minutos en un lugar tranquilo',
    'Hacer una selección en tus redes sociales',
    'Planificar un mini viaje o salida en solitario'
  ]
};
