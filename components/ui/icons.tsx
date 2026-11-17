import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export const icons = {
  home: (p: IconProps) => (
    <Base {...p}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6.5 9.5V20h11V9.5" />
    </Base>
  ),
  user: (p: IconProps) => (
    <Base {...p}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.8-3.6 3.4-5.5 7-5.5s6.200 1.900 7 5.500" />
    </Base>
  ),
  note: (p: IconProps) => (
    <Base {...p}>
      <path d="M5 4h14v11l-5 5H5z" />
      <path d="M14 20v-5h5" />
      <path d="M8.500 9h7M8.500 12.500h4" />
    </Base>
  ),
  grid: (p: IconProps) => (
    <Base {...p}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </Base>
  ),
  portal: (p: IconProps) => (
    <Base {...p}>
      <path d="M7 20V8a5 5 0 0 1 10 0v12" />
      <path d="M4 20h16" />
      <path d="M12 12v4" />
    </Base>
  ),
  flask: (p: IconProps) => (
    <Base {...p}>
      <path d="M9.500 4h5" />
      <path d="M10.500 4v5.500L5.500 18a1.500 1.500 0 0 0 1.300 2.200h10.400a1.500 1.500 0 0 0 1.300-2.200l-5-8.500V4" />
      <path d="M8 15h8" />
    </Base>
  ),
  pin: (p: IconProps) => (
    <Base {...p}>
      <path d="M9 4h6l-1 6 3 3.500H7L10 10z" />
      <path d="M12 13.500V20" />
    </Base>
  ),
  check: (p: IconProps) => (
    <Base {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="m8 12.500 3 3 5-6.500" />
    </Base>
  ),
  mail: (p: IconProps) => (
    <Base {...p}>
      <rect x="3.500" y="5.500" width="17" height="13" rx="2" />
      <path d="m4.500 7.500 7.500 6 7.500-6" />
    </Base>
  ),
  github: (p: IconProps) => (
    <Base {...p}>
      <path d="M9 19c-4 1.200-4-2-5.500-2.500" />
      <path d="M15 21v-3.200a2.800 2.800 0 0 0-.8-2.200c2.700-.3 5.500-1.300 5.500-5.900a4.600 4.600 0 0 0-1.300-3.200 4.300 4.300 0 0 0-.1-3.200s-1-.3-3.300 1.300a11.400 11.400 0 0 0-6 0C6.700 3 5.700 3.300 5.700 3.300a4.300 4.300 0 0 0-.1 3.200 4.600 4.600 0 0 0-1.300 3.200c0 4.600 2.800 5.600 5.500 5.900a2.800 2.800 0 0 0-.8 2.200V21" />
    </Base>
  ),
  linkedin: (p: IconProps) => (
    <Base {...p}>
      <rect x="3.500" y="3.500" width="17" height="17" rx="2.500" />
      <path d="M8 10.500V16M8 7.800v.1M11.500 16v-5.500M11.500 13a2.300 2.300 0 0 1 4.600 0v3" />
    </Base>
  ),
  arrowUpRight: (p: IconProps) => (
    <Base {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </Base>
  ),
};

export type IconName = keyof typeof icons;
