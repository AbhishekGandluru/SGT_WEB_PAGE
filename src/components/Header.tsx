import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';
import { Icon } from '@/components/Icon';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const navItems = [
  { href: '#home', key: 'nav.home' },
  { href: '#services', key: 'nav.services' },
  { href: '#routes', key: 'nav.routes' },
  { href: '#vehicles', key: 'nav.vehicles' },
  { href: '#quote', key: 'nav.quote' },
  { href: '#about', key: 'nav.about' },
  { href: '#contact', key: 'nav.contact' },
] as const;

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand__mark">{businessConfig.shortName}</span>
          <span className="brand__text">
            <span className="brand__name">{businessConfig.name}</span>
            <span className="brand__tag">{t('business.tagline')}</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
      >
        <nav className="container" aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {t(item.key)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
