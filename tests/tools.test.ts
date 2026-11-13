import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { SLOT_COUNT } from '../src/lib/geometry';
import { bySlot, toolSchema, type Tool } from '../src/lib/tools';

const valid = {
  name: 'Exemple',
  slot: 0,
  status: 'live',
  url: 'https://exemple.vercel.app',
  description: { fr: 'Un outil.', en: 'A tool.' },
};

describe('schéma des fiches outils', () => {
  it('accepte une fiche complète', () => {
    expect(toolSchema.safeParse(valid).success).toBe(true);
  });

  it("accepte une fiche sans adresse", () => {
    const { url: _url, ...withoutUrl } = valid;
    expect(toolSchema.safeParse(withoutUrl).success).toBe(true);
  });

  it.each([
    ['un emplacement hors limites', { ...valid, slot: SLOT_COUNT }],
    ['un emplacement négatif', { ...valid, slot: -1 }],
    ['un statut inconnu', { ...valid, status: 'archived' }],
    ['une adresse invalide', { ...valid, url: 'pas-une-url' }],
    ['une description sans anglais', { ...valid, description: { fr: 'Un outil.' } }],
  ])('refuse %s', (_label, data) => {
    expect(toolSchema.safeParse(data).success).toBe(false);
  });
});

describe('rangement par emplacement', () => {
  const tool = (id: string, slot: number): Tool => ({ ...(valid as Omit<Tool, 'id'>), id, slot });

  it('remplit les emplacements utilisés et laisse les autres vides', () => {
    const slots = bySlot([tool('a', 0), tool('b', 3)]);
    expect(slots).toHaveLength(SLOT_COUNT);
    expect(slots[0]?.id).toBe('a');
    expect(slots[3]?.id).toBe('b');
    expect(slots[1]).toBeNull();
  });

  it('refuse deux outils sur le même emplacement', () => {
    expect(() => bySlot([tool('a', 2), tool('b', 2)])).toThrow(/Emplacement 2/);
  });
});

describe('fiches réelles de src/content/tools', () => {
  const dir = join(import.meta.dirname, '../src/content/tools');
  const files = readdirSync(dir).filter((f) => f.endsWith('.yaml'));

  it('contient au moins un outil', () => {
    expect(files.length).toBeGreaterThan(0);
  });

  it('respecte le schéma et n’utilise chaque emplacement qu’une fois', () => {
    const tools = files.map((file) => {
      const data = toolSchema.parse(parse(readFileSync(join(dir, file), 'utf8')));
      return { ...data, id: file.replace(/\.yaml$/, '') };
    });
    expect(() => bySlot(tools)).not.toThrow();
  });
});
