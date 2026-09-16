export type Testimonial = {
  id: string;
  quoteKey: string;
  nameKey: string;
  placeKey: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 'ravi',
    quoteKey: 'testimonials.items.ravi.quote',
    nameKey: 'testimonials.items.ravi.name',
    placeKey: 'testimonials.items.ravi.place',
    rating: 5,
  },
  {
    id: 'lakshmi',
    quoteKey: 'testimonials.items.lakshmi.quote',
    nameKey: 'testimonials.items.lakshmi.name',
    placeKey: 'testimonials.items.lakshmi.place',
    rating: 5,
  },
  {
    id: 'arun',
    quoteKey: 'testimonials.items.arun.quote',
    nameKey: 'testimonials.items.arun.name',
    placeKey: 'testimonials.items.arun.place',
    rating: 5,
  },
];
