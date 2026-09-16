import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage } from '@/config/languages';
import en from './locales/en.json';
import te from './locales/te.json';
import ta from './locales/ta.json';
import hi from './locales/hi.json';

const STORAGE_KEY = 'sgt-language';

function getInitialLanguage(): string {
  if (typeof window === 'undefined') return defaultLanguage;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && ['en', 'te', 'ta', 'hi'].includes(saved)) return saved;
  return defaultLanguage;
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    te: { translation: te },
    ta: { translation: ta },
    hi: { translation: hi },
  },
  lng: getInitialLanguage(),
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language;
}

export default i18n;
