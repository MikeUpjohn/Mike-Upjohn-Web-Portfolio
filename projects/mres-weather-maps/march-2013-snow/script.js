var images;

function initialise() {
	var selectButtons = document.getElementById("second-banner");
	Clear(selectButtons);
	var select = document.getElementById("examples");
	var id = select.options[select.selectedIndex].value;
	
	if(id==1) {
		images = [
			[0,'images/23-march-2013-max.png', '23 March 2013 Max Temp'],
			[1,'images/23-march-2013-min.png', '23 March 2013 Min Temp']
		];
	}
	else if(id == 0) {
		Clear(document.getElementById('map'));
		document.getElementById('data-table').remove();
		LoadPlaceholder();
	}

	var weatherData = [
		["scilly", 11,9],
		["plymouth", 6,5],
		["exeter", 5,3],
		["southampton", 4,4],
		["herstmonceux", 3,2],
		["london", 2,1],
		["norwich", 1,0],
		["birmingham", 0,0],
		["cardigan", 4,2],
		["holyhead", 5,1],
		["liverpool", 2,0],
		["manchester", 1,0],
		["york", 1,0],
		["hull", 1,0],
		["carlisle", 2,1],
		["glasgow", 1,0],
		["edinburgh", 1,0],
		["aberdeen", 1,0],
		["cairngorms", -9,-9],
		["inverness", 1,0],
		["stornoway", 4,2],
		["wick", 2,1],
		["belfast", 2,1]
	];	

	GenerateIcons();
	GenerateTable(weatherData);
}

function GenerateIcons() {
	for(var i = 0; i < images.length; i++) {
		var button = document.createElement('button');
		button.innerHTML = images[i][2];
		button.className = "imageButton";
		button.setAttribute('onClick', 'LoadMap(' + images[i][0] + ')');
		document.getElementById('second-banner').appendChild(button);
	}
}

function LoadMap(id) {
	var image = new Image();
	var map = document.getElementById('map');
	image.src = images[id][1];
	image.alt = images[id][2];
	Clear(map);
	map.appendChild(image);
}

function Clear(node) {
	while(node.hasChildNodes()) {
		node.removeChild(node.firstChild);
	}
}

function GenerateTable(weatherData) {

	var table = document.createElement('div');
	table.id = "weatherData";

	var tableHeader = document.createElement('div');
	tableHeader.className = "data-header";

	var tableHeaderCellLocation = document.createElement('div');
	var tableHeaderCellMaximumTemperature = document.createElement('div');
	var tableHeaderCellMinimumTemperature = document.createElement('div');

	tableHeaderCellLocation.innerHTML = "Location";
	tableHeaderCellLocation.className = "location";
	tableHeaderCellMaximumTemperature.innerHTML = "Maximum Temperature";
	tableHeaderCellMaximumTemperature.className = "maximum-temperature";
	tableHeaderCellMinimumTemperature.innerHTML = "Minimum Temperature";
	tableHeaderCellMinimumTemperature.className = "minimum-temperature";

	tableHeader.appendChild(tableHeaderCellLocation);
	tableHeader.appendChild(tableHeaderCellMaximumTemperature);
	tableHeader.appendChild(tableHeaderCellMinimumTemperature);

	table.appendChild(tableHeader);

	for(var i = 0; i < weatherData.length; i++) {
		var maximumTemperature = FillTemperature(weatherData[i][0],weatherData[i][1], true);
		var minimumTemperature = FillTemperature(weatherData[i][0],weatherData[i][2], true)

		var tableRow = document.createElement('div');
		tableRow.class = "data-row";

		var tableCellLocation = document.createElement('div');
		tableCellLocation.className = "location";

		var tableCellMaximumTemperature = document.createElement('div');
		tableCellMaximumTemperature.className = "maximum-temperature";

		var tableCellMinimumTemperature = document.createElement('div');
		tableCellMinimumTemperature.className = "minimum-temperature";
		
		tableCellLocation.innerHTML = FormatLocationName(weatherData[i][0]);
		tableCellMaximumTemperature.appendChild(maximumTemperature);
		tableCellMinimumTemperature.appendChild(minimumTemperature);

		tableRow.appendChild(tableCellLocation);
		tableRow.appendChild(tableCellMaximumTemperature);
		tableRow.appendChild(tableCellMinimumTemperature);

		table.appendChild(tableRow);
	}

	document.getElementById('data-table').appendChild(table);
}

function FormatLocationName(location) {
	return location.charAt(0).toUpperCase() + location.slice(1);
}

function FillTemperature(location, temperature, isMax) {
	//alert("Location: " + location + ", Temperature: " + temperature + ", isMax: " + isMax);
	var icon = document.createElement('span');
	var location = location + "_";
	if(isMax == true) {
		location+="max";
	} 
	else {
		location+="min";
	}
	icon.id = location;

	if(temperature<=0) {
		icon.className = "temp-0";
	}
	else if(temperature >= 1 && temperature <= 3)
	{
		icon.className = "temp-1-3";
	}
	else if(temperature >= 4 && temperature <= 6) {
		icon.className = "temp-4-6";
	}
	else if(temperature >= 7 && temperature <= 9) {
		icon.className = "temp-7-9";
	}
	else if(temperature >= 10 && temperature <= 12) {
		icon.className = "temp-10-12"
	}
	else if(temperature >= 13 && temperature <= 15) {
		icon.className = "temp-13-15";
	}
	else if(temperature >= 16 && temperature <= 18) {
		icon.className = "temp-16-18";
	}
	else if(temperature >=19 &&temperature <=21) {
		icon.className = "temp-19-21";
	}
	else if(temperature >=22 && temperature <= 24) {
		icon.className = "temp-22-24";
	}
	/*else if(temperature >= 25) {
		icon.className = "temp-25-27";
	}*/
	else if(temperature >= 25 && temperature <= 27) {
		icon.className = "temp-25-27";
	}
	else if(temperature >= 28 && temperature <= 30) {
		icon.className = "temp-28-30";
	}
	else if(temperature >= 31 && temperature <= 33) {
		icon.className = "temp-31-33";
	}
	else if(temperature >= 34 && temperature <= 36) {
		icon.className = "temp-34-36";
	}
	else if(temperature >= 37 && temperature <= 39) {
		icon.className = "temp-37-39";
	}
	else if(temperature >= 40) {
		icon.className = "temp-40";
	}

	icon.innerHTML = temperature;
	return icon;
}

function LoadPlaceholder() {
	var placeholder = new Image();
	placeholder.src = 'images/placeholder.png';
	document.getElementById('map').appendChild(placeholder);
}

window.onload = LoadPlaceholder();