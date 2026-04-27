"use client";
import { useState } from "react";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="wrap" style={{ paddingTop: 36, paddingBottom: 64, maxWidth: 640 }}>
      <div style={{ marginBottom: 36 }}>
        <h1 className="h1" style={{ fontSize: "1.6rem" }}>Paramètres</h1>
        <p style={{ color: "#666", fontSize: 13, marginTop: 2 }}>Gérez vos informations et préférences.</p>
      </div>

      {/* Profile */}
      <div style={{ marginBottom: 36 }}>
        <p className="section-label" style={{ marginBottom: 14 }}>/ 01 — PROFIL</p>
        <form onSubmit={handleSave} className="card" style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[{ id: "prenom", label: "PRÉNOM", value: "Iza" }, { id: "nom", label: "NOM", value: "B." }].map(f => (
              <div key={f.id}>
                <label className="field-label">{f.label}</label>
                <input type="text" className="input-md" defaultValue={f.value} />
              </div>
            ))}
          </div>
          <div>
            <label className="field-label">ADRESSE EMAIL</label>
            <input type="email" className="input-md" defaultValue="iza.b95@gmail.com" />
          </div>
          <div>
            <label className="field-label">TÉLÉPHONE (OPTIONNEL)</label>
            <input type="tel" className="input-md" placeholder="+33 6 00 00 00 00" />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className={saved ? "btn-outline" : "btn-cream"} style={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <Save size={13} />
              {saved ? "Enregistré ✓" : "Enregistrer"}
            </button>
          </div>
        </form>
      </div>

      {/* Password */}
      <div style={{ marginBottom: 36 }}>
        <p className="section-label" style={{ marginBottom: 14 }}>/ 02 — MOT DE PASSE</p>
        <div className="card" style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "MOT DE PASSE ACTUEL", placeholder: "••••••••" },
            { label: "NOUVEAU MOT DE PASSE", placeholder: "8 caractères minimum" },
            { label: "CONFIRMER LE NOUVEAU MOT DE PASSE", placeholder: "••••••••" },
          ].map(f => (
            <div key={f.label}>
              <label className="field-label">{f.label}</label>
              <input type="password" className="input-md" placeholder={f.placeholder} />
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn-cream" style={{ padding: "10px 20px" }}>
              Changer le mot de passe
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div style={{ marginBottom: 36 }}>
        <p className="section-label" style={{ marginBottom: 14 }}>/ 03 — NOTIFICATIONS</p>
        <div className="card" style={{ overflow: "hidden" }}>
          {[
            { label: "Nouvelles opportunités détectées", sub: "Alertes Best Deals en temps réel" },
            { label: "Résumé hebdomadaire", sub: "Recap des meilleures affaires de la semaine" },
            { label: "Mises à jour produit", sub: "Nouvelles fonctionnalités et améliorations" },
          ].map((n, i) => (
            <div
              key={n.label}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 22px",
                borderBottom: i < 2 ? "1px solid #1a1a1a" : "none",
              }}
            >
              <div>
                <p style={{ fontSize: 13, color: "#ede9e3", fontWeight: 500 }}>{n.label}</p>
                <p style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{n.sub}</p>
              </div>
              <label style={{ position: "relative", cursor: "pointer", width: 36, height: 20, flexShrink: 0 }}>
                <input type="checkbox" defaultChecked={i < 2} style={{ opacity: 0, position: "absolute", width: 0, height: 0 }} />
                <div style={{ width: 36, height: 20, borderRadius: 10, background: i < 2 ? "#e8ddc8" : "#252525", transition: "background 0.2s", position: "relative" }}>
                  <div style={{ position: "absolute", top: 2, left: i < 2 ? 18 : 2, width: 16, height: 16, borderRadius: "50%", background: i < 2 ? "#0b0b0b" : "#555", transition: "left 0.2s" }} />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div>
        <p className="section-label" style={{ marginBottom: 14, color: "#444" }}>/ 04 — ZONE DE DANGER</p>
        <div className="card" style={{ padding: "20px 24px", border: "1px solid rgba(248,113,113,0.15)" }}>
          <p style={{ fontSize: 14, color: "#ede9e3", fontWeight: 500, marginBottom: 4 }}>Supprimer mon compte</p>
          <p style={{ fontSize: 12, color: "#555", marginBottom: 16, lineHeight: 1.6 }}>
            Cette action est irréversible. Toutes vos données (analyses, historique, suivi de véhicules) seront définitivement supprimées.
          </p>
          <button style={{
            padding: "9px 18px", borderRadius: 4, fontSize: 11,
            background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.25)",
            color: "#f87171", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700,
            letterSpacing: "0.08em", cursor: "pointer",
          }}>
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  );
}
