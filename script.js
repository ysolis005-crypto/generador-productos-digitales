function generar() {
  var nicho = document.getElementById("nicho").value;
  var resultado = document.getElementById("resultado");

  if (nicho === "") {
    resultado.innerHTML = "<p style='color:red;'>Por favor escribe un nicho</p>";
    return;
  }

  resultado.innerHTML =
    "<h3>Ideas de productos digitales para el nicho: " + nicho + "</h3>" +
    "<ul>" +
    "<li>Guía práctica en PDF sobre " + nicho + "</li>" +
    "<li>Checklist paso a paso de " + nicho + "</li>" +
    "<li>Mini curso en video de " + nicho + "</li>" +
    "<li>Plantillas listas para usar en " + nicho + "</li>" +
    "</ul>";
}
