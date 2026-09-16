import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function Hero() {
  const { t } = useTranslation();
  const quickMessage = t('whatsapp.quickHello', {
    businessName: businessConfig.name,
  });

  return (
    <section className="hero" id="home" aria-labelledby="hero-brand">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__road" />
        <svg className="hero__car" viewBox="0 0 420 180" fill="none">
          <ellipse cx="210" cy="150" rx="150" ry="14" fill="rgba(0,0,0,0.25)" />
          <path
            d="M70 118h280l-28-52a28 28 0 0 0-24-14H122a28 28 0 0 0-24 14L70 118Z"
            fill="#e8c547"
          />
          <path d="M118 72h90l18 30H100l18-30Z" fill="#0f3d2e" opacity="0.85" />
          <path d="M220 72h78l14 30H206l14-30Z" fill="#0f3d2e" opacity="0.7" />
          <circle cx="130" cy="122" r="22" fill="#14201a" />
          <circle cx="130" cy="122" r="10" fill="#f5f0e8" />
          <circle cx="290" cy="122" r="22" fill="#14201a" />
          <circle cx="290" cy="122" r="10" fill="#f5f0e8" />
        </svg>
      </div>

      <div className="hero__content">
        <p className="hero__brand" id="hero-brand">
          {businessConfig.name}
        </p>
        <h1 className="hero__title">{t('hero.title')}</h1>
        <p className="hero__subtitle">{t('hero.subtitle')}</p>
        <p className="hero__desc">{t('hero.description')}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#quote">
            {t('hero.getQuote')}
          </a>
          <a
            className="btn btn--whatsapp"
            href={buildWhatsAppUrl(quickMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.whatsapp')}
          </a>
          <a className="btn btn--secondary" href={businessConfig.contact.phoneHref}>
            {t('hero.call')}
          </a>
        </div>
      </div>
    </section>
  );
}
