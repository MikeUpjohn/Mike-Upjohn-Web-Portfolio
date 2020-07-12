<?php

	$dbconfig = array(
		    'user' => 'mikeofma_mike',
		    'pass' => 'IxmDl?rFi7FN',
		    'host' => 'localhost',
		    'name' => 'mikeofma_attendance',
	);

	$conn = new PDO("mysql:host=$dbconfig[host];dbname=$dbconfig[name]", $dbconfig[user], $dbconfig[pass]);
	$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

	/*function connectToDatabase() {
		$username = "mikeofma_mike";
		$password = "IxmDl?rFi7FN";

		$connection = mysqli_connect("www.mike-upjohn.co.uk",$username,$password, "mikeofma_attendance");	

		if(mysqli_connect_errno()) {
			echo "Error connecting to the database.";
		}

		return $connection;
	}*/

	/*function closeDatabase($connection) {
		mysql_close($connection);
	}*/

	function listSubjects($conn) {

		/*$connection = connectToDatabase();*/
		/*connectToDatabase();*/

		/*$result = mysqli_query($connection, "SELECT Class FROM class") or die("Error: " . mysqli_error($connection));*/

		/*$query = "SELECT * FROM  designs WHERE permission = :accid";
		$result = $conn->prepare($query);
		$result->bindParam(":accid", $_SESSION['accid']);
		$result->execute();
		$number_of_rows = $result->rowCount();*/
		$classID = 2;
		$query = "SELECT Class FROM class";
		$result = $conn->prepare($query);
		$result->execute();

		while($row = $result->fetch(PDO::FETCH_ASSOC)) {
			echo "<li><a href='#'>" . $row['Class'] . "</a></li>";
		}
	}

	/*function PrintRegister() {*/
		/*$connection = connectToDatabase();
		$query = "SELECT student.StudentID, student.Forename, student.Surname FROM student, studentClass WHERE student.StudentID = studentClass.StudentID AND studentClass.ClassID = 4";
		$result = mysqli_query($connectionry) or die("Error 2: " . mysqli_error($connection));
, $que
		while($row = mysqli_fetch_array($result)) {
			echo "<tr><td>" . $row['Forename'] . "</td><td>" . $row['Surname'] . "</td>";
			echo "<td><button type='button' class='btn btn-primary present-button' data-studentid='" . $row['StudentID'] . "'>Present</button></td></tr>";
		}*/
	/*}*/

	function PrintRegister($conn) {
		$classID = 4;
		$query = "SELECT studentClass.StudentClassID, student.Forename, student.Surname FROM student, studentClass WHERE student.StudentID = studentClass.StudentID AND studentClass.ClassID = :classID";
		$result = $conn->prepare($query);
		$result->bindParam(":classID", $classID);
		$result->execute();

		while($row = $result->fetch(PDO::FETCH_ASSOC)) {
			echo "<tr><td>" . $row['Forename'] . "</td><td>" . $row['Surname'] . "</td>";
			echo "<td>" . $row['StudentClassID'] . "<button type='button' class='btn btn-primary present-button' data-studentclassid='" . $row['StudentClassID'] . "'>Present</button></td></tr>";
		}
	}

?>