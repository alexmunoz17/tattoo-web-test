import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiInstagram } from 'react-icons/fi';
import { t, languages, getLanguageName, getLanguageFlag } from '../utils/i18n';

function Header({ lang, changeLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: `/${lang}`, label: t(lang, 'nav.home') },
    { to: `/${lang}/gallery`, label: t(lang, 'nav.gallery') },
    { to: `/${lang}/artist`, label: t(lang, 'nav.artist') },
    { to: `/${lang}/about`, label: t(lang, 'nav.about') },
    { to: `/${lang}/contact`, label: t(lang, 'nav.contact') },
  ];

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={`/${lang}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zeros Tattoo</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.to) 
                      ? 'text-primary' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side - Language selector and CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language selector */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-lg">{getLanguageFlag(lang)}</span>
                  <span className="text-sm text-text-secondary uppercase">{lang}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-bg-dark border border-primary/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {languages.map(l => (
                    <button
                      key={l}
                      onClick={() => changeLanguage(l)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                        lang === l ? 'text-primary' : 'text-text-secondary'
                      }`}
                    >
                      <span className="mr-2">{getLanguageFlag(l)}</span>
                      {getLanguageName(l)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact button */}
              <Link
                to={`/${lang}/contact`}
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
              >
                {t(lang, 'contact.formTitle')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-bg-dark border-t border-primary/20">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    isActive(link.to) 
                      ? 'text-primary' 
                      : 'text-text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-text-secondary">Sprache / Language</span>
                </div>
                <div className="flex gap-2">
                  {languages.map(l => (
                    <button
                      key={l}
                      onClick={() => {
                        changeLanguage(l);
                        setIsMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg transition-colors ${
                        lang === l 
                          ? 'bg-primary text-white' 
                          : 'bg-white/5 text-text-secondary hover:bg-white/10'
                      }`}
                    >
                      {getLanguageFlag(l)} {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                to={`/${lang}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
              >
                {t(lang, 'contact.formTitle')}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}

export default Header;
