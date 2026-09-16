export type Vehicle = {
  id: string;
  nameKey: string;
  model: string;
  seating: string;
  images: string[];
  specificationKeys: string[];
  highlightKeys: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: 'dzire-2026',
    nameKey: 'vehicles.dzire.name',
    model: '2026',
    seating: '4+1',
    images: [],
    specificationKeys: [
      'vehicles.dzire.spec.ac',
      'vehicles.dzire.spec.luggage',
      'vehicles.dzire.spec.fuel',
    ],
    highlightKeys: [
      'vehicles.dzire.highlight.comfort',
      'vehicles.dzire.highlight.ideal',
    ],
  },
];
