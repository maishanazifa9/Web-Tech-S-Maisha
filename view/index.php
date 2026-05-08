<!DOCTYPE html>
<html>
<head>
    <title>Library Management System</title>
</head>
<body>

    <h2>Library Management System</h2>

    <input type="hidden" id="bookId">

    Title:
    <input type="text" id="title">

    Author:
    <input type="text" id="author">

    Category:
    <input type="text" id="category">

    Status:
    <select id="status">
        <option value="Available">Available</option>
        <option value="Issued">Issued</option>
    </select>

    <button onclick="saveBook()" id="saveBtn">Add Book</button>

    <h2>All Books</h2>

    <table border="1" cellpadding="5" id="bookTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody></tbody>
    </table>

    <script src="script.js"></script>

</body>
</html>