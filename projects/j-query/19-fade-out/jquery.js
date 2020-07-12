$(document).ready(function() {
	$("button").click(function() {
		$("#box1").fadeOut();
		$("#box2").fadeOut('slow');
		$("#box3").fadeOut(3000);
	});
});