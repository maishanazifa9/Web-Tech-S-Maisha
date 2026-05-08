
function loadStudents()
{
    fetch("fetch4.php")
    .then(res=>res.text())
    .then(data=>document.getElementById("output").innerHTML=data);
}

function addStudent()
{
    let name=document.getElementById("name").value;
    let dept=document.getElementById("dept").value;
    let cgpa=document.getElementById("cgpa").value;

fetch("insert4.php",
{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({name,department:dept,cgpa})
})
.then(res=>res.text())
.then(msg=>
{
    alert(msg);
    loadStudents();
    });
}

function deleteStudent(id)
{
    fetch("delete4.php?id="+id)
    .then(res=>res.text())
    .then(msg=>
    {
    alert(msg);
    loadStudents();
});
}

function updateStudent(id)
{
    let name=prompt("New Name:");
    let dept=prompt("New Department:");
    let cgpa=prompt("New CGPA:");

fetch("update4.php",
{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({id,name,department:dept,cgpa})
})
.then(res=>res.text())
.then(msg=>
{
    alert(msg);
    loadStudents();
});
}