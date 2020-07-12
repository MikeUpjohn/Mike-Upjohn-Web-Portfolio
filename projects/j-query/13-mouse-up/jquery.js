$(document).ready(function() {
	$("p").mousedown(function() {
		alert("You pressed down in a paragraph.");
	});

	$("p").mouseup(function() {
		alert("You pressed up in a paragraph.");
	});
});