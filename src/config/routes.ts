export type Route = {
  id: string;
  from: string;
  to: string;
};

export const routes: Route[] = [
  { id: 'tpt-chennai', from: 'Tirupati', to: 'Chennai' },
  { id: 'tpt-bangalore', from: 'Tirupati', to: 'Bangalore' },
  { id: 'tpt-vijayawada', from: 'Tirupati', to: 'Vijayawada' },
  { id: 'tpt-nellore', from: 'Tirupati', to: 'Nellore' },
  { id: 'nlr-chennai', from: 'Nellore', to: 'Chennai' },
  { id: 'nlr-bangalore', from: 'Nellore', to: 'Bangalore' },
];
