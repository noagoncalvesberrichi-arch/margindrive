"use client";
import { useState } from "react";
import Link from "next/link";
import { CreditCard, CheckCircle2, AlertTriangle, ArrowRight, Download } from "lucide-react";

const CURRENT_PLAN = {
  name: "Premium",
  price: 99,
  renewal: "24/05/2026",
  cancelling: true,
  cancelDate: "24/05/2026",
};

const USAGE = [
  { label: "Crédits analyses", used: 50, max: null, display: "50 / ∞" },
  { label: "Deals consultés aujourd'hui", used: 10, max: null, display: "10 / ∞" },
  { label: "Véhicules suivis", used: 2, max: null, display: "2 / ∞" },
];

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 29.99,
    current: false,
    features: ["30 analyses / mois", "Analyse manuelle", "Best Deals — 5 / jour", "Support standard"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 59.99,
    current: false,
    badge: "LE PLUS POPULAIRE",
    features: ["100 analyses / mois", "Analyse par lien (BÊTA)", "Best Deals — 20 / jour", "Support prioritaire"],
  },
  {
    id: "premium",
    name: "Premium",
    price: 99,
    current: true,
    features: ["Analyses illimitées", "Analyse par lien (BÊTA)", "Best Deals — 50 / jour", "Support premium"],
  },
];

const INVOICES = [
  { date: "01/04/2026", amount: "€99,00", status: "Payée" },
  { date: "01/03/2026", amount: "€99,00", status: "Payée" },
  { date: "01/02/2026", amount: "€99,00", status: "Payée" },
];

