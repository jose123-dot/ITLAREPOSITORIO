// Controlar el menú responsive
document.getElementById("menuToggle").addEventListener("click", function () {
  const menu = document.getElementById("menuResponsive");
  if (menu.classList.contains("menu-hidden")) {
    menu.classList.remove("menu-hidden");
  } else {
    menu.classList.add("menu-hidden");
  }
});

// Validación del formulario de contacto
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!email.includes("@")) {
      document.getElementById("responseMessage").innerText =
        "Por favor, ingrese un correo electrónico válido.";
      document.getElementById("responseMessage").classList.add("text-red-600");
      return;
    }

    document.getElementById(
      "responseMessage"
    ).innerText = `Gracias, ${name}, por tu mensaje.`;
    document.getElementById("responseMessage").classList.remove("text-red-600");
    document.getElementById("responseMessage").classList.add("text-green-600");

    
  });
