// ==UserScript==
// @name        Libre Mercado Al Fin
// @namespace   https://mak.wtf/
// @match       *://*.mercadolibre.cl/*
// @grant       none
// @version     1.1.0
// @author      makzk, ivanMSC
// @description 10/9/2020, 01:23:15 PM
// ==/UserScript==

(function(d) {
  // Cargar sólo si es una página de resultados
  if (!d.querySelector('section.ui-search-results')) return;
  
  (function load () {
    // Apuntar al flair del tipo de productos, filtrar por los que dicen "Internacional",
    // obtener el <li> parent, y filtrar los que no hayan sido ocultados.
    let results = Array.from(d.querySelectorAll('span.ui-search-item__details'))
      .filter(i => i.textContent === 'Internacional')
      .map(j => j.closest('li.ui-search-layout__item'))
      .filter(k => k.style.display !== "none");
    
    // Si se encontraron productos internacionales, ocultarlos y volver a llamar
    if (results.length > 0) {
      results.forEach(i => { i.style.display = "none" });
      setTimeout(load, 500);
    }
  })();
})(document);
