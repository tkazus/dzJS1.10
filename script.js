let students = [
    { name: "Иван",     age: 20, group: "10a", average: 4.5 },
    { name: "Мария",    age: 19, group: "11a", average: 5.0 },
    { name: "Алексей",  age: 21, group: "11a", average: 2.8 },
    { name: "Ольга",    age: 20, group: "11b", average: 4.7 },
    { name: "Дмитрий",  age: 22, group: "10a", average: 3.4 },
    { name: "Екатерина",age: 19, group: "11b", average: 4.9 }
];

// Функция определения статуса студента
function getStatus(average) {
    if (average >= 4.5) {
        return "Отличник";
    } else if (average >= 3) {
        return "Хорошист";
    } else {
        return "Неуспевающий";
    }
}

// Создание HTML-карточки студента
function createStudentCard(student) {
    let card = document.createElement("div");
    card.className = "card";

    let status = getStatus(student.average);

    // Отличники — особое оформление
    if (student.average >= 4.5) {
        card.classList.add("excellent");
    }

    card.innerHTML = `
        <div class="name">${student.name}</div>
        <p>Возраст: ${student.age}</p>
        <p>Группа: ${student.group}</p>
        <p>Средний балл: ${student.average}</p>
        <div class="status">Статус: ${status}</div>
    `;

    // Предупреждение для студентов со средним баллом ниже 3
    if (student.average < 3) {
        let warning = document.createElement("div");
        warning.className = "warning";
        warning.textContent = "⚠ Внимание: низкая успеваемость!";
        card.appendChild(warning);
    }

    return card;
}

// Отрисовка переданного массива студентов
function renderStudents(list) {
    let container = document.querySelector("#students-container");
    container.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let card = createStudentCard(list[i]);
        container.appendChild(card);
    }
}

// Кнопка "Показать студентов"
document.querySelector("#show-all").addEventListener("click", function () {
    renderStudents(students);
});

// Кнопка "Показать только отличников"
document.querySelector("#show-excellent").addEventListener("click", function () {
    let excellentStudents = students.filter(function (student) {
        return student.average >= 4.5;
    });
    renderStudents(excellentStudents);
});