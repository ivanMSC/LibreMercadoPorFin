// ==UserScript==
// @name        Libre Mercado Al Fin
// @match       *://*.mercadolibre.cl/*
// @grant       none
// @version     1.2.7
// @author      ivanMSC
// @description 01/03/2023, 23:33:00 PM
// ==/UserScript==

(function(d) {
  // Cargar sólo si es una página de resultados
  if (!d.querySelector('section.ui-search-results')) return;
  
  function load () {

    let results = Array.from(d.querySelectorAll('span.poly-component__cbt'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
		
    // Si se encontraron productos internacionales, ocultarlos
    if (results.length > 0) {
		results.forEach(i => { i.style.display = "none" });
    }
	
	// Borrar "Promocionado"
    let resultsPromo = Array.from(d.querySelectorAll('a.poly-component__ads-promotions'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
    if (resultsPromo.length > 0) {
		resultsPromo.forEach(i => { i.style.display = "none" });
    }
	
	// Borrar "Disponible X días después de tu compra"
    let resultsLlegaElDiaDelPico = Array.from(d.querySelectorAll('span.poly-component__manufacturing-time'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
    if (resultsLlegaElDiaDelPico.length > 0) {
		resultsLlegaElDiaDelPico.forEach(i => { i.style.display = "none" });
    }
	
	// Borrar "X opciones de compra"
    let resultsXopcionesdecompra = Array.from(d.querySelectorAll('a.poly-component__purchase-options'))
		.map(j => j.closest('li.ui-search-layout__item'))
		.filter(k => k.style.display !== "none");
    if (resultsXopcionesdecompra.length > 0) {
		resultsXopcionesdecompra.forEach(i => { i.style.display = "none" });
    }
	
  };
  
  load();
  
  // Observar cambios en la página para aplicar el ocultamiento si reaparecen
  const observer = new MutationObserver(load);
  observer.observe(d.querySelector('section.ui-search-results'), { childList: true, subtree: true });
  
})(document);
