import { describe, expect, it } from 'vitest';
import { locales, ui } from '../src/i18n/ui';

function keys(obj: object, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' ? keys(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
}

describe('traductions', () => {
  it('ont les mêmes clés dans toutes les langues', () => {
    const [first, ...others] = locales;
    for (const locale of others) expect(keys(ui[locale])).toEqual(keys(ui[first]));
  });

  it("n'ont aucun texte vide", () => {
    for (const locale of locales) {
      for (const key of keys(ui[locale])) {
        const value = key.split('.').reduce<any>((acc, part) => acc[part], ui[locale]);
        expect(value, `${locale}.${key}`).not.toBe('');
      }
    }
  });
});
