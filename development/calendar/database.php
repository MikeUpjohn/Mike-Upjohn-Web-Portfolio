<?php
// Create connection
$con=mysql_connect("localhost","mikeofma","4t1On5tpaRd5","mikeofma_calendar");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>