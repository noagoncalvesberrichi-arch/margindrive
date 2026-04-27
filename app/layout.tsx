import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarginDrive — Trouvez des voitures rentables avant les autres",
  description:
    "MarginDrive analyse chaque annonce automobile pour détecter les véhicules sous-cotés et maximiser votre marge d'achat-revente.",
  keywords: ["achat revente voiture", "arbitrage automobile", "cote voiture", "bonne affaire", "marge automobile"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
