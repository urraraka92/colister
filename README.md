# COLIVRER

### Boutique en ligne — Catalogue, panier et espace client

**Une expérience e-commerce simple, intuitive et évolutive.**

Colivrer est un projet de boutique en ligne conçu pour réunir plusieurs univers de produits au sein d'une interface unique : mangas, maison, informatique, high-tech, musique, jouets, mobilier et accessoires.

Le projet propose une expérience de navigation fluide, un catalogue organisé, une recherche de produits, des favoris, un panier interactif et un espace client avec création de compte et connexion.

---

## Sommaire

- [1. Présentation](#1-présentation)
- [2. Fonctionnalités](#2-fonctionnalités)
- [3. Technologies](#3-technologies)
- [4. Structure du projet](#4-structure-du-projet)
- [5. Installation](#5-installation)
- [6. Utilisation](#6-utilisation)
- [7. Gestion des données](#7-gestion-des-données)
- [8. Sécurité](#8-sécurité)
- [9. Limites actuelles](#9-limites-actuelles)
- [10. Feuille de route](#10-feuille-de-route)
- [11. Contribution](#11-contribution)
- [12. Licence](#12-licence)

---

## 1. Présentation

Colivrer a pour objectif de proposer une boutique en ligne accessible et facile à utiliser, aussi bien sur le plan de la navigation que de la gestion des achats.

Le projet repose actuellement sur une interface web côté client, sans serveur commercial connecté.

### Principes du projet

- **Simplicité :** une interface compréhensible et des interactions directes.
- **Organisation :** des catégories pour retrouver rapidement les produits.
- **Continuité :** un panier et des favoris conservés localement.
- **Évolutivité :** une base pouvant être enrichie avec une API, une base de données et des services de paiement.
- **Transparence :** les fonctionnalités de démonstration sont distinguées des services commerciaux réellement opérationnels.

## 2. Fonctionnalités

### Catalogue de produits

- Présentation des produits sous forme de cartes.
- Organisation par catégories.
- Recherche par nom, catégorie, description ou étiquette.
- Tri par prix croissant, prix décroissant ou nom, selon les options de l'interface.
- Affichage du prix, de la note, du nombre d'avis et des descriptions disponibles.
- Mise en avant de certains produits avec des étiquettes.

### Panier

- Ajout de produits.
- Modification des quantités.
- Suppression d'articles.
- Calcul automatique du nombre d'articles et du sous-total.
- Sauvegarde locale du panier.
- Affichage d'une progression indicative liée au montant du panier.

### Favoris

- Ajout et retrait de produits favoris.
- Sauvegarde locale des sélections.
- Conservation distincte des favoris pour les comptes enregistrés dans le navigateur.

### Espace client

- Création d'un compte de démonstration.
- Connexion avec une adresse e-mail et un mot de passe.
- Affichage de l'état de connexion.
- Déconnexion.
- Association du panier et des favoris à un compte local.

### Interface utilisateur

- Navigation entre les catégories.
- Notifications après certaines actions.
- Fenêtres de dialogue.
- Mise à jour dynamique des éléments de la page.

> **À noter :** le catalogue, les prix, les notes et les avis affichés constituent des données de démonstration. Ils ne doivent pas être considérés comme des offres commerciales vérifiées.

## 3. Technologies

| Technologie  | Utilisation                                     |
| ------------ | ----------------------------------------------- |
| HTML5        | Structure des pages                             |
| CSS3         | Mise en page et présentation visuelle           |
| JavaScript   | Interactions, catalogue, panier et comptes      |
| LocalStorage | Persistance locale des données de démonstration |

Le projet ne nécessite actuellement ni framework JavaScript ni base de données distante pour son fonctionnement de démonstration.

## 4. Structure du projet

La structure de base est organisée autour des trois fichiers front-end :

```text
colivrer/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` : structure de la boutique et éléments de l'interface.
- `style.css` : styles, mise en page et présentation des composants.
- `script.js` : catalogue, recherche, tri, panier, favoris et espace client.
- `README.md` : documentation du projet.

## 5. Installation

### Prérequis

- Un navigateur web moderne.
- Un éditeur de code, par exemple Visual Studio Code.
- Les fichiers du projet.

### Étapes d'installation

**1. Récupérer les fichiers**

Placez `index.html`, `style.css` et `script.js` dans un même dossier.

**2. Vérifier les références**

Dans `index.html`, vérifiez que les fichiers CSS et JavaScript sont correctement référencés. Par exemple :

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

La balise JavaScript doit se trouver après les éléments HTML qu'elle utilise, ou être chargée avec une stratégie de chargement adaptée.

**3. Lancer la boutique**

Ouvrez `index.html` dans votre navigateur.

Pour un environnement de développement plus pratique, vous pouvez également utiliser l'extension Live Server de Visual Studio Code.

**4. Vérifier le fonctionnement**

- Parcourez les catégories.
- Recherchez un produit.
- Ajoutez un article au panier.
- Modifiez sa quantité.
- Ajoutez un produit aux favoris.
- Créez un compte de test, puis déconnectez-vous et reconnectez-vous.

## 6. Utilisation

### Parcourir le catalogue

Sélectionnez une catégorie ou saisissez un mot-clé dans la barre de recherche. Les résultats sont actualisés dynamiquement.

### Gérer le panier

Utilisez le bouton d'ajout sur une fiche produit. Ouvrez ensuite le panier pour ajuster les quantités ou retirer des articles.

Le sous-total est calculé à partir des prix présents dans les données JavaScript.

### Gérer son espace client

Ouvrez **Mon compte** pour accéder au formulaire de connexion ou de création de compte.

Les données de démonstration sont conservées dans le stockage local du navigateur. Elles ne sont pas synchronisées avec un serveur et ne suivent pas automatiquement l'utilisateur sur un autre appareil.

### Finaliser une commande

La validation de commande est actuellement informative. Aucun paiement, aucune commande réelle et aucune expédition ne sont effectués.

## 7. Gestion des données

Colivrer utilise le stockage local du navigateur pour la démonstration.

Les clés principales utilisées par le système de comptes sont :

| Clé                              | Rôle                                   |
| -------------------------------- | -------------------------------------- |
| `colivrer_users_v1`              | Comptes de démonstration               |
| `colivrer_session_v1`            | Session locale active                  |
| `colivrer_shopping_guest_v1`     | Panier et favoris du visiteur          |
| `colivrer_shopping_user_<email>` | Panier et favoris associés à un compte |

Le stockage local est propre au navigateur et à son origine. Il peut être supprimé par l'utilisateur, notamment lorsqu'il efface les données du site.

Il ne constitue pas une base de données centralisée et ne permet pas de garantir la disponibilité des données sur plusieurs appareils.

## 8. Sécurité

La version actuelle est destinée à la démonstration et au développement front-end.

**Elle ne doit pas être utilisée telle quelle pour gérer de vrais comptes clients ou de vrais paiements.**

Les améliorations nécessaires avant une mise en production comprennent notamment :

- Déplacer l'authentification vers un serveur.
- Ne jamais stocker les mots de passe en clair.
- Utiliser un mécanisme de hachage robuste des mots de passe, avec sel.
- Mettre en place des sessions sécurisées et leur expiration.
- Valider les données côté serveur.
- Protéger les formulaires contre les attaques courantes.
- Utiliser HTTPS.
- Mettre en place des contrôles d'accès et une journalisation adaptée.
- Ne jamais considérer le prix ou le total calculé par le navigateur comme une donnée fiable pour une commande réelle.
- Connecter le paiement à un prestataire spécialisé, sans stocker les données bancaires dans l'application.

Pour un lancement commercial, il faudra également définir les obligations applicables en matière de confidentialité, de conservation des données et de droits des utilisateurs.

## 9. Limites actuelles

Les éléments suivants ne sont pas encore implémentés dans la version de démonstration :

- Backend et base de données partagée.
- Authentification sécurisée côté serveur.
- Paiement en ligne.
- Création et suivi de commandes réelles.
- Gestion des stocks.
- Livraison et suivi des colis.
- Administration du catalogue.
- Réinitialisation du mot de passe.
- Synchronisation du compte entre appareils.
- Vérification commerciale des prix, notes et avis.

## 10. Feuille de route

### Phase 1 — Front-end

- [x] Catalogue de démonstration.
- [x] Recherche et catégories.
- [x] Panier interactif.
- [x] Favoris.
- [x] Espace client local.
- [x] Persistance locale.

### Phase 2 — Infrastructure

- [ ] API backend.
- [ ] Base de données produits et clients.
- [ ] Authentification sécurisée.
- [ ] Gestion des sessions.
- [ ] Synchronisation du panier entre appareils.

### Phase 3 — Commerce

- [x] Commandes enregistrées côté serveur.
- [ ] Gestion des stocks et des prix.
- [ ] Intégration d'un prestataire de paiement.
- [ ] Suivi des commandes.
- [ ] Gestion de la livraison et des retours.

### Phase 4 — Exploitation

- [ ] Interface d'administration.
- [ ] Tests automatisés.
- [ ] Suivi des erreurs et des performances.
- [ ] Accessibilité et optimisation mobile.
- [ ] Déploiement avec HTTPS et supervision.

## 11. Contribution

Les contributions peuvent porter sur l'amélioration de l'interface, l'accessibilité, la qualité du code, les tests et l'ajout de fonctionnalités.

Avant de proposer une modification :

1. Décrivez le problème ou l'amélioration recherchée.
2. Effectuez et testez les changements.
3. Vérifiez que le catalogue, le panier et les favoris restent fonctionnels.
4. Documentez toute nouvelle configuration ou dépendance.

## 12. Licence

Aucune licence de redistribution n'est définie dans cette version du projet.

Avant toute publication ou distribution, ajoutez un fichier `LICENSE` précisant les conditions d'utilisation du code et des ressources. Vérifiez également les droits associés aux marques, images, illustrations et contenus utilisés.

---

**Colivrer — Une boutique en ligne pensée pour évoluer.**

*Documentation du projet — version de démonstration front-end.*

