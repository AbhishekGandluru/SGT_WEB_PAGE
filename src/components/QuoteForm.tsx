import { useMemo, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { businessConfig } from '@/config/business';
import { routes } from '@/config/routes';
import { isValidIndianMobile } from '@/lib/phone';
import { formatQuoteMessage, openWhatsApp } from '@/lib/whatsapp';

type FormState = {
  tripType: string;
  from: string;
  to: string;
  travelDate: string;
  returnDate: string;
  passengers: string;
  name: string;
  phone: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  tripType: 'outstation',
  from: '',
  to: '',
  travelDate: '',
  returnDate: '',
  passengers: '2',
  name: '',
  phone: '',
  notes: '',
};

export function QuoteForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle');

  const tripTypeOptions = useMemo(
    () => [
      { value: 'local', label: t('quote.tripTypeLocal') },
      { value: 'outstation', label: t('quote.tripTypeOutstation') },
      { value: 'airport', label: t('quote.tripTypeAirport') },
      { value: 'temple', label: t('quote.tripTypeTemple') },
    ],
    [t],
  );

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setStatus('idle');
  }

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.tripType) next.tripType = t('quote.required');
    if (!values.from.trim()) next.from = t('quote.required');
    if (!values.to.trim()) next.to = t('quote.required');
    if (!values.travelDate) next.travelDate = t('quote.required');
    if (!values.passengers.trim()) next.passengers = t('quote.required');
    if (!values.name.trim()) next.name = t('quote.required');
    if (!values.phone.trim()) next.phone = t('quote.required');
    else if (!isValidIndianMobile(values.phone)) next.phone = t('quote.invalidPhone');
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('err');
      return;
    }

    const tripLabel =
      tripTypeOptions.find((option) => option.value === form.tripType)?.label ??
      form.tripType;

    const message = formatQuoteMessage(t('whatsapp.message'), {
      businessName: businessConfig.name,
      tripType: tripLabel,
      from: form.from.trim(),
      to: form.to.trim(),
      date: form.travelDate,
      returnDate: form.returnDate || t('whatsapp.na'),
      passengers: form.passengers,
      name: form.name.trim(),
      phone: form.phone.trim(),
      notes: form.notes.trim() || t('whatsapp.na'),
      naLabel: t('whatsapp.na'),
    });

    openWhatsApp(message);
    setStatus('ok');
  }

  function applyRouteSuggestion(value: string) {
    const match = routes.find((route) => `${route.from}|${route.to}` === value);
    if (!match) return;
    update('from', match.from);
    update('to', match.to);
  }

  return (
    <section className="section quote" id="quote" aria-labelledby="quote-title">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title" id="quote-title">
            {t('quote.title')}
          </h2>
          <p className="section__desc">{t('quote.description')}</p>
        </header>

        <form className="quote-form" onSubmit={onSubmit} noValidate>
          <div className="form-grid">
            <div className={`field${errors.tripType ? ' field--error' : ''}`}>
              <label htmlFor="tripType">{t('quote.tripType')}</label>
              <select
                id="tripType"
                name="tripType"
                value={form.tripType}
                onChange={(e) => update('tripType', e.target.value)}
              >
                {tripTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.tripType ? <span className="field__error">{errors.tripType}</span> : null}
            </div>

            <div className="field">
              <label htmlFor="routeSuggestion">{t('routes.title')}</label>
              <select
                id="routeSuggestion"
                defaultValue=""
                onChange={(e) => applyRouteSuggestion(e.target.value)}
              >
                <option value="">—</option>
                {routes.map((route) => (
                  <option key={route.id} value={`${route.from}|${route.to}`}>
                    {t('routes.fromTo', { from: route.from, to: route.to })}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-grid form-grid--2">
              <div className={`field${errors.from ? ' field--error' : ''}`}>
                <label htmlFor="from">{t('quote.from')}</label>
                <input
                  id="from"
                  name="from"
                  autoComplete="address-level2"
                  placeholder={t('quote.fromPlaceholder')}
                  value={form.from}
                  onChange={(e) => update('from', e.target.value)}
                />
                {errors.from ? <span className="field__error">{errors.from}</span> : null}
              </div>

              <div className={`field${errors.to ? ' field--error' : ''}`}>
                <label htmlFor="to">{t('quote.to')}</label>
                <input
                  id="to"
                  name="to"
                  autoComplete="address-level2"
                  placeholder={t('quote.toPlaceholder')}
                  value={form.to}
                  onChange={(e) => update('to', e.target.value)}
                />
                {errors.to ? <span className="field__error">{errors.to}</span> : null}
              </div>
            </div>

            <div className="form-grid form-grid--2">
              <div className={`field${errors.travelDate ? ' field--error' : ''}`}>
                <label htmlFor="travelDate">{t('quote.travelDate')}</label>
                <input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                  min={today}
                  value={form.travelDate}
                  onChange={(e) => update('travelDate', e.target.value)}
                />
                {errors.travelDate ? (
                  <span className="field__error">{errors.travelDate}</span>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="returnDate">{t('quote.returnDate')}</label>
                <input
                  id="returnDate"
                  name="returnDate"
                  type="date"
                  min={form.travelDate || today}
                  value={form.returnDate}
                  onChange={(e) => update('returnDate', e.target.value)}
                />
              </div>
            </div>

            <div className="form-grid form-grid--2">
              <div className={`field${errors.passengers ? ' field--error' : ''}`}>
                <label htmlFor="passengers">{t('quote.passengers')}</label>
                <input
                  id="passengers"
                  name="passengers"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={8}
                  placeholder={t('quote.passengersPlaceholder')}
                  value={form.passengers}
                  onChange={(e) => update('passengers', e.target.value)}
                />
                {errors.passengers ? (
                  <span className="field__error">{errors.passengers}</span>
                ) : null}
              </div>

              <div className={`field${errors.phone ? ' field--error' : ''}`}>
                <label htmlFor="phone">{t('quote.phone')}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder={t('quote.phonePlaceholder')}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
                {errors.phone ? <span className="field__error">{errors.phone}</span> : null}
              </div>
            </div>

            <div className={`field${errors.name ? ' field--error' : ''}`}>
              <label htmlFor="name">{t('quote.name')}</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder={t('quote.namePlaceholder')}
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
              />
              {errors.name ? <span className="field__error">{errors.name}</span> : null}
            </div>

            <div className="field">
              <label htmlFor="notes">{t('quote.notes')}</label>
              <textarea
                id="notes"
                name="notes"
                placeholder={t('quote.notesPlaceholder')}
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn--whatsapp btn--block">
              {t('quote.submit')}
            </button>
            <a className="btn btn--ghost btn--block" href={businessConfig.contact.phoneHref}>
              {t('quote.callInstead')}
            </a>
          </div>

          {status === 'ok' ? (
            <p className="form-status form-status--ok" role="status">
              {t('quote.success')}
            </p>
          ) : null}
          {status === 'err' ? (
            <p className="form-status form-status--err" role="alert">
              {t('quote.error')}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
