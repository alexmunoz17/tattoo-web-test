import { t } from '../utils/i18n';

function Legal({ lang }) {
  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-8 text-text-secondary">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Verantwortlich</h2>
            <p>Zeros Tattoo</p>
            <p>Schärenmoosstrasse 80</p>
            <p>8052 Zürich, Schweiz</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
            <p>Telefon: +41 12 345 67 89</p>
            <p>E-Mail: hello@zeros-tattoo.ch</p>
            <p>Instagram: @zeros_tattoo</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Rechtliche Hinweise</h2>
            <p className="mb-4">
              Diese Website dient ausschließlich der Information über unsere Dienstleistungen 
              und unser Studio. Alle Inhalte sind urheberrechtlich geschützt.
            </p>
            <p>
              <strong>Haftungsausschluss:</strong> Trotz sorgfältiger Kontrolle übernehmen wir 
              keine Haftung für die Inhalte externer Links. Die Verantwortung liegt bei den 
              jeweiligen Anbietern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Datenschutz</h2>
            <p className="mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden 
              nur erhoben, gespeichert und verarbeitet, soweit dies für die Abwicklung Ihrer 
              Anfrage oder unseres Vertrags erforderlich ist.
            </p>
            <p>
              <strong>Cookie-Banner:</strong> Diese Website verwendet Cookies. Durch die Nutzung 
              unserer Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen 
              finden Sie in unserer Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Copyright</h2>
            <p>
              © 2024 Zeros Tattoo. Alle Rechte vorbehalten. Alle auf dieser Website gezeigten 
              Tattoo-Arbeiten sind Eigentum von Zeros Tattoo bzw. den jeweiligen Künstlern. 
              Die Vervielfältigung, Verbreitung oder kommerzielle Nutzung von Inhalten ohne 
              schriftliche Genehmigung ist untersagt.
            </p>
          </section>

          <section>
            <p className="text-sm pt-8 border-t border-white/10">
              Letzte Aktualisierung: {new Date().toLocaleDateString('de-CH')}
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Legal;
