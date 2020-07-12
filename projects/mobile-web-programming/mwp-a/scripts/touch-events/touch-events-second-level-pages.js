/**
*	With thanks to:
*	http://www.inserthtml.com/2012/02/creating-interactive-mobile-experience/
*	https://developer.mozilla.org/en-US/docs/DOM/TouchEvent
**/

function loadWelcomeFromSecondLevel() {
	window.location.href = "../welcome.html";
}

function loadEventsFromSecondLevel() {
	window.location.href = "../events.html";
}

function loadTravelWeatherFromSecondLevel() {
	window.location.href = "../travel-weather.html";
}

document.getElementById('welcome').addEventListener('touchstart',loadWelcomeFromSecondLevel,false);
document.getElementById('events').addEventListener('touchstart',loadEventsFromSecondLevel,false);
document.getElementById('travel-weather').addEventListener('touchstart',loadTravelWeatherFromSecondLevel,false);