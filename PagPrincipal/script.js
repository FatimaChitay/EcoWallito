let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// Obten el contenedor de la imagen de título
const titulo = document.querySelector(".titulo");

// Detecta el desplazamiento de la página
window.addEventListener("scroll", () => {
  // Si el desplazamiento vertical de la página es mayor que la altura de la sección actual
  if (window.scrollY > titulo.offsetHeight) {
    // Agrega una clase para mostrar la nueva imagen de fondo
    titulo.classList.add("show-after");
  } else {
    // Si el usuario se desplaza hacia arriba, elimina la clase para ocultar la nueva imagen de fondo
    titulo.classList.remove("show-after");
  }
});
