const addRowBottom = () => {
    const table = document.getElementById("table");
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = "6";
    cell2.innerHTML = "NEW CELL2";
}

const addRowTop = () => {
    const table = document.getElementById("table");
    const newRow = table.insertRow(1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.innerHTML = "1";
    cell2.innerHTML = "NEW CELL2";
}