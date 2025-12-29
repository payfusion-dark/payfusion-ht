/* ============================================================
   PAY FUSION - CONFIGURATION BACKEND CENTRALISÉE
   DÉVELOPPEUR : NXY ST3PH
   PROJET : PRODUCTION READY 2025
   ============================================================ */

// 1. CONFIGURATION RÉELLE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAV3RoOAL4XgGQSGnEU0_Q1q5UcEce4LBg",
    authDomain: "pay-fusion-d0eaf.firebaseapp.com",
    projectId: "pay-fusion-d0eaf",
    storageBucket: "pay-fusion-d0eaf.firebasestorage.app",
    messagingSenderId: "713035702480",
    appId: "1:713035702480:web:d05998b07c529ec2043ed5"
};

// 2. INITIALISATION DES SERVICES
// Note : Les SDK Firebase (compat) doivent être chargés dans le HTML avant ce script.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// 3. CONSTANTES MÉTIER PAY FUSION
const PAYFUSION_SETTINGS = {
  exchangeRate: 150, // 1 USD = 150 HTG
  adminEmail: "bmarcco4412@gmail.com",
  supportWhatsApp: "+50939442808",
  supportEmail: "support.payfusion@gmail.com",
  currency: "HTG",
  platformName: "PAY FUSION"
};

// 4. FONCTIONS UTILITAIRES GLOBALES
/**
 * Convertit un montant USD en HTG selon le taux fixe
 * @param {number} usd - Montant en Dollars
 * @returns {number} - Montant en Gourdes
 */
const convertToHTG = (usd) => {
  return usd * PAYFUSION_SETTINGS.exchangeRate;
};

/**
 * Vérifie si l'utilisateur actuellement connecté est l'administrateur
 * @returns {boolean}
 */
const isCurrentUserAdmin = () => {
  const user = auth.currentUser;
  return user && user.email === PAYFUSION_SETTINGS.adminEmail;
};

/**
 * Formate un nombre pour l'affichage monétaire (HTG)
 * @param {number} amount 
 * @returns {string}
 */
const formatHTG = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 2
  }).format(amount) + " HTG";
};

// 5. SÉCURITÉ DES SESSIONS
auth.onAuthStateChanged(user => {
  if (user) {
    // Logique de session active
    console.log("PAY FUSION ● SESSION ACTIVE ● " + user.email);
  } else {
    // Logique de session inactive
    console.log("PAY FUSION ● AUCUNE SESSION");
  }
});

/* ============================================================
   FIN DU FICHIER CONFIGURATION
   TOUS LES PARAMÈTRES SONT PRÊTS POUR LE DÉPLOIEMENT
   ============================================================ */