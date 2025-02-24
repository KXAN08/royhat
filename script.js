let students = [];

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let ball = document.getElementById("ball").value.trim();

    if (name === "" || surname === "" || ball === "") {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    let now = new Date();
    let time = now.toLocaleTimeString(); 

    students.push({
        name,
        surname,
        ball: Number(ball),
        time
    });

    students.sort((a, b) => b.ball - a.ball); 

    displayStudents();

    
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("ball").value = "";
}

function displayStudents() {
    let studentList = document.getElementById("students");
    studentList.innerHTML = "";

    students.forEach(student => {
        let studentItem = document.createElement("div");
        studentItem.className = "p-4 border-b flex justify-between";
        studentItem.innerHTML = `
            <div>
                <strong>${student.name} ${student.surname}</strong>
            </div>
            <div>
                <span>${student.ball} ball</span><br>
                <small>${student.time} da kiritildi</small>
            </div>
        `;
        studentList.appendChild(studentItem);
    });
}
