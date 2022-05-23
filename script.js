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
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHTML = `${student.name} ${student.surname}`
    let gpaElem = document.getElementById('gpa')
    gpaElem.innerHTML = student.gpa
    let profileElem = document.getElementById('image')
    profileElem.setAttribute('src', student.image)

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
    cell.innerHTML = `${student.name} ${student.surname}`
    row.appendChild(cell)

    cell = document.createElement('td')
    cellbeforeImg = document.createElement('div')
    cellbeforeImg.classList.add('img-fluid')
    let img = document.createElement('img')
    img.setAttribute('src', student.image)
    img.setAttribute('width', '60em')
    img.classList.add('img-thumbnail')
    cellbeforeImg.appendChild(img)
    cell.appendChild(cellbeforeImg)
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = student.gpa
    row.appendChild(cell)

    tableBody.appendChild(row)
}

function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addTable(counter++, student);
    }
}


document.getElementById('searchButton').addEventListener('click', () => {
    let id = document.getElementById('inputText').value
    console.log(id)
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
        .then(response => {
            return response.json()
        }).then(student => {
            addStudentData(student)
        })
})

function OnLoad() {
    student = {
        name: "TOP",
        surname: "Thammanun",
        studentId: "642110318",
        gpa: "999999.99",
        image: "https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.18172-8/21587259_939420292888498_3231167830924572319_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ad2b24&_nc_eui2=AeELjf6gH9oD-MD_ganyJhgKSiRlKjBD72BKJGUqMEPvYMLgscw3HoiLciB6EFfVANWHsFhR_LyuwwEprkVBbGrK&_nc_ohc=jX3QDF7lv4kAX9O76Dx&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT-x6MoR9OyqDLaez7WobgZP53o8YTnReyWugX3qw2H7cQ&oe=62AEBB08"

    }
    addStudentToDB(student)
}

function addStudentToDB(student) {
    fetch(`https://dv-student-backend-2019.appspot.com/students`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log('success', data)
    })
}

function deleteStudent(id) {
    fetch(`https://dv-student-backend-2019.appspot.com/students/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        alert('student name ${data.name} is now deleted')
    }).catch(error => {
        alert('your input student id is not in the database')
    })
}
