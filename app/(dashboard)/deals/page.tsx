"use client";
import { useState } from "react";
import Link from "next/link";
import { RefreshCw, Lock, ChevronDown, ArrowRight } from "lucide-react";

const SOURCES = ["Tous", "Leboncoin", "La Centrale", "AutoScout24", "Mobile.de"];
const MARQUES = ["Tous", "BMW", "Mercedes", "Volkswagen", "Audi", "Peugeot", "Renault"];

const LOCKED_GRADIENTS = [
  "linear-gradient(135deg,#1a1a10,#2a2010)",
  "linear-gradient(135deg,#101520,#1a2030)",
  "linear-gradient(135deg,#15100a,#2a1a10)",
  "linear-gradient(135deg,#0a1510,#102018)",
  "linear-gradient(135deg,#1a1020,#250f30)",
  "linear-gradient(135deg,#181008,#2a1a05)",
  "linear-gradient(135deg,#0d1520,#162030)",
  "linear-gradient(135deg,#1a1010,#2a1818)",
  "linear-gradient(135deg,#101818,#182420)",
  "linear-gradient(135deg,#200d10,#301520)",
  "linear-gradient(135deg,#181a0a,#282808)",
  "linear-gradient(135deg,#0e0e1a,#181828)",
];

function LockedCard({ bg }: { bg: string }) {
  return (
    <div
      className="deal-locked"
      style={{ height: 188 }}
      onClick={() => window.location.assign("/pricing")}
    >
      <div style={{ position: "absolute", inset: 0, background: bg, filter: "blur(18px)", transform: "scale(1.1)" }} />
      <div className="deal-locked-overlay">
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Lock size={14} style={{ color: "#666" }} />
        </div>
        <p style={{ fontSize: 12, color: "#bbb", fontWeight: 500 }}>Cliquez pour débloquer</p>
        <p style={{ fontSize: 10, color: "#555" }}>1 crédit sera utilisé</p>
      </div>
    </div>
  );
}

function PaywallBanner() {
  return (
    <div style={{
      background: "#0D0D14",
      border: "1px solid rgba(197,165,88,0.12)",
      borderRadius: 12, padding: "56px 40px",
      textAlign: "center", marginBottom: 16,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "80%", height: "200%",
        background: "radial-gradient(ellipse, rgba(197,165,88,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          width: 48, height: 48, borderRadius: "50%",
          background: "rgba(197,165,88,0.08)", border: "1px solid rgba(197,165,88,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
        }}>
          <Lock size={20} style={{ color: "#C5A558" }} />
        </div>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700,
          color: "#EDE8DF", letterSpacing: "-0.02em", marginBottom: 12,
        }}>
          Disponible uniquement avec un abonnement
        </h3>
        <p style={{ color: "#4A4A58", fontSize: 14, marginBottom: 28, maxWidth: 420, marginLeft: "auto", marginRight: "auto", lineHeight: 1.8 }}>
          La page Best Deals est réservée aux abonnés. Souscrivez un plan pour accéder aux meilleures affaires du marché.
        </p>
        <Link href="/pricing" className="btn-gold" style={{ padding: "14px 32px" }}>
          Voir les plans <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

export default function DealsPage() {
  const [marque, setMarque] = useState("Tous");
  const [source, setSource] = useState("Tous");
  const [margeMin, setMargeMin] = useState("1500");
  const [scoreMin, setScoreMin] = useState("7");
  const [prixMin, setPrixMin] = useState("5000");
  const [prixMax, setPrixMax] = useState("50000");

  return (
    <div className="wrap" style={{ paddingTop: 44, paddingBottom: 96 }}>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
          <div className="pill pill-green">
            <div className="live-dot" />
            LIVE FEED
          </div>
        </div>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#4A4A58", letterSpacing: "0.08em", marginBottom: 12 }}>
          / OPPORTUNITÉS MARCHÉ
        </p>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, color: "#EDE8DF", letterSpacing: "-0.03em", marginBottom: 8 }}>
          Les meilleures affaires du marché
        </h1>
        <p style={{ color: "#4A4A58", fontSize: 13 }}>
          Véhicules sous-évalués détectés sur le marché, triés par meilleure marge.
        </p>

        {/* Quality filters */}
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {[
            { label: "Sources", val: "100% réelles" },
            { label: "Score min", val: "≥ 7/10" },
            { label: "Marge min", val: "≥ 1 500€" },
            { label: "Comparables", val: "≥ 3" },
          ].map(({ label, val }) => (
            <div key={label} className="card" style={{ padding: "7px 12px" }}>
              <p className="font-mono" style={{ fontSize: 7, color: "#444", letterSpacing: "0.1em", marginBottom: 2, textTransform: "uppercase" }}>{label}</p>
              <p style={{ fontSize: 12, color: "#888", fontWeight: 500 }}>{val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Paywall */}
      <PaywallBanner />

      {/* Locked grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 28 }}>
        {LOCKED_GRADIENTS.map((g, i) => (
          <LockedCard key={i} bg={g} />
        ))}
      </div>

      {/* Filters row */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, flexWrap: "wrap" }}>
        <div style={{ flex: "0 0 200px" }}>
          <input
            className="input-md"
            placeholder="Marque, modèle..."
            style={{ fontSize: 12 }}
          />
        </div>
        <button className="btn-outline" style={{ padding: "10px 12px", flexShrink: 0 }}>
          <RefreshCw size={12} />
        </button>

        <div style={{ flex: 1 }} />

        {/* Selects */}
        {[
          { label: "Marque", val: marque, set: setMarque, opts: MARQUES },
          { label: "Source", val: source, set: setSource, opts: SOURCES },
        ].map(({ label, val, set, opts }) => (
          <div key={label}>
            <p className="font-mono" style={{ fontSize: 8, color: "#444", letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>{label}</p>
            <div style={{ position: "relative" }}>
              <select
                className="input-md"
                value={val}
                onChange={e => set(e.target.value)}
                style={{ paddingRight: 28, fontSize: 12, width: 130 }}
              >
                {opts.map(o => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown size={11} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", color: "#444", pointerEvents: "none" }} />
            </div>
          </div>
        ))}

        {/* Number inputs */}
        {[
          { label: "Marge min (€)", val: margeMin, set: setMargeMin, placeholder: "1500" },
          { label: "Score min", val: scoreMin, set: setScoreMin, placeholder: "7" },
          { label: "Prix min (€)", val: prixMin, set: setPrixMin, placeholder: "5000" },
          { label: "Prix max (€)", val: prixMax, set: setPrixMax, placeholder: "50000" },
        ].map(({ label, val, set, placeholder }) => (
          <div key={label} style={{ minWidth: 88 }}>
            <p className="font-mono" style={{ fontSize: 8, color: "#444", letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>{label}</p>
            <input
              type="number"
              className="input-md"
              value={val}
              onChange={e => set(e.target.value)}
              placeholder={placeholder}
              style={{ fontSize: 12 }}
            />
          </div>
        ))}

        <button className="btn-cream" style={{ padding: "10px 16px" }}>
          Appliquer
        </button>
      </div>
    </div>
  );
}
