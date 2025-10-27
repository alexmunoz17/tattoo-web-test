import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

function FAQ({ lang }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Wie viel kostet ein Tattoo?',
      a: 'Die Preise variieren je nach Größe, Komplexität und Platzierung. Ein kleines Tattoo beginnt bei etwa 100 CHF, während größere und komplexere Designs entsprechend mehr kosten. Kontaktieren Sie uns für ein individuelles Angebot.',
    },
    {
      q: 'Kann ich einen Termin vereinbaren?',
      a: 'Ja, wir arbeiten auf Nachrichtenbasis. Schreiben Sie uns über WhatsApp, E-Mail oder das Kontaktformular, um einen Termin zu vereinbaren. Wir besprechen dann gemeinsam Ihr Design und finden einen passenden Termin.',
    },
    {
      q: 'Sind Walk-ins möglich?',
      a: 'Walk-ins sind willkommen, solange wir im Studio sind. Bitte schauen Sie in unseren Stundenplan oder schreiben Sie uns kurz via WhatsApp, um sicherzustellen, dass wir verfügbar sind.',
    },
    {
      q: 'Wie lange dauert der Heilungsprozess?',
      a: 'Die Heilung dauert in der Regel 2-4 Wochen. Wir geben Ihnen detaillierte Anweisungen zur Nachsorge, damit Ihr Tattoo perfekt heilt.',
    },
    {
      q: 'Was ist die minimale Altersbeschränkung?',
      a: 'Sie müssen mindestens 18 Jahre alt sein, um ein Tattoo zu bekommen. Ein gültiger Ausweis ist erforderlich.',
    },
    {
      q: 'Welche Zahlungsmethoden werden akzeptiert?',
      a: 'Wir akzeptieren Bar, EC-Karte und die meisten gängigen Zahlungsmethoden.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Häufige Fragen</h1>
          <p className="text-text-secondary text-xl mb-12 text-center">
            Finden Sie Antworten auf die häufigsten Fragen
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  <FiChevronDown
                    className={`text-primary transition-transform flex-shrink-0 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-5 text-text-secondary border-t border-white/10">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
