/**
 * Géométrie du Nexus : 8 emplacements autour d'un centre, repris du logo.
 * 4 grands nœuds sur les axes (haut, droite, bas, gauche) puis 4 petits en diagonale.
 * Toutes les coordonnées sont dans un carré de VIEW x VIEW unités.
 */
export const VIEW = 800;
/** Rayon du cercle central, en unités. */
export const HUB_R = 82;

const CENTER = VIEW / 2;
/** Le logo est dessiné dans 512 unités, le Nexus dans VIEW. */
const SCALE = VIEW / 512;
/** Courbure des branches, en fraction de leur longueur. */
const BEND = 0.14;

interface Def {
  angle: number;
  dist: number;
  r: number;
  big: boolean;
}

const BIG = { dist: 168, r: 35, big: true } as const;
const SMALL = { dist: 103, r: 18, big: false } as const;

const DEFS: Def[] = [
  { angle: -90, ...BIG },
  { angle: 0, ...BIG },
  { angle: 90, ...BIG },
  { angle: 180, ...BIG },
  { angle: -45, ...SMALL },
  { angle: 45, ...SMALL },
  { angle: 135, ...SMALL },
  { angle: -135, ...SMALL },
];

export const SLOT_COUNT = DEFS.length;

export interface Slot {
  index: number;
  big: boolean;
  /** Centre du nœud, en unités. */
  x: number;
  y: number;
  /** Rayon du nœud, en unités. */
  r: number;
  /** Position et taille du nœud, en pourcentage du carré. */
  left: number;
  top: number;
  size: number;
  /** Branche du centre jusqu'au bord du nœud (courbe quadratique SVG). */
  path: string;
  /** Extrémités de la branche, pour son dégradé. */
  gradient: { x0: number; y0: number; x1: number; y1: number };
  /** Position CSS de l'étiquette avec le nom de l'outil. */
  label: string;
}

const round1 = (n: number) => Math.round(n * 10) / 10;
const pct = (v: number) => Math.round((v / VIEW) * 10000) / 100;

function labelStyle(i: number, x: number, y: number, r: number): string {
  if (i < 4 && i % 2 === 0) return `left:${pct(x + r + 14)}%;top:${pct(y)}%;transform:translateY(-50%)`;
  if (i < 4) return `left:${pct(x)}%;top:${pct(y + r + 30)}%;transform:translateX(-50%)`;
  if (i < 6) return `left:${pct(x + r + 12)}%;top:${pct(y)}%;transform:translateY(-50%)`;
  return `right:${pct(VIEW - (x - r - 12))}%;top:${pct(y)}%;transform:translateY(-50%)`;
}

export function computeSlots(): Slot[] {
  return DEFS.map((d, i) => {
    const a = (d.angle * Math.PI) / 180;
    const c = Math.cos(a);
    const s = Math.sin(a);
    const dist = d.dist * SCALE;
    const r = d.r * SCALE;
    const x = CENTER + dist * c;
    const y = CENTER + dist * s;

    const x0 = CENTER + c * HUB_R;
    const y0 = CENTER + s * HUB_R;
    const x1 = x - c * r;
    const y1 = y - s * r;
    const bend = BEND * Math.hypot(x1 - x0, y1 - y0) * (i % 2 ? 1 : -1);
    const cx = (x0 + x1) / 2 - s * bend;
    const cy = (y0 + y1) / 2 + c * bend;

    return {
      index: i,
      big: d.big,
      x,
      y,
      r,
      left: pct(x),
      top: pct(y),
      size: pct(2 * r),
      path: `M${round1(x0)} ${round1(y0)}Q${round1(cx)} ${round1(cy)} ${round1(x1)} ${round1(y1)}`,
      gradient: { x0: round1(x0), y0: round1(y0), x1: round1(x1), y1: round1(y1) },
      label: labelStyle(i, x, y, r),
    };
  });
}

export const SLOTS: Slot[] = computeSlots();
