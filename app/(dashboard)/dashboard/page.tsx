import Link from "next/link";
import { ArrowRight, TrendingUp, BarChart2, Layers, Clock } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const VEHICLES = [
  { name: "Smart Fortwo W451 (2018)", achat: 8000,  depenses: 0, revente: null,  marge: null, statut: "En stock", date: "12/04/2026" },
  { name: "Audi A3 S Line (2022)",    achat: 24600, depenses: 0, revente: 25200, marge: 600,  statut: "Vendu",    date: "30/03/2026" },
];

const HISTORY = [
  { name: "Mercedes-Benz Classe A W177 AMG Line", prix: 21500, estim: 24794, verdict: "AFFAIRE PROBABLE",   vColor: "#C5A558",  date: "20/04" },
  { name: "Mercedes-Benz Classe A W177 AMG Line", prix: 21500, estim: null,  verdict: "À VÉRIFIER",         vColor: "#4A4A58",  date: "20/04" },
  { name: "Mercedes-Benz Classe A W176",          prix: 10980, estim: null,  verdict: "À VÉRIFIER",         vColor: "#4A4A58",  date: "20/04" },
  { name: "Smart Fortwo W451",                    prix: 7000,  estim: 10500, verdict: "EXCELLENTE AFFAIRE", vColor: "#22C55E",  date: "20/04" },
  { name: "Smart Fortwo W451",                    prix: 7000,  estim: null,  verdict: "À VÉRIFIER",         vColor: "#4A4A58",  date: "19/04" },
];

export default function DashboardPage() {
  return (
    <div className="wrap" style={{ paddingTop: 44, paddingBottom: 96 }}>

      {/* Page header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 44 }}>
        <div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#4A4A58", letterSpacing: "0.08em", marginBottom: 10 }}>
            TABLEAU DE BORD
          </p>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700,
            color: "#EDE8DF", letterSpacing: "-0.035em", lineHeight: 1,
          }}>
            Bonjour, Iza.
          </h1>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "rgba(197,165,88,0.07)",
          border: "1px solid rgba(197,165,88,0.18)",
          borderRadius: 100, padding: "5px 12px 5px 10px",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C5A558" }} />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#C5A558", letterSpacing: "0.05em" }}>
            PREMIUM · 99€/MOIS
          </span>
        </div>
      </div>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 10, marginBottom: 44 }}>

        {/* Profit — hero card */}
        <div style={{
          background: "#0B0F0A",
          border: "1px solid rgba(34,197,94,0.12)",
          borderRadius: 12, padding: "32px 28px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "60%", height: "100%",
            background: "radial-gradient(ellipse at 100% 50%, rgba(34,197,94,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <TrendingUp size={12} style={{ color: "#22C55E" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#22C55E", opacity: 0.7, letterSpacing: "0.07em" }}>
              PROFIT TOTAL RÉEL
            </span>
          </div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 52, fontWeight: 700,
            color: "#22C55E", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 6,
          }}>
            +€600
          </p>
          <p style={{ fontSize: 12, color: "#2A5A35" }}>1 véhicule vendu</p>
        </div>

        {/* Stat cards */}
        {[
          { icon: <Layers size={12} style={{ color: "#C5A558" }} />, label: "Véhicules achetés", val: "2", sub: "1 en stock" },
          { icon: <BarChart2 size={12} style={{ color: "#7A7A88" }} />, label: "Analyses", val: "50", sub: "Ce mois-ci" },
          { icon: <Clock size={12} style={{ color: "#7A7A88" }} />, label: "Deals consultés", val: "10", sub: "Aujourd'hui" },
        ].map(({ icon, label, val, sub }) => (
          <div key={label} style={{
            background: "#0D0D14", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 12, padding: "28px 24px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              {icon}
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#4A4A58", letterSpacing: "0.06em" }}>
                {label.toUpperCase()}
              </span>
            </div>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700,
              color: "#EDE8DF", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6,
            }}>
              {val}
            </p>
            <p style={{ fontSize: 11, color: "#4A4A58" }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Portefeuille */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#4A4A58", letterSpacing: "0.08em", marginBottom: 8 }}>
              / PORTEFEUILLE
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: "#EDE8DF", letterSpacing: "-0.02em" }}>
              Suivi véhicules
            </h2>
          </div>
        </div>
        <div style={{ background: "#0D0D14", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr>
                {["Véhicule", "Prix achat", "Dépenses", "Prix revente", "Marge", "Statut", "Date"].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VEHICLES.map(v => (
                <tr key={v.name}>
                  <td style={{ color: "#EDE8DF", fontWeight: 500 }}>{v.name}</td>
                  <td>{formatPrice(v.achat)}</td>
                  <td style={{ color: "#4A4A58" }}>€0</td>
                  <td>{v.revente ? formatPrice(v.revente) : <span style={{ color: "#303040" }}>—</span>}</td>
                  <td style={{ color: v.marge && v.marge > 0 ? "#22C55E" : "#4A4A58" }}>
                    {v.marge ? `+${formatPrice(v.marge)}` : <span style={{ color: "#303040" }}>—</span>}
                  </td>
                  <td>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      padding: "3px 10px", borderRadius: 100, fontSize: 8,
                      background: v.statut === "En stock" ? "rgba(197,165,88,0.08)" : "rgba(34,197,94,0.07)",
                      color: v.statut === "En stock" ? "#C5A558" : "#22C55E",
                      border: `1px solid ${v.statut === "En stock" ? "rgba(197,165,88,0.2)" : "rgba(34,197,94,0.18)"}`,
                      letterSpacing: "0.1em",
                    }}>
                      {v.statut.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ color: "#4A4A58" }}>{v.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historique */}
      <div>
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, color: "#4A4A58", letterSpacing: "0.08em", marginBottom: 8 }}>
            / HISTORIQUE
          </p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: "#EDE8DF", letterSpacing: "-0.02em" }}>
            Analyses récentes
          </h2>
        </div>
        <div style={{ background: "#0D0D14", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr>
                {["Véhicule", "Prix affiché", "Estimation", "Verdict", "Date", ""].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HISTORY.map((h, i) => (
                <tr key={i} style={{ cursor: "pointer" }}>
                  <td style={{ color: "#EDE8DF" }}>{h.name}</td>
                  <td>{formatPrice(h.prix)}</td>
                  <td style={{ color: "#7A7A88" }}>{h.estim ? formatPrice(h.estim) : <span style={{ color: "#303040" }}>—</span>}</td>
                  <td>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: 9, color: h.vColor, letterSpacing: "0.1em",
                    }}>
                      {h.verdict}
                    </span>
                  </td>
                  <td style={{ color: "#4A4A58" }}>{h.date}</td>
                  <td style={{ color: "#252530" }}>›</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Actions */}
      <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
        <Link href="/analyze-link" className="btn-gold">
          Nouvelle analyse <ArrowRight size={13} />
        </Link>
        <Link href="/deals" className="btn-ghost">
          Voir les deals
        </Link>
      </div>
    </div>
  );
}
