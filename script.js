function generar() {
  var nicho = document.getElementById("nicho").value;
  var resultado = document.getElementById("resultado");

  if (nicho === "") {
    resultado.innerHTML = "Escribe un nicho, por favor.";
    return;
  }

  resultado.innerHTML =
   resultado.innerHTML =
  "<h3>Ideas de productos digitales para el nicho: " + nicho + "</h3>" +
  "<p>Estas ideas están pensadas para personas que quieren empezar a vender productos digitales sin complicarse.</p>" +
  "<ul>" +
  "<li><strong>Guía práctica de " + nicho + "</strong><br>Formato PDF paso a paso.<br><strong>Precio sugerido:</strong> $7 – $15 USD</li><br>" +
  "<li><strong>Checklist accionable de " + nicho + "</strong><br>Ideal para principiantes.<br><strong>Precio sugerido:</strong> $5 USD</li><br>" +
  "<li><strong>Mini curso digital de " + nicho + "</strong><br>Videos cortos y claros.<br><strong>Precio sugerido:</strong> $27 USD</li><br>" +
  "<li><strong>Plantillas listas para usar en " + nicho + "</strong><br>Ahorra tiempo y evita errores.<br><strong>Precio sugerido:</strong> $15 USD</li><br>" +
  "<li><strong>Planner mensual de " + nicho + "</strong><br>Organización + enfoque.<br><strong>Precio sugerido:</strong> $9 USD</li>" +
  "</ul>";
}
