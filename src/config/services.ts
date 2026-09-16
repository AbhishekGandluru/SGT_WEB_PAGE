export type Service = {
  id: string;
  icon: 'local' | 'outstation' | 'airport' | 'temple';
  titleKey: string;
  descriptionKey: string;
};

export const services: Service[] = [
  {
    id: 'local',
    icon: 'local',
    titleKey: 'services.local.title',
    descriptionKey: 'services.local.description',
  },
  {
    id: 'outstation',
    icon: 'outstation',
    titleKey: 'services.outstation.title',
    descriptionKey: 'services.outstation.description',
  },
  {
    id: 'airport',
    icon: 'airport',
    titleKey: 'services.airport.title',
    descriptionKey: 'services.airport.description',
  },
  {
    id: 'temple',
    icon: 'temple',
    titleKey: 'services.temple.title',
    descriptionKey: 'services.temple.description',
  },
];
