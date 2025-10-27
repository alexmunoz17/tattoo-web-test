import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { t } from '../utils/i18n';

function WhatsAppButton({ lang }) {
  const [isVisible, setIsVisible] = useState(true);
  
  const phone = '+41123456789'; // Replace with actual phone
  const message = lang === 'de' 
    ? 'Hallo! Ich interessiere mich für ein Tattoo.'
    : lang === 'en'
    ? 'Hi! I\'m interested in getting a tattoo.'
    : 'Hola! Me interesa hacerme un tatuaje.';
  
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;
