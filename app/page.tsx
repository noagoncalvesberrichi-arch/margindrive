import Link from "next/link";
import { ArrowRight, TrendingUp, BarChart2, Activity } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

/* ─── Ticker ─── */
const TICKER_ITEMS = [
  { label: "Golf 7 GTI · 2019",       marge: "+1 720€", score: "74" },
  { label: "Audi A3 35 TFSI · 2021",  marge: "+2 105€", score: "79" },
  { label: "BMW 118i · 2020",          marge: "+1 540€", score: "72" },
  { label: "Mercedes A180 · 2022",     marge: "+2 680€", score: "83" },
  { label: "Tesla Model 3 LR · 2021",  marge: "+4 220€", score: "91" },
  { label: "Porsche Cayenne · 2020",   marge: "+6 800€", score: "87" },
  { label: "BMW M340i · 2021",         marge: "+5 120€", score: "89" },
  { label: "Renault Mégane RS · 2019", marge: "+2 950€", score: "81" },
];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{
      overflow: "hidden",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      borderBottom: "1px solid rgba(255,255,255,0.04)",
      background: "rgba(255,255,255,0.015)",
    }}>
      <div className="ticker-track" style={{ padding: "10px 0" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="font-mono"
            style={{
              display: "inline-flex", alignItems: "center", gap: 14,
              padding: "0 36px", fontSize: 9, letterSpacing: "0.1em",
              borderRight: "1px solid rgba(255,255,255,0.04)", flexShrink: 0,
            }}
          >
            <div className="live-dot" style={{ width: 4, height: 4 }} />
            <span style={{ color: "#4A4A58" }}>{item.label}</span>
            <span style={{ color: "#22C55E", fontWeight: 700 }}>{item.marge}</span>
            <span style={{ color: "#C5A558", letterSpacing: "0.04em" }}>Score {item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{ position: "relative", background: "#08080C", overflow: "hidden" }}>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 80 }}>
        <style>{`
          .hero-grid { display: grid; grid-template-columns: 1fr 380px; gap: 72px; align-items: center; }
          .hero-panel { display: block; }
          @media (max-width: 880px) { .hero-grid { grid-template-columns: 1fr; gap: 48px; } .hero-panel { display: none; } }
        `}</style>
        <div className="hero-grid">

          {/* ── Left: editorial headline ── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
              <div style={{ width: 24, height: 1, background: "#C5A558", flexShrink: 0 }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#4A4A58", letterSpacing: "0.06em" }}>
                Analyse marché · FR · BE · LU
              </span>
            </div>

            <h1 className="h1" style={{ marginBottom: 24 }}>
              L&apos;analyse qui fait<br />
              la différence entre<br />
              <span style={{ color: "#C5A558" }}>affaire et erreur.</span>
            </h1>

            <p style={{ fontSize: 15, color: "#4A4A58", lineHeight: 1.85, maxWidth: 420, marginBottom: 40 }}>
              Cote marché précise, marge de revente calculée, score de décision — sur chaque annonce, en quelques secondes.
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 48, flexWrap: "wrap" }}>
              <Link href="/analyze-link" className="btn-gold">
                Analyser une annonce <ArrowRight size={14} />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                Voir les plans
              </Link>
            </div>

            {/* Inline metrics */}
            <div style={{ display: "flex", alignItems: "center", gap: 0, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {[
                { val: "12 480", label: "analyses" },
                { val: "+2 840 €", label: "marge moy." },
                { val: "94 %", label: "précision" },
              ].map(({ val, label }, i) => (
                <div key={label} style={{ paddingRight: 28, marginRight: 28, borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#EDE8DF", letterSpacing: "-0.025em", lineHeight: 1, marginBottom: 4 }}>
                    {val}
                  </div>
                  <div style={{ fontSize: 11, color: "#303040" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: live market data panel ── */}
          <div className="hero-panel" style={{
            background: "#0B0B12",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 10, overflow: "hidden",
            boxShadow: "0 32px 72px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02)",
          }}>
            {/* Panel header */}
            <div style={{ padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="live-dot" />
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#3A3A48", letterSpacing: "0.05em" }}>Opportunités détectées</span>
              </div>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#252530" }}>Aujourd&apos;hui</span>
            </div>

            {/* Column headers */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 72px 40px", padding: "7px 18px 6px", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
              {[["Véhicule", "left"], ["Marge", "right"], ["Score", "right"]].map(([h, align]) => (
                <span key={h} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 7, color: "#252530", letterSpacing: "0.07em", textAlign: align as "left" | "right" }}>
                  {h.toUpperCase()}
                </span>
              ))}
            </div>

            {/* Data rows */}
            {TICKER_ITEMS.slice(0, 6).map((item, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr 72px 40px",
                padding: "9px 18px", alignItems: "center",
                borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.025)" : "none",
              }}>
                <span style={{ fontSize: 11, color: "#4A4A58", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#22C55E", fontWeight: 500, textAlign: "right" }}>{item.marge}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#C5A558", textAlign: "right" }}>{item.score}</span>
              </div>
            ))}

            {/* Footer */}
            <div style={{ padding: "10px 18px", borderTop: "1px solid rgba(197,165,88,0.07)", background: "rgba(197,165,88,0.02)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "#252530" }}>147 annonces analysées ce matin</span>
              <Link href="/analyze-link" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#C5A558", letterSpacing: "0.06em", textDecoration: "none" }}>
                ANALYSER →
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Ticker />
    </section>
  );
}

/* ─── Without / With section ─── */
function TheEdge() {
  return (
    <section style={{ padding: "100px 0", background: "#08080C" }}>
      <div className="wrap">
        <div style={{ marginBottom: 64 }}>
          <span className="eyebrow" style={{ display: "inline-block", marginBottom: 14 }}>Avantage décisionnel</span>
          <h2 className="h2">Sans données,<br />vous jouez à pile ou face.</h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 14, overflow: "hidden",
        }}>
          {/* Without */}
          <div style={{ padding: "52px 48px", background: "#0A0A0F", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#EF4444", opacity: 0.6 }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#4A4A58", letterSpacing: "0.08em" }}>
                SANS MARGINDRIVE
              </span>
            </div>
            {[
              "Prix d'annonce souvent surévalués",
              "Estimation de revente approximative",
              "Marges imprévisibles ou nulles",
              "Risques cachés non identifiés",
              "Décisions prises à tâtons",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                <span style={{ color: "#252530", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✕</span>
                <span style={{ fontSize: 14, color: "#4A4A58", lineHeight: 1.6 }}>{t}</span>
              </div>
            ))}
          </div>

          {/* With */}
          <div style={{ padding: "52px 48px", background: "#08080C" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C5A558" }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#C5A558", letterSpacing: "0.08em" }}>
                AVEC MARGINDRIVE
              </span>
            </div>
            {[
              "Cote marché précise en temps réel",
              "Calcul automatique de la marge nette",
              "Score d'opportunité 0–100 instantané",
              "Analyse complète des risques incluse",
              "Décision éclairée en moins de 10 secondes",
            ].map(t => (
              <div key={t} style={{ display: "flex", gap: 14, marginBottom: 18, alignItems: "flex-start" }}>
                <span style={{ color: "#C5A558", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: "#EDE8DF", lineHeight: 1.6 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How it works ─── */
function HowItWorks() {
  const steps = [
    { num: "01", icon: <Activity size={16} style={{ color: "#C5A558" }} />, title: "Collez un lien d'annonce", desc: "Leboncoin, La Centrale, AutoScout24, Mobile.de — l'analyse démarre en un clic, sans configuration." },
    { num: "02", icon: <BarChart2 size={16} style={{ color: "#C5A558" }} />, title: "Analyse des données marché", desc: "Nos données comparent des milliers de ventes récentes pour établir la valeur réelle du véhicule à ±3%." },
    { num: "03", icon: <TrendingUp size={16} style={{ color: "#C5A558" }} />, title: "Décidez en connaissance de cause", desc: "Marge potentielle, score de revente, niveau de risque et recommandation ACHETER / NÉGOCIER / PASSER." },
  ];

  return (
    <section style={{ padding: "100px 0", background: "#0A0A0F" }}>
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: 14 }}>Méthode</span>
            <h2 className="h2">De l&apos;annonce<br />à la décision.</h2>
          </div>
          <p style={{ fontSize: 14, color: "#4A4A58", maxWidth: 280, lineHeight: 1.8 }}>
            Trois étapes. Un rapport complet. La certitude pour décider.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {steps.map(({ num, icon, title, desc }, i) => (
            <div key={num} style={{
              background: "#0D0D14",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: i === 0 ? "10px 0 0 10px" : i === 2 ? "0 10px 10px 0" : 0,
              padding: "36px 32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 7,
                  background: "rgba(197,165,88,0.08)",
                  border: "1px solid rgba(197,165,88,0.14)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {icon}
                </div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#303040", letterSpacing: "0.06em" }}>
                  {num}
                </span>
              </div>
              <h3 className="h4" style={{ marginBottom: 10, color: "#EDE8DF" }}>{title}</h3>
              <p style={{ fontSize: 13, color: "#4A4A58", lineHeight: 1.8 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section style={{ padding: "80px 0 100px", background: "#08080C" }}>
      <div className="wrap">
        <div style={{
          background: "#0D0D14",
          border: "1px solid rgba(255,255,255,0.06)",
          borderTop: "1px solid rgba(197,165,88,0.2)",
          borderRadius: 10,
          padding: "64px 60px",
          display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center",
        }}>
          <div>
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: 16 }}>Essai gratuit · 7 jours</span>
            <h2 className="h2" style={{ marginBottom: 16 }}>
              Commencez à investir<br />avec les bons chiffres.
            </h2>
            <p style={{ fontSize: 14, color: "#4A4A58", lineHeight: 1.85, maxWidth: 400 }}>
              {`Rejoignez les professionnels de l'achat-revente qui s'appuient sur les données marché pour chaque décision.`}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", flexShrink: 0 }}>
            <Link href="/register" className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "16px 40px" }}>
              Démarrer gratuitement <ArrowRight size={14} />
            </Link>
            <Link href="/pricing" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
              Comparer les plans
            </Link>
            <p style={{ fontSize: 11, color: "#252530", textAlign: "center", width: "100%" }}>
              Sans carte bancaire · Résiliation à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main style={{ background: "#08080C" }}>
      <Navbar />
      <div style={{ paddingTop: 92 }}>
        <Hero />
        <TheEdge />
        <HowItWorks />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
