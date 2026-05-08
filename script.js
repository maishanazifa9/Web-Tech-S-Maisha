function loadStudents() 
{

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "get_students.php", true);

    xhr.onload = function () 
    {

        if (xhr.status == 200) 
        {
            
            var students = JSON.parse(xhr.responseText);

            var output = "<h3>Student List</h3>";

            output += "<table border='1' cellpadding='10'>";
            output += "<tr><th>Name</th><th>ID</th><th>Department</th><th>CGPA</th></tr>";

            for (var i = 0; i < students.length; i++) 
            {
                output += "<tr>";
                output += "<td>" + students[i].name + "</td>";
                output += "<td>" + students[i].id + "</td>";
                output += "<td>" + students[i].department + "</td>";
                output += "<td>" + students[i].cgpa + "</td>";
                output += "</tr>";
            }

            output += "</table>";

            document.getElementById("output").innerHTML = output;
        }
    };

    xhr.send();
}