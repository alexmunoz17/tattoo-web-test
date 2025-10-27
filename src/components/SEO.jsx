import { useEffect } from 'react';

function SEO({ 
  title = 'Zeros Tattoo - Boutique Tattoo Studio Zürich',
  description = 'Minimalistische Tattoos in Zürich. Qualität, Kreativität und Respekt. Kontaktiere uns für dein nächstes Tattoo.',
  lang = 'de',
}) {
  useEffect(() => {
    document.title = title.includes('Zeros Tattoo') ? title : `${title} | Zeros Tattoo`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const html = document.documentElement;
    html.setAttribute('lang', lang);
  }, [title, description, lang]);

  return null;
}

export default SEO;
