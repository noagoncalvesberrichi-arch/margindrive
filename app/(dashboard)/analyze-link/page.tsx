"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Loader2, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { MARQUES } from "@/lib/mock-data";
import { simulateAnalysis, formatPrice, getRiskLabel, getScoreColor } from "@/lib/utils";
import type { AnalysisResult } from "@/lib/utils";

type Tab = "link" | "manual";
type State = "idle" | "loading" | "result";

const MOCK_LINK_RESULT: AnalysisResult = {
  prixAffiche: 18900,
  coteMarcheEstimee: 22800,
  margePotentielle: 3900,
  margePourcent: 17,
  revente_rapide: 21600,
  revente_premium: 24200,
  score: 84,
  risque: "low",
  recommandation: "ACHETER",
  points_positifs: ["Kilométrage cohérent avec l'âge", "Finition M Sport valorisée", "Forte demande sur ce segment", "Prix sous le marché de 17%"],
  points_negatifs: ["Diesel — marché en transition", "Vérifier historique carrosserie"],
};

/* ─── Field label helper ─── */
function FL({ children, required }: { children: string; required?: boolean }) {
  return (
    <label className="field-label">
      {children}{required && <span style={{ color: "#f87171", marginLeft: 3 }}>*</span>}
    </label>
  );
}

/* ─── Select wrapper ─── */
function SelectWrap({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      {children}
      <ChevronDown size={12} style={{ position: "absolute", right: 11, top: "50%", transform: "translateY(-50%)", color: "#4a4a4a", pointerEvents: "none" }} />
    </div>
  );
}

