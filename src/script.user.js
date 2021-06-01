// ==UserScript==
// @name        Libre Mercado Al Fin
// @namespace   https://mak.wtf/
// @match       *://*.mercadolibre.cl/*
// @grant       none
// @version     1.2.0
// @author      makzk, ivanMSC
// @description 01/6/2021, 19:27:41 PM
// ==/UserScript==

(function(d) {
  // Cargar sólo si es una página de resultados
  if (!d.querySelector('section.ui-search-results')) return;
  
  (function load () {
	// <Obsoleto>
    // Apuntar al flair del tipo de productos, filtrar por los que dicen "Internacional",
    // obtener el <li> parent, y filtrar los que no hayan sido ocultados.
	// </Obsoleto>
	// 20210601: Mercadolibre cambió. Ahora se buscan los divs con clase 
	// ui-search-item__group.ui-search-item__group--vertical-highlight que contiene
	// el famoso texto (que no es texto sino que un svg) de compra internacional.
    let results = Array.from(d.querySelectorAll('div.ui-search-item__group.ui-search-item__group--vertical-highlight'))
      .map(j => j.closest('li.ui-search-layout__item'))
      .filter(k => k.style.display !== "none");
    
    // Si se encontraron productos internacionales, ocultarlos y volver a llamar
    if (results.length > 0) {
      results.forEach(i => { i.style.display = "none" });
      setTimeout(load, 500);
    }
  })();
})(document);
