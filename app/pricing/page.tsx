"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const PLANS = [
  {
    id: "starter",
    num: "01",
    name: "Starter",
    tagline: "Pour démarrer",
    priceM: 29.99,
    priceA: 24.99,
    highlight: false,
    features: [
      "30 analyses par mois",
      "Analyse manuelle uniquement",
      "Rapport standard",
      "Historique 30 jours",
      "Best Deals · 5 / jour",
      "Support par email",
    ],
  },
  {
    id: "pro",
    num: "02",
    name: "Pro",
    tagline: "Le plus utilisé",
    priceM: 59.99,
    priceA: 49.99,
    highlight: true,
    badge: "RECOMMANDÉ",
    promo: { code: "MARGIN25", pct: "–25%" },
    features: [
      "100 analyses par mois",
      "Analyse manuelle + par lien BÊTA",
      "Rapport complet avec scoring",
      "Historique illimité",
      "Suivi des achats et marges",
      "Best Deals · 20 / jour",
      "Support prioritaire",
    ],
  },
  {
    id: "premium",
    num: "03",
    name: "Premium",
    tagline: "Pour les pros",
    priceM: 99,
    priceA: 82,
    highlight: false,
    features: [
      "Analyses illimitées",
      "Analyse par lien BÊTA",
      "Dashboard performances avancé",
      "Gestion complète achats/reventes",
      "Best Deals · 50 / jour",
      "Notifications temps réel",
      "Support premium dédié",
    ],
  },
];

