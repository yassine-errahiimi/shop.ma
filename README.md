# Shop.ma - E-commerce Marocain

##  Description
Application e-commerce moderne développée avec React et Vite, présentant une collection de produits marocains et internationaux avec un design responsive et des fonctionnalités interactives.

## Auteur
**Yassine Errahimi**
- Email: yassinrahimi91@gmail.com.com
- GitHub: [@yassine-errahiimi](https://github.com/yassine-errahiimi)

##  Technologies Utilisées
- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build ultra-rapide
- **CSS3** - Styling moderne avec animations et responsive design
- **JavaScript ES6+** - Dernières fonctionnalités JavaScript

##  Fonctionnalités
- ✅ Interface utilisateur moderne et responsive
- ✅ Header avec navigation complète
- ✅ Affichage dynamique de produits
- ✅ Badges conditionnels (Stock/Promo)
- ✅ Animations et effets hover
- ✅ Footer informatif
- ✅ Architecture composants réutilisables

##  Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn
- Git

### Étapes d'installation
```bash
# 1. Cloner le repository
git clone https://github.com/yassine-errahiimi/shop-ma-errahimi-yassine.git

# 2. Accéder au dossier
cd shop-ma-errahimi-yassine

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

Le projet sera accessible sur `http://localhost:5173`

##  Structure du Projet
```
shop-ma-errahimi-yassine/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── products/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   └── index.js          (Barrel Export)
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

##  Composants Principaux

### Header
- Logo Shop.ma
- Navigation: Accueil, Produits, Panier, Contact
- Badge panier dynamique
- Design gradient moderne

### ProductCard
- Image produit
- Informations détaillées
- Badge conditionnel (Stock/Promo)
- Bouton d'ajout au panier
- Animation hover

### Footer
- Copyright 2025 Shop.ma
- Liens utiles
- Design professionnel

##  Données
Le fichier `data/products.js` contient un catalogue de 10+ produits avec:
- ID unique
- Nom du produit
- Prix en DH
- Catégorie
- Image
- Disponibilité en stock
- Description

##  Scripts Disponibles
```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualisation build
npm run preview
```

##  Collaboration
Projet développé dans le cadre de la **Tâche Maison S4**

Collaborateur: **SAAD-BEEN**

##  Commits
Les commits suivent la convention:
```
[S04] type: description
```

Types:
- `init`: Initialisation
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `refactor`: Refactoring de code
- `docs`: Documentation

## 📄 Licence
Ce projet est développé à des fins éducatives.

## 🔗 Liens Utiles
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Repository](https://github.com/votre-username/shop-ma-prenom-nom)

---

**Développé avec Yassine errahimi 🇲🇦**