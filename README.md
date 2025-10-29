# BeManager — Fantasy de fútbol móvil (React Native + Firebase)

> App móvil para gestionar ligas de fútbol virtuales con mercado de fichajes por pujas, clasificación en tiempo (casi) real y administración de ligas.  
> Frontend en **React Native**, backend **serverless** con **Firebase/Cloud Functions**, media en **Cloudinary** y SMS con **Twilio**.

![status-badge](https://img.shields.io/badge/status-academic--project-green)
![react-native](https://img.shields.io/badge/React%20Native-0.xx-blue)
![firebase](https://img.shields.io/badge/Firebase-Cloud%20Functions%20%7C%20Auth%20%7C%20Firestore-orange)

---

## ✨ Características

- Registro/inicio de sesión con **Firebase Auth**
- Creación y unión a **ligas privadas** (código de invitación)
- **Mercado de fichajes** con pujas y resolución por administrador
- **Clasificación** parcial y total; reparto de **recompensas**
- **Plantilla** del usuario con venta de jugadores
- Consulta de **ligas reales**, equipos y jugadores
- **Sincronización** eficiente con **React Query**
- Gestión de **imágenes** (avatares/escudos) vía **Cloudinary**
- **SMS** (extensión Firebase + Twilio) para notificaciones puntuales

---

## 🧱 Arquitectura (resumen)

- **App móvil (React Native)**
    - UI (React Native + React Navigation)
    - Estado/Datos (React Query + hooks)
    - Cliente HTTP (Axios) → Cloud Functions
- **Backend serverless (Firebase/GCP)**
    - Auth, Firestore, Cloud Functions (HTTP/Callable y triggers)
    - Extensión Twilio (envío SMS)
- **Servicios externos**
    - Cloudinary (almacenamiento/transformación de imágenes)

---

## 🧰 Stack técnico

- **Frontend:** React Native, React Navigation, Axios, React Query, react-native-image-picker, uuid  
- **Backend:** Firebase Auth, Firestore, Cloud Functions  
- **Calidad:** ESLint, Prettier, Jest, React Native Testing Library  
- **Herramientas:** Node.js, npm, Android Studio, WebStorm
- **Otros:** Cloudinary, Twilio (Firebase Extension), Crypto-es

---

## 📦 Estructura del proyecto

```
root/
├─ app/				# App móvil (React Native)
│  ├─ api/
│  │  ├─ base/			# Axios base
│  │  ├─ hooks/			# hooks con React Query
│  │  └─ urls/			# definición de endpoints
│  ├─ assets/			# iconos/medios locales
│  ├─ components/		# UI reutilizable (button, input, modal, playerItem,…)
│  ├─ hooks/			# contextos globales (user, gameLeague)
│  ├─ navigation/		# Stack/Tabs
│  ├─ utils/
│  │  └─ config/		# p.ej. config Cloudinary (añadir a .gitignore)
│  └─ views/			# screens (login, leagues, team, standings, transferMarket,…)
├─ functions/			# Backend (Firebase Cloud Functions)
│  ├─ config/			# serviceAccount.json (privado)
│  ├─ createUser.js
│  ├─ createGameLeague.js
│  ├─ joinGameLeague.js
│  ├─ startGameLeague.js
│  ├─ makeBid.js
│  ├─ resolveBids.js
│  ├─ sellPlayer.js
│  ├─ updateMarket.js
│  ├─ updateStandings.js
│  ├─ distributeRewards.js
│  ├─ getTeams.js
│  ├─ getPlayers.js
│  ├─ getSquad.js
│  ├─ getLeagues.js
│  ├─ getGameLeagues.js
│  ├─ getMyGameLeagues.js
│  ├─ getBudget.js
│  └─ index.js			# exporta las functions
└─ README.md
```

---

## 🚀 Empezar

### 1) Requisitos
- **Node.js 20 LTS** + **npm**
- **Android Studio** (API 30–35) con emulador o dispositivo físico
- Cuenta en **Firebase**, **Cloudinary** y (opcional) **Twilio**

### 2) Clonar e instalar
```bash
git clone https://github.com/USUARIO/REPO.git
cd REPO
npm install
cd functions && npm install
```

### 3) Configurar Firebase
1. Crea proyecto en **Firebase Console**
2. Activa **Auth**, **Firestore**, **Cloud Functions**
3. **Agregar app Android** (Project Overview → Agregar app → Android)
    - Sigue los pasos y descarga `google-services.json`
    - Colócalo en: `app/android/app/google-services.json`
4. **Base URL Axios** (`/app/api/base/index.js`):
   ```js
   export const base = 'https://REGION-IDPROYECTO.cloudfunctions.net/';
   ```
5. **Service Account**
    - Firebase Console → Configuración → *Cuentas de servicio* → *Generar nueva clave privada*
    - Guarda el JSON en `functions/config/SERVICE_ACCOUNT.json` (añádelo a `.gitignore`)
    - En `functions/index.js`, modifica `serviceAccount` con el nombre del archivo.

🔒 **Reglas Firestore (cliente cerrado):**
Si todas las operaciones se hacen vía Cloud Functions, cierra Firestore al cliente:
```bash
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### 4) Desplegar backend
```bash
firebase login
cd functions
firebase deploy --only functions
```

### 5) Cloudinary
- Crea cuenta, obtiene credenciales y configúralas en `app/utils/config/config.js` (ignorado en `.gitignore`)

### 6) Ejecutar la app
```bash
# desde root/app
npm run android
```

---

## 🧪 Pruebas

**Unitarias (frontend)** — Jest + React Native Testing Library
```bash
# desde root/app
npm run test
```

**Integración / Sistema**:
- Autenticación, creación/unión a liga, mercado (pujas/resolución), clasificación y recompensas.
- Verificación en Firestore Console y logs de Cloud Functions.

---

## 🗃️ Datos iniciales
Para poblar ligas/equipos/jugadores:
- Scripts Node.js o importación JSON a Firestore siguiendo la estructura del Diseño Físico de Datos.

---

## 🔐 Seguridad
- Firestore cerrado al cliente; el acceso se realiza mediante Cloud Functions
- Tokens de Auth gestionados por Firebase Auth
- URLs de Cloudinary firmadas/seguras cuando proceda
- Nunca subas claves/JSON privados al repo (usa `.gitignore`)

---

## 🗺️ Roadmap

- Cobertura de pruebas en backend
- Optimización de rendimiento (mercado y clasificación)
- Internacionalización (i18n)
- Funciones sociales y nuevas competiciones

---

## 📄 Licencias

- **Código:** [MIT License]
- **Memoria:** [CC BY-NC-SA 4.0]

---