function PlanCard({ plan, annual }: { plan: typeof PLANS[0]; annual: boolean }) {
  const price = annual ? plan.priceA : plan.priceM;
  const isHighlight = plan.highlight;

  return (
    <div style={{
      position: "relative",
      background: isHighlight ? "#0E0E18" : "#0B0B12",
      border: isHighlight ? "1px solid rgba(197,165,88,0.25)" : "1px solid rgba(255,255,255,0.06)",
      borderRadius: 12,
      padding: "40px 36px 36px",
      display: "flex",
      flexDirection: "column",
      boxShadow: isHighlight
        ? "0 0 0 1px rgba(197,165,88,0.06), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(197,165,88,0.08)"
        : "0 20px 40px rgba(0,0,0,0.4)",
    }}>
      {/* Badge */}
      {plan.badge && (
        <div style={{
          position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)",
          background: "#C5A558", color: "#09090D",
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, fontWeight: 700,
          letterSpacing: "0.06em", padding: "5px 16px",
          borderRadius: "0 0 6px 6px",
        }}>
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 8,
          color: isHighlight ? "#C5A558" : "#4A4A58",
          letterSpacing: "0.08em", display: "block", marginBottom: 10,
        }}>
          / {plan.num}
        </span>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700,
          color: "#EDE8DF", letterSpacing: "-0.02em", marginBottom: 4,
        }}>
          {plan.name}
        </h3>
        <p style={{ fontSize: 12, color: "#4A4A58" }}>{plan.tagline}</p>
      </div>

      {/* Price */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, lineHeight: 1, marginBottom: 6 }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 60, fontWeight: 700,
            color: isHighlight ? "#C5A558" : "#EDE8DF",
            letterSpacing: "-0.05em", lineHeight: 1,
          }}>
            {price % 1 === 0 ? `€${price}` : `€${price.toFixed(2).replace(".", ",")}`}
          </span>
          <span style={{ fontSize: 12, color: "#4A4A58", marginBottom: 10 }}>/mois</span>
        </div>
        {annual && (
          <p style={{ fontSize: 11, color: "#C5A558" }}>Facturé annuellement</p>
        )}
        {plan.promo && (
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
              padding: "3px 9px", borderRadius: 100,
              background: "rgba(197,165,88,0.08)",
              border: "1px solid rgba(197,165,88,0.2)",
              color: "#C5A558", letterSpacing: "0.1em",
            }}>
              {plan.promo.pct}
            </span>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
              padding: "3px 9px", borderRadius: 100,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "#7A7A88", letterSpacing: "0.1em",
            }}>
              {plan.promo.code}
            </span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 28 }} />

      {/* Features */}
      <ul style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <Check
              size={13}
              style={{ color: isHighlight ? "#C5A558" : "#4A4A58", marginTop: 1, flexShrink: 0 }}
            />
            <span style={{ fontSize: 13, color: isHighlight ? "#EDE8DF" : "#7A7A88", lineHeight: 1.5 }}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/register"
        className={isHighlight ? "btn-gold" : "btn-ghost"}
        style={{ justifyContent: "center", width: "100%" }}
      >
        Choisir {plan.name} <ArrowRight size={12} />
      </Link>
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <main style={{ background: "#08080C" }}>
      <Navbar />
      <section style={{ paddingTop: 130, paddingBottom: 120 }}>
        <div className="wrap" style={{ maxWidth: 1060 }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: 20 }}>TARIFS</span>
            <h1 className="h1" style={{ fontSize: "clamp(2.8rem, 5vw, 5.5rem)", marginBottom: 16 }}>
              Investissez dans<br />
              <span style={{ color: "#C5A558" }}>votre avantage.</span>
            </h1>
            <p style={{ fontSize: 15, color: "#7A7A88", marginBottom: 36 }}>
              Choisissez le plan adapté. Changez ou résiliez à tout moment.
            </p>

            {/* ROI bar */}
            <div style={{
              display: "inline-flex", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10, overflow: "hidden", marginBottom: 36,
              background: "rgba(255,255,255,0.015)",
            }}>
              {[
                { label: "ROI MOYEN",    val: "×4.2" },
                { label: "MARGE / DEAL", val: "+2 800€" },
                { label: "BREAK-EVEN",   val: "1 deal" },
              ].map(({ label, val }, i) => (
                <div key={label} style={{
                  padding: "14px 28px",
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#4A4A58", letterSpacing: "0.07em", marginBottom: 6 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "#C5A558", letterSpacing: "-0.02em" }}>
                    {val}
                  </p>
                </div>
              ))}
            </div>

            {/* Toggle */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{
                display: "inline-flex",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 100, padding: 4, gap: 2,
                background: "rgba(255,255,255,0.02)",
              }}>
                {[
                  { label: "Mensuel",  val: false },
                  { label: "Annuel —17%", val: true },
                ].map(({ label, val }) => (
                  <button
                    key={label}
                    onClick={() => setAnnual(val)}
                    style={{
                      padding: "8px 22px", borderRadius: 100, border: "none",
                      cursor: "pointer", fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 9, letterSpacing: "0.1em",
                      background: annual === val ? "#C5A558" : "transparent",
                      color: annual === val ? "#09090D" : "#4A4A58",
                      fontWeight: annual === val ? 700 : 400,
                      transition: "all 0.15s",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
            {PLANS.map(plan => <PlanCard key={plan.id} plan={plan} annual={annual} />)}
          </div>

          {/* Legal */}
          <div style={{
            display: "flex", alignItems: "flex-start", gap: 14,
            background: "rgba(255,255,255,0.015)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 8, padding: "18px 22px",
          }}>
            <input
              type="checkbox"
              id="terms"
              checked={accepted}
              onChange={e => setAccepted(e.target.checked)}
              style={{ marginTop: 2, accentColor: "#C5A558", width: 14, height: 14, flexShrink: 0, cursor: "pointer" }}
            />
            <label htmlFor="terms" style={{ fontSize: 12, color: "#4A4A58", lineHeight: 1.75, cursor: "pointer" }}>
              En validant mon achat, j'accepte les{" "}
              <a href="#" style={{ color: "#7A7A88", textDecoration: "underline" }}>CGV</a>,
              je reconnais que l'accès est immédiat et renonce à mon droit de rétractation.
              Aucun remboursement ne peut être effectué après l'achat.
            </label>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
