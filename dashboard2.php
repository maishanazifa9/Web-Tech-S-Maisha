<?php
session_start();

$timeout = 60;

if(!isset($_SESSION['username']))
{
    header("Location: login2.php");
    exit();
}

if(time() - $_SESSION['start_time'] > $timeout)
{
    session_unset();
    session_destroy();
    header("Location: login2.php");
    exit();
}

$user = $_SESSION['username'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>

<h2>Dashboard</h2>
<h3>Welcome, <?php echo $user; ?></h3>
<p>You will be logged out after 1 minute automatically.</p>

<a href="logout2.php">Logout</a>

</body>
</html>