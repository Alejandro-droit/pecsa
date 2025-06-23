function login() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  // Credenciales válidas (puedes cambiar esto)
  if (usuario === "admin" && clave === "1234") {
    // Guardar sesión
    localStorage.setItem("logueado", "true");
    window.location.href = "admin.html";
  } else {
    document.getElementById("error-msg").textContent = "Usuario o contraseña incorrectos";
  }
}

// Protección para evitar acceso directo a admin.html sin login
if (window.location.pathname.includes("admin.html")) {
  if (localStorage.getItem("logueado") !== "true") {
    window.location.href = "login.html";
  }
}
