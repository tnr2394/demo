<?php

	include("config.php");
	$id = $_GET["id"];

	mysql_quiery("DELETE from students where id = '".$id."'") or die(mysql_error());
	echo true;