# Microservice de Conversion et Calculs Financiers

Service web REST pour effectuer des conversions de devises et des calculs financiers simples.

## 🚀 Installation

```bash
npm install
```

## 📦 Utilisation

### Démarrer le serveur

```bash
npm start
```

Le serveur démarrera sur le port 3000 par défaut.

### Lancer les tests

```bash
npm test
```

## 📡 API Endpoints

### Conversion de devises

```
GET /convert?from=EUR&to=USD&amount=100
```

**Réponse :**

```json
{
  "from": "EUR",
  "to": "USD",
  "originalAmount": 100,
  "convertedAmount": 110
}
```

### Calcul TVA

```
GET /tva?ht=100&taux=20
```

**Réponse :**

```json
{
  "ht": 100,
  "taux": 20,
  "ttc": 120
}
```

### Calcul de remise

```
GET /remise?prix=100&pourcentage=10
```

**Réponse :**

```json
{
  "prixInitial": 100,
  "pourcentage": 10,
  "prixFinal": 90
}
```

## 💱 Taux de change supportés

- **EUR ↔ USD** : 1 EUR = 1.1 USD (bidirectionnel)
- **USD ↔ GBP** : 1 USD = 0.8 GBP (bidirectionnel)

### Conversions disponibles

- EUR → USD
- USD → EUR
- USD → GBP
- GBP → USD

## 🧪 Tests

Le projet inclut tous les types de tests requis avec **28 tests** au total :

- **Unitaires** (6 tests) : Services de conversion et calculs
- **Fonctionnels** (16 tests) : Tests des routes API avec validation robuste
- **Intégration** (2 tests) : Mock de l'API de change externe
- **E2E** (1 test) : Scénario complet conversion + TVA

**Couverture actuelle : 96.92%** (seuil requis : 80%)

### Tests de robustesse inclus

- Validation des paramètres manquants
- Gestion des valeurs non-numériques
- Protection contre les montants négatifs
- Codes d'erreur appropriés (400, etc.)

## 🏗️ Architecture

```
├── app.js                    # Configuration Express
├── server.js                 # Point d'entrée serveur
├── controllers/              # Contrôleurs API
├── routes/                   # Définition des routes
├── services/                 # Logique métier
├── tests/                    # Tests organisés par type
│   ├── unit/                 # Tests unitaires
│   ├── functional/           # Tests fonctionnels (API)
│   ├── integration/          # Tests d'intégration
│   └── e2e/                  # Tests end-to-end
├── utils/                    # Utilitaires
└── .github/workflows/        # Pipeline CI/CD
```

## 🚀 CI/CD

Le projet inclut un pipeline GitHub Actions qui :

- Exécute tous les tests automatiquement
- Génère un rapport de couverture
- **Fait échouer le build si la couverture < 80%**
- Supporte plusieurs versions de Node.js (18.x, 20.x)

## ⚠️ Contraintes et validations

- ❌ **Montants négatifs rejetés**
- ❌ **Paramètres manquants → erreur 400**
- ❌ **Valeurs non-numériques → erreur 400**
- ❌ **Paires de devises non supportées → erreur 400**
- ✅ **Taux de change fixes (pas d'API externe)**
