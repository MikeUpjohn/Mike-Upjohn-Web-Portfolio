var map;
var edinburgh = new Airport(edinburgh, "Edinburgh Airport",55.947806,-3.362945);
var manchester = new Airport(manchester, "Manchester Airport",53.352703,-2.276929);
var londonHeathrow = new Airport(londonHeathrow, "London Heathrow Airport",51.472562,-0.453027);
var copenhagen = new Airport(copenhagen, "Copenhagen Airport",55.628674,12.639058);
var hamburg = new Airport(hamburg, "Hamburg Airport",53.633774,10.005449);
var berlin = new Airport(berlin, "Berlin Airport",52.557777,13.285852);
var dusseldorf = new Airport(dusseldorf, "Dusseldorf Airport",51.284548,6.778304);
var amsterdam = new Airport(amsterdam, "Amsterdam Airport",52.312362,4.772517);
var dresden = new Airport(dresden, "Dresden Airport",51.133047,13.771864);
var frankfurt = new Airport(frankfurt, "Frankfurt Airport",50.049423,8.571383);
var brussels = new Airport(brussels, "Brussels Airport",50.897782,4.482924);
var prague = new Airport(prague, "Prague Airport",50.105552,14.269253);
var munich = new Airport(munich, "Munich Airport",48.358245,11.789948);
var paris = new Airport(paris, "Paris Charles de Gaulle Airport",49.00967,2.54727);
var nantes = new Airport(nantes, "Nantes Airport",47.157301,-1.601049);
var vienna = new Airport(vienna, "Vienna Airport",48.1219,16.563471);
var budapest = new Airport(budapest, "Budapest Airport",47.432965,19.262454);
var venice = new Airport(venice, "Venice Airport",45.504783,12.340196);
var lyon = new Airport(lyon, "Lyon Airport",45.719125,5.079606);
var nice = new Airport(nice, "Nice Airport",43.659676,7.205988);
var marseille = new Airport(marseille, "Marseille Airport",43.44594,5.22242);
var toulouse = new Airport(toulouse, "Toulouse Airport",43.630733,1.374124);
var bordeaux = new Airport(bordeaux, "Bordeaux Airport",44.83037,-0.701421);
var belgrade = new Airport(belgrade, "Belgrade Airport",44.819473,20.306927);
var pristina = new Airport(pristina, "Pristina Airport",42.572836,21.035894);
var skopje = new Airport(skopje, "Skopje Airport",41.957001,21.628891);
var istanbul = new Airport(istanbul, "Istanbul Airport",40.981874,28.820565);
var izmir = new Airport(izmir, "Izmir Airport",38.298626,27.141625);
var antalya = new Airport(antalya, "Antalya Airport",36.899254,30.800145);
var rome = new Airport(rome, "Rome Airport",41.796144,12.255395);
var naples = new Airport(naples, "Naples Airport",40.883637,14.281276);
var barcelona = new Airport(barcelona, "Barcelona Airport",41.307246,2.0801);
var madrid = new Airport(madrid, "Madrid Barajas Airport",40.478162,-3.575561);
var santiagoDeCompostela = new Airport(santiagoDeCompostela, "Santiago de Compostela Airport",42.89766,-8.420426);
var porto = new Airport(porto, "Porto Airport",41.237028,-8.671316);
var lisbon = new Airport(lisbon, "Lisbon Airport",38.770472,-9.129544);
var alicante = new Airport(alicante, "Alicante Airport",38.285625,-0.56018);
var malaga = new Airport(malaga, "Malaga Airport",36.669314,-4.482778);
var casablanca = new Airport(casablanca, "Casablanca Airport",33.364513,-7.581965);
var marrakech = new Airport(marrakech, "Marrakech Airport",31.608656,-8.040926);
var oran = new Airport(oran, "Oran Airport",35.621024,-0.606162);
var palmaDeMallorca = new Airport(palmaDeMallorca, "Palma de Mallorca Airport",39.548397,2.729733);
var algiers = new Airport(algiers, "Algiers Airport",36.698017,3.206879);
var setif = new Airport(setif, "Setif Airport",36.181428,5.331109);
var constantine = new Airport(constantine, "Constantine Airport",36.286626,6.618306);
var telAviv = new Airport(telAviv, "Tel Aviv Airport",32.000579,34.870728);
var hurghada = new Airport(hurghada, "Hurghada Airport",27.189258,33.805778);
var sharmElSheikh = new Airport(sharmElSheikh, "Sahrm El Sheikh Airport",27.979394,34.393189);
var marsaAlam = new Airport(marsaAlam, "Marsa Alam Airport",25.558471,34.582802);
var fuerteventura = new Airport(fuerteventura, "Fuerteventura Airport",28.450732,-13.869823);
var tenerife = new Airport(tenerife, "Tenerife Airport",28.049258,-16.577193);
var granCanaria = new Airport(granCanaria, "Gran Canaria Airport",27.939308,-15.389124);

