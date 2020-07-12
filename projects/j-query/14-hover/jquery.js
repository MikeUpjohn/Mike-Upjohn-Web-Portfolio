$(document).ready(function() {
	$("p").hover(
		function() {alert("You entered a paragraph.");}
		,
		function() { alert("You leave a paragraph now."); });
});