// guardarprecio.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Configuración de tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCivMi6krBXtqXHFkonD_Pztn7Sq7UQ9vQ",
  authDomain: "pecsa-fdc41.firebaseapp.com",
  projectId: "pecsa-fdc41",
  storageBucket: "pecsa-fdc41.appspot.com",
  messagingSenderId: "31269402532",
  appId: "1:31269402532:web:af0027452e1d05db043331",
  measurementId: "G-6WB6GDJN4T"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para guardar los precios en Firebase
export async function guardarTodosLosPrecios() {
  const regular = parseFloat(document.getElementById("precio-regular").value);
  const premium = parseFloat(document.getElementById("precio-premium").value);
  const diesel = parseFloat(document.getElementById("precio-diesel").value);

  try {
    await setDoc(doc(db, "precios", "regular"), { precio: regular });
    await setDoc(doc(db, "precios", "premium"), { precio: premium });
    await setDoc(doc(db, "precios", "diesel"), { precio: diesel });

    alert("✅ Precios actualizados correctamente.");
  } catch (error) {
    console.error("❌ Error al guardar los precios:", error);
    alert("Error al guardar los precios.");
  }
}
