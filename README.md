# AURIX — Auto Intelligence SaaS

**L'intelligence automobile au service de votre profit.**

Plateforme d'analyse intelligente d'annonces automobiles pour l'achat-revente rentable.

## Stack technique

- **Framework** : Next.js 15 (App Router, TypeScript)
- **Styles** : Tailwind CSS — thème noir/or premium
- **Icônes** : Lucide React
- **Charts** : Recharts
- **Animations** : Framer Motion

## Démarrage rapide

```bash
# Installer Node.js 18+ si ce n'est pas déjà fait
# https://nodejs.org

cd aurix
npm install
npm run dev
# → http://localhost:3000
```

## Structure du projet

```
aurix/
├── app/
│   ├── page.tsx                      ← Landing page
│   ├── pricing/page.tsx              ← Page tarifs
│   ├── contact/page.tsx              ← Contact
│   ├── faq/page.tsx                  ← FAQ interactive
│   ├── (auth)/
│   │   ├── login/page.tsx            ← Connexion
│   │   └── register/page.tsx         ← Inscription
│   └── (dashboard)/
│       ├── layout.tsx                ← Layout sidebar
│       ├── dashboard/page.tsx        ← Dashboard principal
│       ├── analyze-link/page.tsx     ← Analyse par URL
│       ├── analyze-manual/page.tsx   ← Analyse manuelle
│       └── deals/page.tsx            ← Bonnes affaires
├── components/
│   ├── shared/                       ← Logo, Navbar, Footer
│   └── dashboard/                    ← Sidebar, ScoreRing, DealCard
└── lib/
    ├── utils.ts                      ← Helpers + simulateAnalysis()
    └── mock-data.ts                  ← Données de démo
```

## Plans & tarifs

| Plan    | Prix     | Analyses/mois | Détection auto |
|---------|----------|---------------|----------------|
| Starter | 29,99€   | 30            | ✗              |
| Pro     | 59,99€   | 200           | ✓              |
| Elite   | 99€      | Illimitées    | ✓ Prioritaire  |

## Pour aller en production

1. Connecter une vraie API de cotation (L'Argus, AAA Data, Data4Car)
2. Ajouter un scraper d'annonces (Playwright / Puppeteer + proxy rotation)
3. Configurer Stripe pour la gestion des abonnements
4. Ajouter NextAuth.js ou Clerk pour l'authentification
5. Déployer sur Vercel (configuration zéro)
