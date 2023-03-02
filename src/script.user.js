// ==UserScript==
// @name        Libre Mercado Al Fin
// @namespace   https://mak.wtf/
// @match       *://*.mercadolibre.cl/*
// @grant       none
// @version     1.2.3
// @author      ivanMSC, makzk 
// @description 01/03/2023, 23:33:00 PM
// ==/UserScript==

(function(d) {
  // Cargar sólo si es una página de resultados
  if (!d.querySelector('section.ui-search-results')) return;
  
  (function load () {
	// Se buscan los svg con clase ui-search-icon.ui-search-icon--international-logo.ui-search-vertical-highlight__icon 
	// que contiene el texto (que no es texto sino que un svg) de compra internacional.
    let results = Array.from(d.querySelectorAll('svg.ui-search-icon.ui-search-icon--international-logo.ui-search-vertical-highlight__icon'))
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
	
	// Borrar "Disponible X días después de tu compra"
    let resultsLlegaElDiaDelPico = Array.from(d.querySelectorAll('label.ui-search-styled-label.ui-search-item__promise-message'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
    if (resultsLlegaElDiaDelPico.length > 0) {
		resultsLlegaElDiaDelPico.forEach(i => { i.style.display = "none" });
    }
	
	
  })();
})(document);
