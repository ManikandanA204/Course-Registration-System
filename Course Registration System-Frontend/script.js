function showCourses(){
fetch("http://localhost:8080/courses")
.then((response) => response.json())
.then((coueses) => {
  const dataTable = document.getElementById("coursetable")

  coueses.forEach(course =>{
    var row = `<tr>
    <td>${course.courseID}</td>
    <td>${course.courseName}</td>
    <td>${course.trainer}</td>
    <td>${course.durationInWeek}</td>
    </tr>`

    dataTable.innerHTML+=row;
  })
})
}

function showendrolledstudents(){
  fetch("http://localhost:8080/courses/endrolled")
.then((response) => response.json())
.then((students) => {
  const dataTable = document.getElementById("endrolledtable")

  students.forEach(student =>{
    var row = `<tr>
    <td>${student.name}</td>
    <td>${student.emailId}</td>
    <td>${student.courseName}</td>
    </tr>`

    dataTable.innerHTML+=row;
  })
})
}