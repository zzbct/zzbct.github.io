(function() {
	// When to show the scroll link
	// higher number = scroll link appears further down the page
	var upperLimit = 1000;

	// Our scroll link element
	var scrollElem = document.getElementById('#totop');

	// Scroll to top speed
	var scrollSpeed = 5;

	// Show and hide the scroll to top link based on scroll position
	scrollElem.style.display = "none";
	window.onscroll(function () {
		var scrollTop = $(document).scrollTop();
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in
		}else{
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});
	window.addEventListener("scroll",function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if ( scrollTop > upperLimit ) {
			scrollElem.style.display = "block"; // fade back in
		}else{
			scrollElem.style.display = "block"; // fade out
		}
	},false)

	// Scroll to top animation on click
	scrollElem.addEventListener("click",function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > 0) {
			 window.requestAnimationFrame(arguments.callee);
			 window.scrollTo (0,scrollTop - (scrollTop/scrollSpeed));
        }
	},false);
})();