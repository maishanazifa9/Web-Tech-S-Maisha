<?php
include "database_connect.php";

$name = $_POST['full_name'];
$email = $_POST['email'];
$password = $_POST['password'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO registrations (full_name,email,password,role,track,start_date,terms_accepted)
        VALUES ('$name','$email','$hashed_password','student','foundations',CURDATE(),1)";

if(mysqli_query($conn,$sql))
{
    echo "Registration Successful! <br><br>";
    echo "<a href='login4.php'>Go to Login</a>";
}
else
{
    echo "Error: " . mysqli_error($conn);
}
?>