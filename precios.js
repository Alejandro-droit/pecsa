// precios.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCivMi6krBXtqXHFkonD_Pztn7Sq7UQ9vQ",
  authDomain: "pecsa-fdc41.firebaseapp.com",
  projectId: "pecsa-fdc41",
  storageBucket: "pecsa-fdc41.appspot.com",
  messagingSenderId: "31269402532",
  appId: "1:31269402532:web:af0027452e1d05db043331",
  measurementId: "G-6WB6GDJN4T"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para cargar los precios desde Firestore
async function cargarPrecios() {
  const regularRef = doc(db, "precios", "regular");
  const premiumRef = doc(db, "precios", "premium");
  const dieselRef = doc(db, "precios", "diesel");

  try {
    const regularSnap = await getDoc(regularRef);
    const premiumSnap = await getDoc(premiumRef);
    const dieselSnap = await getDoc(dieselRef);

    if (regularSnap.exists()) {
      document.getElementById("precio-regular").innerHTML =
        `<strong>S/${regularSnap.data().precio.toFixed(2)}</strong>`;
    }

    if (premiumSnap.exists()) {
      document.getElementById("precio-premium").innerHTML =
        `<strong>S/${premiumSnap.data().precio.toFixed(2)}</strong>`;
    }

    if (dieselSnap.exists()) {
      document.getElementById("precio-diesel").innerHTML =
        `<strong>S/${dieselSnap.data().precio.toFixed(2)}</strong>`;
    }

  } catch (error) {
    console.error("Error al cargar precios:", error);
  }
}

// Ejecutar al cargar la página
cargarPrecios();
