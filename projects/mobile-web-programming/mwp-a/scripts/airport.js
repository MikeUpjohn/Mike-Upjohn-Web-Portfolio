function Airport(marker, name, latitude, longitude) {
	this.marker = marker;
	this.name = name;
	this.latitude = latitude;
	this.longitude = longitude;
}

Airport.prototype.getName = function() {
	return this.name;
}

Airport.prototype.getLatitude = function() {
	return this.latitude;
}

Airport.prototype.getLongitude = function() {
	return this.longitude;
}