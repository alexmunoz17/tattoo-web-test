import { t } from '../utils/i18n';
import { FiCheck } from 'react-icons/fi';

function Pricing({ lang }) {
  const pricing = [
    { size: 'Klein', desc: 'bis 5cm', price: 'ab 100 CHF', features: ['Einfache Designs', 'Schnelle Ausführung', 'Pauschal'] },
    { size: 'Mittel', desc: '5-15cm', price: 'ab 300 CHF', features: ['Detailierte Designs', '1-3 Stunden', 'Beratung inklusive'] },
    { size: 'Groß', desc: '15-25cm', price: 'ab 600 CHF', features: ['Komplexe Designs', '3-6 Stunden', 'Kostenlose Nachpflege'] },
    { size: 'Portrait/Realismus', desc: 'Nach Aufwand', price: 'Auf Anfrage', features: ['Individuelle Beratung', 'Mehrere Sitzungen', 'Premium-Qualität'] },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Preise</h1>
          <p className="text-text-secondary text-xl mb-16 text-center max-w-3xl mx-auto">
            Transparente Preise für alle unsere Services. Kontaktieren Sie uns für ein individuelles Angebot.
          </p>

          {/* Pricing grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pricing.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.size}</h3>
                  <p className="text-text-secondary mb-4">{tier.desc}</p>
                  <div className="text-3xl font-bold text-primary mb-1">{tier.price}</div>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-text-secondary">
                      <FiCheck className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="bg-gradient-primary rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Individuelle Designs</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Komplexere Designs und Personalisierungen werden individuell nach Absprache berechnet. 
              Wir erstellen gerne ein maßgeschneidertes Angebot für Ihr Projekt.
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
            >
              Kostenloses Beratungsgespräch
            </a>
          </div>

          {/* Info boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Nachpflege inklusive</h3>
              <p className="text-text-secondary">
                Alle Preise enthalten umfassende Anweisungen zur Nachpflege.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Zahlung</h3>
              <p className="text-text-secondary">
                Zahlung in Bar, per EC-Karte oder anderen gängigen Methoden.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Individuelle Designs</h3>
              <p className="text-text-secondary">
                Jedes Tattoo wird speziell für Sie entworfen und angepasst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
