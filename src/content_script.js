(function(d, w) {
  function load () {
    // Obtener listado de artículos internacionales
    let elements = Array.from(d.querySelectorAll('span.ui-search-item__group__element.ui-search-item__details'));
    elements = elements.filter(e => e.textContent === "Internacional");

    // Eliminar artículos si hay
    if (elements.length > 0) {
      elements.forEach(e => {
        e.closest("li").remove();
      });
      
      // Ejecutar hasta que ya no queden artículos intl
      setTimeout(load, 500);
    }
  }
  
  w.addEventListener('load', load);
})(document, window);
