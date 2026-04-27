"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Link2, ClipboardList, Zap, Star,
  Bell, Settings, LogOut, ChevronRight, Crown
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/analyze-link", label: "Analyse par lien", icon: Link2 },
  { href: "/analyze-manual", label: "Analyse manuelle", icon: ClipboardList },
  { href: "/deals", label: "Bonnes affaires", icon: Zap, badge: "LIVE" },
  { href: "/favorites", label: "Favoris", icon: Star },
  { href: "/alerts", label: "Alertes", icon: Bell, badge: "3" },
];

const BOTTOM_NAV = [
  { href: "/settings", label: "Paramètres", icon: Settings },
  { href: "/login", label: "Déconnexion", icon: LogOut },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#0d0d0d] border-r border-[#1e1e1e]">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-[#1e1e1e]">
        <Logo size="sm" href="/dashboard" />
      </div>

      {/* Plan badge */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20">
          <Crown className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-xs font-semibold text-gold-400">Plan Pro</span>
          <span className="ml-auto text-[10px] text-dark-500">59€/mois</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5">
        {NAV.map(({ href, label, icon: Icon, badge }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                active
                  ? "bg-gold-500/10 text-gold-400 border border-gold-500/20"
                  : "text-dark-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className={cn("w-4 h-4 flex-shrink-0", active ? "text-gold-500" : "")} />
              <span className="flex-1">{label}</span>
              {badge && (
                <span
                  className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                    badge === "LIVE"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-gold-500/20 text-gold-400"
                  )}
                >
                  {badge}
                </span>
              )}
              {active && <ChevronRight className="w-3 h-3 text-gold-500 opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Usage meter */}
      <div className="px-4 py-3 border-t border-[#1e1e1e]">
        <div className="text-xs text-dark-500 mb-1.5 flex justify-between">
          <span>Analyses utilisées</span>
          <span className="text-dark-400">47 / 200</span>
        </div>
        <div className="h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: "23.5%",
              background: "linear-gradient(90deg, #d4a843, #f4c754)",
            }}
          />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="px-3 py-3 space-y-0.5 border-t border-[#1e1e1e]">
        {BOTTOM_NAV.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-dark-500 hover:text-white hover:bg-white/5 transition-all"
          >
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        ))}
      </div>

      {/* Avatar */}
      <div className="px-4 py-4 border-t border-[#1e1e1e]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-black text-xs font-bold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Jean Dupont</p>
            <p className="text-[10px] text-dark-500 truncate">jean@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
