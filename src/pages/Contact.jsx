import { t } from '../utils/i18n';
import { FiPhone, FiMail, FiInstagram, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

function Contact({ lang }) {
  // TODO: Update these contact details
  const contactInfo = {
    phone: '+41123456789',
    email: 'hello@zeros-tattoo.ch',
    whatsapp: '+41123456789', // WhatsApp number (same as phone or different)
    instagram: 'https://instagram.com/zeros_tattoo',
    address: t(lang, 'contact.address'),
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

      {/* Contact Methods */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <a 
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                <FiPhone className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-secondary mb-1">{t(lang, 'contact.phone')}</p>
                <p className="font-semibold text-lg">{contactInfo.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                <FiMail className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-secondary mb-1">{t(lang, 'contact.email')}</p>
                <p className="font-semibold text-lg break-all">{contactInfo.email}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a 
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-[#25D366]/20 flex items-center justify-center rounded-lg group-hover:bg-[#25D366]/30 transition-colors flex-shrink-0">
                <FaWhatsapp className="text-[#25D366]" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-secondary mb-1">{t(lang, 'contact.whatsapp')}</p>
                <p className="font-semibold text-lg">{contactInfo.whatsapp}</p>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center rounded-lg flex-shrink-0">
                <FiInstagram className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-secondary mb-1">{t(lang, 'contact.instagram')}</p>
                <p className="font-semibold text-lg">{contactInfo.instagram.replace('https://instagram.com/', '@')}</p>
              </div>
            </a>
          </div>

          {/* Address */}
          <div className="mt-6 p-6 bg-white/5 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-lg flex-shrink-0">
                <FiMapPin className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Adresse</p>
                <p className="font-semibold text-lg">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Standort</h2>
        <div className="bg-white/5 rounded-lg overflow-hidden aspect-video max-w-6xl mx-auto">
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
