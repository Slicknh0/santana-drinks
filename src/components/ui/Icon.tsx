import type { SVGProps } from "react";

/* Traço fino único (1.5) em todo o sistema, desenhado no grid de 24px. */
const paths = {
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </>
  ),
  train: (
    <>
      <rect x="6" y="3" width="12" height="13" rx="3" />
      <path d="M6 10h12" />
      <path d="m8.5 16-2 4.5M15.5 16l2 4.5" />
      <circle cx="9.5" cy="13" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="13" r="0.6" fill="currentColor" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  crosshair: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="1.5" />
      <path d="M15.5 8.5V6A1.5 1.5 0 0 0 14 4.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4l-4.4 1.3 1.3-4.2A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M9.2 8.6c-.3 2.9 2.6 6.2 6.1 6.3l1.1-1.4-1.9-1-.9.8a4.5 4.5 0 0 1-2.6-2.6l.8-.9-1-1.9-1.6.7Z" />
    </>
  ),
  phone: (
    <path d="M19.5 15.8v2.6a1.8 1.8 0 0 1-2 1.8A16.8 16.8 0 0 1 3.8 6.5a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.5l.5 2.6a1.8 1.8 0 0 1-.5 1.6l-1.2 1.2a13.5 13.5 0 0 0 5.8 5.8l1.2-1.2a1.8 1.8 0 0 1 1.6-.5l2.6.5a1.8 1.8 0 0 1 1.5 1.8Z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M14 8.5h2.5V5H14a4 4 0 0 0-4 4v2.5H7.5V15H10v6h3.5v-6H16l.5-3.5h-3V9.5a1 1 0 0 1 1-1Z" />
  ),
  tiktok: (
    <>
      <path d="M14 3.5v11.2a3.8 3.8 0 1 1-3.8-3.8" />
      <path d="M14 3.5c.4 2.6 2.3 4.4 5 4.6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
