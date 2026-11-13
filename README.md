# Nexus

Point d'entrée statique vers mes outils, publié sur GitHub Pages : https://edouardlacroix.github.io

Chaque outil est un nœud au bout d'une branche autour d'un cercle central, comme dans le logo. Au survol, la branche s'allume et la fiche de l'outil apparaît. Sur téléphone, les outils s'alignent le long d'un tronc lumineux.

## Stack

- [Astro 5](https://astro.build), site 100 % statique, presque sans JavaScript (un petit script pour le survol).
- Content collections : un fichier YAML par outil, validé par un schéma.
- i18n d'Astro : pages générées en français (`/fr/`) et en anglais (`/en/`). La racine `/` envoie vers la langue du navigateur.
- Polices Syne et Figtree, servies par le site (`@fontsource-variable`).
- Vitest pour la logique (géométrie, schéma des fiches, traductions).

## Ajouter un outil

Créer `src/content/tools/mon-outil.yaml` :

```yaml
name: Mon outil
slot: 5 # emplacement de 0 à 7, voir ci-dessous
status: live # live | wip | draft
url: https://mon-outil.vercel.app # facultatif
description:
  fr: Ce que fait l'outil.
  en: What the tool does.
```

Les 8 emplacements suivent le logo : `0` haut, `1` droite, `2` bas, `3` gauche (grands nœuds), puis `4` haut-droite, `5` bas-droite, `6` bas-gauche, `7` haut-gauche (petits nœuds). Un emplacement sans fiche s'affiche comme « bientôt ». Deux fiches sur le même emplacement font échouer le build.

Pour changer la langue d'une phrase de l'interface : `src/i18n/ui.ts`.

## Développer

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # tests unitaires
npm run build    # vérification des types puis site dans dist/
```

## Déploiement

Chaque push sur `main` lance `.github/workflows/main.yml` : tests, build, publication sur GitHub Pages.
Réglage à faire une fois dans le dépôt : Settings > Pages > Source : **GitHub Actions**.

## Historique

Les anciennes versions restent consultables :

- tag `legacy-2021` : ancien portfolio (Next.js),
- tag `legacy-2024` du dépôt `nexus` : première version de Nexus (Next.js).
