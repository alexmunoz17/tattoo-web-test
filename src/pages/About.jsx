import { t } from '../utils/i18n';

function About({ lang }) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t(lang, 'about.title')}</h1>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto">
          {t(lang, 'about.intro')}
        </p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="aspect-[4/5] bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-6xl font-bold text-white">Z</span>
            </div>
          </div>
          <div className="space-y-6 text-lg text-text-secondary">
            <p>
              Zeros Tattoo ist ein Boutique-Tattoo-Studio im Herzen von Zürich, spezialisiert auf minimalistische 
              und feine Linientätowierungen. Unser Ziel ist es, Kunstwerke zu schaffen, die Geschichten erzählen 
              und für immer geschätzt werden.
            </p>
            <p>
              Mit jahrelanger Erfahrung in verschiedenen Tattoo-Stilen haben wir uns darauf konzentriert, 
              einen Raum zu schaffen, der nicht nur hochwertige Kunst produziert, sondern auch eine sichere, 
              einladende und respektvolle Umgebung für alle unsere Kunden bietet.
            </p>
            <p>
              Wir glauben daran, dass jedes Tattoo einzigartig sein sollte – genau wie die Person, die es trägt. 
              Deshalb nehmen wir uns Zeit, um Ihre Vision zu verstehen und sie in ein lebendiges Kunstwerk zu verwandeln.
            </p>
            <p>
              Ob Sie ein erstes Tattoo oder ein neues Stück zu Ihrer Sammlung hinzufügen möchten, wir freuen 
              uns darauf, mit Ihnen zusammenzuarbeiten und Ihr nächstes Tattoo zu schaffen.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white/5 py-20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['Qualität', 'Kreativität', 'Respekt'].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{value[0]}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value}</h3>
                <p className="text-text-secondary">
                  {value === 'Qualität' && 'Wir verwenden nur die besten Materialien und Techniken.'}
                  {value === 'Kreativität' && 'Jedes Design ist einzigartig und personalisiert.'}
                  {value === 'Respekt' && 'Eine sichere, einladende Umgebung für alle.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
