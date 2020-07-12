$(document).ready(function() {
	$("button").click(function() {
		$("#box1").fadeToggle();
		$("#box2").fadeToggle('slow');
		$("#box3").fadeToggle(3000);
	});
});