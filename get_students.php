<?php
header("Content-Type: application/json");

$students = array(
    array("name"=>"Saheen Ahmed","id"=>"23-56435-3","department"=>"CSE","cgpa"=>"3.80"),
    array("name"=>"Arif Islam","id"=>"23-56336-3","department"=>"EEE","cgpa"=>"3.75"),
    array("name"=>"Rahim Rahman Nafi","id"=>"23-55635-3","department"=>"BBA","cgpa"=>"3.60"),
    array("name"=>"Reza Kaifi","id"=>"23-57835-3","department"=>"CSE","cgpa"=>"3.95")
);


echo json_encode($students);
?>