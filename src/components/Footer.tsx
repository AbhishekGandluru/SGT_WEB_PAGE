import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <strong>{businessConfig.name}</strong>
        <p>{t('footer.tagline')}</p>
        <p>
          {t('footer.rights', {
            year,
            businessName: businessConfig.name,
          })}
        </p>
      </div>
    </footer>
  );
}
