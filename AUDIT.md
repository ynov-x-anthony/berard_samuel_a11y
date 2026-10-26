# AUDIT.md : à compléter

Pour chaque ligne, retrouve le problème correspondant dans `src/App.tsx` / `src/App.css`
et remplis les 3 colonnes. Il y a **6 problèmes volontaires** dans ce starter.

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|------------------------------|-------------------------------|----------------------------------------|
| 1 | L’image n’a pas de texte `alt`. | **P — Perceptible** | Les personnes aveugles ne peuvent pas connaître son contenu (WCAG 1.1.1). |
| 2 | « Derniers articles » est en `<h3>` juste après le `<h1>`. | **P — Perceptible** | Le saut peut rendre la structure plus difficile à comprendre avec un lecteur d’écran (WCAG 1.3.1). |
| 3 | « Voir plus » est un `<div onClick>` au lieu d’un bouton. | **O — Opérable** | Il ne peut pas être activé normalement au clavier et son rôle n’est pas annoncé (WCAG 2.1.1, 4.1.2). |
| 4 | Le bandeau n’a pas de commande pause. **À confirmer :** il semble statique dans le code. | **O — Opérable** | Une commande est nécessaire si le contenu bouge ou se met à jour automatiquement pendant plus de cinq secondes (WCAG 2.2.2). |
| 5 | Les trois liens disent « cliquez ici ». | **U — Utilisable (compréhensible)** | Leurs destinations ne sont pas claires hors contexte, notamment dans une liste de liens (WCAG 2.4.4). |
| 6 | Les statuts sont indiqués uniquement par la couleur des points. | **P — Perceptible** | Les personnes daltoniennes ou en niveaux de gris risquent de ne pas distinguer les statuts (WCAG 1.4.1). |

> Rappel : P = Perceptible, O = Opérable, U = Utilisable (Compréhensible), R = Robuste.
