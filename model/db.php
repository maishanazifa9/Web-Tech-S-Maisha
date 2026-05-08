<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbName = "library_db";

    $conn = mysqli_connect($host, $user, $password);

    if(!$conn)
    {
        die("Connection Failed");
    }

    mysqli_query($conn,"CREATE DATABASE IF NOT EXISTS $dbName");
    mysqli_select_db($conn,$dbName);

    $bookTable = "CREATE TABLE IF NOT EXISTS books(
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100),
        author VARCHAR(100),
        category VARCHAR(100),
        status VARCHAR(50)
    )";
    mysqli_query($conn,$bookTable);
?>