export type Minute = number;

export function toMinutes(h: number, m: number): Minute {
  return h * 60 + m;
}

export function fmtMinutes(total: number) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h <= 0) return `${m} min`;
  return `${h}h ${m}min`;
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// social apps we consider for reduction targeting
export const SOCIAL_APPS = new Set<string>([
  "tiktok", "instagram", "whatsapp", "facebook", "x", "twitter", "youtube", "twitch", "snapchat"
]);

export function isSocial(appName: string): boolean {
  const key = appName.trim().toLowerCase();
  return SOCIAL_APPS.has(key) || key.includes("insta") || key.includes("tiktok") || key.includes("whats") || key.includes("youtube") || key === "x";
}

export function normalizeAppName(name: string): string {
  // normalize variations like "tik tok" -> "TikTok", "insta" -> "Instagram", "x" -> "X"
  const n = name.trim().toLowerCase();
  if (n.includes("tik")) return "TikTok";
  if (n.includes("insta")) return "Instagram";
  if (n.includes("whats")) return "WhatsApp";
  if (n === "x" || n.includes("twitter")) return "X";
  if (n.includes("youtube") || n === "yt") return "YouTube";
  if (n.includes("prime")) return "Prime Video";
  if (n.includes("netflix")) return "Netflix";
  if (n.includes("spotify")) return "Spotify";
  if (n.includes("facebook")) return "Facebook";
  if (n.includes("inter")) return "Inter";
  if (n.includes("nubank")) return "Nubank";
  if (n.includes("sicoob")) return "Sicoob";
  if (n.includes("clash")) return "Clash Royale";
  if (n.includes("ajustes")) return "Ajustes";
  if (n.includes("mercado pago")) return "Mercado Pago";
  if (n.includes("investing")) return "Investing";
  return name.trim().replace(/\s+/g, " ").replace(/^./, c => c.toUpperCase());
}
