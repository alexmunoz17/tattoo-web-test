import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { t } from '../utils/i18n';

function Hero({ lang }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-3xl" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
          {t(lang, 'hero.headline')}
        </h1>
        <p className="text-xl md:text-2xl text-text-primary mb-12 max-w-2xl mx-auto">
          {t(lang, 'hero.subheadline')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/${lang}/contact`}
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all font-semibold text-lg flex items-center justify-center gap-2 transform hover:scale-105"
          >
            {t(lang, 'hero.primaryCTA')}
            <FiArrowRight />
          </Link>
          <Link
            to={`/${lang}/gallery`}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all font-semibold text-lg backdrop-blur-md border border-white/20"
          >
            {t(lang, 'hero.secondaryCTA')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
