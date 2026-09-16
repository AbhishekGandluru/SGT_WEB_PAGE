import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';
import { Icon } from '@/components/Icon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function StickyActions() {
  const { t } = useTranslation();
  const quickMessage = t('whatsapp.quickHello', {
    businessName: businessConfig.name,
  });

  return (
    <div className="sticky-actions" role="navigation" aria-label="Quick actions">
      <a className="sticky-actions__call" href={businessConfig.contact.phoneHref}>
        <Icon name="phone" size={18} />
        {t('sticky.call')}
      </a>
      <a
        className="sticky-actions__wa"
        href={buildWhatsAppUrl(quickMessage)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={18} />
        {t('sticky.whatsapp')}
      </a>
      <a className="sticky-actions__quote" href="#quote">
        {t('sticky.quote')}
      </a>
    </div>
  );
}
