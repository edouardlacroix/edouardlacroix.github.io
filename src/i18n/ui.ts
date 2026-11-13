export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export interface Messages {
  title: string;
  description: string;
  nexusLabel: string;
  statuses: { live: string; wip: string; draft: string; soon: string };
  soonName: string;
  soonDescription: string;
  open: string;
  otherLanguage: string;
}

export const ui: Record<Locale, Messages> = {
  fr: {
    title: 'Nexus · Édouard Lacroix',
    description: 'Tous mes outils au même endroit. Chacun vit à sa propre adresse.',
    nexusLabel: 'Mes outils autour du centre',
    statuses: { live: 'en ligne', wip: 'en construction', draft: 'à décrire', soon: 'à venir' },
    soonName: 'bientôt',
    soonDescription: 'Un emplacement libre pour le prochain outil.',
    open: 'Ouvrir',
    otherLanguage: 'English',
  },
  en: {
    title: 'Nexus · Édouard Lacroix',
    description: 'All my tools in one place. Each one lives at its own address.',
    nexusLabel: 'My tools around the center',
    statuses: { live: 'live', wip: 'in progress', draft: 'to describe', soon: 'coming soon' },
    soonName: 'soon',
    soonDescription: 'A free slot for the next tool.',
    open: 'Open',
    otherLanguage: 'Français',
  },
};
