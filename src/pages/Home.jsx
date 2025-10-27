import Hero from '../components/Hero';
import { t } from '../utils/i18n';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

function Home({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      
      {/* Services section */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Wir bieten verschiedene Tattoo-Stile für jeden Geschmack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Minimalist', 'Realism', 'Traditional'].map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all transform hover:scale-105 border border-primary/10"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">•</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-text-secondary">
                  Hochwertige Tattoos in {service.toLowerCase()} Stil mit modernsten Techniken.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-gradient-to-b from-bg-dark to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">So funktioniert's</h2>
            <div className="space-y-6">
              {[
                'Nachricht senden',
                'Design besprechen',
                'Termin vereinbaren',
                'Traum-Tattoo bekommen'
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step}</h3>
                    <p className="text-text-secondary">
                      {idx === 0 && 'Schreib uns eine Nachricht mit deiner Idee.'}
                      {idx === 1 && 'Wir besprechen zusammen das perfekte Design für dich.'}
                      {idx === 2 && 'Wir finden den passenden Termin und fertigen dein Design an.'}
                      {idx === 3 && 'Genieße dein neues Tattoo und die tolle Erfahrung.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all font-semibold text-lg"
              >
                Jetzt loslegen
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bereit für dein Tattoo?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Melde dich noch heute bei uns und lass uns zusammen deine Vision verwirklichen.
            </p>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg transition-all font-semibold text-lg hover:scale-105"
            >
              Kontakt aufnehmen
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
