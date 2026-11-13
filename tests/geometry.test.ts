import { describe, expect, it } from 'vitest';
import { HUB_R, SLOTS, SLOT_COUNT, VIEW } from '../src/lib/geometry';

const CENTER = VIEW / 2;
const dist = (ax: number, ay: number, bx: number, by: number) => Math.hypot(ax - bx, ay - by);

function endpoints(path: string) {
  const n = path.match(/-?\d+(\.\d+)?/g)!.map(Number);
  return { x0: n[0], y0: n[1], x1: n[4], y1: n[5] };
}

describe('géométrie du Nexus', () => {
  it('compte 8 emplacements : 4 grands puis 4 petits', () => {
    expect(SLOTS).toHaveLength(SLOT_COUNT);
    expect(SLOTS.map((s) => s.big)).toEqual([true, true, true, true, false, false, false, false]);
  });

  it('place les grands nœuds en haut, à droite, en bas et à gauche', () => {
    const [top, right, bottom, left] = SLOTS;
    expect(top.left).toBeCloseTo(50, 1);
    expect(top.top).toBeLessThan(50);
    expect(right.top).toBeCloseTo(50, 1);
    expect(right.left).toBeGreaterThan(50);
    expect(bottom.left).toBeCloseTo(50, 1);
    expect(bottom.top).toBeGreaterThan(50);
    expect(left.top).toBeCloseTo(50, 1);
    expect(left.left).toBeLessThan(50);
  });

  it('garde tous les nœuds dans le carré', () => {
    for (const s of SLOTS) {
      expect(s.x - s.r).toBeGreaterThan(0);
      expect(s.x + s.r).toBeLessThan(VIEW);
      expect(s.y - s.r).toBeGreaterThan(0);
      expect(s.y + s.r).toBeLessThan(VIEW);
    }
  });

  it('ne fait chevaucher aucun nœud', () => {
    for (const a of SLOTS) {
      for (const b of SLOTS) {
        if (a.index < b.index) expect(dist(a.x, a.y, b.x, b.y)).toBeGreaterThan(a.r + b.r);
      }
    }
  });

  it('trace chaque branche du bord du centre au bord de son nœud', () => {
    for (const s of SLOTS) {
      const { x0, y0, x1, y1 } = endpoints(s.path);
      expect(dist(x0, y0, CENTER, CENTER)).toBeCloseTo(HUB_R, 0);
      expect(dist(x1, y1, s.x, s.y)).toBeCloseTo(s.r, 0);
    }
  });

  it('donne une position à chaque étiquette', () => {
    for (const s of SLOTS) expect(s.label).toMatch(/(left|right):[\d.]+%;top:[\d.]+%;transform:/);
  });
});
