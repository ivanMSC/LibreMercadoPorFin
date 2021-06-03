// ==UserScript==
// @name        Libre Mercado Al Fin
// @namespace   https://mak.wtf/
// @match       *://*.mercadolibre.cl/*
// @grant       none
// @version     1.2.1
// @author      makzk, ivanMSC
// @description 02/6/2021, 22:13:00 PM
// ==/UserScript==

(function(d) {
  // Cargar sólo si es una página de resultados
  if (!d.querySelector('section.ui-search-results')) return;
  
  (function load () {
	// Se buscan los divs con clase ui-search-item__group.ui-search-item__group--vertical-highlight 
	// que contiene el texto (que no es texto sino que un svg) de compra internacional.
    let results = Array.from(d.querySelectorAll('div.ui-search-item__group.ui-search-item__group--vertical-highlight'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
		
    // Si se encontraron productos internacionales, ocultarlos y volver a llamar
    if (results.length > 0) {
		results.forEach(i => { i.style.display = "none" });
		//setTimeout(load, 500);
    }
	
	// Borrar "Promocionado"
    let resultsPromo = Array.from(d.querySelectorAll('span.ui-search-item__ad-label.ui-search-item__ad-label--blue'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
    if (resultsPromo.length > 0) {
		resultsPromo.forEach(i => { i.style.display = "none" });
    }
	
  })();
})(document);
