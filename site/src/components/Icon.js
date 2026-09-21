// Line icons drawn for this site (24px grid, currentColor).
const paths = {
  leaf: <><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15Z" /><path d="M5 19 13 11" /></>,
  box: <><path d="m3 7.5 9-4.5 9 4.5v9L12 21l-9-4.5v-9Z" /><path d="m3 7.5 9 4.5 9-4.5M12 12v9" /></>,
  check: <><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  ship: <><path d="M3 14h18l-2.5 5.5h-13L3 14Z" /><path d="M6 14V9h12v5M9 9V6h6v3" /></>,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1C11.3 20 4 12.7 4 5a1 1 0 0 1 1-1Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  handshake: <><path d="m2 11 4-4 4 1.5L12.5 7 17 8l5 3.5-3 3" /><path d="m6 7 .5 7.5 4 4a1.5 1.5 0 0 0 2.1-2.1m-2.6-.9 2.2 2.2a1.5 1.5 0 0 0 2.1-2.1l-1.2-1.2m-1.4 2.6.8.8a1.5 1.5 0 0 0 2.1-2.1L10 9.5" /></>,
};

export default function Icon({ name, size = 24, className, strokeWidth = 1.6 }) {
  if (name === "whatsapp") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
      </svg>
    );
  }
  if (name === "wechat") {
    // Two chat bubbles; the eyes and the gap around the small bubble use --icon-cut (the button colour).
    const cut = "var(--icon-cut, #07c160)";
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9.4 3C5.3 3 2 5.8 2 9.2c0 2 1.1 3.7 2.8 4.9l-.7 2.2 2.6-1.3c.8.2 1.7.4 2.7.4h.5a5.4 5.4 0 0 1-.2-1.5c0-3.3 3.2-6 7.1-6h.5C16.6 5.2 13.3 3 9.4 3Z" />
        <circle cx="6.9" cy="7.9" r="1" fill={cut} />
        <circle cx="11.9" cy="7.9" r="1" fill={cut} />
        <path d="M22 14c0-2.9-2.9-5.2-6.4-5.2S9.2 11.1 9.2 14s2.9 5.2 6.4 5.2c.8 0 1.5-.1 2.2-.3l2.1 1.1-.6-1.8C20.9 17.2 22 15.7 22 14Z" stroke={cut} strokeWidth="1.1" />
        <circle cx="13.5" cy="13.2" r=".85" fill={cut} />
        <circle cx="17.7" cy="13.2" r=".85" fill={cut} />
      </svg>
    );
  }
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
