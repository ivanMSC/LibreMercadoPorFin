(function(d, w) {
  function load () {
    let results = Array.from(d.querySelectorAll('li.ui-search-layout__item'));
    let changed = false;
    
    for (let result of results) {
      if (result.dataset.hidden) continue;
      
      let label = result.querySelector('span.ui-search-item__details');
      if (label && label.textContent === 'Internacional') {
        result.style.display = "none";
        result.dataset.hidden = true;
        changed = true;
      }
    }
    
    if (changed) {
      setTimeout(load, 500);
    }
  }
  
  if (d.querySelector('section.ui-search-results')) {
    w.addEventListener('load', load);
  }
})(document, window);
