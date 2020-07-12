<?php

	$username = "mikeofma_mike";
	$password = "IxmDl?rFi7FN";

	$connection = mysqli_connect("www.mike-upjohn.co.uk",$username,$password);

	if(mysqli_connect_errno()) {
		echo "Error connecting to the database.";
	}

?>