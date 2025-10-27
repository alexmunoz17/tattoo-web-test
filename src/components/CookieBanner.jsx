import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { t } from '../utils/i18n';

function CookieBanner({ lang }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('zeros-tattoo-cookie-consent');
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('zeros-tattoo-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-bg-dark border-t border-primary/20 p-4 md:p-6 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-text-primary text-sm md:text-base">
            Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Durch die Nutzung unserer Website stimmen Sie unserer 
            <a href="/legal" className="text-primary hover:underline ml-1">Datenschutzerklärung</a> zu.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium whitespace-nowrap"
          >
            Akzeptieren
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
