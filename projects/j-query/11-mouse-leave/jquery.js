$(document).ready(function() {
	$("p").mouseenter(function() {
		alert("You went in a paragraph.");
	});

	$("p").mouseleave(function() {
		alert("You left a paragraph.");
	});

});