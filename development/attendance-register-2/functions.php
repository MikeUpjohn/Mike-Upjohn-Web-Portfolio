<?php
	function loadClasses() {
		$connection = connectToDatabase();

		$query = "SELECT * FROM class WHERE ClassDate = CURDATE()";
		$result = mysqli_query($connection, $query);

		echo "<select name='classesToday' id='classesToday'>";
		echo "<option></option>";

		while($row = mysqli_fetch_array($result)) {
			echo "<option value='" . $row['ClassID'] . "'>" . $row['Class'] . " - " . $row['ClassDate'] . "</option>";
		}

		echo "</select>";
	}

?>