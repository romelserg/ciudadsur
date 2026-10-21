// Cabecera con fondo al bajar y botón "volver arriba"
(function () {
  var cabecera = document.getElementById("cabecera");
  var arriba = document.querySelector(".volver-arriba");
  function alDesplazar() {
    var abajo = window.scrollY > 100;
    cabecera.classList.toggle("con-fondo", abajo);
    arriba.classList.toggle("visible", abajo);
  }
  window.addEventListener("scroll", alDesplazar, { passive: true });
  alDesplazar();
  arriba.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
