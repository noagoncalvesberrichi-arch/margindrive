"use client";
import { Star, MapPin, Clock, TrendingUp, AlertTriangle, ExternalLink } from "lucide-react";
import { formatPrice, formatKm, getRiskColor, getRiskLabel, getScoreColor } from "@/lib/utils";
import type { MOCK_DEALS } from "@/lib/mock-data";

type Deal = (typeof MOCK_DEALS)[0];

interface DealCardProps {
  deal: Deal;
  compact?: boolean;
}

export function DealCard({ deal, compact = false }: DealCardProps) {
  const margePct = deal.margePourcent;
  const riskColor = getRiskColor(deal.risque);
  const scoreColor = getScoreColor(deal.score);

  return (
    <div className="gold-card rounded-xl overflow-hidden group cursor-pointer transition-all duration-200 hover:-translate-y-0.5">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
              style={{ color: riskColor, borderColor: `${riskColor}40`, background: `${riskColor}15` }}
            >
              Risque {getRiskLabel(deal.risque)}
            </span>
            <span className="text-[10px] text-dark-500">{deal.source}</span>
          </div>
          <h3 className="font-bold text-white text-sm">
            {deal.marque} {deal.modele}
          </h3>
          <p className="text-xs text-dark-400 mt-0.5">
            {deal.annee} · {formatKm(deal.km)} · {deal.carburant} · {deal.boite}
          </p>
        </div>

        {/* Score */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: scoreColor }}
          >
            <span className="text-sm font-black" style={{ color: scoreColor }}>
              {deal.score}
            </span>
          </div>
          <span className="text-[9px] text-dark-500 mt-0.5">SCORE</span>
        </div>
      </div>

      {/* Prices */}
      <div className="px-4 py-3 bg-black/20 flex items-center gap-4">
        <div>
          <p className="text-[10px] text-dark-500 uppercase tracking-wide">Prix affiché</p>
          <p className="text-base font-bold text-white">{formatPrice(deal.prixAffiche)}</p>
        </div>
        <div className="text-dark-600">→</div>
        <div>
          <p className="text-[10px] text-dark-500 uppercase tracking-wide">Cote marché</p>
          <p className="text-base font-bold text-dark-200">{formatPrice(deal.coteMarcheEstimee)}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-[10px] text-dark-500 uppercase tracking-wide">Marge</p>
          <div className="flex items-center gap-1 justify-end">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <p className="text-base font-black text-green-400">
              +{formatPrice(deal.margePotentielle)}
            </p>
          </div>
          <p className="text-[10px] text-green-500">+{margePct}%</p>
        </div>
      </div>

      {!compact && (
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-dark-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {deal.localisation}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {deal.tempsPublication}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg text-dark-500 hover:text-gold-400 hover:bg-gold-500/10 transition-all">
              <Star className="w-3.5 h-3.5" />
            </button>
            <button className="p-1.5 rounded-lg text-dark-500 hover:text-white hover:bg-white/10 transition-all">
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
