# Audit d'accessibilite : contrastes

## Methode et limites

Les couleurs calculees dans le navigateur local ont ete comparees selon la
formule de contraste WCAG. Lighthouse, axe DevTools et WAVE ne sont pas
disponibles dans l'environnement courant. WAVE en ligne ne peut pas acceder a
cette URL locale sans la rendre publique ; la page n'a pas ete publiee.

Le seuil WCAG AA utilise est de 4,5:1 pour le texte normal (tous les textes
audites ici sont de taille normale). L'audit ci-dessous porte sur les contrastes
de couleur et ne constitue pas un rapport complet de Lighthouse, axe ou WAVE.

## Constats et corrections

| Element | Texte avant | Fond | Avant | Texte apres | Apres | AA |
| --- | --- | --- | ---: | --- | ---: | --- |
| `.subtitle` | `#aaaaaa` | `#ffffff` | 2,32:1 | `#595959` | 7,00:1 | Conforme |
| `.label` | `#999999` | `#ffffff` | 2,85:1 | `#595959` | 7,00:1 | Conforme |
| `.hint` | `#bbbbbb` | `#ffffff` | 1,92:1 | `#595959` | 7,00:1 | Conforme |
| `.btn-primary` | `#ffffff` | `#6fa8dc` | 2,53:1 | `#ffffff` | 7,14:1 sur `#005a9c` | Conforme |

Apres correction, les ratios ont ete verifies dans le navigateur : le titre est
a 14,35:1 et la valeur d'abonnement a 17,40:1. La bordure des cartes a aussi ete
assombrie de `#eeeeee` a `#d1d5db` pour mieux les distinguer visuellement. Cette
bordure est decorative et n'est pas le seul indicateur d'un controle ou d'un
etat.

## Priorisation des corrections

1. **Bouton** : son libelle nomme une action essentielle et doit rester lisible
   pour que l'action soit identifiable.
2. **Conseil (`.hint`)** : texte informatif courant, avec le contraste initial
   le plus bas (1,92:1).
3. **Sous-titre (`.subtitle`)** : contexte utile pour comprendre la page.
4. **Libelles (`.label`)** : informations de statut et d'astuce ; ils sont
   moins prioritaires que l'action et le contenu, mais restent soumis au meme
   seuil AA.
