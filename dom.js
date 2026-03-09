document.getElementById('student-form').addEventListener('submit', addStudent);
document.getElementById('search-student').addEventListener('input', searchStudent);
document.getElementById('sort-btn').addEventListener('click', sortStudents);
document.getElementById('highlight-btn').addEventListener('click', highlightFirst);
document.getElementById('student-name').addEventListener('input', toggleAddButton);

let presentCount = 0;

function toggleAddButton() 
{
    let name = document.getElementById('student-name').value;
    if (name.trim() === '') 
    {
        document.getElementById('add-btn').disabled = true;
    } 
    else 
    {
        document.getElementById('add-btn').disabled = false;
    }
}

function addStudent(event) 
{
    event.preventDefault();
    let name = document.getElementById('student-name').value;
    let roll = document.getElementById('student-roll').value;
    let li = document.createElement('li');
    li.classList.add('student-item');

    let span = document.createElement('span');
    span.textContent = roll + " – " + name;

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    checkbox.addEventListener('change', function () 
    {
        if (checkbox.checked) 
        {
            li.classList.add('present');
            presentCount++;
        }
        else 
        {
            li.classList.remove('present');
            presentCount--;
        }
        updateAttendance();
    });

    let editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.classList.add('btn-edit');

    editButton.addEventListener('click', function () 
    {
        let newName = prompt("Enter new name", name);
        let newRoll = prompt("Enter new roll", roll);

        if (newName !== null && newName !== '') 
        {
            span.textContent = newRoll + " - " + newName;
        }
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('btn-delete');

    deleteButton.addEventListener('click', function () 
    {
        let confirmDelete = confirm("Are you sure you want to delete this student?");

        if (confirmDelete) 
        {
            li.remove();
            updateTotal();
            updateAttendance();
        }
    });

    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById('student-list').appendChild(li);
    document.getElementById('student-name').value = '';
    document.getElementById('student-roll').value = '';
    document.getElementById('add-btn').disabled = true;

    updateTotal();
    updateAttendance();
}

function updateTotal() 
{
    let total = document.querySelectorAll('.student-item').length;
    document.getElementById('total').textContent = "Total students: " + total;
}

function updateAttendance() 
{
    let total = document.querySelectorAll('.student-item').length;
    let absent = total - presentCount;
    document.getElementById('attendance').textContent = "Present: " + presentCount + ", Absent: " + absent;
}

function searchStudent() 
{
    let searchValue =document.getElementById('search-student').value.toLowerCase();
    let students = document.querySelectorAll('.student-item');
    students.forEach(function (student) 
    {
        let text = student.textContent.toLowerCase();
        if (text.includes(searchValue)) 
        {
            student.style.display = "flex";
        }
        else 
        {
            student.style.display = "none";
        }
    });
}

function sortStudents() 
{
    let list = document.getElementById('student-list');
    let students = Array.from(list.children);

    students.sort(function (a, b) 
    {
        let nameA = a.querySelector('span').textContent.toLowerCase();
        let nameB = b.querySelector('span').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    students.forEach(function (student) 
    {
        list.appendChild(student);
    });
}

function highlightFirst() 
{
    let students = document.querySelectorAll('.student-item');
    students.forEach(function (student) 
    {
        student.classList.remove('highlight');
    });

    if (students.length > 0) 
    {
        students[0].classList.add('highlight');
    }

}
