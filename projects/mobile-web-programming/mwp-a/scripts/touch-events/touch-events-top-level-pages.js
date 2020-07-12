/**
*	With thanks to:
*	http://www.inserthtml.com/2012/02/creating-interactive-mobile-experience/
*	https://developer.mozilla.org/en-US/docs/DOM/TouchEvent
**/

function loadWelcomeFromTopLevel() {
	window.location.href = "html/welcome.html";
}

function loadEventsFromTopLevel() {
	window.location.href = "html/events.html";
}

function loadTravelWeatherFromTopLevel() {
	window.location.href = "html/travel-weather.html";
}

document.getElementById('welcome').addEventListener('touchstart',loadWelcomeFromTopLevel,false);
document.getElementById('events').addEventListener('touchstart',loadEventsFromTopLevel,false);
document.getElementById('travel-weather').addEventListener('touchstart',loadTravelWeatherFromTopLevel,false);
