window.addEventListener ("click", myMain, false);
function myMain () {
	var element = document.querySelectorAll('span.ui-search-item__group__element.ui-search-item__details');
	for(var i=0;i<element.length;i++){
		element[i].closest("li").remove();
		//element[i].parentElement.remove()
		}
}
