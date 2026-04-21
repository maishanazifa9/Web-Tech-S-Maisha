<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

if($username == "maisha" && $password == "1234")
{
    
    $_SESSION['username'] = $username;
    $_SESSION['start_time'] = time(); 

    header("Location: dashboard2.php");
    exit();
}
else
{
    echo "Invalid Username or Password!";
}
?>