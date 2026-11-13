import { z } from 'astro/zod';
import { SLOT_COUNT } from './geometry';

export const STATUSES = ['live', 'wip', 'draft'] as const;
export type Status = (typeof STATUSES)[number];

/** Forme d'une fiche outil dans src/content/tools/*.yaml. */
export const toolSchema = z.object({
  name: z.string().min(1),
  /** Emplacement dans le Nexus, de 0 à 7 (voir src/lib/geometry.ts). */
  slot: z.number().int().min(0).max(SLOT_COUNT - 1),
  status: z.enum(STATUSES),
  /** Sans adresse, le nœud s'affiche mais ne mène nulle part. */
  url: z.string().url().optional(),
  description: z.object({ fr: z.string().min(1), en: z.string().min(1) }),
});

export type ToolData = z.infer<typeof toolSchema>;
export type Tool = ToolData & { id: string };

/** Range les outils par emplacement. Deux outils sur le même emplacement sont une erreur. */
export function bySlot(tools: Tool[]): (Tool | null)[] {
  const slots: (Tool | null)[] = Array.from({ length: SLOT_COUNT }, () => null);
  for (const tool of tools) {
    const taken = slots[tool.slot];
    if (taken) throw new Error(`Emplacement ${tool.slot} pris par "${taken.id}" et "${tool.id}".`);
    slots[tool.slot] = tool;
  }
  return slots;
}
