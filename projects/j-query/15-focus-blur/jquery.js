$(document).ready(function() {
	$("input").focus(function() {
		$(this).css("background-color", "#CCCCCC");
	});

	$("input").blur(function() {
		$(this).css("background-color", "#FFFFFF");
	});
});