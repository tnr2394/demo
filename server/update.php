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
$id=$data['id'];

mysql_query("UPDATE `students` SET `name`='".$name."', `gender`='".$gender."', `university`='".$university."', `college`='".$college."', `course`='".$course."', `semester`='".$semester."', `city`='".$city."', `district`='".$district."', `email`='".$email."', `phone` ='".$phone."' where $id='$id'") or die(mysql_error());
