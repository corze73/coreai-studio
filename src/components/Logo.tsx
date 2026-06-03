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
      <rect x="1" y="1" width="30" height="30" rx="8" fill="#0F172A" />
      <rect x="1" y="1" width="30" height="30" rx="8" stroke="#1D4ED8" strokeOpacity="0.55" />

      <path
        d="M20.5 10.2H14.6C12.11 10.2 10.1 12.22 10.1 14.7V17.3C10.1 19.79 12.11 21.8 14.6 21.8H20.5"
        stroke="#93C5FD"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4 12.4L19.6 15.1L16.4 17.8"
        stroke="#3B82F6"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.6 8.8H11.2" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}