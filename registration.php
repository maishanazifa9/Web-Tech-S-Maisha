<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
</head>
<body>

<h2>User Registration</h2>

<form action="process_register.php" method="POST">
    Name: <input type="text" name="full_name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Password: <input type="password" name="password" required><br><br>

    <button type="submit">Register</button>
</form>

<a href="login4.php">Already have account? Login</a>

</body>
</html>