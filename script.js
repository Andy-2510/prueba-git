function saludar() {
  alert("¡Hola, Paloma! 🎉 Gracias por visitar mi página.");
}

function cambiarFondo() {
  const colores = ['#f0f8ff', '#ffe4e1', '#e6ffe6', '#fffdd0', '#f5f5f5'];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor;

  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === colorActual);

  document.body.style.backgroundColor = nuevoColor;
}

function enviarFormulario(event) {
  event.preventDefault(); // evitar que se recargue la página
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje");
  mensaje.innerText = `¡Hola, ${nombre}! Tu formulario fue enviado 🎯`;
}
