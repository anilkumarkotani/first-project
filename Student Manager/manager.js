document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
    const nameInput = document.querySelector(".c5");
    const ageInput = document.querySelector(".c6");
    const courseInput = document.querySelector(".c7");

    const tableContainer = document.createElement("div");
    tableContainer.style.textAlign = "center";
    tableContainer.style.marginTop = "30px";

    const table = document.createElement("table");
    table.style.margin = "0 auto";
    table.style.borderCollapse = "collapse";
    table.style.width = "60%";

    const headerRow = document.createElement("tr");
    const headers = ["Name", "Age", "Course"];

    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        th.style.backgroundColor = "#f2f2f2";
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);
    tableContainer.appendChild(table);
    document.body.appendChild(tableContainer);

    button.addEventListener("click", function () {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const course = courseInput.value.trim();

        if (!name || !age || !course) {
            alert("Please fill in all fields.");
            return;
        }

        const row = document.createElement("tr");

        [name, age, course].forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            td.style.border = "1px solid black";
            td.style.padding = "10px";
            row.appendChild(td);
        });

        table.appendChild(row);

        nameInput.value = '';
        ageInput.value = '';
        courseInput.value = '';
    });
});