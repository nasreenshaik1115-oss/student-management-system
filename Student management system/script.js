let students = [];

function addStudent() {
  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const course = document.getElementById('course').value;

  if (name === '' || roll === '' || course === '') {
    alert('Please fill all fields');
    return;
  }

  students.push({ name, roll, course });
  displayStudents();
  clearFields();
}

function displayStudents() {
  const table = document.getElementById('studentTable');
  table.innerHTML = '';

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editStudent(index) {
  const student = students[index];
  document.getElementById('name').value = student.name;
  document.getElementById('roll').value = student.roll;
  document.getElementById('course').value = student.course;

  deleteStudent(index);
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function clearFields() {
  document.getElementById('name').value = '';
  document.getElementById('roll').value = '';
  document.getElementById('course').value = '';
}