/* ─── Result Panel ─── */
function ResultPanel({ result, label }: { result: AnalysisResult; label: string }) {
  const recStyle = {
    ACHETER:   { color: "#4ade80", bg: "rgba(74,222,128,0.06)", border: "rgba(74,222,128,0.18)" },
    "NÉGOCIER":{ color: "#e8ddc8", bg: "rgba(232,221,200,0.04)", border: "rgba(232,221,200,0.14)" },
    PASSER:    { color: "#f87171", bg: "rgba(248,113,113,0.06)", border: "rgba(248,113,113,0.18)" },
  }[result.recommandation];
  const scoreColor = getScoreColor(result.score);

  return (
    <div className="animate-fade-up" style={{ maxWidth: 700, margin: "0 auto" }}>
      {/* Vehicle header */}
      <div className="card card-md" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
        <div>
          <p className="section-label" style={{ marginBottom: 4 }}>Analyse complète · {new Date().toLocaleDateString("fr-FR")}</p>
          <h2 className="h3">{label}</h2>
        </div>
        <div style={{ padding: "5px 13px", borderRadius: 3, background: recStyle.bg, border: `1px solid ${recStyle.border}`, flexShrink: 0 }}>
          <span className="font-mono" style={{ fontSize: 10, color: recStyle.color, letterSpacing: "0.05em" }}>
            {result.recommandation}
          </span>
        </div>
      </div>

      {/* Score + metrics */}
      <div style={{ display: "grid", gridTemplateColumns: "128px 1fr", gap: 8, marginBottom: 8 }}>
        <div className="card" style={{ padding: "22px 16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <p className="section-label" style={{ marginBottom: 8, textAlign: "center" }}>Score marché</p>
          <span className="font-display" style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, color: scoreColor, letterSpacing: "-0.03em" }}>
            {result.score}
          </span>
          <span className="font-mono" style={{ fontSize: 10, color: "#4a4a4a", marginTop: 2 }}>/100</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { label: "Prix affiché",     val: formatPrice(result.prixAffiche),       color: "var(--text)" },
            { label: "Cote marché",       val: formatPrice(result.coteMarcheEstimee), color: "var(--text-2)" },
            { label: "Marge brute",       val: `+${formatPrice(result.margePotentielle)}`, color: "#4ade80" },
            { label: "Revente rapide",    val: formatPrice(result.revente_rapide),    color: "var(--cream)" },
            { label: "Revente premium",   val: formatPrice(result.revente_premium),   color: "#c4b898" },
            { label: "Niveau de risque",  val: getRiskLabel(result.risque),           color: result.risque === "low" ? "#4ade80" : result.risque === "medium" ? "#fb923c" : "#f87171" },
          ].map(({ label, val, color }) => (
            <div key={label} className="card card-sm">
              <p className="section-label" style={{ marginBottom: 6 }}>{label}</p>
              <p className="font-display" style={{ fontSize: 16, fontWeight: 700, color, letterSpacing: "-0.01em" }}>{val}</p>
              {label === "Marge brute" && <p className="font-mono" style={{ fontSize: 9, color: "#4ade80", marginTop: 2 }}>+{result.margePourcent}%</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Points positifs / négatifs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
        <div className="card card-md">
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <CheckCircle2 size={12} style={{ color: "#4ade80" }} />
            <span className="section-label" style={{ color: "#4ade80" }}>Points positifs</span>
          </div>
          {result.points_positifs.map(p => (
            <div key={p} style={{ display: "flex", gap: 8, marginBottom: 9 }}>
              <span style={{ color: "#4ade80", fontSize: 11, marginTop: 1, flexShrink: 0 }}>↗</span>
              <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </div>
        <div className="card card-md">
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
            <AlertTriangle size={12} style={{ color: "#fb923c" }} />
            <span className="section-label" style={{ color: "#fb923c" }}>Points d'attention</span>
          </div>
          {result.points_negatifs.length ? result.points_negatifs.map(p => (
            <div key={p} style={{ display: "flex", gap: 8, marginBottom: 9 }}>
              <span style={{ color: "#fb923c", fontSize: 11, marginTop: 1, flexShrink: 0 }}>⚠</span>
              <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>{p}</span>
            </div>
          )) : <p style={{ fontSize: 13, color: "#4a4a4a" }}>Aucun point d'attention majeur.</p>}
        </div>
      </div>

      {/* Comparables */}
      <div className="card" style={{ overflow: "hidden", marginBottom: 16 }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #1c1c1c", display: "flex", alignItems: "center", gap: 6 }}>
          <TrendingUp size={12} style={{ color: "#4a4a4a" }} />
          <span className="section-label">Comparables marché</span>
        </div>
        {[
          { label: "BMW 320d 2019 · 82 000 km · Lyon",       prix: 20500, diff: +1600 },
          { label: "BMW 320d 2019 · 91 000 km · Paris",      prix: 19200, diff: +300 },
          { label: "BMW 320d 2020 · 70 000 km · Bordeaux",   prix: 24900, diff: +6000 },
          { label: "BMW 320d 2018 · 99 000 km · Toulouse",   prix: 16800, diff: -2100 },
        ].map(({ label, prix, diff }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 20px", borderBottom: "1px solid #181818" }}>
            <span style={{ fontSize: 13, color: "var(--text-2)" }}>{label}</span>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 13, color: "var(--text)", fontWeight: 600 }}>{formatPrice(prix)}</span>
              <span className="font-mono" style={{ fontSize: 10, color: diff > 0 ? "#4ade80" : "#f87171", minWidth: 60, textAlign: "right" }}>
                {diff > 0 ? "+" : ""}{formatPrice(diff)}
              </span>
            </div>
          </div>
        ))}
        <div style={{ padding: "10px 20px" }}>
          <p className="section-label">* Écart vs. annonce analysée ({formatPrice(result.prixAffiche)})</p>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: 8 }}>
        <button className="btn-cream" style={{ flex: 1, justifyContent: "center" }}>
          Sauvegarder l'analyse <ArrowRight size={12} />
        </button>
        <button className="btn-outline" onClick={() => window.location.reload()}>
          Nouvelle analyse
        </button>
      </div>
    </div>
  );
}

/* ─── Link form ─── */
function LinkForm({ onAnalyze }: { onAnalyze: () => void }) {
  const [url, setUrl] = useState("");
  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div className="card card-lg">
        <FL>Lien de l'annonce</FL>
        <input
          type="url"
          className="input-md"
          placeholder="https://www.leboncoin.fr/voitures/..."
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <p style={{ fontSize: 12, color: "#555", marginBottom: 6, lineHeight: 1.6 }}>
          Leboncoin, La Centrale, AutoScout24, Mobile.de et plus.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "rgba(251,146,60,0.05)", border: "1px solid rgba(251,146,60,0.15)", borderRadius: 4, marginBottom: 20 }}>
          <span style={{ fontSize: 12 }}>⚠</span>
          <p style={{ fontSize: 12, color: "#fb923c", lineHeight: 1.5 }}>
            Analyse par lien en bêta — résultats non garantis. Privilégiez la saisie manuelle.
          </p>
        </div>
        <button className="btn-cream" style={{ width: "100%", justifyContent: "center", padding: "13px" }} onClick={onAnalyze}>
          Analyser ce lien <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}

/* ─── Manual form ─── */
interface ManualFormData {
  marque: string; modele: string; motorisation: string; finition: string;
  annee: string; km: string; carburant: string; boite: string; prix: string; description: string;
}
const INIT: ManualFormData = { marque: "", modele: "", motorisation: "", finition: "", annee: "", km: "", carburant: "", boite: "", prix: "", description: "" };

function ManualForm({ onAnalyze }: { onAnalyze: (d: ManualFormData) => void }) {
  const [form, setForm] = useState<ManualFormData>(INIT);
  const set = (k: keyof ManualFormData) => (v: string) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.marque && form.modele && form.annee && form.km && form.prix;

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div className="card card-lg">
        <div style={{ display: "grid", gap: 14 }}>
          {/* Marque */}
          <div>
            <FL required>Marque</FL>
            <SelectWrap>
              <select className="input-md" value={form.marque} onChange={e => set("marque")(e.target.value)} style={{ paddingRight: 32 }}>
                <option value="">BMW, Peugeot, Audi...</option>
                {MARQUES.map(m => <option key={m}>{m}</option>)}
              </select>
            </SelectWrap>
          </div>

          {/* Modèle */}
          <div>
            <FL required>Modèle</FL>
            <input className="input-md" placeholder="Série 3, 308, A4, Mégane..." value={form.modele} onChange={e => set("modele")(e.target.value)} />
          </div>

          {/* Motorisation / Finition */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <FL>Motorisation</FL>
              <input className="input-md" placeholder="320i, PureTech 130..." value={form.motorisation} onChange={e => set("motorisation")(e.target.value)} />
            </div>
            <div>
              <FL>Finition / Version</FL>
              <input className="input-md" placeholder="AMG Line, GT Line..." value={form.finition} onChange={e => set("finition")(e.target.value)} />
            </div>
          </div>

          {/* Année / Km */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <FL required>Année</FL>
              <SelectWrap>
                <select className="input-md" value={form.annee} onChange={e => set("annee")(e.target.value)} style={{ paddingRight: 32 }}>
                  <option value="">—</option>
                  {Array.from({ length: 20 }, (_, i) => 2024 - i).map(y => <option key={y}>{y}</option>)}
                </select>
              </SelectWrap>
            </div>
            <div>
              <FL required>Kilométrage</FL>
              <input className="input-md" type="number" placeholder="85 000" value={form.km} onChange={e => set("km")(e.target.value)} />
            </div>
          </div>

          {/* Carburant / Boîte */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <FL>Carburant</FL>
              <SelectWrap>
                <select className="input-md" value={form.carburant} onChange={e => set("carburant")(e.target.value)} style={{ paddingRight: 32 }}>
                  <option value="">—</option>
                  {["Essence", "Diesel", "Hybride", "Hybride rechargeable", "Électrique", "GPL"].map(c => <option key={c}>{c}</option>)}
                </select>
              </SelectWrap>
            </div>
            <div>
              <FL>Boîte de vitesse</FL>
              <SelectWrap>
                <select className="input-md" value={form.boite} onChange={e => set("boite")(e.target.value)} style={{ paddingRight: 32 }}>
                  <option value="">—</option>
                  {["Manuelle", "Automatique", "Semi-automatique"].map(b => <option key={b}>{b}</option>)}
                </select>
              </SelectWrap>
            </div>
          </div>

          {/* Prix */}
          <div>
            <FL required>Prix demandé (€)</FL>
            <SelectWrap>
              <select className="input-md" value={form.prix} onChange={e => set("prix")(e.target.value)} style={{ paddingRight: 32 }}>
                <option value="">Sélectionner un prix</option>
                {[5000,8000,10000,12000,15000,18000,20000,22000,25000,28000,30000,35000,40000,45000,50000].map(p => (
                  <option key={p} value={p}>{p.toLocaleString("fr-FR")} €</option>
                ))}
              </select>
            </SelectWrap>
          </div>

          {/* Description */}
          <div>
            <FL>Description de l'annonce</FL>
            <textarea
              className="input-md"
              rows={3}
              placeholder="Collez ici le texte de l'annonce pour enrichir l'analyse (optionnel)"
              value={form.description}
              onChange={e => set("description")(e.target.value)}
              style={{ resize: "vertical" }}
            />
          </div>

          <button
            className="btn-cream"
            style={{ width: "100%", justifyContent: "center", padding: "13px", opacity: valid ? 1 : 0.4, cursor: valid ? "pointer" : "not-allowed" }}
            onClick={() => valid && onAnalyze(form)}
          >
            Lancer l'analyse <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Loading ─── */
function LoadingPanel() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", padding: "80px 0" }}>
      <Loader2 size={30} className="animate-spin" style={{ color: "#C5A558", margin: "0 auto 20px" }} />
      <h2 className="h3" style={{ marginBottom: 10 }}>Analyse en cours</h2>
      <p style={{ fontSize: 13, color: "#4A4A58" }}>Recherche de comparables marché et calcul de la marge de revente</p>
    </div>
  );
}

/* ─── Page ─── */
export default function AnalyserPage() {
  const [tab, setTab] = useState<Tab>("manual");
  const [state, setState] = useState<State>("idle");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [vehicleLabel, setVehicleLabel] = useState("BMW Série 3 320d M Sport · 2019 · 87 400 km");

  const handleLinkAnalyze = () => {
    setState("loading");
    setTimeout(() => { setResult(MOCK_LINK_RESULT); setState("result"); }, 2400);
  };

  const handleManualAnalyze = (data: ManualFormData) => {
    setVehicleLabel(`${data.marque} ${data.modele} · ${data.annee} · ${Number(data.km).toLocaleString("fr-FR")} km`);
    setState("loading");
    setTimeout(() => {
      const res = simulateAnalysis({ marque: data.marque, modele: data.modele, annee: Number(data.annee), km: Number(data.km), prix: Number(data.prix) });
      setResult(res);
      setState("result");
    }, 2400);
  };

  return (
    <div className="wrap" style={{ paddingTop: 32, paddingBottom: 64 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <h1 className="h1" style={{ marginBottom: 10 }}>
          Analyser un véhicule
        </h1>
        <p style={{ fontSize: 14, color: "#666", maxWidth: 380, margin: "0 auto 14px" }}>
          Obtenez le prix marché réel, la marge de revente estimée et un score de décision.
        </p>
        <span className="pill">
          {state === "result" ? "Mode test — crédits illimités" : "2 analyses gratuites disponibles"}
        </span>
      </div>

      {/* Tabs */}
      {state === "idle" && (
        <>
          <div style={{ maxWidth: 700, margin: "0 auto 20px", display: "flex", gap: 1, border: "1px solid #1c1c1c", borderRadius: 6, overflow: "hidden" }}>
            {[
              { id: "link"   as Tab, label: "Analyser un lien", badge: "BETA", badgeColor: "#fb923c" },
              { id: "manual" as Tab, label: "Saisie manuelle", badge: null, badgeColor: "" },
            ].map(({ id, label, badge, badgeColor }) => (
              <button
                key={id}
                className={tab === id ? "tab-active" : "tab-inactive"}
                onClick={() => setTab(id)}
                style={{
                  flex: 1, padding: "13px 20px", fontSize: 12,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  cursor: "pointer", border: "none", fontFamily: "inherit", transition: "all 0.15s",
                }}
              >
                {label}
                {badge && (
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, letterSpacing: "0.1em", padding: "2px 6px", borderRadius: 3, background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.2)", color: badgeColor }}>
                    {badge}
                  </span>
                )}
              </button>
            ))}
          </div>
          {tab === "link"   && <LinkForm onAnalyze={handleLinkAnalyze} />}
          {tab === "manual" && <ManualForm onAnalyze={handleManualAnalyze} />}
        </>
      )}

      {state === "loading" && <LoadingPanel />}
      {state === "result" && result && <ResultPanel result={result} label={vehicleLabel} />}
    </div>
  );
}
