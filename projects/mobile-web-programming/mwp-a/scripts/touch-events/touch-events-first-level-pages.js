/**
*	With thanks to:
*	http://www.inserthtml.com/2012/02/creating-interactive-mobile-experience/
*	https://developer.mozilla.org/en-US/docs/DOM/TouchEvent
**/

function loadWelcomeFromFirstLevel() {
	window.location.href = "welcome.html";
}

function loadEventsFromFirstLevel() {
	window.location.href = "events.html";
}

function loadTravelWeatherFromFirstLevel() {
	window.location.href = "travel-weather.html";
}

document.getElementById('welcome').addEventListener('touchstart',loadWelcomeFromFirstLevel,false);
document.getElementById('events').addEventListener('touchstart',loadEventsFromFirstLevel,false);
document.getElementById('travel-weather').addEventListener('touchstart',loadTravelWeatherFromFirstLevel,false);