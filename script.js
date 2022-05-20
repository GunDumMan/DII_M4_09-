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
    addRow(output, 'Email', student.imageLink)
    addRow(output, 'Gender', student.gender)
}
var count = 1;
function addTable(index, student) {
    const tableBody = document.getElementById('inputTable')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope', 'row')
    cell.innerHTML = index
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)

    cell = document.createElement('td')
    cellbeforeImg = document.createElement('div')
    cellbeforeImg.classList.add('img-fluid')
    let img = document.createElement('img')
    img.setAttribute('src', student.imageLink)
    img.setAttribute('width', '50em')
    cellbeforeImg.appendChild(img)
    cell.appendChild(cellbeforeImg)
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)

    tableBody.appendChild(row)
}

function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addTable(counter++, student);
    }
}


function onload() {
    fetch('asset/students2.json').then(response => {
        return response.json().then(data => {
            let students = data
            addStudentList(students)
        })
    })


}