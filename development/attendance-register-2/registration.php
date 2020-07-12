<?php
	include("connect.php");
	
	$connection = connectToDatabase();

	$studentClassID = $_POST['studentclassid'];
	echo $studentClassID;

	$query = "INSERT INTO StudentClassRegister (StudentClassID, Present) VALUES (" . $studentClassID . ", '1')";

	$result = mysqli_query($connection, $query);

	if($result) {
		echo "Success";
	}

?>