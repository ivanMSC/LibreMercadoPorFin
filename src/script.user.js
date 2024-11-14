// ==UserScript==
// @name        Libre Mercado Al Fin
// @namespace   https://mak.wtf/
// @match       *://*.mercadolibre.cl/*
// @grant       none
// @version     1.2.4
// @author      ivanMSC, makzk 
// @description 01/03/2023, 23:33:00 PM
// ==/UserScript==

(function(d) {
  // Cargar sólo si es una página de resultados
  if (!d.querySelector('section.ui-search-results')) return;
  
  (function load () {
	// Borrar "Compra internacional"
	// Se buscan los span class=poly-component__cbt
    let results = Array.from(d.querySelectorAll('span.poly-component__cbt'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
		
    // Si se encontraron productos internacionales, ocultarlos
    if (results.length > 0) {
		results.forEach(i => { i.style.display = "none"; console.log("Eliminando items internacionales")});
    }
	
	// Borrar "Promocionado"
	// Se buscan los a class=poly-component__ads-promotions
    let resultsPromo = Array.from(d.querySelectorAll('a.poly-component__ads-promotions'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
    if (resultsPromo.length > 0) {
		resultsPromo.forEach(i => { i.style.display = "none" ; console.log("Eliminando items promocionados")});
    }
	
	// Borrar "Disponible X días después de tu compra"
	// Se buscan los span class=poly-component__manufacturing-time
    let resultsLlegaElDiaDelPico = Array.from(d.querySelectorAll('span.poly-component__manufacturing-time'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
    if (resultsLlegaElDiaDelPico.length > 0) {
		resultsLlegaElDiaDelPico.forEach(i => { i.style.display = "none" ; console.log("Eliminando items sin disponibilidad inmediata")});
    }
	
	
  })();
})(document);
