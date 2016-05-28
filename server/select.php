<?php
include("config.php");
$result = mysql_query("select * from students") or die();
$ara = array();
while($x = mysql_fetch_assoc($result)){
	array_push($ara, $x);
}
echo json_encode($ara);
