<?php
	include("functions.php");
	include("connect.php");
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Attendance Register 2</title>
		<link type='text/css' rel='stylesheet' href='style.css' />
		<script src='//code.jquery.com/jquery-1.10.2.min.js'></script>
	</head>
	<body>
		<header>
			<h1>Attendance Register</h1>
			<h2>Class Register</h2>
		</header>
		<div id='selection'>
			<?php
				loadClasses();
			?>
		</div>
		<div id='register'></div>
		<div id='footer'>
			&copy; Michael Upjohn 2014
		</div>
	</body>
</html>

<script type='text/javascript'>
	
	$(document).on('click', '.attendance-button', function(event) { //do something; });
			var studentClassID = $(this).data("studentclassid");
			var button = this;

			$.ajax({
				url:"registration.php",
				type:"POST",
				data:{studentclassid:studentClassID},

				success:function(returnData) {
					console.log("Return data: " + returnData);
					if(returnData == "Success") {
						alert("Student has been marked in attendance.");
						$(button).remove();
					}
				}
			});
		});


	$('#classesToday').change(function(event) {
		var dropDown = document.getElementById('classesToday');
		var selectedMenuItem = dropDown.options[dropDown.selectedIndex].value;
		alert(selectedMenuItem);

		$.ajax({
			url: "changeMenu.php",
			type: "POST",
			data: {selectedClass : selectedMenuItem },

			success:function(returnData) {
				if(returnData != "") {
					document.getElementById("register").innerHTML = returnData;
				}
			}
		});
	});

	
</script>