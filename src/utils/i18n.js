// Translation dictionary
const translations = {
  de: {
    // Navigation
    nav: {
      home: 'Home',
      gallery: 'Galerie',
      artist: 'Künstler',
      about: 'Über uns',
      contact: 'Kontakt',
      faq: 'FAQ',
      pricing: 'Preise',
      legal: 'Impressum',
    },
    // Hero
    hero: {
      headline: 'Kunst in der Haut',
      subheadline: 'Minimalistische Tattoos, die Geschichten erzählen',
      primaryCTA: 'Jetzt kontaktieren',
      secondaryCTA: 'Galerie ansehen',
    },
    // Walk-in banner
    walkin: {
      text: 'Walk-ins willkommen',
      subtitle: 'Schau im Stundenplan nach oder schreib mir kurz via WhatsApp.',
    },
    // Gallery
    gallery: {
      title: 'Unsere Arbeiten',
      filters: {
        style: 'Stil',
        artist: 'Künstler',
        color: 'Farbe / B&W',
        placement: 'Körperstelle',
      },
      askAbout: 'Zu diesem Stück fragen',
      noResults: 'Keine Ergebnisse gefunden',
    },
    // Contact
    contact: {
      title: 'Kontakt',
      subtitle: 'Melde dich bei uns',
      phone: 'Telefon',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      address: 'Schärenmoosstrasse 80, 8052 Zürich',
      formTitle: 'Nachricht senden',
      formFields: {
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon (optional)',
        language: 'Bevorzugte Sprache',
        ageConfirm: 'Ich bestätige, dass ich über 18 Jahre alt bin',
        description: 'Tattoo-Beschreibung',
        placement: 'Körperstelle',
        preferred: 'Bevorzugte Tage/Zeiten',
        upload: 'Referenzbild hochladen',
        submit: 'Nachricht senden',
      },
      processNote: 'Nachricht senden → Wir besprechen Design & Termin',
    },
    // About
    about: {
      title: 'Über Zeros Tattoo',
      intro: 'Willkommen in unserem Boutique-Tattoo-Studio im Herzen von Zürich.',
    },
    // Footer
    footer: {
      copyright: '© 2024 Zeros Tattoo. Alle Rechte vorbehalten.',
      follow: 'Folge uns',
    },
  },
  en: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      artist: 'Artist',
      about: 'About',
      contact: 'Contact',
      faq: 'FAQ',
      pricing: 'Pricing',
      legal: 'Legal',
    },
    hero: {
      headline: 'Art in Skin',
      subheadline: 'Minimalistic tattoos that tell stories',
      primaryCTA: 'Contact now',
      secondaryCTA: 'View gallery',
    },
    walkin: {
      text: 'Walk-ins welcome',
      subtitle: 'Check schedule or message us via WhatsApp.',
    },
    gallery: {
      title: 'Our Work',
      filters: {
        style: 'Style',
        artist: 'Artist',
        color: 'Color / B&W',
        placement: 'Placement',
      },
      askAbout: 'Ask about this piece',
      noResults: 'No results found',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      address: 'Schärenmoosstrasse 80, 8052 Zürich',
      formTitle: 'Send a message',
      formFields: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone (optional)',
        language: 'Preferred language',
        ageConfirm: 'I confirm that I am over 18 years old',
        description: 'Tattoo description',
        placement: 'Body placement',
        preferred: 'Preferred days/times',
        upload: 'Upload reference image',
        submit: 'Send message',
      },
      processNote: 'Send message → We discuss design & schedule',
    },
    about: {
      title: 'About Zeros Tattoo',
      intro: 'Welcome to our boutique tattoo studio in the heart of Zürich.',
    },
    footer: {
      copyright: '© 2024 Zeros Tattoo. All rights reserved.',
      follow: 'Follow us',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      gallery: 'Galería',
      artist: 'Artista',
      about: 'Nosotros',
      contact: 'Contacto',
      faq: 'Preguntas',
      pricing: 'Precios',
      legal: 'Legal',
    },
    hero: {
      headline: 'Arte en Piel',
      subheadline: 'Tatuajes minimalistas que cuentan historias',
      primaryCTA: 'Contactar ahora',
      secondaryCTA: 'Ver galería',
    },
    walkin: {
      text: 'Walk-ins bienvenidos',
      subtitle: 'Consulta el horario o escríbenos por WhatsApp.',
    },
    gallery: {
      title: 'Nuestro Trabajo',
      filters: {
        style: 'Estilo',
        artist: 'Artista',
        color: 'Color / B&N',
        placement: 'Ubicación',
      },
      askAbout: 'Preguntar sobre esta pieza',
      noResults: 'No se encontraron resultados',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Ponte en contacto con nosotros',
      phone: 'Teléfono',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      address: 'Schärenmoosstrasse 80, 8052 Zürich',
      formTitle: 'Enviar mensaje',
      formFields: {
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono (opcional)',
        language: 'Idioma preferido',
        ageConfirm: 'Confirmo que soy mayor de 18 años',
        description: 'Descripción del tatuaje',
        placement: 'Ubicación corporal',
        preferred: 'Días/horarios preferidos',
        upload: 'Subir imagen de referencia',
        submit: 'Enviar mensaje',
      },
      processNote: 'Enviar mensaje → Discutimos diseño y horario',
    },
    about: {
      title: 'Sobre Zeros Tattoo',
      intro: 'Bienvenido a nuestro estudio de tatuajes boutique en el corazón de Zürich.',
    },
    footer: {
      copyright: '© 2024 Zeros Tattoo. Todos los derechos reservados.',
      follow: 'Síguenos',
    },
  },
};

// Get translation function
export const t = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

// Get available languages
export const languages = ['de', 'en', 'es'];

// Get language name
export const getLanguageName = (code) => {
  const names = {
    de: 'Deutsch',
    en: 'English',
    es: 'Español',
  };
  return names[code] || code;
};

// Get language flag emoji
export const getLanguageFlag = (code) => {
  const flags = {
    de: '🇩🇪',
    en: '🇬🇧',
    es: '🇪🇸',
  };
  return flags[code] || '';
};
