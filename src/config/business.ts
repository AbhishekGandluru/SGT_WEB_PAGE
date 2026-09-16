export const businessConfig = {
  name: 'Sri Gayathri Travels',
  shortName: 'SGT',
  taglineKey: 'business.tagline',

  contact: {
    phone: '+91 90000 00000',
    phoneHref: 'tel:+919000000000',
    whatsapp: '+91 90000 00000',
    /** Digits only, country code included — used for wa.me links */
    whatsappDigits: '919000000000',
    secondaryPhone: '+91 90000 00001',
    secondaryPhoneHref: 'tel:+919000000001',
    email: 'bookings@srigayathritravels.example',
    emailHref: 'mailto:bookings@srigayathritravels.example',
  },

  location: {
    primary: 'Tirupati / Nellore',
    address: 'Tirupati & Nellore, Andhra Pradesh',
    state: 'Andhra Pradesh',
    country: 'India',
  },

  social: {
    instagram: '',
    facebook: '',
    googleBusiness: 'https://maps.google.com/?q=Tirupati',
  },

  hours: {
    key: 'business.hours',
  },
} as const;

export type BusinessConfig = typeof businessConfig;
