<?php
	include("connect.php");

	$connection = connectToDatabase();

	$classID = $_POST['selectedClass'];
	$htmlTable = "";

	$query = "SELECT studentClass.StudentClassID, student.Forename, student.Surname FROM student, studentClass WHERE student.StudentID = studentClass.StudentID AND studentClass.ClassID = " . $classID;
	$result = mysqli_query($connection, $query);

	$htmlTable .= "<table><tr><th>StudentClassID</th><th>Forename</th><th>Surname</th><th>Attended</th></tr>";

	while($row = mysqli_fetch_array($result)) {
		$htmlTable .= "<tr>";
		$htmlTable .= "<td>" . $row['StudentClassID'] . "</td>";
		$htmlTable .= "<td>" . $row['Forename'] . "</td>";
		$htmlTable .= "<td>" . $row['Surname'] . "</td>";
		$htmlTable .= "<td><button name='attendance-button' class='attendance-button' data-studentclassid='" . $row['StudentClassID'] ."'>Present</button></td>";
	}
//
	$htmlTable .= "</table>";

	echo $htmlTable;

?>