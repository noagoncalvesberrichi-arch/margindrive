import Link from "next/link";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ href = "/", size = "md" }: LogoProps) {
  const iconW = size === "sm" ? 16 : size === "lg" ? 26 : 20;
  const textSize = size === "sm" ? 12 : size === "lg" ? 17 : 14;
  const gap = size === "sm" ? 8 : 10;

  return (
    <Link href={href} style={{ display: "inline-flex", alignItems: "center", gap, textDecoration: "none", flexShrink: 0 }}>
      {/* Wordmark with icon accent */}
      <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
        {/* Icon bar */}
        <svg width={iconW} height={iconW} viewBox="0 0 20 20" fill="none">
          <path d="M2 14.5L7.5 9L11 12.5L18 5.5" stroke="#C5A558" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 5.5H18V10" stroke="#C5A558" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: textSize,
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: 1,
        color: "#EDE8DF",
      }}>
        MARGIN<span style={{ color: "#C5A558" }}>DRIVE</span>
      </span>
    </Link>
  );
}
