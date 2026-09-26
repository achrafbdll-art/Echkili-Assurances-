# Assurances Echkili — Agence Générale AXA Assurance Marrakech

Site web officiel de l'**Agence Générale AXA Marrakech — Assurances Echkili**.  
Développé avec **Vite**, **TypeScript**, **Tailwind CSS** et optimisé pour le déploiement sur **GitHub** et **Vercel**.

---

##  Fonctionnalités

- **Accueil & Présentation de l'agence** : Localisation avec carte interactive, horaires, contacts directs (téléphone, WhatsApp, email) et accès rapide aux services d'urgence sinistres 24/7.
- **Catalogue interactif des offres** (`/offres`) : Toutes les solutions d'assurance AXA Maroc pour particuliers (auto, habitation, santé, prévoyance) et professionnels (multirisque pro, RC, flottes, prévoyance collective).
- **Fiches produits détaillées** (`/produit`) : Garanties complètes, options et demande de devis en ligne.
- **Performance & SEO** : Balises OpenGraph, images optimisées et mise en cache stricte des ressources statiques.

---

##  Technologies

- **Vite 8** : Bundler ultra-rapide avec compilation multi-pages (MPA).
- **TypeScript** : Typage statique strict et intégrité du code.
- **Tailwind CSS** : Styles modernes et charte graphique officielle AXA.
- **Vercel** : Configuration prête pour la production avec `cleanUrls`, rewrites et headers de cache.

---

## 🚀 Installation & Développement local

```bash
# 1. Cloner le dépôt
git clone <votre-repo-url>
cd <votre-dossier>

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Scripts disponibles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Démarre le serveur local de développement Vite sur le port 3000 |
| `npm run build` | Compile et minifie l'application dans le dossier `dist/` |
| `npm run preview` | Prévisualise localement le build de production |
| `npm run lint` | Vérifie les types TypeScript (`tsc --noEmit`) |
| `npm run clean` | Nettoie le dossier `dist/` |

---

## 🌐 Déploiement sur Vercel

Le projet inclut un fichier `vercel.json` pré-configuré :

1. Connectez votre dépôt **GitHub** sur [Vercel](https://vercel.com).
2. Sélectionnez le dépôt et importez-le.
3. Paramètres de build (détectés automatiquement) :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
4. Cliquez sur **Deploy**.

---

## 📁 Architecture du projet

```text
├── assets/                  # Photos officielles & logos vectoriels
├── public/                  # Fichiers statiques copiés vers dist/
│   ├── assets/              # Assets servis à la racine
│   └── favicon.svg          # Favicon officiel
├── src/                     # Code source TypeScript / CSS / Data
│   ├── index.css            # Styles globaux Tailwind
│   ├── site-charter.css     # Charte graphique de l'agence
│   ├── map.ts               # Module carte d'accès interactive
│   └── offres-data.js       # Base de données des offres et produits AXA
├── index.html               # Page d'accueil principale
├── offres.html              # Page du catalogue des offres
├── produit.html             # Page de détail produit
├── package.json             # Dépendances & scripts npm
├── vite.config.ts           # Configuration Vite multi-pages
└── vercel.json              # Configuration de routage & cache Vercel
```

---

## 📞 Contact Agence Echkili Marrakech

- **Adresse** : Rdc magasin 2, Imm Erraha N°8, Avenue Guemassa, M'hamid, Marrakech
- **Téléphone Fixe** : 05 25 36 30 61
- **GSM / WhatsApp** : 06 67 76 21 24
- **Email** : echkili.assurances@outlook.com
