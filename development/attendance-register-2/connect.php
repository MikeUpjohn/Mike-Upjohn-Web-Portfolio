<?php
	function connectToDatabase() {
		$username = "mikeofma_mike";
		$password = "IxmDl?rFi7FN";

		$connection = mysqli_connect("localhost",$username,$password);

		if(mysqli_connect_errno()) {
			echo "Error connecting to the database.";
		}

		$db = mysqli_select_db($connection,"mikeofma_attendance");

		if(!$db) {
			echo "Failed to connect to the database";
		}

		return $connection;
	}
?>