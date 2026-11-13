import { ui, type Locale } from '../i18n/ui';
import { SEED_COLOR, SLOT_COLORS } from './palette';
import { SLOTS } from './geometry';
import type { Tool } from './tools';

/** Ce que l'affichage a besoin de savoir sur un emplacement, outil ou emplacement libre. */
export interface Item {
  index: number;
  big: boolean;
  /** Vrai pour un emplacement libre. */
  seed: boolean;
  color: string;
  name: string;
  initial: string;
  description: string;
  status: string;
  /** Adresse de l'outil et son nom d'hôte, absents si l'outil n'est pas en ligne. */
  href?: string;
  host?: string;
}

export function toItems(slots: (Tool | null)[], locale: Locale): Item[] {
  const t = ui[locale];
  return SLOTS.map((slot) => {
    const tool = slots[slot.index];
    if (!tool) {
      return {
        index: slot.index,
        big: slot.big,
        seed: true,
        color: SEED_COLOR,
        name: t.soonName,
        initial: '+',
        description: t.soonDescription,
        status: t.statuses.soon,
      };
    }
    return {
      index: slot.index,
      big: slot.big,
      seed: false,
      color: SLOT_COLORS[slot.index],
      name: tool.name,
      initial: tool.name.charAt(0).toUpperCase(),
      description: tool.description[locale],
      status: t.statuses[tool.status],
      href: tool.url,
      host: tool.url ? new URL(tool.url).host : undefined,
    };
  });
}
