async function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const error = document.getElementById("error");

  error.textContent = "";

  if (!user || !pass) {
    error.textContent = "Por favor completa todos los campos";
    return;
  }

  try {
    const res = await fetch("users.json");
    const users = await res.json();

    const encontrado = users.find((u) => u.user === user && u.pass === pass);

    if (encontrado) {
      sessionStorage.setItem("auth", "true");
      sessionStorage.setItem("user", user);

      window.location.href = "https://forms.office.com/r/UjwQsF3TWJ";
    } else {
      error.textContent = "Usuario o contraseña incorrectos";
    }
  } catch (e) {
    error.textContent = "Error cargando usuarios";
  }
}