export default function SubscriptionPage() {
  const [showCancel, setShowCancel] = useState(false);

  return (
    <div className="wrap" style={{ paddingTop: 36, paddingBottom: 64, maxWidth: 860 }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <h1 className="h1" style={{ fontSize: "1.6rem" }}>Abonnement</h1>
        <p style={{ color: "#666", fontSize: 13, marginTop: 2 }}>Gérez votre plan, usage et facturation.</p>
      </div>

      {/* Current plan */}
      <div style={{ marginBottom: 12 }}>
        <p className="section-label" style={{ marginBottom: 12 }}>/ 01 — PLAN ACTUEL</p>
        <div className="card" style={{ padding: "24px 28px", background: "#111108", border: "1px solid rgba(232,221,200,0.15)" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span className="font-display" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#ede9e3" }}>
                  Plan {CURRENT_PLAN.name}
                </span>
                {CURRENT_PLAN.cancelling && (
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    padding: "3px 10px", borderRadius: 100, fontSize: 10,
                    background: "rgba(251,146,60,0.1)", color: "#fb923c",
                    border: "1px solid rgba(251,146,60,0.25)",
                    fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, letterSpacing: "0.08em"
                  }}>
                    <AlertTriangle size={10} /> RÉSILIATION PROGRAMMÉE
                  </span>
                )}
              </div>
              <p style={{ fontSize: 13, color: "#666" }}>
                {CURRENT_PLAN.cancelling
                  ? `Accès jusqu'au ${CURRENT_PLAN.cancelDate} — aucun renouvellement prévu.`
                  : `Prochain renouvellement le ${CURRENT_PLAN.renewal}.`}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="font-display" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, color: "#ede9e3", lineHeight: 1 }}>
                €{CURRENT_PLAN.price}
                <span style={{ fontSize: 13, color: "#555", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}> /mois</span>
              </div>
            </div>
          </div>

          {/* Usage */}
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {USAGE.map(u => (
              <div key={u.label} style={{ background: "#0b0b0b", border: "1px solid #1e1e1e", borderRadius: 6, padding: "14px 16px" }}>
                <p className="font-mono" style={{ fontSize: 9, color: "#555", letterSpacing: "0.1em", marginBottom: 8 }}>{u.label.toUpperCase()}</p>
                <p className="font-display" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#ede9e3", lineHeight: 1 }}>
                  {u.display}
                </p>
                <div className="progress-bar" style={{ marginTop: 10 }}>
                  <div className="progress-fill" style={{ width: u.max ? `${Math.min(100, (u.used / u.max) * 100)}%` : "0%" }} />
                </div>
                <p style={{ fontSize: 11, color: "#555", marginTop: 4 }}>Illimité</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            {!CURRENT_PLAN.cancelling && (
              <button
                className="btn-outline"
                style={{ padding: "10px 20px", fontSize: 11 }}
                onClick={() => setShowCancel(true)}
              >
                Résilier l'abonnement
              </button>
            )}
            {CURRENT_PLAN.cancelling && (
              <button className="btn-cream" style={{ padding: "10px 20px", fontSize: 11 }}>
                Réactiver l'abonnement
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cancel modal */}
      {showCancel && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(11,11,11,0.85)", zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
        }}>
          <div className="card" style={{ maxWidth: 440, width: "100%", padding: "32px 28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.25)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AlertTriangle size={16} style={{ color: "#fb923c" }} />
              </div>
              <h3 className="font-display" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: "#ede9e3" }}>
                Résilier votre abonnement ?
              </h3>
            </div>
            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Votre accès Premium restera actif jusqu'au <strong style={{ color: "#aaa" }}>24/05/2026</strong>.
              Aucun remboursement ne sera effectué conformément aux CGV.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-outline" style={{ flex: 1, padding: "11px 16px", fontSize: 11 }} onClick={() => setShowCancel(false)}>
                Annuler
              </button>
              <button
                style={{
                  flex: 1, padding: "11px 16px", fontSize: 11, borderRadius: 4,
                  background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)",
                  color: "#f87171", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700,
                  letterSpacing: "0.08em", cursor: "pointer",
                }}
                onClick={() => setShowCancel(false)}
              >
                Confirmer la résiliation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change plan */}
      <div style={{ marginTop: 40, marginBottom: 12 }}>
        <p className="section-label" style={{ marginBottom: 12 }}>/ 02 — CHANGER DE PLAN</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {PLANS.map(plan => (
            <div
              key={plan.id}
              className="card"
              style={{
                padding: "20px",
                position: "relative",
                border: plan.current ? "1px solid rgba(232,221,200,0.25)" : "1px solid #1e1e1e",
                background: plan.current ? "#111108" : "#111",
                opacity: plan.current ? 1 : 0.85,
              }}
            >
              {plan.badge && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  background: "#e8ddc8", color: "#0b0b0b",
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700,
                  letterSpacing: "0.1em", padding: "3px 12px", borderRadius: 100,
                }}>
                  {plan.badge}
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <h3 className="font-display" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: "#ede9e3" }}>
                  {plan.name}
                </h3>
                {plan.current && (
                  <span style={{ padding: "2px 8px", borderRadius: 100, fontSize: 9, background: "rgba(74,222,128,0.1)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>
                    ACTUEL
                  </span>
                )}
              </div>
              <p className="font-display" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: "#ede9e3", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 14 }}>
                €{plan.price % 1 === 0 ? plan.price.toFixed(0) : plan.price.toFixed(2).replace(".", ",")}
                <span style={{ fontSize: 12, color: "#555", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>/mo</span>
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 16 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                    <CheckCircle2 size={12} style={{ color: plan.current ? "#e8ddc8" : "#555", marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.current ? (
                <div style={{ padding: "10px", textAlign: "center", borderRadius: 4, background: "rgba(232,221,200,0.06)", border: "1px solid rgba(232,221,200,0.12)", fontSize: 11, color: "#666", fontFamily: "'IBM Plex Mono', monospace" }}>
                  Plan actuel
                </div>
              ) : (
                <Link
                  href="/pricing"
                  className="btn-outline"
                  style={{ width: "100%", justifyContent: "center", padding: "10px 16px", fontSize: 10 }}
                >
                  Passer à {plan.name} <ArrowRight size={11} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Billing */}
      <div style={{ marginTop: 40 }}>
        <p className="section-label" style={{ marginBottom: 12 }}>/ 03 — FACTURATION</p>

        {/* Payment method */}
        <div className="card" style={{ padding: "20px 24px", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 28, background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CreditCard size={14} style={{ color: "#666" }} />
            </div>
            <div>
              <p style={{ fontSize: 13, color: "#ede9e3", fontWeight: 500 }}>Visa •••• 4242</p>
              <p style={{ fontSize: 11, color: "#555", marginTop: 1 }}>Expire 08/2027</p>
            </div>
          </div>
          <button className="btn-outline" style={{ padding: "8px 16px", fontSize: 10 }}>
            Modifier
          </button>
        </div>

        {/* Invoice history */}
        <div className="card" style={{ overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr>
                {["DATE", "MONTANT", "STATUT", ""].map(h => <th key={h}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {INVOICES.map(inv => (
                <tr key={inv.date}>
                  <td style={{ color: "#aaa" }}>{inv.date}</td>
                  <td style={{ color: "#ede9e3", fontWeight: 500 }}>{inv.amount}</td>
                  <td>
                    <span style={{
                      padding: "2px 8px", borderRadius: 100, fontSize: 11,
                      background: "rgba(74,222,128,0.08)", color: "#4ade80",
                      border: "1px solid rgba(74,222,128,0.2)"
                    }}>
                      {inv.status}
                    </span>
                  </td>
                  <td>
                    <button style={{ background: "transparent", border: "none", cursor: "pointer", color: "#555", display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontFamily: "'IBM Plex Mono', monospace" }}>
                      <Download size={11} /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
