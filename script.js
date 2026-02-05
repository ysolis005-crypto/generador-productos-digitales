function generar() {
  var nicho = document.getElementById("nicho").value;
  var resultado = document.getElementById("resultado");

  if (nicho === "") {
    resultado.innerHTML = "Escribe un nicho, por favor.";
    return;
  }

  resultado.innerHTML =
    "<h3>Ideas para el nicho: " + nicho + "</h3>" +
    "<ul>" +
    "<li><strong>Guía rápida de " + nicho + "</strong><br>Precio sugerido: $7 USD</li><br>" +
    "<li><strong>Checklist práctica de " + nicho + "</strong><br>Precio sugerido: $5 USD</li><br>" +
    "<li><strong>Mini curso de " + nicho + "</strong><br>Precio sugerido: $27 USD</li><br>" +
    "<li><strong>Plantillas para " + nicho + "</strong><br>Precio sugerido: $15 USD</li><br>" +
    "<li><strong>Planner mensual de " + nicho + "</strong><br>Precio sugerido: $9 USD</li>" +
    "</ul>";
}
