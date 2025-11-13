import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import LocalBusinessSchema from './components/LocalBusinessSchema';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Artist from './pages/Artist';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import Legal from './pages/Legal';

function AppRoutes({ lang, changeLanguage }) {
  useEffect(() => {
    const pathLang = window.location.pathname.split('/')[1];
    if (['de', 'en', 'es'].includes(pathLang) && pathLang !== lang) {
      changeLanguage(pathLang);
    }
  }, [lang, changeLanguage]);

  return (
    <Routes>
      <Route index element={<Navigate to={`/${lang}`} replace />} />
      <Route path="gallery" element={<Gallery lang={lang} />} />
      <Route path="about" element={<About lang={lang} />} />
      <Route path="artist" element={<Artist lang={lang} />} />
      <Route path="contact" element={<Contact lang={lang} />} />
      <Route path="faq" element={<FAQ lang={lang} />} />
      <Route path="pricing" element={<Pricing lang={lang} />} />
      <Route path="legal" element={<Legal lang={lang} />} />
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
    </Routes>
  );
}

function App() {
  const [lang, setLang] = useState('de');

  useEffect(() => {
    const savedLang = localStorage.getItem('zeros-tattoo-lang') || 'de';
    setLang(savedLang);
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('zeros-tattoo-lang', newLang);
  };

  return (
    <Router basename="/">
      <div className="min-h-screen bg-bg-dark">
        <LocalBusinessSchema />
        <Header lang={lang} changeLanguage={changeLanguage} />
        
        <Routes>
          <Route path="/" element={<Navigate to="/de" replace />} />
          <Route path="/de" element={<Home lang="de" />} />
          <Route path="/en" element={<Home lang="en" />} />
          <Route path="/es" element={<Home lang="es" />} />
          <Route path="/de/*" element={<AppRoutes lang="de" changeLanguage={changeLanguage} />} />
          <Route path="/en/*" element={<AppRoutes lang="en" changeLanguage={changeLanguage} />} />
          <Route path="/es/*" element={<AppRoutes lang="es" changeLanguage={changeLanguage} />} />
          <Route path="/:lang/*" element={<AppRoutes lang={lang} changeLanguage={changeLanguage} />} />
        </Routes>
        
        <Footer lang={lang} />
        <WhatsAppButton lang={lang} />
        <CookieBanner lang={lang} />
      </div>
    </Router>
  );
}

export default App;