import { businessConfig } from '@/config/business';

export type QuoteMessageParams = {
  businessName?: string;
  tripType: string;
  from: string;
  to: string;
  date: string;
  returnDate: string;
  passengers: string;
  name: string;
  phone: string;
  notes: string;
  naLabel: string;
};

export function buildWhatsAppUrl(message: string, digits = businessConfig.contact.whatsappDigits): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

export function formatQuoteMessage(
  template: string,
  params: QuoteMessageParams,
): string {
  const na = params.naLabel;
  return template
    .replaceAll('{{businessName}}', params.businessName ?? businessConfig.name)
    .replaceAll('{{tripType}}', params.tripType || na)
    .replaceAll('{{from}}', params.from || na)
    .replaceAll('{{to}}', params.to || na)
    .replaceAll('{{date}}', params.date || na)
    .replaceAll('{{returnDate}}', params.returnDate || na)
    .replaceAll('{{passengers}}', params.passengers || na)
    .replaceAll('{{name}}', params.name || na)
    .replaceAll('{{phone}}', params.phone || na)
    .replaceAll('{{notes}}', params.notes || na);
}
