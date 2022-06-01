
// row - 1
const row1 = document.getElementById('row-1');

const cell1 = row1.insertCell(0);
cell1.textContent = row1.rowIndex;


// row - 2
const row2 = document.getElementById('row-2');

const cell2 = row2.insertCell(0);
cell2.textContent = row2.rowIndex;


// row - 3
const row3 = document.getElementById('row-3');

const cell3 = row3.insertCell(0);
cell3.textContent = row3.rowIndex;


// row - 4
const row4 = document.getElementById('row-4');

const cell4 = row4.insertCell(0);
cell4.textContent = row4.rowIndex;


// row - 5
const row5 = document.getElementById('row-5');

const cell5 = row5.insertCell(0);
cell5.textContent = row5.rowIndex;





// add row to bottom button event handler

const addRowBottom = () => {
    const table = document.getElementById("table");
    const newRow = table.insertRow(-1);
    newRow.setAttribute('id', 'row-6');
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    cell1.innerText = newRow.rowIndex;
    cell2.innerText = "Meherin";
    cell3.innerText = "Islam";
    cell4.innerText = "Tangail";
    cell5.innerText = "Bangladesh";

    // row - 6
    const row6 = document.getElementById('row-6');

    const row6Cell6 = row6.insertCell(0);
    row6Cell6.textContent = row6.rowIndex;
    row6.deleteCell(1);
}



// add row to top button event handler

const addRowTop = () => {
    const table = document.getElementById("table");
    const newRow2 = table.insertRow(1);
    newRow2.setAttribute('id', 'row-7');
    const cell1 = newRow2.insertCell(0);
    const cell2 = newRow2.insertCell(1);
    const cell3 = newRow2.insertCell(2);
    const cell4 = newRow2.insertCell(3);
    const cell5 = newRow2.insertCell(4);
    cell1.innerText = newRow2.rowIndex;
    cell2.innerText = "Monir";
    cell3.innerText = "Islam";
    cell4.innerText = "Tangail";
    cell5.innerText = "Bangladesh";


    // row - 7
    const row7 = document.getElementById('row-7');

    const row7Cell7 = row7.insertCell(0);
    row7Cell7.textContent = row7.rowIndex;
    row7.deleteCell(1);

    // row - 1
    const row1 = document.getElementById('row-1');

    const row1Cell1 = row1.insertCell(0);
    row1Cell1.textContent = row1.rowIndex;
    row1.deleteCell(1);

    // row - 2
    const row2 = document.getElementById('row-2');

    const row2Cell2 = row2.insertCell(0);
    row2Cell2.textContent = row2.rowIndex;
    row2.deleteCell(1);

    // row - 3
    const row3 = document.getElementById('row-3');

    const row3Cell3 = row3.insertCell(0);
    row3Cell3.textContent = row3.rowIndex;
    row3.deleteCell(1);

    // row - 4
    const row4 = document.getElementById('row-4');

    const row4Cell4 = row4.insertCell(0);
    row4Cell4.textContent = row4.rowIndex;
    row4.deleteCell(1);

    // row - 5
    const row5 = document.getElementById('row-5');

    const row5Cell5 = row5.insertCell(0);
    row5Cell5.textContent = row5.rowIndex;
    row5.deleteCell(1);

    // row - 6
    const row6 = document.getElementById('row-6');

    const row6Cell7 = row6.insertCell(0);
    row6Cell7.textContent = row6.rowIndex;
    row6.deleteCell(1);
}