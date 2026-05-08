window.onload = fetchBooks;

function saveBook()
{
    let id = document.getElementById("bookId").value;

    let data = new FormData();

    if(id == "")
    {
        data.append("action","add");
    }
    else
    {
        data.append("action","update");
        data.append("id",id);
    }

    data.append("title",document.getElementById("title").value);
    data.append("author",document.getElementById("author").value);
    data.append("category",document.getElementById("category").value);
    data.append("status",document.getElementById("status").value);

    fetch("../controller/bookController.php",
    {
        method:"POST",
        body:data
    })
    .then(res => res.text())
    .then(() =>
    {
        fetchBooks();
        clearForm();
    });
}

function fetchBooks()
{
    let data = new FormData();
    data.append("action","fetch");

    fetch("../controller/bookController.php",
    {
        method:"POST",
        body:data
    })
    .then(res => res.json())
    .then(showBooks);
}

function showBooks(books)
{
    let rows = "";

    books.forEach(book =>
    {
        rows += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.status}</td>

            <td>
                <button onclick="editBook(
                    '${book.id}',
                    '${book.title}',
                    '${book.author}',
                    '${book.category}',
                    '${book.status}'
                )">Edit</button>

                <button onclick="deleteBook(${book.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    document.querySelector("#bookTable tbody").innerHTML = rows;
}

function editBook(id,title,author,category,status)
{
    document.getElementById("bookId").value = id;
    document.getElementById("title").value = title;
    document.getElementById("author").value = author;
    document.getElementById("category").value = category;
    document.getElementById("status").value = status;

    document.getElementById("saveBtn").innerText = "Update Book";
}

function deleteBook(id)
{
    let data = new FormData();

    data.append("action","delete");
    data.append("id",id);

    fetch("../controller/bookController.php",
    {
        method:"POST",
        body:data
    })
    .then(() => fetchBooks());
}

function clearForm()
{
    document.getElementById("bookId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("status").value = "Available";

    document.getElementById("saveBtn").innerText = "Add Book";
}