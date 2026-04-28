<?php
session_start();

if(!isset($_SESSION['user_email'])){
    header("Location: login4.php");
    exit();
}

$name = $_SESSION['user_name'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>

<h1>Welcome <?php echo $name; ?> 🎉</h1>

<?php
if(isset($_COOKIE['last_login']))
{
    echo "<p>Last Login: " . $_COOKIE['last_login'] . "</p>";
}
?>

<a href="logout4.php">Logout</a>

</body>
</html>