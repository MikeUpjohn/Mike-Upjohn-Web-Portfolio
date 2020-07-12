<?php
	$dbconfig = array(
		    'user' => 'mikeofma_mike',
		    'pass' => 'IxmDl?rFi7FN',
		    'host' => 'localhost',
		    'name' => 'mikeofma_attendance',
	);

	$conn = new PDO("mysql:host=$dbconfig[host];dbname=$dbconfig[name]", $dbconfig[user], $dbconfig[pass]);
	$conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

/*$studentid = $_POST['studentid'];*/

/*$query = "SELECT * FROM  designs WHERE permission = :accid";
		$result = $conn->prepare($query);
		$result->bindParam(":accid", $_SESSION['accid']);
		$result->execute();
		$number_of_rows = $result->rowCount();*/

$studentClassID = $_POST['studentclassid'];
$presentValue = 1;
$query = "INSERT INTO StudentClassRegister (StudentClassID, Present) VALUES (:studentClassID, :presentValue)";
$result = $conn->prepare($query);
$result->bindParam(":studentClassID", $studentClassID);
$result->bindParam("presentValue", $presentValue);
$result->execute();
$numberOfRows = $result->rowCount();
echo "Success x 2";

?>