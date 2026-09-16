type IconProps = {
  name: 'local' | 'outstation' | 'airport' | 'temple' | 'menu' | 'close' | 'phone' | 'whatsapp' | 'car';
  size?: number;
  className?: string;
};

export function Icon({ name, size = 22, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'local':
      return (
        <svg {...common}>
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'outstation':
      return (
        <svg {...common}>
          <path d="M4 17h16" />
          <path d="M6 17 8 7h8l2 10" />
          <circle cx="9" cy="17" r="1.5" />
          <circle cx="15" cy="17" r="1.5" />
          <path d="M9 10h6" />
        </svg>
      );
    case 'airport':
      return (
        <svg {...common}>
          <path d="M3 12h7l3-8 2 8h6" />
          <path d="M12 12v8" />
          <path d="m8 16 4 4 4-4" />
        </svg>
      );
    case 'temple':
      return (
        <svg {...common}>
          <path d="M12 3 4 9h16L12 3Z" />
          <path d="M6 9v11h12V9" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 5 5L16 11.5 20 13v3a2 2 0 0 1-2.2 2A16 16 0 0 1 5 7.2 2 2 0 0 1 7 3Z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.48A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 0 1 6.8 12.5l-.3.45.2 1.2-1.15.3-.45.27A8.1 8.1 0 0 1 4.8 12.1 8.1 8.1 0 0 1 12.04 3.8Zm-3.9 2.4h.5c.17 0 .35.01.5.38.18.44.62 1.52.67 1.63.06.12.1.25.02.4l-.34.58c-.08.13-.17.27-.07.5.1.23.46.76 1 1.23.68.6 1.26.8 1.5.9.23.1.37.08.5-.05l.6-.7c.13-.15.28-.12.47-.05l1.27.6c.18.08.3.13.35.2.05.08.05.45-.1.88-.16.43-.74.84-1.03.95-.28.1-.58.16-1.05.05a8.8 8.8 0 0 1-2.6-1.35 10.5 10.5 0 0 1-2-2.1 5.4 5.4 0 0 1-1-2.3c-.07-.48.1-.84.3-1.1.15-.2.4-.36.5-.42Z" />
        </svg>
      );
    case 'car':
      return (
        <svg {...common}>
          <path d="M4 15h16l-1.8-5.2A2 2 0 0 0 16.3 8H7.7a2 2 0 0 0-1.9 1.8L4 15Z" />
          <path d="M6 15v2M18 15v2" />
          <circle cx="8" cy="17" r="1.5" />
          <circle cx="16" cy="17" r="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
