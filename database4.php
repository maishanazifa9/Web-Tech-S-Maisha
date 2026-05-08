<?php
$conn = new mysqli("localhost","root","","studentdb");

if($conn->connect_error)
{
    die("Connection Failed");
}
?>