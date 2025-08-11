import { toMinutes } from "./utils/time";

export type AppUsage = { app: string; minutes: number };
export type Person = { id: string; label: string; periodDays: number; apps: AppUsage[] };

// Dados extraídos das fotos fornecidas (interpretação humana).
// Valores são em minutos por 7 dias.
export const PEOPLE: Person[] = [
  {
    id: "P1",
    label: "P1 (7 dias)",
    periodDays: 7,
    apps: [
      { app: "Instagram", minutes: toMinutes(10,59) },
      { app: "TikTok", minutes: toMinutes(8,26) },
      { app: "WhatsApp", minutes: toMinutes(6,15) },
      { app: "X", minutes: toMinutes(5,48) },
      { app: "YouTube", minutes: toMinutes(3,19) },
      { app: "Netflix", minutes: toMinutes(2,49) },
      { app: "Pocket Terço", minutes: toMinutes(2,34) },
      { app: "Clash Royale", minutes: 36 },
      { app: "Spotify", minutes: 35 },
      { app: "Google", minutes: 10 },
    ],
  },
  {
    id: "P2",
    label: "P2 (7 dias)",
    periodDays: 7,
    apps: [
      { app: "TikTok", minutes: toMinutes(12,48) },
      { app: "Instagram", minutes: toMinutes(11,58) },
      { app: "YouTube", minutes: toMinutes(8,30) },
      { app: "WhatsApp", minutes: toMinutes(7,0) },
      { app: "Itaú", minutes: toMinutes(2,23) },
      { app: "Outro (Vídeos)", minutes: toMinutes(2,11) }, // rótulo genérico pelo manuscrito
      { app: "Google", minutes: toMinutes(1,23) },
      { app: "Spotify", minutes: 30 },
      { app: "Fotos", minutes: 10 },
    ],
  },
  {
    id: "P3",
    label: "P3 (7 dias)",
    periodDays: 7,
    apps: [
      { app: "TikTok", minutes: toMinutes(9,41) },
      { app: "WhatsApp", minutes: toMinutes(8,33) },
      { app: "State.io", minutes: toMinutes(4,51) },
      { app: "Inter", minutes: toMinutes(2,27) },
      { app: "Instagram", minutes: toMinutes(1,55) },
      { app: "Sicoob", minutes: 35 },
      { app: "Clash Royale", minutes: 25 },
      { app: "Spotify", minutes: 16 },
      { app: "Uber", minutes: 12 },
      { app: "Twitch", minutes: 11 },
      { app: "Ajustes", minutes: 10 },
    ],
  },
  {
    id: "P4",
    label: "P4 (7 dias)",
    periodDays: 7,
    apps: [
      { app: "TikTok", minutes: toMinutes(6,1) },
      { app: "WhatsApp", minutes: toMinutes(5,2) },
      { app: "Instagram", minutes: toMinutes(2,29) },
      { app: "Prime Video", minutes: toMinutes(1,21) },
      { app: "Netflix", minutes: toMinutes(1,18) },
      { app: "Spotify", minutes: 54 },
      { app: "Inter", minutes: 25 },
      { app: "Facebook", minutes: 18 },
    ],
  },
  {
    id: "P5",
    label: "P5 (7 dias)",
    periodDays: 7,
    apps: [
      { app: "WhatsApp", minutes: toMinutes(8,23) },
      { app: "TikTok", minutes: toMinutes(8,13) },
      { app: "Instagram", minutes: toMinutes(4,52) },
      { app: "Nubank", minutes: toMinutes(1,29) },
      { app: "Fotos", minutes: 37 },
      { app: "YouTube", minutes: 22 },
      { app: "Mercado Pago", minutes: 20 },
      { app: "Investing", minutes: 20 },
    ],
  },
];

export const DEFAULT_WEEKLY_GOAL_MIN = 7 * 120; // 120 min/dia focados em redes sociais
