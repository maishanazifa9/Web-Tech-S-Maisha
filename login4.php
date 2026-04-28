<?php
$email_cookie = "";
if(isset($_COOKIE['user_email'])){
    $email_cookie = $_COOKIE['user_email'];
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>

<h2>User Login</h2>

<form action="process_login4.php" method="POST">
    Email: <input type="email" name="email" value="<?php echo $email_cookie; ?>" required><br><br>
    Password: <input type="password" name="password" required><br><br>

    <button type="submit">Login</button>
</form>

<a href="registration.php">Create Account</a>

</body>
</html>