<?php include("database.php"); ?>

<!DOCTYPE html>

<head>
	<title>My Calendar</title>
	<script type="text/javascript">
		function LastMonth(month, year) {
			if(month == 1) {
				--year;
				month=13;
			}
			document.location.href = '<?=$_SERVER['PHP_SELF'];?>?month='+(month-1)+'&year='+year;
		}

		function NextMonth(month, year) {
			if(month == 12) {
				++year;
				month = 0;
			}

			document.location.href= '<?=$_SERVER['PHP_SELF'];?>?month='+(month+1)+'&year='+year;
		}

		function CharacterCheck(text, count, maxLength) {
			if(text.count.length > maxLength) {
				text.value = text.value.substring(0, (maxLength-1));
			}
			else {
				count = maxLength - text.value.length;
			}
		}

		function CheckFilled() {
			var filled = 0;
			var x = document.form1.calName.value;
			if(x.length > 0) {
				filled++;
			}

			var y = document.form1.calDesc.value;
			if(y.length > 0) {
				filled++;
			}

			if(filled == 2) {
				document.getElementById("Submit").disabled = false;
			}
			else {
				document.getElementById("Submit").disabled = true;
			}
		}
	</script>
</head>
<style>
body{
font-family:Georgia, "Times New Roman", Times, serif;
font-size:12px;
}
.today{
/*background-color:#00CCCC;*/
font-weight:bold;
background-image:url(calBg.jpg);
background-repeat:no-repeat;
background-position:center;
position:relative;
}
.today span{
position:absolute;
left:0;
top:0; 
}

.today a{
color:#000000;
padding-top:10px;
}
.selected {
color: #FFFFFF;
background-color: #C00000;
}
.event {
background-color: #C6D1DC;
border:1px solid #ffffff;
} 
.normal {

} 
table{
border:1px solid #cccccc;
padding:3px;
}
th{
width:36px;
background-color:#cccccc;
text-align:center;
color:#ffffff;
border-left:1px solid #ffffff;
}
td{
text-align:center;
padding:10px;
margin:0;
}
table.tableClass{
width:350px;
border:none;
border-collapse: collapse;
font-size:85%;
border:1px dotted #cccccc;
}
table.tableClass input,textarea{
font-size:90%;
}
#form1{
margin:5px 0 0 0;
}
#greyBox{
height:10px;
width:10px;
background-color:#C6D1DC;
border:1px solid #666666;
margin:5px;
}
#legend{
margin:5 0 10px 50px;
width:200px;
}
#hr{border-bottom:1px solid #cccccc;width:300px;}
.output{width:300px;border-bottom:1px dotted #ccc;margin-bottom:5px;padding:6px;}
h5{margin:0;}
</style>
</head>
<body>
	<?php
		$day = (isset($_GET["day"])) ? $_GET["day"] : "";
		$month = (isset($_GET["month"])) ? $_GET["month"] : "";
		$year = (isset($_GET["year"])) ? $_GET["year"] : "";

		function HighlightEvent($eMonth, $eDay, $eYear) {
			$todaysDate = date("n/j/Y");
			$dateToCompare = $eMonth . "/" . $eDay . "/" . $eYear;

			if($todaysDate == $dateToCompare) {
				$aClass = "class='today'";
			}
			else {
				$sql = "SELECT COUNT(calDate) as eCount FROM Calendar WHERE calDate='" . $eMonth . "/" . $eDay . "/" . $eYear . "'";
				$result= mysql_query($sql);
				while($row = mysql_fetch_array($result)) {
					if($row['eCount'] >= 1) {
						$aClass = "class='event'";
					}
					else if($row['eCount'] == 0) {
						$aClass="class='normal'";
					}
				}
			}

			return $aClass;
		}
	?>

	<table width="350" cellpadding="0" cellspacing="0">
		<tr>
			<td width="50" colspan="1">
				<input type="button" value="<" onclick="LastMonth(<?php echo $month . ',' . $year;?>);" />
			</td>
			<td width="250" colspan="5">
				<span class="title"><?php echo $monthName . " " . $year; ?></span><br/>
			</td>
			<td width="50" colspan="1" align="right">
				<input type="button" value = ">" onclick="NextMonth(<?php echo $month . ',' . $year; ?>);" />
			</td>
		</tr>
		<tr>
			<th>S</th>
			<th>M</th>
			<th>T</th>
			<th>W</th>
			<th>T</th>
			<th>F</th>
			<th>S</th>
		</tr>
		<tr>
			<?php
				for($i= 1; $i < $numDays+1; $i++, $counter++) {
					$dateToCompare = $month . '/' . $i . '/' . $year;
					$timeStamp = strtotime("$year-$month-$i");
					if($i == 1) {
						$firstDay = date("w", $timeStamp);
						for($j=0; $j < $firstDay; $j++, $counter++) {
							echo "<td>&nbsp;</td>";
						}
					}

					if($counter %7 == 0) {
						?>
						</tr><tr>
						<?php
						}
						?>
						<td width="50" <?HighlightEvent($month, $i, $year);?>><a href="<?=$_SERVER['PHP_SELF'] . '?month='. $month . '&day=' . $i . '&year=' . $year;?>&v=1"><?=$i;?></a></td>
						<?php
					}
						?>
						</table>	
	</table>
	<?php
	if(isset($_GET['v'])) {
		$sql = "INSERT INTO Calendar(calName, calDesc, calDate, calStamp) VALUES('" . $_POST['calName'] . "','"  . $_POST['calDesc']. "','" . $_POST['calDate'] . "', now())";
		$result = mysql_query($sql);
		$numRows = mysql_num_rows($result);	
	}
	?>
	<?php
		$sql = "SELECT calName, calDesc, DATE_FORMAT(calStamp, '%a %b %e %Y') as calStamp FROM Calendar WHERE calDate='" . $day . '-' . $month . '-' . $year . "'";
		$result = mysql_query($sql);
		$numRows = mysql_num_rows($result);
	?>
	<a href="<?=$_SERVER['PHP_SELF'];?>?month=<?=$_GET['month'] . '&day=' . $_GET['day'] . '&year=' . $_GET['year'];?>&v=1&f=true">New Event</a><br/>
	<?php
	if(isset($_GET['f'])) {
		//include 'calForm.php';
	}

	if($num_rows == 0) {
		echo "<h3>No Events</h3>";
	}
	else {
		echo "<h3>Events Listed</h3>";
		while($row = mysql_fetch_array($result)) {
	?>
	<div class='output'>
		<h5><?=$row['calName'];?></h5>
		<?=$row['calDesc'];?><br/>
		Listed On: <?=$row['calStamp'];?>
	</div>
	<?php
		}
		}
	?>
</body>