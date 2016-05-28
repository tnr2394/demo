<?php
	$uname = 'root';
	$password = 'password';
	$host = 'localhost';

	mysql_connect($host,$uname,$password) or die(mysql_error());
	mysql_select_db("demo");