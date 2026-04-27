"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const FAQS = [
  {
    category: "Général",
    num: "01",
    items: [
      {
        q: "Qu'est-ce que MarginDrive exactement ?",
        a: "MarginDrive est une plateforme d'analyse marché dédiée à l'achat-revente automobile. Elle permet aux professionnels de détecter rapidement les véhicules sous-évalués, d'estimer leur marge de revente et de prendre des décisions d'achat basées sur des données réelles.",
      },
      {
        q: "Pour qui MarginDrive est-il conçu ?",
        a: "MarginDrive s'adresse aux revendeurs automobiles indépendants, aux négociants professionnels, aux importateurs, et à toute personne souhaitant faire de l'achat-revente automobile de manière rentable et sécurisée.",
      },
      {
        q: "Comment MarginDrive estime-t-il la cote marché ?",
        a: "Notre moteur de cotation agrège en temps réel les données de plus de 15 plateformes automobiles européennes (Leboncoin, La Centrale, AutoScout24, Mobile.de, etc.) et analyse des dizaines de milliers d'annonces comparables pour établir une cote fiable à ±3%.",
      },
    ],
  },
  {
    category: "Fonctionnalités",
    num: "02",
    items: [
      {
        q: "Quelles plateformes d'annonces sont supportées ?",
        a: "MarginDrive supporte actuellement Leboncoin, La Centrale, AutoScout24, Mobile.de, Motorway, L'Argus, Paruvendu et Vivastreet. D'autres plateformes sont régulièrement ajoutées.",
      },
      {
        q: "Combien de temps dure une analyse ?",
        a: "Une analyse complète prend entre 5 et 12 secondes selon la disponibilité des données comparables sur le marché.",
      },
      {
        q: "Que contient exactement le rapport d'analyse ?",
        a: "Chaque rapport inclut : le prix affiché, la cote marché estimée, la marge potentielle (en € et en %), le score de rentabilité (0-100), le niveau de risque, l'estimation de revente rapide et premium, les points positifs/négatifs, et une recommandation finale (ACHETER / NÉGOCIER / PASSER).",
      },
      {
        q: "La détection automatique fonctionne-t-elle en continu ?",
        a: "Oui, sur les plans Pro et Premium, notre scanner tourne 24h/24 et 7j/7. Vous recevez une notification dès qu'une annonce correspondant à vos critères dépasse un score de rentabilité de 70.",
      },
    ],
  },
  {
    category: "Abonnement & Facturation",
    num: "03",
    items: [
      {
        q: "Y a-t-il un engagement de durée ?",
        a: "Non, aucun engagement. Vous pouvez annuler à tout moment depuis votre espace client. L'abonnement reste actif jusqu'à la fin de la période payée.",
      },
      {
        q: "Comment fonctionne l'essai gratuit ?",
        a: "L'essai gratuit dure 7 jours avec accès complet aux fonctionnalités du plan choisi. Aucune carte bancaire n'est requise pour démarrer. À la fin de l'essai, vous pouvez choisir de continuer avec un abonnement payant.",
      },
      {
        q: "Puis-je changer de plan en cours d'abonnement ?",
        a: "Oui, vous pouvez upgrader ou downgrader à tout moment. Un upgrade prend effet immédiatement (avec un crédit pro-rata). Un downgrade prend effet au prochain cycle de facturation.",
      },
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) via Stripe. Les paiements par virement sont disponibles pour les plans annuels sur demande.",
      },
    ],
  },
  {
    category: "Confidentialité & Sécurité",
    num: "04",
    items: [
      {
        q: "Mes données d'analyse sont-elles partagées ?",
        a: "Non. Vos analyses, favoris et historique sont strictement privés. Nous ne partageons aucune donnée personnelle avec des tiers.",
      },
      {
        q: "Où sont stockées mes données ?",
        a: "Toutes les données sont hébergées en France sur des serveurs certifiés ISO 27001. MarginDrive est conforme au RGPD.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setOpen(o => !o)}>
        <span style={{ fontSize: 14, fontWeight: 500, color: open ? "#f0ede8" : "#999", lineHeight: 1.5 }}>{q}</span>
        <ChevronDown
          size={15}
          style={{
            color: open ? "#e8ddc8" : "#555",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      {open && (
        <div className="accordion-content">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");

  const filtered = search
    ? FAQS.map(cat => ({
        ...cat,
        items: cat.items.filter(({ q, a }) =>
          q.toLowerCase().includes(search.toLowerCase()) ||
          a.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(cat => cat.items.length > 0)
    : FAQS;

  return (
    <main style={{ background: "#0b0b0b" }}>
      <Navbar />
      <section style={{ paddingTop: 116, paddingBottom: 80 }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          {/* Header */}
          <div style={{ marginBottom: 52 }}>
            <p className="section-label section-label-slash" style={{ display: "inline-block", marginBottom: 14, color: "#555" }}>
              FAQ
            </p>
            <h1 className="h1" style={{ marginBottom: 14 }}>Questions fréquentes</h1>
            <p style={{ color: "#666", fontSize: 14 }}>
              Toutes les réponses à vos questions sur MarginDrive.
            </p>
          </div>

          {/* Search */}
          <div style={{ position: "relative", marginBottom: 48 }}>
            <Search size={14} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#555", pointerEvents: "none" }} />
            <input
              type="text"
              className="input-md"
              placeholder="Rechercher une question..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: 40 }}
            />
          </div>

          {/* Categories */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {filtered.map(({ category, num, items }) => (
              <div key={category}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <p className="section-label" style={{ color: "#555" }}>/ {num} —</p>
                  <h2 className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "#888" }}>
                    {category.toUpperCase()}
                  </h2>
                </div>
                <div>
                  {items.map(({ q, a }) => (
                    <FAQItem key={q} q={q} a={a} />
                  ))}
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <p style={{ fontSize: 14, color: "#555" }}>Aucun résultat pour « {search} »</p>
                <p style={{ fontSize: 12, color: "#333", marginTop: 4 }}>Essayez avec d'autres mots-clés</p>
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div
            className="card"
            style={{ marginTop: 60, padding: "32px 28px", textAlign: "center", background: "rgba(232,221,200,0.03)", border: "1px solid rgba(232,221,200,0.1)" }}
          >
            <h3 className="h3" style={{ marginBottom: 8 }}>Vous ne trouvez pas votre réponse ?</h3>
            <p style={{ fontSize: 13, color: "#555", marginBottom: 20 }}>
              Notre équipe répond sous 24h en jours ouvrés.
            </p>
            <Link href="/contact" className="btn-cream" style={{ padding: "11px 24px" }}>
              Contacter le support <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
