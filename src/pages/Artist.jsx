import { t } from '../utils/i18n';
import { FiInstagram, FiMail, FiMessageCircle } from 'react-icons/fi';

function Artist({ lang }) {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Künstler</h1>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto">
          Lerne den Künstler hinter Zeros Tattoo kennen
        </p>
      </section>

      {/* Artist Profile */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Portrait */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-8xl font-bold text-white">Z</span>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Zero</h2>
              <p className="text-primary text-xl mb-6">Tattoo Artist & Studio Owner</p>
              
              <div className="flex items-center gap-6 mb-8">
                <a
                  href="https://instagram.com/zeros_tattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <FiInstagram size={20} />
                  <span>@zeros_tattoo</span>
                </a>
                <a
                  href="mailto:hello@zeros-tattoo.ch"
                  className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <FiMail size={20} />
                  <span>hello@zeros-tattoo.ch</span>
                </a>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-text-secondary text-lg">
              <p>
                Mit über 10 Jahren Erfahrung in der Tattoo-Branche hat sich Zero auf minimalistische und 
                feine Linientätowierungen spezialisiert. Seine Arbeit zeichnet sich durch Präzision, 
                Kreativität und ein tiefes Verständnis für die Kunst der Tätowierung aus.
              </p>
              <p>
                Zero wurde in verschiedenen Studios in Europa ausgebildet und arbeitete mit einigen der 
                besten Künstler der Branche zusammen. Seine Leidenschaft für minimalistische Ästhetik 
                und feine Details spiegelt sich in jedem seiner Stücke wider.
              </p>
              <p>
                Neben der Tätowierung ist Zero auch als Grafiker und Illustrator tätig, was ihm hilft, 
                einzigartige und personalisierte Designs für seine Kunden zu entwickeln. Er glaubt daran, 
                dass jedes Tattoo eine Geschichte erzählen sollte und nimmt sich die Zeit, die Vision seiner 
                Kunden vollständig zu verstehen.
              </p>
              <p>
                Im Zeros Tattoo Studio in Zürich bietet Zero nicht nur Tattoos an, sondern schafft auch 
                eine sichere, einladende und respektvolle Umgebung für alle. Er spricht Deutsch, Englisch 
                und Spanisch und freut sich darauf, mit Ihnen zusammenzuarbeiten, um Ihr nächstes Tattoo 
                zu realisieren.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sprachen</h3>
              <div className="flex flex-wrap gap-2">
                {['🇩🇪 Deutsch', '🇬🇧 English', '🇪🇸 Español'].map(lang => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-primary/20 text-primary rounded-lg"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Spezialitäten</h3>
              <div className="flex flex-wrap gap-2">
                {['Minimalist', 'Fine Line', 'Geometric', 'Botanical'].map(spec => (
                  <span
                    key={spec}
                    className="px-4 py-2 bg-white/10 rounded-lg text-text-secondary"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-semibold"
              >
                <FiMessageCircle />
                Termin vereinbaren
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio preview */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">Portfolio</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(idx => (
              <div
                key={idx}
                className="aspect-square bg-gradient-primary rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-2xl">{idx}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={`/${lang}/gallery`}
              className="text-primary hover:underline font-semibold"
            >
              Alle Arbeiten ansehen →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artist;
