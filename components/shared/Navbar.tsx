"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, Settings, LogOut, CreditCard } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  user?: { email: string } | null;
  showPromo?: boolean;
}

function PromoBar({ onClose }: { onClose: () => void }) {
  const [time, setTime] = useState({ d: 26, h: 4, m: 3, s: 42 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime(t => {
        let { d, h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div style={{
      height: 36, background: "#0D0D14",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "0 20px", gap: 16, position: "relative",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
          letterSpacing: "0.07em", textTransform: "uppercase", color: "#4A4A58",
        }}>
          Offre limitée
        </span>
        <div style={{ width: 1, height: 10, background: "rgba(255,255,255,0.06)" }} />
        <span style={{ fontSize: 12, color: "#7A7A88" }}>
          <strong style={{ color: "#C5A558", fontWeight: 500 }}>–25% sur le plan Pro</strong>
          {" "}avec le code
        </span>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
          background: "rgba(197,165,88,0.08)", padding: "3px 8px",
          borderRadius: 3, color: "#C5A558",
          border: "1px solid rgba(197,165,88,0.18)", letterSpacing: "0.05em",
        }}>
          MARGIN25
        </span>
        <div className="countdown-block">{pad(time.d)}j {pad(time.h)}h {pad(time.m)}m {pad(time.s)}s</div>
      </div>
      <button
        onClick={onClose}
        style={{
          position: "absolute", right: 14, background: "transparent", border: "none",
          cursor: "pointer", color: "#303040", display: "flex", padding: 4,
          transition: "color 0.12s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "#7A7A88")}
        onMouseLeave={e => (e.currentTarget.style.color = "#303040")}
      >
        <X size={12} />
      </button>
    </div>
  );
}

function UserMenu({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const initial = email.charAt(0).toUpperCase();

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", gap: 9,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)", borderRadius: 5,
          cursor: "pointer", padding: "7px 13px", transition: "border-color 0.14s",
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(197,165,88,0.15)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
      >
        <div style={{
          width: 22, height: 22, borderRadius: "50%",
          background: "rgba(197,165,88,0.1)", border: "1px solid rgba(197,165,88,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700, color: "#C5A558" }}>
            {initial}
          </span>
        </div>
        <span style={{ fontSize: 12, color: "#7A7A88", maxWidth: 130, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {email}
        </span>
        <ChevronDown size={11} style={{ color: "#4A4A58", flexShrink: 0 }} />
      </button>

      {open && (
        <div
          className="card"
          style={{
            position: "absolute", right: 0, top: "calc(100% + 8px)",
            minWidth: 185, zIndex: 200, overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {[
            { icon: Settings,   label: "Paramètres",  href: "/settings" },
            { icon: CreditCard, label: "Abonnement",  href: "/subscription" },
            { icon: LogOut,     label: "Déconnexion", href: "/login" },
          ].map(({ icon: Icon, label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex", alignItems: "center", gap: 11,
                padding: "12px 16px", fontSize: 12, color: "#7A7A88",
                textDecoration: "none", transition: "color 0.1s, background 0.1s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.color = "#EDE8DF";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#7A7A88";
              }}
            >
              <Icon size={13} style={{ color: "#4A4A58" }} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const NAV_LINKS = [
  { href: "/analyze-link", label: "Analyser" },
  { href: "/deals",        label: "Best Deals" },
  { href: "/pricing",      label: "Tarifs" },
  { href: "/dashboard",    label: "Dashboard" },
];

export function Navbar({ user, showPromo = true }: NavbarProps) {
  const [promoOpen, setPromoOpen] = useState(showPromo);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
      {promoOpen && <PromoBar onClose={() => setPromoOpen(false)} />}

      <header style={{
        height: 56,
        background: scrolled ? "rgba(8,8,12,0.96)" : "#08080C",
        backdropFilter: scrolled ? "blur(28px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.04)",
        transition: "background 0.25s, backdrop-filter 0.25s",
      }}>
        <div className="wrap" style={{ height: "100%", display: "flex", alignItems: "center" }}>

          {/* Logo */}
          <div style={{ flexShrink: 0, marginRight: 12 }}>
            <Logo size="sm" />
          </div>

          {/* Center nav */}
          <nav style={{ display: "flex", alignItems: "center", flex: 1, justifyContent: "center", gap: 0 }}>
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link">{label}</Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {user ? (
              <UserMenu email={user.email} />
            ) : (
              <>
                <Link href="/login" className="nav-link">Connexion</Link>
                <Link href="/register" className="btn-gold" style={{ padding: "9px 20px", fontSize: 9 }}>
                  Commencer
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
