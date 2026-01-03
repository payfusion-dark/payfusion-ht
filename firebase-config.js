/* ============================================================
   PAY FUSION - CONFIGURATION RÉELLE
   DÉVELOPPEUR : NXY ST3PH
   PROJET ID : pay-fusion-d0eaf
   ============================================================ */

const firebaseConfig = {
    apiKey: "AIzaSyAV3RoOAL4XgGQSGnEU0_Q1q5UcEce4LBg",
    authDomain: "pay-fusion-d0eaf.firebaseapp.com",
    projectId: "pay-fusion-d0eaf",
    storageBucket: "pay-fusion-d0eaf.firebasestorage.app",
    messagingSenderId: "713035702480",
    appId: "1:713035702480:web:d05998b07c529ec2043ed5"
};

// Initialisation de Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

// Constantes Globales
const PLATFORM_INFO = {
    name: "PAY FUSION",
    taux: 150, // 1 USD = 150 HTG
    adminEmail: "bmarcco4412@gmail.com",
    whatsapp: "+50939442808"
};

console.log("PAY FUSION ● Système Connecté ✓");