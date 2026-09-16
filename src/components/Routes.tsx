import { useTranslation } from 'react-i18next';
import { routes } from '@/config/routes';
import { businessConfig } from '@/config/business';
import { buildWhatsAppUrl, formatQuoteMessage } from '@/lib/whatsapp';

export function Routes() {
  const { t } = useTranslation();

  function enquireHref(from: string, to: string) {
    const message = formatQuoteMessage(t('whatsapp.message'), {
      tripType: t('quote.tripTypeOutstation'),
      from,
      to,
      date: t('whatsapp.na'),
      returnDate: t('whatsapp.na'),
      passengers: t('whatsapp.na'),
      name: t('whatsapp.na'),
      phone: t('whatsapp.na'),
      notes: t('whatsapp.na'),
      naLabel: t('whatsapp.na'),
      businessName: businessConfig.name,
    });
    return buildWhatsAppUrl(message);
  }

  return (
    <section className="section" id="routes" aria-labelledby="routes-title">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title" id="routes-title">
            {t('routes.title')}
          </h2>
          <p className="section__desc">{t('routes.description')}</p>
        </header>

        <div className="route-list">
          {routes.map((route) => (
            <div key={route.id} className="route-item">
              <span className="route-item__label">
                {t('routes.fromTo', { from: route.from, to: route.to })}
              </span>
              <a
                className="btn btn--ghost"
                href={enquireHref(route.from, route.to)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('routes.enquire')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
