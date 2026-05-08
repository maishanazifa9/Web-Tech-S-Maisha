<?php
    include "database4.php";

    $id=$_GET['id'];

    $conn->query("DELETE FROM students WHERE id=$id");

    echo "Student Deleted";
?>