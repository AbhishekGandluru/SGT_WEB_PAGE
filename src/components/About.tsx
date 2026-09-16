import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title" id="about-title">
            {t('about.title')}
          </h2>
          <p className="section__desc">{t('about.description')}</p>
        </header>
        <ul className="about-points">
          <li>{t('about.point1')}</li>
          <li>{t('about.point2')}</li>
          <li>{t('about.point3')}</li>
          <li>{t('about.point4')}</li>
        </ul>
      </div>
    </section>
  );
}
