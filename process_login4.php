<?php
session_start();
include "database_connect.php";

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM registrations WHERE email='$email'";
$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result) == 1)
{
    $row = mysqli_fetch_assoc($result);

    if(password_verify($password, $row['password'])){

        $_SESSION['user_name'] = $row['full_name'];
        $_SESSION['user_email'] = $row['email'];

        setcookie("user_email",$email,time()+86400*7,"/");
        setcookie("last_login",date("Y-m-d H:i:s"),time()+86400*7,"/");

        header("Location: dashboard4.php");
        exit();

    }
    else
    {
        echo "Wrong Password!";
    }
}
else
{
    echo "User not found!";
}
?>