<?php
    include "database4.php";

    $data=json_decode(file_get_contents("php://input"));

    $id=$data->id;
    $name=$data->name;
    $dept=$data->department;
    $cgpa=$data->cgpa;

    $conn->query("UPDATE students 
    SET name='$name', department='$dept', cgpa='$cgpa'
    WHERE id=$id");

    echo "Student Updated";
?>