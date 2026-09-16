import { useTranslation } from 'react-i18next';
import { services } from '@/config/services';
import { Icon } from '@/components/Icon';

export function Services() {
  const { t } = useTranslation();

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title" id="services-title">
            {t('services.title')}
          </h2>
          <p className="section__desc">{t('services.description')}</p>
        </header>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.id} className="service-item">
              <div className="service-item__icon">
                <Icon name={service.icon} />
              </div>
              <div>
                <h3>{t(service.titleKey)}</h3>
                <p>{t(service.descriptionKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
