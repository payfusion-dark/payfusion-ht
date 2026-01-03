/* ============================================================
   PAY FUSION - CONFIGURATION BACKEND CENTRALISÉE
   DÉVELOPPEUR : NXY ST3PH (VERSION PRODUCTION 2026)
   ============================================================ */

const firebaseConfig = {
    apiKey: "AIzaSyAV3RoOAL4XgGQSGnEU0_Q1q5UcEce4LBg",
    authDomain: "pay-fusion-d0eaf.firebaseapp.com",
    projectId: "pay-fusion-d0eaf",
    storageBucket: "pay-fusion-d0eaf.firebasestorage.app",
    messagingSenderId: "713035702480",
    appId: "1:713035702480:web:d05998b07c529ec2043ed5"
};

// Initialisation unique
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

// Paramètres de la plateforme
const PLATFORM_SETTINGS = {
    adminEmail: "bmarcco4412@gmail.com",
    tauxChange: 150, // 1 USD = 150 HTG
    contactWhatsApp: "+50939442808",
    supportEmail: "support.payfusion@gmail.com"
};

console.log("PAY FUSION ● Système Firebase Connecté ●");