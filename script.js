var table = document.getElementById('inputTable')
var students = [
    student = {
        name: 'คุณลุง',
        email: 'a@B.com',
        gender: 'ชาย'
    },
    {
        name: 'คุณลุง',
        email: 'a@B.com',
        gender: 'ชาย'
    },
    {
        name: 'คุณลุง',
        email: 'a@B.com',
        gender: 'ชาย'
    }
]

console.log(students)
function addRow(container, key, value) {
    let row = document.createElement('div')
    row.classList.add('row')
    let columName = document.createElement('div')
    columName.classList.add('col-1')
    columName.classList.add('offset-1')
    columName.innerText = key
    let columValue = document.createElement('div')
    columValue.classList.add('col')
    columValue.innerHTML = value;
    row.appendChild(columName)
    row.appendChild(columValue)
    container.appendChild(row)

}
function addStudentData(student) {
    const output = document.getElementById('output')
    addRow(output, 'ชื่อ', student.name)
    addRow(output, 'Email', student.email)
    addRow(output, 'Gender', student.gender)
}
var count = 1;
function addTable(index, student) {
    let row = document.createElement('tr')

    let dataCount = document.createElement('td');
    dataCount.innerText = index

    let dataName = document.createElement('td');
    dataName.innerText = student.name

    let dataEmail = document.createElement('td');
    dataEmail.innerText = student.email

    let dataGender = document.createElement('td');
    dataGender.innerText = student.gender

    row.appendChild(dataCount)
    row.appendChild(dataName)
    row.appendChild(dataEmail)
    row.appendChild(dataGender)
    table.appendChild(row)
}

function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addTable(counter++, student);
    }
}


window.addEventListener('load', function () {
    addStudentList(students)
})