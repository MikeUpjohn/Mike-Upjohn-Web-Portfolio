$(document).ready(function() {
	$("button").click(function() {
		$("#box1").fadeTo('slow', 0.15);
		$("#box2").fadeTo('slow', 0.4);
		$("#box3").fadeTo('slow', 0.7);
	});

	$("#box1").mouseenter(function() {
		$("#box1").fadeTo('slow', 0.15);
	});

	$("#box1").mouseleave(function() {
		$("#box1").fadeTo('slow', 1);
	});
});