import { Link } from 'react-router-dom';
import { FiInstagram, FiPhone, FiMail } from 'react-icons/fi';
import { t } from '../utils/i18n';

function Footer({ lang }) {
  return (
    <footer className="bg-bg-dark border-t border-primary/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zeros Tattoo</span>
            </div>
            <p className="text-text-secondary mb-4 max-w-md">
              Boutique tattoo studio in Zürich. Minimalistic tattoos that tell stories.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/zeros_tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} className="text-text-secondary hover:text-primary" />
              </a>
              <a
                href="tel:+41123456789"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Phone"
              >
                <FiPhone size={20} className="text-text-secondary hover:text-primary" />
              </a>
              <a
                href="mailto:hello@zeros-tattoo.ch"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} className="text-text-secondary hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${lang}/gallery`} className="text-text-secondary hover:text-primary transition-colors">
                  {t(lang, 'nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/artist`} className="text-text-secondary hover:text-primary transition-colors">
                  {t(lang, 'nav.artist')}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/about`} className="text-text-secondary hover:text-primary transition-colors">
                  {t(lang, 'nav.about')}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/contact`} className="text-text-secondary hover:text-primary transition-colors">
                  {t(lang, 'nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to={`/${lang}/pricing`} className="text-text-secondary hover:text-primary transition-colors">
                  {t(lang, 'nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/faq`} className="text-text-secondary hover:text-primary transition-colors">
                  {t(lang, 'nav.faq')}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/legal`} className="text-text-secondary hover:text-primary transition-colors">
                  {t(lang, 'nav.legal')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">{t(lang, 'footer.copyright')}</p>
          <p className="text-text-secondary text-sm mt-2 md:mt-0">
            Schärenmoosstrasse 80, 8052 Zürich
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
