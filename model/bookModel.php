<?php
    include "db.php";

    function addBook($title,$author,$category,$status)
    {
        global $conn;
        $sql="INSERT INTO books(title,author,category,status) 
            VALUES('$title','$author','$category','$status')";
        mysqli_query($conn,$sql);
    }

    function getBooks()
    {
        global $conn;
        $result=mysqli_query($conn,"SELECT * FROM books ORDER BY id DESC");
        $books=[];
        while($row=mysqli_fetch_assoc($result))
        {
            $books[]=$row;
        }
        return $books;
    }

    function deleteBook($id)
    {
        global $conn;
        mysqli_query($conn,"DELETE FROM books WHERE id=$id");
    }

    function updateBook($id,$title,$author,$category,$status)
    {
        global $conn;
        mysqli_query($conn,"UPDATE books SET 
            title='$title',
            author='$author',
            category='$category',
            status='$status'
            WHERE id=$id");
    }
?>