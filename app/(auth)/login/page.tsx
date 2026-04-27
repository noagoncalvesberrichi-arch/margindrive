"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#08080C", display: "flex" }}>

      {/* ── Left — Stats panel (desktop only) ── */}
      <div
        className="auth-panel"
        style={{
          width: "45%", flexShrink: 0,
          position: "relative", background: "#0A0A0F",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          display: "flex", flexDirection: "column",
          justifyContent: "space-between", padding: "52px 60px",
        }}
      >
        {/* Gold spotlight */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "50%",
          background: "radial-gradient(ellipse 80% 60% at 40% -10%, rgba(197,165,88,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Logo />
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <span className="eyebrow" style={{ display: "block", marginBottom: 20 }}>
            PERFORMANCE
          </span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
            fontWeight: 700, color: "#EDE8DF", letterSpacing: "-0.04em",
            lineHeight: 1.0, marginBottom: 48,
          }}>
            Chaque analyse,<br />une décision<br />
            <span style={{ color: "#C5A558" }}>plus rentable.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { val: "×4.2",    label: "ROI moyen" },
              { val: "< 10s",   label: "Par analyse" },
              { val: "+2 840€", label: "Marge / deal" },
              { val: "94%",     label: "Précision cotation" },
            ].map(({ val, label }) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10, padding: "22px 20px",
              }}>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 30, fontWeight: 700,
                  color: "#C5A558", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6,
                }}>
                  {val}
                </p>
                <p style={{ fontSize: 12, color: "#4A4A58" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            background: "rgba(197,165,88,0.04)",
            border: "1px solid rgba(197,165,88,0.12)",
            borderRadius: 10, padding: "20px 22px",
          }}>
            <p style={{ fontSize: 13, color: "#7A7A88", fontStyle: "italic", lineHeight: 1.7, marginBottom: 10 }}>
              {`"J'ai récupéré le coût de l'abonnement dès ma première analyse. C'est désormais un outil indispensable."`}
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#4A4A58", letterSpacing: "0.05em" }}>
              — THOMAS M. · REVENDEUR INDÉPENDANT · LYON
            </p>
          </div>
        </div>
      </div>

      {/* ── Right — Form ── */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "60px 48px",
      }}>
        <div style={{ width: "100%", maxWidth: 400 }}>

          <div className="logo-mobile" style={{ marginBottom: 52 }}>
            <Logo />
          </div>

          <p style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
            letterSpacing: "0.08em", color: "#4A4A58", marginBottom: 20,
          }}>
            CONNEXION
          </p>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
            fontWeight: 700, color: "#EDE8DF", letterSpacing: "-0.04em",
            lineHeight: 0.95, marginBottom: 12,
          }}>
            Bon retour.
          </h1>
          <p style={{ fontSize: 13, color: "#4A4A58", marginBottom: 40 }}>
            Pas encore de compte ?{" "}
            <Link href="/register" style={{ color: "#C5A558", textDecoration: "none" }}>
              Commencer gratuitement →
            </Link>
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label className="field-label">Adresse email</label>
              <input type="email" className="input-md" placeholder="vous@exemple.com" />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <label className="field-label" style={{ marginBottom: 0 }}>Mot de passe</label>
                <a href="#" style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
                  color: "#4A4A58", textDecoration: "none", letterSpacing: "0.1em",
                }}>
                  Oublié ?
                </a>
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPw ? "text" : "password"}
                  className="input-md"
                  placeholder="••••••••"
                  style={{ paddingRight: 46 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(v => !v)}
                  style={{
                    position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                    background: "transparent", border: "none", cursor: "pointer",
                    color: "#4A4A58", display: "flex",
                  }}
                >
                  {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer" }}>
              <input type="checkbox" style={{ accentColor: "#C5A558", width: 13, height: 13, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#4A4A58" }}>Se souvenir de moi</span>
            </label>

            <Link href="/dashboard" className="btn-gold" style={{ justifyContent: "center", marginTop: 4 }}>
              Se connecter <ArrowRight size={13} />
            </Link>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "28px 0" }}>
            <div className="divider" style={{ flex: 1 }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#1E1E2A", letterSpacing: "0.06em" }}>OU</span>
            <div className="divider" style={{ flex: 1 }} />
          </div>

          {/* Google */}
          <button className="btn-ghost" style={{ width: "100%", justifyContent: "center", gap: 12 }}>
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continuer avec Google
          </button>
        </div>
      </div>

      <style>{`
        .auth-panel { display: none; }
        .logo-mobile { display: block; }
        @media (min-width: 1024px) {
          .auth-panel { display: flex !important; }
          .logo-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
