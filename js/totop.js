(function() {
	// When to show the scroll link
	// higher number = scroll link appears further down the page
	var upperLimit = 600;

	// Our scroll link element
	var scrollElem = document.getElementById('totop');

	// Scroll to top speed
	var scrollSpeed = 5;

	// Show and hide the scroll to top link based on scroll position
	//scrollElem.style.display = "none";

	// Scroll to top animation on click
	scrollElem.addEventListener("click",function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > 0) {
			 window.requestAnimationFrame(arguments.callee);
			 window.scrollTo (0,scrollTop - (scrollTop/scrollSpeed));
        }
	},false);
})();