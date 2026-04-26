const contador = document.getElementById("contador");
const heroImage = document.getElementById("heroImage");
const imageFallback = document.getElementById("imageFallback");
const sparkles = document.querySelectorAll(".sparkle");

// Cuenta regresiva: conserva la lógica original de 7 días desde hoy.
const fechaEvento = new Date();
fechaEvento.setDate(fechaEvento.getDate() + 7);

function formatoUnidad(valor, singular, plural) {
  return `${valor} ${valor === 1 ? singular : plural}`;
}

function actualizarContador() {
  const ahora = Date.now();
  const distancia = fechaEvento.getTime() - ahora;

  if (distancia <= 0) {
    contador.textContent = "¡Llegó el gran día!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

  contador.textContent = `Faltan ${formatoUnidad(dias, "día", "días")}, ${formatoUnidad(horas, "hora", "horas")} y ${formatoUnidad(minutos, "minuto", "minutos")}`;
}

// Fallback elegante si la imagen principal no carga.
if (heroImage && imageFallback) {
  heroImage.addEventListener("error", () => {
    heroImage.style.display = "none";
    imageFallback.style.display = "grid";
  });
}

// Microinteracción: variación ligera de parpadeo de partículas.
sparkles.forEach((sparkle) => {
  const randomDelay = (Math.random() * 2.4).toFixed(2);
  const randomDuration = (3.6 + Math.random() * 2.2).toFixed(2);
  sparkle.style.animationDelay = `${randomDelay}s`;
  sparkle.style.animationDuration = `${randomDuration}s`;
});

actualizarContador();
setInterval(actualizarContador, 1000);
