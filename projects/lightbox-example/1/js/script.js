var currentImageId;

$(document).ready(function(){
	for(var i = 1; i <= 5; i++) {
		var imgTag = "img-" + i;
		var imgFile = "images/image-" + i + "-thumbnail.png";
		document.getElementById(imgTag).src = imgFile;
		$("#" + imgTag).hide();
		$("#" + imgTag).fadeIn(500);
	}

	LoadImage(1);
});

function ChangeImage(id) {
	if(currentImageId != undefined) {
		$("#image-" + currentImageId).fadeOut(500, function() {
			LoadImage(id);
		});
	}
	else {
		LoadImage(id);
	}
}

function LoadImage(id) {
	var html = "<a href='images/image-" + id + ".jpg' data-lightbox='nature-scenes' data-title='" + GetImageTitle(id) +"'><img id='image-" + id + "' src='images/image-" + id + ".jpg' alt='image-" + id + "' data-lightbox='nature-scenes'/><a>";
	document.getElementById('large-image').innerHTML = html;
	$("#image-" + id).hide();
	$("#image-" + id).fadeIn(1000);
	currentImageId = id;
}

function GetImageTitle(id) {
	var imageTitle = "";
	if(id==1) {
		imageTitle = "Aurora Borealis - Norway";
	}
	else if(id==2) {
		imageTitle = "Volcanic Eruption - Iceland";
	}
	else if(id ==3) {
		imageTitle = "Beach Scene - Maldives";
	}
	else if(id == 4) {
		imageTitle = "Supercell Thunderstorm - Australia";
	}
	else {
		imageTitle = "Waterfall - Amazon Rainforest";
	}

	return imageTitle;
}