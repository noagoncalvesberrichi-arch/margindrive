import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatKm(km: number): string {
  return new Intl.NumberFormat("fr-FR").format(km) + " km";
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#d4a843";
  if (score >= 40) return "#f97316";
  return "#ef4444";
}

export function getScoreLabel(score: number): string {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Bon";
  if (score >= 40) return "Moyen";
  return "Risqué";
}

export function getRiskLabel(level: "low" | "medium" | "high"): string {
  return { low: "Faible", medium: "Modéré", high: "Élevé" }[level];
}

export function getRiskColor(level: "low" | "medium" | "high"): string {
  return { low: "#22c55e", medium: "#f97316", high: "#ef4444" }[level];
}

export function getMarginClass(margin: number): string {
  if (margin >= 3000) return "text-green-400";
  if (margin >= 1500) return "text-gold-500";
  if (margin >= 500)  return "text-orange-400";
  return "text-red-400";
}

export function simulateAnalysis(params: {
  marque: string;
  modele: string;
  annee: number;
  km: number;
  prix: number;
}): AnalysisResult {
  const ageCoeff = Math.max(0.3, 1 - (2024 - params.annee) * 0.06);
  const kmCoeff = Math.max(0.5, 1 - (params.km / 200000) * 0.4);
  const base = params.prix / (ageCoeff * kmCoeff);
  const marketPrice = Math.round(base * (0.95 + Math.random() * 0.15));
  const margin = marketPrice - params.prix;
  const marginPct = Math.round((margin / marketPrice) * 100);
  const score = Math.min(100, Math.max(10, 50 + marginPct * 1.5));
  const risk: "low" | "medium" | "high" =
    margin > 3000 ? "low" : margin > 1000 ? "medium" : "high";

  return {
    prixAffiche: params.prix,
    coteMarcheEstimee: marketPrice,
    margePotentielle: margin,
    margePourcent: marginPct,
    revente_rapide: Math.round(marketPrice * 0.95),
    revente_premium: Math.round(marketPrice * 1.08),
    score: Math.round(score),
    risque: risk,
    recommandation: margin > 2000 ? "ACHETER" : margin > 500 ? "NÉGOCIER" : "PASSER",
    points_positifs: [
      params.annee >= 2019 ? "Véhicule récent" : null,
      params.km < 80000 ? "Kilométrage maîtrisé" : null,
      margin > 2000 ? "Forte marge potentielle" : null,
      "Marque réputée sur le marché",
    ].filter(Boolean) as string[],
    points_negatifs: [
      params.km > 150000 ? "Kilométrage élevé" : null,
      params.annee < 2015 ? "Véhicule ancien" : null,
      margin < 500 ? "Faible marge brute" : null,
    ].filter(Boolean) as string[],
  };
}

export interface AnalysisResult {
  prixAffiche: number;
  coteMarcheEstimee: number;
  margePotentielle: number;
  margePourcent: number;
  revente_rapide: number;
  revente_premium: number;
  score: number;
  risque: "low" | "medium" | "high";
  recommandation: "ACHETER" | "NÉGOCIER" | "PASSER";
  points_positifs: string[];
  points_negatifs: string[];
}
