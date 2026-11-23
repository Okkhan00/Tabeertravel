const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

const I = (children) =>
  function Icon({ size, className }) {
    const props = size ? { ...base, width: size, height: size } : base;
    return (
      <svg {...props} className={className}>
        {children}
      </svg>
    );
  };

export const PlaneIcon = I(<path d="M17.8 19.2 16 11l3.5-3.5A2.1 2.1 0 0 0 16.5 4.5L13 8 4.8 6.2 3.5 7.5l6.3 3.4-3.1 3.1-3-.5L2.5 15l4 1.5L8 20.5l1-1.2-.5-3 3.1-3.1 3.4 6.3z" />);
export const PassportIcon = I(
  <>
    <rect x="5" y="2.5" width="14" height="19" rx="2" />
    <circle cx="12" cy="10" r="3" />
    <path d="M9 16.5h6" />
  </>
);
export const CrescentIcon = I(
  <>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" />
    <path d="m17 4 .6 1.4L19 6l-1.4.6L17 8l-.6-1.4L15 6l1.4-.6z" />
  </>
);
export const GlobeIcon = I(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </>
);
export const BedIcon = I(
  <>
    <path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" />
    <circle cx="7" cy="11" r="1.6" />
  </>
);
export const BriefcaseIcon = I(
  <>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2M3 13h18" />
  </>
);
export const TagIcon = I(
  <>
    <path d="M3 12.5V4h8.5L21 13.5 13.5 21z" />
    <circle cx="7.6" cy="8.1" r="1.2" />
  </>
);
export const HeadsetIcon = I(
  <>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
    <path d="M19 20a3 3 0 0 1-3 2h-2" />
  </>
);
export const ShieldIcon = I(
  <>
    <path d="M12 3 4.5 6v5.5c0 4.5 3.1 8 7.5 9.5 4.4-1.5 7.5-5 7.5-9.5V6z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </>
);
export const LayersIcon = I(
  <>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m3 13 9 5 9-5" />
  </>
);
export const SmileIcon = I(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 14a4.2 4.2 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
  </>
);
export const ChatIcon = I(<path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l1-4.5A8 8 0 1 1 21 12z" />);
export const PhoneIcon = I(
  <path d="M5 4h3.5l1.6 4-2 1.3a11 11 0 0 0 5.6 5.6l1.3-2 4 1.6V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
);
export const MailIcon = I(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </>
);
export const ArrowIcon = I(<path d="M5 12h14M13 6l6 6-6 6" />);
export const MenuIcon = I(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CloseIcon = I(<path d="M6 6l12 12M18 6 6 18" />);
export const PinIcon = I(
  <>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </>
);

// Brand WhatsApp glyph (filled)
export function WhatsAppIcon({ size = 22, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true" focusable="false">
      <path d="M16.01 3C9.38 3 4 8.37 4 15c0 2.35.68 4.64 1.97 6.6L4 29l7.62-1.93A12 12 0 0 0 16.01 27C22.64 27 28 21.63 28 15S22.64 3 16.01 3zm0 21.8c-1.8 0-3.56-.5-5.1-1.43l-.37-.22-4.52 1.14 1.2-4.4-.24-.4A9.7 9.7 0 0 1 6.3 15c0-5.36 4.36-9.7 9.72-9.7 5.35 0 9.7 4.34 9.7 9.7s-4.36 9.8-9.71 9.8zm5.33-7.27c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37s-1.02 1-1.02 2.44 1.05 2.83 1.2 3.03c.15.2 2.06 3.15 5 4.41.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.73-.71 1.97-1.39.24-.69.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z" />
    </svg>
  );
}
