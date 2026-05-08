<?php
    include "database4.php";

    $result=$conn->query("SELECT * FROM students");

    echo "<table border='1'>
    <tr><th>ID</th><th>Name</th><th>Dept</th><th>CGPA</th><th>Action</th></tr>";

    while($row=$result->fetch_assoc())
    {
        echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['department']}</td>
        <td>{$row['cgpa']}</td>
        <td>
        <button onclick='updateStudent({$row['id']})'>Edit</button>
        <button onclick='deleteStudent({$row['id']})'>Delete</button>
        </td>
        </tr>";
    }

    echo "</table>";
?>