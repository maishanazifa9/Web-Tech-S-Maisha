<?php
    include "database4.php";

    $data=json_decode(file_get_contents("php://input"));

    $name=$data->name;
    $dept=$data->department;
    $cgpa=$data->cgpa;

    $conn->query("INSERT INTO students(name,department,cgpa)
    VALUES('$name','$dept','$cgpa')");

    echo "Student Added";
?>