var basel = new Airport(basel, "Basel EuroAirport",47.598524,7.528871);

var airports = [
					edinburgh,manchester,londonHeathrow,copenhagen,hamburg,berlin,dusseldorf,amsterdam,dresden,frankfurt,brussels,prague,munich,paris,
					nantes,vienna,budapest,venice,lyon,nice,marseille,toulouse,bordeaux,belgrade,pristina,skopje,istanbul,izmir,antalya,rome,naples,
					barcelona,madrid,santiagoDeCompostela,porto,lisbon,alicante,malaga,casablanca,marrakech,oran,palmaDeMallorca,algiers,setif,
					constantine,telAviv,hurghada,sharmElSheikh,marsaAlam,fuerteventura,tenerife,granCanaria
				];
				
/*alert(airports.length);*/

function getLocation() {
	navigator.geolocation.getCurrentPosition(function(position){
		initialise(position.coords.latitude, position.coords.longitude);
		
		var minDistanceToAirport = 10000;
		var whichAirport = "";
		
		for(var i = 0; i < airports.length; i++) {
			var distanceToThisAirport = GetDistanceBetweenTwoLatitudeLongitudes(position.coords.latitude, position.coords.longitude, airports[i].getLatitude(), airports[i].getLongitude());
			if(distanceToThisAirport < minDistanceToAirport) {
				minDistanceToAirport = distanceToThisAirport;
				whichAirport = airports[i].getName();
			}
			
			
		}
		
		document.getElementById('nearestAirport').innerHTML = "Your nearest airport appears to be <b>" + whichAirport + "</b> which is " + Math.round(minDistanceToAirport*100)/100 + " miles away!";
	});
}

function initialise(latitude, longitude) {
	var mapOptions = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
		
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	MakeAirportMarkers();
}

function MakeMarker(marker, name, latitude, longitude) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		title: name
	});
}

function MakeCustomMarker(marker, name, latitude, longitude) {
	marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		title: name,
		icon: {
			path: google.maps.SymbolPath.CIRCLE,
			scale: 10
		},
	});
}

