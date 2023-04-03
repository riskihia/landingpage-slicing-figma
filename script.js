let xButton = document.getElementById("bar-toggle");
let navbar = document.getElementById("navbar-side");

function toggle() {
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("show");
}

xButton.addEventListener("click", toggle);
