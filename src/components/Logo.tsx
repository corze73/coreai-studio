interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#0F172A" />
      <rect x="1" y="1" width="30" height="30" rx="9" stroke="#1E40AF" strokeOpacity="0.55" />

      <path
        d="M20.4 9.6H14.8C11.93 9.6 9.6 11.93 9.6 14.8V17.2C9.6 20.07 11.93 22.4 14.8 22.4H20.4"
        stroke="#93C5FD"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8 12.2L22.4 16L17.8 19.8"
        stroke="#3B82F6"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22.4" cy="8.8" r="1.4" fill="#60A5FA" />
    </svg>
  );
}