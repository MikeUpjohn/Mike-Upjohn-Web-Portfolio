function loadWelcomeFromTopLevel(){window.location.href="html/welcome.html"}function loadEventsFromTopLevel(){window.location.href="html/events.html"}function loadTravelWeatherFromTopLevel(){window.location.href="html/travel-weather.html"}document.getElementById("welcome").addEventListener("touchstart",loadWelcomeFromTopLevel,false);document.getElementById("events").addEventListener("touchstart",loadEventsFromTopLevel,false);document.getElementById("travel-weather").addEventListener("touchstart",loadTravelWeatherFromTopLevel,false);