
var student = {}
student.name = 'คุณลุง'
student.email = 'a@B.com'
student.gender = 'ชาย'
function addStudentData(student) {
    const output = document.getElementById('output')
    let row = document.createElement('div')
    row.classList.add('row')
    let columName = document.createElement('div')
    columName.classList.add('col-1')
    columName.classList.add('offset-1')
    columName.innerText = 'ชื่อ'
    let columValue = document.createElement('div')
    columValue.classList.add('col')
    columValue.innerHTML = student.name;

    let row2 = document.createElement('div')
    row2.classList.add('row')
    let columEmail = document.createElement('div')
    columEmail.classList.add('col-1')
    columEmail.classList.add('offset-1')
    columEmail.innerText = 'Email'
    let columValue1 = document.createElement('div')
    columValue1.classList.add('col')
    columValue1.innerHTML = student.email;

    let row3 = document.createElement('div')
    row3.classList.add('row')
    let columGender = document.createElement('div')
    columGender.classList.add('col-1')
    columGender.classList.add('offset-1')
    columGender.innerText = 'gender'
    let columValue2 = document.createElement('div')
    columValue2.classList.add('col')
    columValue2.innerHTML = student.gender;

    row.appendChild(columName)
    row.appendChild(columValue)
    row2.appendChild(columEmail)
    row2.appendChild(columValue1)
    row3.appendChild(columGender)
    row3.appendChild(columValue2)

    output.appendChild(row)
    output.appendChild(row2)
    output.appendChild(row3)
}

window.addEventListener('load', function () {
    addStudentData(student)
})