import { useTranslation } from 'react-i18next';
import { testimonials } from '@/config/testimonials';

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      className="section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <header className="section__header">
          <h2 className="section__title" id="testimonials-title">
            {t('testimonials.title')}
          </h2>
          <p className="section__desc">{t('testimonials.description')}</p>
        </header>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial">
              <div className="testimonial__stars" aria-label={`${item.rating} / 5`}>
                {'★'.repeat(item.rating)}
              </div>
              <blockquote>{t(item.quoteKey)}</blockquote>
              <footer>
                <strong>{t(item.nameKey)}</strong>
                {' · '}
                {t(item.placeKey)}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
