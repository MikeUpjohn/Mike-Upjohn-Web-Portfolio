var map;

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(54.00366, -2.547855),
		zoom: 6,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		streetViewControl: false
	};
	
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	/*var image = '25.png';
	var plymouth = new google.maps.LatLng(50.371, -4.136);
	var plymouthTemp = new google.maps.Marker({
		position: plymouth,
		map: map,
		icon: image
	});*/

	var weather = [
		["",18,50.121533, -5.565579],
		["",21,50.760558, -3.473531],
		["",25,50.855449, -1.555570],
		["Bristol",27,51.799423, -2.594143],
		["",32,51.498777, -0.061554],
		["",24,51.095194, 1.034332],
		["Birmingham",26,52.324104, -1.003951],
		["",19,52.398849, -4.044820],
		["",25,53.466266, -2.270733],
		["",24,52.634190, 1.266865],
		["",22,53.547939, -0.078960],
		["",22,54.978679, -1.490704],
		["",21,55.616638, -3.968121],
		["",22,57.131285, -2.105938],
		["",15,58.206428, -6.385113],
		["",9,60.180693, -1.139141],
		["",16,54.622905, -5.952255],
		["",14,54.370885, -7.649643]
	];
	
	for(var i = 0; i < weather.length; i++) {
		PrintTemperatureIcons(weather[i][0], "temp", weather[i][1],weather[i][2],weather[i][3]);
	}
}
	
google.maps.event.addDomListener(window, 'load', initialize);

function PrintTemperatureIcons(placeName, weatherVariable, value, lat, long) {
	if(weatherVariable == "temp") {
		var image = 'icons/temperature/' + value + '.png';
		var place = new google.maps.LatLng(lat, long);
		var placeTemp = new google.maps.Marker({
			position: place,
			map: map,
			icon: image
		});
	}
}