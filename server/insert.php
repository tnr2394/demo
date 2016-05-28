<?php
include("config.php");

$data = file_get_contents("php://input");
$data = json_decode($data,true);
$data = $data['data'];
$name=$data['name'];
$gender=$data['gender'];
$university=$data['university'];
$college=$data['college'];
$course=$data['course'];
$semester=$data['semester'];
$city=$data['city'];
$district=$data['district'];
$email=$data['email'];
$phone=$data['phone'];

	mysql_query("INSERT INTO `students`(`name`, `gender`, `university`, `college`, `course`, `semester`, `city`, `district`, `email`, `phone`) VALUES ('".$name."','".$gender."','".$university."','".$college."','".$course."','".$semester."','".$city."','".$district."','".$email."','".$phone."')") or die(mysql_error());
