import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  enabledLanguages,
  supportedLanguages,
  type LanguageCode,
} from '@/config/languages';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const current =
    supportedLanguages.find((lang) => lang.code === i18n.language) ??
    supportedLanguages[0];

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  function selectLanguage(code: LanguageCode) {
    if (!enabledLanguages.includes(code)) return;
    void i18n.changeLanguage(code);
    setOpen(false);
  }

  return (
    <div className="lang-switcher" ref={rootRef}>
      <button
        type="button"
        className="lang-switcher__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={t('nav.language')}
        onClick={() => setOpen((value) => !value)}
      >
        {current.shortLabel} ▾
      </button>
      {open ? (
        <div className="lang-switcher__menu" role="listbox" id={menuId}>
          {supportedLanguages.map((lang) => {
            const enabled = enabledLanguages.includes(lang.code);
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                className="lang-switcher__option"
                aria-current={lang.code === current.code}
                aria-selected={lang.code === current.code}
                disabled={!enabled}
                onClick={() => selectLanguage(lang.code)}
              >
                {lang.nativeLabel}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
