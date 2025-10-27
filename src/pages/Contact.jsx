import { useState } from 'react';
import { t } from '../utils/i18n';
import { FiPhone, FiMail, FiMessageCircle, FiInstagram, FiMapPin, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

function Contact({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'de',
    ageConfirm: false,
    description: '',
    placement: '',
    preferred: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted! (This is a placeholder)');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t(lang, 'contact.title')}</h1>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto">
          {t(lang, 'contact.subtitle')}
        </p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
              
              <div className="space-y-4">
                <a href="tel:+41123456789" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-lg group-hover:bg-primary/30">
                    <FiPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{t(lang, 'contact.phone')}</p>
                    <p className="font-semibold text-lg">+41 12 345 67 89</p>
                  </div>
                </a>

                <a href="mailto:hello@zeros-tattoo.ch" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-lg group-hover:bg-primary/30">
                    <FiMail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{t(lang, 'contact.email')}</p>
                    <p className="font-semibold text-lg">hello@zeros-tattoo.ch</p>
                  </div>
                </a>

                <a href="https://wa.me/41123456789" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-[#25D366]/20 flex items-center justify-center rounded-lg group-hover:bg-[#25D366]/30">
                    <FaWhatsapp className="text-[#25D366]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{t(lang, 'contact.whatsapp')}</p>
                    <p className="font-semibold text-lg">+41 12 345 67 89</p>
                  </div>
                </a>

                <a href="https://instagram.com/zeros_tattoo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center rounded-lg">
                    <FiInstagram className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">{t(lang, 'contact.instagram')}</p>
                    <p className="font-semibold text-lg">@zeros_tattoo</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-lg flex-shrink-0">
                    <FiMapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Adresse</p>
                    <p className="font-semibold">{t(lang, 'contact.address')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process note */}
            <div className="p-6 bg-gradient-primary rounded-lg">
              <div className="flex items-start gap-3">
                <FiCheck className="text-white text-xl mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">So funktioniert's</h3>
                  <p className="text-white/90 text-sm">
                    {t(lang, 'contact.processNote')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">{t(lang, 'contact.formTitle')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t(lang, 'contact.formFields.name')}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t(lang, 'contact.formFields.email')}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t(lang, 'contact.formFields.phone')}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t(lang, 'contact.formFields.language')}</label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="de">Deutsch</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t(lang, 'contact.formFields.description')}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t(lang, 'contact.formFields.placement')}</label>
                <input
                  type="text"
                  value={formData.placement}
                  onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                  className="w-full px-4 py-3 bg-bg-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  checked={formData.ageConfirm}
                  onChange={(e) => setFormData({ ...formData, ageConfirm: e.target.checked })}
                  className="mt-1"
                />
                <label className="text-sm text-text-secondary">
                  {t(lang, 'contact.formFields.ageConfirm')}
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-semibold text-lg"
              >
                {t(lang, 'contact.formFields.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Standort</h2>
        <div className="bg-white/5 rounded-lg overflow-hidden aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.32!2d8.544!3d47.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI0JzMyLjQiTiA4wrAzMic1OC40IkU!5e0!3m2!1sen!2sch!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
