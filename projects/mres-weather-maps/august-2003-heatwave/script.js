var images;

/** begin initialise **/
	alert("hei");
	var selectButtons = document.getElementById("second-banner");
	Clear(selectButtons);	
	
	images = [
		[0,'images/9-august-2003.png', '9 August 2013 Max Temp'],
		[1,'images/10-august-2003.png', '10 August 2013 Max Temp'],
		[2,'images/11-august-2003.png', '11 August 2013 Max Temp']
	];

	var weatherData = [
		["inverness", 27,20,21],
		["glasgow", 30,19,17],
		["manchester", 32,22,20],
		["london", 35,38,33],
		["oslo", 28,29,19],
		["copenhagen", 26,29,30],
		["berlin", 34,30,29],
		["dortmund", 32,33,31],
		["innsbruck", 29,30,33],
		["basel", 38,38,36],
		["berne", 35,36,36],
		["florence", 34,32,36],
		["rome", 35,36,33],
		["vienna", 32,34,30],
		["ajaccio", 38,38,40],
		["palermo", 33,34,34],
		["guernsey", 34,27,28],
		["caen", 36,38,35],
		["lille", 34,37,34],
		["paris", 39,40,36],
		["tours", 40,40,37],
		["bordeaux", 39,31,30],
		["limoges", 36,37,36],
		["montpellier", 34,33,33],
		["barcelona", 38,37,39],
		["pamplona", 39,37,39],
		["zaragoza", 38,38,38],
		["madrid", 37,37,37],
		["palma de mallorca", 37,37,34],
		["ibiza", 34,34,34],
		["lisbon", 27,37,36],
		["sevilla", 42,41,42],
		["malaga", 32,31,32]
	];	

	GenerateIcons();
	GenerateTable(weatherData);
/** end initialise**/

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
	var tableHeaderCell9August = document.createElement('div');
	var tableHeaderCell10August = document.createElement('div');
	var tableHeaderCell11August = document.createElement('div');

	tableHeaderCellLocation.innerHTML = "Location";
	tableHeaderCellLocation.className = "location";
	tableHeaderCell9August.innerHTML = "9 August 2003";
	tableHeaderCell9August.className = "temperatures";
	tableHeaderCell10August.innerHTML = "10 August 2003";
	tableHeaderCell10August.className = "temperatures";
	tableHeaderCell11August.innerHTML = "11 August 2003";
	tableHeaderCell11August.className = "temperatures";

	tableHeader.appendChild(tableHeaderCellLocation);
	tableHeader.appendChild(tableHeaderCell9August);
	tableHeader.appendChild(tableHeaderCell10August);
	tableHeader.appendChild(tableHeaderCell11August);

	table.appendChild(tableHeader);

	for(var i = 0; i < weatherData.length; i++) {
		var aug9temp = FillTemperature(weatherData[i][0], weatherData[i][1], "09082003");
		var aug10temp = FillTemperature(weatherData[i][0], weatherData[i][2], "10082003");
		var aug11temp = FillTemperature(weatherData[i][0], weatherData[i][3], "11082003");

		var tableRow = document.createElement('div');
		tableRow.class = "data-row";

		var tableCellLocation = document.createElement('div');
		tableCellLocation.className = "location";

		var tableCell9August2003 = document.createElement('div');
		tableCell9August2003.className = "temperatures";

		var tableCell10August2003 = document.createElement('div');
		tableCell10August2003.className = "temperatures";

		var tableCell11August2003 = document.createElement('div');
		tableCell11August2003.className = "temperatures";
		
		tableCellLocation.innerHTML = FormatLocationName(weatherData[i][0]);
		tableCell9August2003.appendChild(aug9temp);
		tableCell10August2003.appendChild(aug10temp);
		tableCell11August2003.appendChild(aug11temp);

		tableRow.appendChild(tableCellLocation);
		tableRow.appendChild(tableCell9August2003);
		tableRow.appendChild(tableCell10August2003);
		tableRow.appendChild(tableCell11August2003);

		table.appendChild(tableRow);
	}

	document.getElementById('data-table').appendChild(table);
}

function FormatLocationName(location) {
	return location.charAt(0).toUpperCase() + location.slice(1);
}

function FillTemperature(location, temperature, day) {
	var icon = document.createElement('span');
	icon.id = location + "_" + day;

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