function GetDistanceBetweenTwoLatitudeLongitudes(lat1, lon1, lat2, lon2) {
	// Taken from http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
	var earthRadius = 6371; // Radius of the earth in km
	var dLat = ConvertToRadians(lat2 - lat1);  // deg2rad below
	var dLon = ConvertToRadians(lon2-lon1); 
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(ConvertToRadians(lat1)) * Math.cos(ConvertToRadians(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = earthRadius * c * 0.621371192; // Distance in miles
	
	return d;
}

function ConvertToRadians(deg) {
	// Taken from http://stackoverflow.com/questions/27928/how-do-i-calculate-distance-between-two-latitude-longitude-points
	return deg * (Math.PI/180)
}

function MakeAirportMarkers() {
	MakeMarker(edinburgh, edinburgh.getName(),edinburgh.getLatitude(),edinburgh.getLongitude());
	MakeMarker(manchester, manchester.getName(),manchester.getLatitude(),manchester.getLongitude());
	MakeMarker(londonHeathrow,londonHeathrow.getName(),londonHeathrow.getLatitude(),londonHeathrow.getLongitude());
	MakeMarker(copenhagen,copenhagen.getName(),copenhagen.getLatitude(),copenhagen.getLongitude());
	MakeMarker(hamburg,hamburg.getName(),hamburg.getLatitude(),hamburg.getLongitude());
	MakeMarker(berlin,berlin.getName(),berlin.getLatitude(),berlin.getLongitude());
	MakeMarker(dusseldorf,dusseldorf.getName(),dusseldorf.getLatitude(),dusseldorf.getLongitude());
	MakeMarker(amsterdam,amsterdam.getName(),amsterdam.getLatitude(),amsterdam.getLongitude());
	MakeMarker(dresden,dresden.getName(),dresden.getLatitude(),dresden.getLongitude());
	MakeMarker(frankfurt,frankfurt.getName(),frankfurt.getLatitude(),frankfurt.getLongitude());
	MakeMarker(brussels,brussels.getName(),brussels.getLatitude(),brussels.getLongitude());
	MakeMarker(prague,prague.getName(),prague.getLatitude(),prague.getLongitude());
	MakeMarker(munich,munich.getName(),munich.getLatitude(),munich.getLongitude());
	MakeMarker(paris,paris.getName(),paris.getLatitude(),paris.getLongitude());
	MakeMarker(nantes,nantes.getName(),nantes.getLatitude(),nantes.getLongitude());
	MakeMarker(vienna,vienna.getName(),vienna.getLatitude(),vienna.getLongitude());
	MakeMarker(budapest,budapest.getName(),budapest.getLatitude(),budapest.getLongitude());
	MakeMarker(venice,venice.getName(),venice.getLatitude(),venice.getLongitude());
	MakeMarker(lyon,lyon.getName(),lyon.getLatitude(),lyon.getLongitude());
	MakeMarker(nice,nice.getName(),nice.getLatitude(),nice.getLongitude());
	MakeMarker(marseille,marseille.getName(),marseille.getLatitude(),marseille.getLongitude());
	MakeMarker(toulouse,toulouse.getName(),toulouse.getLatitude(),toulouse.getLongitude());
	MakeMarker(bordeaux,bordeaux.getName(),bordeaux.getLatitude(),bordeaux.getLongitude());
	MakeMarker(belgrade,belgrade.getName(),belgrade.getLatitude(),belgrade.getLongitude());
	MakeMarker(pristina,pristina.getName(),pristina.getLatitude(),pristina.getLongitude());
	MakeMarker(skopje,skopje.getName(),skopje.getLatitude(),skopje.getLongitude());
	MakeMarker(istanbul,istanbul.getName(),istanbul.getLatitude(),istanbul.getLongitude());
	MakeMarker(izmir,izmir.getName(),izmir.getLatitude(),izmir.getLongitude());
	MakeMarker(antalya,antalya.getName(),antalya.getLatitude(),antalya.getLongitude());
	MakeMarker(rome,rome.getName(),rome.getLatitude(),rome.getLongitude());
	MakeMarker(naples,naples.getName(),naples.getLatitude(),naples.getLongitude());
	MakeMarker(barcelona,barcelona.getName(),barcelona.getLatitude(),barcelona.getLongitude());
	MakeMarker(madrid,madrid.getName(),madrid.getLatitude(),madrid.getLongitude());
	MakeMarker(santiagoDeCompostela,santiagoDeCompostela.getName(),santiagoDeCompostela.getLatitude(),santiagoDeCompostela.getLongitude());
	MakeMarker(porto,porto.getName(),porto.getLatitude(),porto.getLongitude());
	MakeMarker(lisbon,lisbon.getName(),lisbon.getLatitude(),lisbon.getLongitude());
	MakeMarker(alicante,alicante.getName(),alicante.getLatitude(),alicante.getLongitude());
	MakeMarker(malaga,malaga.getName(),malaga.getLatitude(),malaga.getLongitude());
	MakeMarker(casablanca,casablanca.getName(),casablanca.getLatitude(),casablanca.getLongitude());
	MakeMarker(marrakech,marrakech.getName(),marrakech.getLatitude(),marrakech.getLongitude());
	MakeMarker(oran,oran.getName(),oran.getLatitude(),oran.getLongitude());
	MakeMarker(palmaDeMallorca,palmaDeMallorca.getName(),palmaDeMallorca.getLatitude(),palmaDeMallorca.getLongitude());
	MakeMarker(algiers,algiers.getName(),algiers.getLatitude(),algiers.getLongitude());
	MakeMarker(setif,setif.getName(),setif.getLatitude(),setif.getLongitude());
	MakeMarker(constantine,constantine.getName(),constantine.getLatitude(),constantine.getLongitude());
	MakeMarker(telAviv,telAviv.getName(),telAviv.getLatitude(),telAviv.getLongitude());
	MakeMarker(hurghada,hurghada.getName(),hurghada.getLatitude(),hurghada.getLongitude());
	MakeMarker(sharmElSheikh,sharmElSheikh.getName(),sharmElSheikh.getLatitude(),sharmElSheikh.getLongitude());
	MakeMarker(marsaAlam,marsaAlam.getName(),marsaAlam.getLatitude(),marsaAlam.getLongitude());
	MakeMarker(fuerteventura,fuerteventura.getName(),fuerteventura.getLatitude(),fuerteventura.getLongitude());
	MakeMarker(tenerife,tenerife.getName(),tenerife.getLatitude(),tenerife.getLongitude());
	MakeMarker(granCanaria,granCanaria.getName(),granCanaria.getLatitude(),granCanaria.getLongitude());
	MakeCustomMarker(basel,basel.getName(),basel.getLatitude(), basel.getLongitude());
}