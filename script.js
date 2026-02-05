function generar() {
  var nicho = document.getElementById("nicho").value;
  var resultado = document.getElementById("resultado");
  var btnWhatsapp = document.getElementById("btnWhatsapp");

  if (nicho.trim() === "") {
    resultado.innerHTML = "<p style='color:red'>Por favor escribe un nicho</p>";
    return;
  }

  resultado.innerHTML =
    "<h3>Ideas de productos digitales para el nicho: " + nicho + "</h3>" +
    "<ul>" +
    "<li>📘 Guía práctica en PDF sobre " + nicho + "</li>" +
    "<li>✅ Checklist paso a paso de " + nicho + "</li>" +
    "<li>🎥 Mini curso en video de " + nicho + "</li>" +
    "<li>📂 Plantillas listas para usar en " + nicho + "</li>" +
    "</ul>";

  var mensaje =
    "Hola 👋, acabo de usar el Generador de Ideas Rentables.\n\n" +
    "📌 Nicho: " + nicho + "\n\n" +
    "Quiero el plan completo con estructura y textos para vender.";

  var mensajeCodificado = encodeURIComponent(mensaje);

  btnWhatsapp.href =
    "https://wa.me/573236651921?text=" + mensajeCodificado;
}
