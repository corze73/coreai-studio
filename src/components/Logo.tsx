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
      {/* Blue circular background */}
      <circle
        cx="16"
        cy="16"
        r="16"
        fill="#3B82F6"
      />
      
      {/* Horizontal lines representing content/text */}
      <rect
        x="8"
        y="10"
        width="12"
        height="2"
        rx="1"
        fill="white"
      />
      <rect
        x="8"
        y="14"
        width="10"
        height="2"
        rx="1"
        fill="white"
      />
      <rect
        x="8"
        y="18"
        width="8"
        height="2"
        rx="1"
        fill="white"
      />
      
      {/* Green accent dot/element */}
      <circle
        cx="22"
        cy="12"
        r="3"
        fill="#10B981"
      />
    </svg>
  );
}