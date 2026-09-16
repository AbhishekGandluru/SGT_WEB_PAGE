export const supportedLanguages = [
  { code: 'en', label: 'English', shortLabel: 'EN', nativeLabel: 'English' },
  { code: 'te', label: 'Telugu', shortLabel: 'TE', nativeLabel: 'తెలుగు' },
  { code: 'ta', label: 'Tamil', shortLabel: 'TA', nativeLabel: 'தமிழ்' },
  { code: 'hi', label: 'Hindi', shortLabel: 'HI', nativeLabel: 'हिन्दी' },
] as const;

export type LanguageCode = (typeof supportedLanguages)[number]['code'];

export const defaultLanguage: LanguageCode = 'en';

/** Languages available in the switcher (all shipped locales are ready) */
export const enabledLanguages: LanguageCode[] = ['en', 'te', 'ta', 'hi'];
