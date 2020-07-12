function loadWelcomePageFromTopLevel() {
alert("Works");
	window.location.href = "html/welcome.html";
}

function loadEventsPageFromTopLevel() {
	window.location.href = "html/events.html";
}

function loadTravelWeatherPageFromTopLevel() {
	window.location.href = "html/travel-weather.html";
}

function loadWelcomeGettingHereFromFirstLevel() {
	window.location.href = "welcome/getting-here.html";
}

function loadWelcomeCityTravelFromFirstLevel() {
	window.location.href = "welcome/city-travel.html";
}

function loadWelcomeWhatYouReallyNeedToKnowFromFirstLevel() {
	window.location.href = "welcome/what-you-really-need-to-know.html";
}

function loadEventsEventsInBaselFromFirstLevel() {
	window.location.href = "events/events-in-basel.html";
}

function loadEventsWhatToSeeAndDoFromFirstLevel() {
	window.location.href = "events/what-to-see-and-do.html";
}

function loadTravelWeatherFurtherTravelFromFirstLevel() {
	window.location.href = "travel-weather/further-travel.html";
}

function loadTravelWeatherAverageClimateFromFirstLevel() {
	window.location.href = "travel-weather/average-climate.html";
}

function loadTravelWeatherYourNearestAirportFromFirstLevel() {
	window.location.href = "travel-weather/your-nearest-airport.html";
}

function loadWelcomePageFromSecondLevel() {
	window.location.href = "../welcome.html";
}

function loadEventsPageFromSecondLevel() {
	window.location.href = "../events.html";
}

function loadTravelWeatherPageFromSecondLevel() {
	window.location.href = "../travel-weather.html";
}

function loadWelcomePageFromSameLevel() {
	window.location.href = "welcome.html";
}

function loadEventsPageFromSameLevel() {
	window.location.href = "events.html";
}

function loadTravelWeatherPageFromSameLevel() {
	window.location.href = "travel-weather.html";
}

document.getElementById('mobile').addEventListener('touchstart',loadWelcomePageFromTopLevel,false);