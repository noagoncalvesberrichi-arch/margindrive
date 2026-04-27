"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const PLANS = [
  { id: "starter", name: "Starter", price: "29,99€" },
  { id: "pro",     name: "Pro",     price: "59,99€", popular: true },
  { id: "premium", name: "Premium", price: "99€" },
];

const PERKS = [
  "7 jours d'essai — aucune carte requise",
  "Accès immédiat à toutes les fonctionnalités",
  "Résiliation en 1 clic, zéro engagement",
];

export default function RegisterPage() {
  const [showPw, setShowPw] = useState(false);
  const [plan, setPlan] = useState("pro");

  return (
    <div style={{ minHeight: "100vh", background: "#08080C", display: "flex" }}>

      {/* ── Left — Brand panel (desktop only) ── */}
      <div
        className="auth-panel"
        style={{
          width: "42%", flexShrink: 0,
          position: "relative", background: "#0A0A0F",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "60px 64px",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "55%",
          background: "radial-gradient(ellipse 100% 70% at 30% -10%, rgba(197,165,88,0.11) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
          background: "radial-gradient(ellipse 80% 60% at 70% 110%, rgba(34,197,94,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 56 }}>
            <Logo />
          </div>

          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#C5A558", letterSpacing: "0.08em", marginBottom: 20 }}>
            POURQUOI MARGINDRIVE
          </p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 3rem)",
            fontWeight: 700, color: "#EDE8DF",
            letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 36,
          }}>
            Détectez les affaires<br />avant tout le monde.
          </h2>
          <p style={{ fontSize: 14, color: "#4A4A58", lineHeight: 1.8, marginBottom: 40, maxWidth: 340 }}>
            Rejoignez les revendeurs automobiles qui transforment leur activité grâce à l'analyse intelligente.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 52 }}>
            {PERKS.map(p => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  background: "rgba(197,165,88,0.1)",
                  border: "1px solid rgba(197,165,88,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Check size={9} style={{ color: "#C5A558" }} />
                </div>
                <span style={{ fontSize: 13, color: "#7A7A88" }}>{p}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: "rgba(197,165,88,0.04)",
            border: "1px solid rgba(197,165,88,0.12)",
            borderRadius: 10, padding: "20px 22px",
          }}>
            <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#C5A558">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#7A7A88", fontStyle: "italic", lineHeight: 1.7, marginBottom: 10 }}>
              "J'ai récupéré le coût de l'abonnement dès ma première analyse."
            </p>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#4A4A58", letterSpacing: "0.1em" }}>
              — THOMAS M. · LYON
            </p>
          </div>
        </div>
      </div>

      {/* ── Right — Form ── */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        padding: "60px 40px", overflowY: "auto",
      }}>
        <div style={{ width: "100%", maxWidth: 420 }}>

          <div className="logo-mobile" style={{ marginBottom: 48 }}>
            <Logo />
          </div>

          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#4A4A58", letterSpacing: "0.08em", marginBottom: 20 }}>
            CRÉER UN COMPTE
          </p>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
            fontWeight: 700, color: "#EDE8DF", letterSpacing: "-0.04em",
            lineHeight: 0.95, marginBottom: 12,
          }}>
            Commencer maintenant.
          </h1>
          <p style={{ fontSize: 13, color: "#4A4A58", marginBottom: 36 }}>
            Déjà inscrit ?{" "}
            <Link href="/login" style={{ color: "#C5A558", textDecoration: "none" }}>Se connecter →</Link>
          </p>

          <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Name */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[{ label: "Prénom", ph: "Jean" }, { label: "Nom", ph: "Dupont" }].map(f => (
                <div key={f.label}>
                  <label className="field-label">{f.label}</label>
                  <input type="text" className="input-md" placeholder={f.ph} />
                </div>
              ))}
            </div>

            {/* Email */}
            <div>
              <label className="field-label">Email</label>
              <input type="email" className="input-md" placeholder="vous@exemple.com" />
            </div>

            {/* Password */}
            <div>
              <label className="field-label">Mot de passe</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPw ? "text" : "password"}
                  className="input-md"
                  placeholder="8 caractères minimum"
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

            {/* Plan selector */}
            <div>
              <label className="field-label">Plan choisi</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {PLANS.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(p.id)}
                    style={{
                      position: "relative", cursor: "pointer", borderRadius: 7,
                      padding: "14px 8px", textAlign: "center",
                      border: plan === p.id ? "1px solid rgba(197,165,88,0.35)" : "1px solid rgba(255,255,255,0.05)",
                      background: plan === p.id ? "rgba(197,165,88,0.07)" : "rgba(255,255,255,0.02)",
                      transition: "all 0.14s",
                    }}
                  >
                    {p.popular && (
                      <div style={{
                        position: "absolute", top: -9, left: "50%", transform: "translateX(-50%)",
                        background: "#C5A558", color: "#09090D",
                        fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, fontWeight: 700,
                        letterSpacing: "0.1em", padding: "2px 9px", borderRadius: 100, whiteSpace: "nowrap",
                      }}>
                        POPULAIRE
                      </div>
                    )}
                    <div style={{
                      fontSize: 13, fontWeight: 700,
                      color: plan === p.id ? "#EDE8DF" : "#4A4A58", marginBottom: 3,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}>
                      {p.name}
                    </div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#4A4A58" }}>
                      {p.price}/mo
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Terms */}
            <label style={{ display: "flex", alignItems: "flex-start", gap: 9, cursor: "pointer" }}>
              <input type="checkbox" style={{ accentColor: "#C5A558", width: 13, height: 13, marginTop: 2, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#4A4A58", lineHeight: 1.65 }}>
                J'accepte les <a href="#" style={{ color: "#7A7A88", textDecoration: "underline" }}>CGV</a> et la{" "}
                <a href="#" style={{ color: "#7A7A88", textDecoration: "underline" }}>politique de confidentialité</a>
              </span>
            </label>

            <Link href="/dashboard" className="btn-gold" style={{ justifyContent: "center", marginTop: 4 }}>
              Créer mon compte <ArrowRight size={13} />
            </Link>
          </form>

          <p style={{ marginTop: 16, textAlign: "center", fontSize: 11, color: "#252530" }}>
            Aucune carte bancaire requise pour l'essai.
          </p>
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
