import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Routes } from '@/components/Routes';
import { Vehicles } from '@/components/Vehicles';
import { QuoteForm } from '@/components/QuoteForm';
import { Testimonials } from '@/components/Testimonials';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { StickyActions } from '@/components/StickyActions';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        {t('a11y.skipToContent')}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Routes />
        <Vehicles />
        <QuoteForm />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}
