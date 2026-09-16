export function isValidIndianMobile(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  if (digits.length === 10) return /^[6-9]\d{9}$/.test(digits);
  if (digits.length === 12 && digits.startsWith('91')) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  return false;
}

export function normalizePhoneDisplay(value: string): string {
  return value.replace(/\D/g, '').slice(0, 12);
}
