var images;

function initialise() {
	var selectButtons = document.getElementById("second-banner");
	Clear(selectButtons);
	var select = document.getElementById("examples");
	var id = select.options[select.selectedIndex].value;
	

	if(id==1) {
		images = [
			[0,'images/pressure-wind-4-feb-1200.png', '4 Feb 1200'],
			[1,'images/pressure-wind-4-feb-1500.png', '4 Feb 1500'],
			[2,'images/pressure-wind-4-feb-1800.png', '4 Feb 1800'],
			[3,'images/pressure-wind-4-feb-2100.png', '4 Feb 2100'],
			[4,'images/pressure-wind-5-feb-0000.png', '5 Feb 0000'],
			[5,'images/pressure-wind-5-feb-0300.png', '5 Feb 0300'],
			[6,'images/pressure-wind-5-feb-0600.png', '5 Feb 0600'],
			[7,'images/pressure-wind-5-feb-0900.png', '5 Feb 0900'],
			[8,'images/pressure-wind-5-feb-1200.png', '5 Feb 1200'],
			[9,'images/pressure-wind-5-feb-1500.png', '5 Feb 1500']
		];
	}
	else if(id == 2) {
		images = [
			[0,'images/peak-gust-4-feb.png', '4 Feb 1200'],
			[1,'images/peak-gust-5-feb.png', '4 Feb 1500'],
		];
	}

	GenerateIcons();
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