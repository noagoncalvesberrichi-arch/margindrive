"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Clock, ArrowRight, Send } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const SUBJECTS = [
  "Question sur les fonctionnalités",
  "Problème technique",
  "Question sur la facturation",
  "Partenariat / presse",
  "Autre",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main style={{ background: "#0b0b0b" }}>
      <Navbar />
      <section style={{ paddingTop: 116, paddingBottom: 80 }}>
        <div className="wrap">
          {/* Header */}
          <div style={{ marginBottom: 56 }}>
            <p className="section-label section-label-slash" style={{ display: "inline-block", marginBottom: 14, color: "#555" }}>
              SUPPORT
            </p>
            <h1 className="h1" style={{ marginBottom: 14 }}>
              Une question ?<br />On vous répond.
            </h1>
            <p style={{ color: "#666", fontSize: 14, maxWidth: 440 }}>
              Notre équipe est disponible du lundi au vendredi. Réponse garantie sous 24h ouvrées.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, alignItems: "start" }}>
            {/* Form */}
            <div className="card" style={{ overflow: "hidden" }}>
              <div style={{ padding: "22px 28px", borderBottom: "1px solid #1e1e1e" }}>
                <h2 className="h3">Envoyer un message</h2>
                <p style={{ fontSize: 12, color: "#555", marginTop: 3 }}>Nous répondons sous 24h en jours ouvrés.</p>
              </div>

              {sent ? (
                <div style={{ padding: "60px 28px", textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <Send size={20} style={{ color: "#4ade80" }} />
                  </div>
                  <h3 className="h3" style={{ marginBottom: 8 }}>Message envoyé.</h3>
                  <p style={{ fontSize: 13, color: "#555", marginBottom: 24 }}>
                    Nous vous répondrons dans les 24 prochaines heures ouvrées.
                  </p>
                  <button className="btn-outline" style={{ padding: "10px 20px" }} onClick={() => setSent(false)}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  style={{ padding: "28px" }}
                  onSubmit={e => { e.preventDefault(); setSent(true); }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    {/* Name row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {[{ id: "prenom", label: "PRÉNOM", placeholder: "Jean" }, { id: "nom", label: "NOM", placeholder: "Dupont" }].map(f => (
                        <div key={f.id}>
                          <label className="field-label">{f.label}</label>
                          <input type="text" className="input-md" placeholder={f.placeholder} />
                        </div>
                      ))}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="field-label">ADRESSE EMAIL</label>
                      <input type="email" className="input-md" placeholder="vous@exemple.com" />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="field-label">SUJET</label>
                      <div style={{ position: "relative" }}>
                        <select className="input-md" style={{ paddingRight: 32 }}>
                          <option value="">Sélectionner un sujet</option>
                          {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="field-label">MESSAGE</label>
                      <textarea
                        rows={5}
                        className="input-md"
                        placeholder="Décrivez votre question ou problème en détail..."
                        style={{ resize: "vertical" }}
                      />
                    </div>

                    <button type="submit" className="btn-cream" style={{ justifyContent: "center" }}>
                      Envoyer le message <ArrowRight size={13} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Info column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  icon: Mail,
                  title: "Email support",
                  desc: "support@margindrive.io",
                  sub: "Réponse sous 24h ouvrées",
                },
                {
                  icon: Clock,
                  title: "Disponibilité",
                  desc: "Lun–Ven, 9h–18h",
                  sub: "Heure de Paris (CET/CEST)",
                },
              ].map(({ icon: Icon, title, desc, sub }) => (
                <div key={title} className="card" style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 34, height: 34, background: "#1a1a1a", border: "1px solid #252525", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={15} style={{ color: "#666" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: "#ede9e3", marginBottom: 2 }}>{title}</p>
                    <p style={{ fontSize: 13, color: "#888", marginBottom: 2 }}>{desc}</p>
                    <p style={{ fontSize: 11, color: "#555" }}>{sub}</p>
                  </div>
                </div>
              ))}

              <div className="card" style={{ padding: "18px 20px", background: "rgba(232,221,200,0.03)", border: "1px solid rgba(232,221,200,0.1)" }}>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#ede9e3", marginBottom: 6 }}>Consultez notre FAQ</p>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 14 }}>
                  La majorité des questions trouvent une réponse dans notre base de connaissances.
                </p>
                <Link href="/faq" className="btn-outline" style={{ padding: "9px 16px", fontSize: 10, width: "100%", justifyContent: "center" }}>
                  Voir la FAQ <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
