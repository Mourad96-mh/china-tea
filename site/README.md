# China Tea Group — site vitrine

Site B2B d’un exportateur de thé vert de Chine (Zhejiang / Hong Kong) vers le Maghreb, l’Afrique et l’Europe.
Trilingue **FR / EN / ES** (`/fr/`, `/en/`, `/es/`), 100 % statique.

- **Contenu** inspiré des sites chinois concurrents (Houtu Tea, Viva Tea) : grades, fiches techniques, OEM, logistique, FAQ.
- **Design** inspiré du site marocain Sultan : crème et or, étoile zellige, arches, titres serif — en version plus moderne.

## Commandes

```bash
npm install
npm run dev                     # http://localhost:3000/fr/
npm run build                   # génère out/ depuis une copie dans %TEMP% : ne touche pas .next, peut tourner pendant npm run dev
node scripts/preview.mjs        # sert out/ avec gzip, comme en production (port 4173)
npm run images                  # regénère public/img/ depuis assets-src/
node scripts/make-brand-assets.mjs  # regénère public/og.jpg et public/logo.png
node scripts/check-meta.mjs     # contrôle titres / descriptions / hreflang sur out/
node scripts/validate-schema.mjs    # valide le JSON-LD sur out/
```

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Téléphone, e-mail, adresses, domaine | `src/lib/site.js` |
| Textes des pages (FR / EN / ES) | `src/dict/fr.js`, `en.js`, `es.js` |
| Grades de thé (fiches) | `src/content/teas.js` |
| Marques et leurs boîtes | `src/content/brands.js` |
| Conserves (`/conserves`) | `src/content/pantry.js` |
| Couleurs, typographies, mise en page | `src/app/globals.css` (tokens en haut du fichier) |
| Nouvelle photo produit | déposer le PNG dans `assets-src/client/` (ou `assets-src/cutout/` si fond transparent), puis `npm run images` |
| Crédits des photos d’ambiance | `src/content/photo-credits.json` (affichés dans /legal) |

Le formulaire de contact n’a pas de serveur : il ouvre WhatsApp avec le message prérempli.

## À faire avant la mise en ligne (côté client)

1. **Domaine** : remplacer `https://www.chinateagroup.com` dans `src/lib/site.js` et `public/llms.txt`.
2. **E-mail de contact** : aucun fourni — le renseigner dans `src/lib/site.js` (il apparaît alors partout).
3. **Adresses** : vérifier l’orthographe (« zonghfu » a été lu « Zhongfu Plaza ») et le lien entre *China Tea Group* et *Layane Groupe*.
4. **Logo** : l’emblème (étoile à huit branches + feuille) est une proposition ; à remplacer si le client a un logo.
5. **Photos** : les visuels produits viennent des captures WhatsApp du client. Des photos originales en haute définition amélioreraient nettement le rendu — surtout le **service à thé Layane** (368 px de large seulement).
6. **Contenu à confirmer** : notes de dégustation des grades, formats de conditionnement, modes de paiement (T/T, L/C), documents d’export, marchés servis.
7. **Produits à risque (ajoutés à la demande, 2026-09-16)** : *Bondélice* et *Mama délice* reprennent l’emballage de Bonduelle (carte de France, « Origine Sud-Ouest ») ; *Mill Miel* et *Luna Honey* reprennent l’étiquette de Lune de Miel. Les textes du site restent factuels et ne répètent pas ces mentions d’origine. En cas de réclamation, supprimer la ligne du produit dans `src/content/pantry.js`.
8. **Photos d’ambiance sous licence CC BY-SA** (3 photos de thé à la menthe) : crédits obligatoires, déjà affichés sur /legal.

## Mise en ligne

Téléverser le **contenu** de `out/` à la racine du site (le `.htaccess` fourni gère HTTPS, www, gzip, cache et la page 404).
Puis dans Google Search Console : valider la propriété, soumettre `sitemap.xml`, demander l’indexation de l’accueil et des fiches thé.
