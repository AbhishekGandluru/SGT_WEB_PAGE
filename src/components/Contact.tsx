import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function Contact() {
  const { t } = useTranslation();
  const quickMessage = t('whatsapp.quickHello', {
    businessName: businessConfig.name,
  });

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title" id="contact-title">
            {t('contact.title')}
          </h2>
          <p className="section__desc">{t('contact.description')}</p>
        </header>

        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-item__label">{t('contact.phone')}</span>
            <a href={businessConfig.contact.phoneHref}>
              {businessConfig.contact.phone}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label">{t('contact.whatsapp')}</span>
            <a
              href={buildWhatsAppUrl(quickMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {businessConfig.contact.whatsapp}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label">{t('contact.email')}</span>
            <a href={businessConfig.contact.emailHref}>
              {businessConfig.contact.email}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label">{t('contact.address')}</span>
            <span>{businessConfig.location.address}</span>
          </div>
          <div className="contact-item">
            <span className="contact-item__label">{t('contact.hours')}</span>
            <span>{t('business.hours')}</span>
          </div>
          {businessConfig.social.googleBusiness ? (
            <div className="contact-item">
              <span className="contact-item__label">{t('contact.googleBusiness')}</span>
              <a
                href={businessConfig.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('contact.googleBusiness')}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
