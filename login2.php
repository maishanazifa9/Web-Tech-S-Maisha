<?php
session_start();

if(isset($_SESSION['username']))
{
    header("Location: dashboard2.php");   
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>

<h2>Login Form</h2>

<form action="process_login2.php" method="POST"> 
    Username: <input type="text" name="username" required><br><br>
    Password: <input type="password" name="password" required><br><br>
    <button type="submit">Login</button>
</form>

</body>
</html>