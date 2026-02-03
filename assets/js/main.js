window.BlogUI = {
  subscribe: function (event) {
    event.preventDefault();
    const msg = document.getElementById("formMsg");
    if (msg) msg.textContent = "¡Listo! (Demo) Luego conectamos este formulario a un servicio real 🙂";
    return false;
  }
};

(function init() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
