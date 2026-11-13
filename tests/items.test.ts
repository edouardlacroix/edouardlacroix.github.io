import { describe, expect, it } from 'vitest';
import { ui } from '../src/i18n/ui';
import { SLOT_COUNT } from '../src/lib/geometry';
import { toItems } from '../src/lib/items';
import { SEED_COLOR, SLOT_COLORS } from '../src/lib/palette';
import { bySlot, type Tool } from '../src/lib/tools';

const tool = (slot: number, over: Partial<Tool> = {}): Tool => ({
  id: `tool-${slot}`,
  name: 'qualife',
  slot,
  status: 'live',
  url: 'https://qualife-theta.vercel.app/some/path',
  description: { fr: 'Description française', en: 'English description' },
  ...over,
});

describe('éléments affichés', () => {
  it('donne un élément par emplacement', () => {
    expect(toItems(bySlot([]), 'fr')).toHaveLength(SLOT_COUNT);
  });

  it('transforme un emplacement libre en graine, dans la langue demandée', () => {
    const [item] = toItems(bySlot([]), 'en');
    expect(item).toMatchObject({
      seed: true,
      color: SEED_COLOR,
      name: ui.en.soonName,
      status: ui.en.statuses.soon,
      initial: '+',
    });
    expect(item.href).toBeUndefined();
  });

  it('décrit un outil avec sa couleur, sa description et son hôte', () => {
    const items = toItems(bySlot([tool(1)]), 'fr');
    expect(items[1]).toMatchObject({
      seed: false,
      color: SLOT_COLORS[1],
      name: 'qualife',
      initial: 'Q',
      description: 'Description française',
      status: ui.fr.statuses.live,
      host: 'qualife-theta.vercel.app',
    });
  });

  it('change de langue sans changer le reste', () => {
    const slots = bySlot([tool(0, { status: 'wip' })]);
    expect(toItems(slots, 'en')[0].description).toBe('English description');
    expect(toItems(slots, 'en')[0].status).toBe(ui.en.statuses.wip);
  });

  it("n'a ni adresse ni hôte pour un outil hors ligne", () => {
    const [item] = toItems(bySlot([tool(0, { url: undefined })]), 'fr');
    expect(item.seed).toBe(false);
    expect(item.href).toBeUndefined();
    expect(item.host).toBeUndefined();
  });
});
