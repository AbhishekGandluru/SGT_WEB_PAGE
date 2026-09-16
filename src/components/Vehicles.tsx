import { useTranslation } from 'react-i18next';
import { vehicles } from '@/config/vehicles';
import { Icon } from '@/components/Icon';

export function Vehicles() {
  const { t } = useTranslation();

  return (
    <section className="section" id="vehicles" aria-labelledby="vehicles-title">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title" id="vehicles-title">
            {t('vehicles.title')}
          </h2>
          <p className="section__desc">{t('vehicles.description')}</p>
        </header>

        <div className="vehicle-list">
          {vehicles.map((vehicle) => (
            <article key={vehicle.id} className="vehicle-card">
              <div className="vehicle-card__media">
                {vehicle.images[0] ? (
                  <img
                    src={vehicle.images[0]}
                    alt={t(vehicle.nameKey)}
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                ) : (
                  <>
                    <Icon name="car" size={56} />
                    <span>{t('vehicles.noImage')}</span>
                  </>
                )}
              </div>
              <div className="vehicle-card__body">
                <h3>{t(vehicle.nameKey)}</h3>
                <div className="vehicle-card__meta">
                  <span className="chip">
                    {t('vehicles.model')}: {vehicle.model}
                  </span>
                  <span className="chip">
                    {t('vehicles.seating')}: {vehicle.seating}
                  </span>
                </div>
                <p>
                  <strong>{t('vehicles.specs')}</strong>
                </p>
                <ul>
                  {vehicle.specificationKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                  {vehicle.highlightKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
                <a className="btn btn--primary btn--block" href="#quote">
                  {t('vehicles.book')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
