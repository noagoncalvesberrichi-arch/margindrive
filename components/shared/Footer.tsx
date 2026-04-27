import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#06060A" }}>
      <div className="wrap" style={{ padding: "36px 0", display: "flex", flexDirection: "column", gap: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <Logo size="sm" />

          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { href: "#", label: "CGV" },
              { href: "#", label: "Mentions légales" },
              { href: "#", label: "Confidentialité" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
                  letterSpacing: "0.05em", color: "#303040",
                  textTransform: "uppercase", textDecoration: "none",
                  transition: "color 0.12s",
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          <span style={{ fontSize: 11, color: "#252530" }}>
            © 2026 MarginDrive. Tous droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
}
