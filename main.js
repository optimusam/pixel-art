let go = document.querySelector("input[type='submit']");
let reset = document.querySelector("input[type='reset']");
let table = document.querySelector("table");
let gridHeight = document.querySelector("#gh");
let gridWidth = document.querySelector("#gw");
go.addEventListener('click', makeGrid);
reset.addEventListener('click', resetIt);
function makeGrid(event) {
    let noOfRows = gridHeight.value;
    let noOfCol = gridWidth.value;
    console.log(noOfRows, noOfCol);
    for(let i=0; i<noOfRows; i++) {
        let newRow = table.insertRow(i);
        for(let j=0; j<noOfCol; j++) {
            let newCell = newRow.insertCell(0);
            newCell.addEventListener('click', colorCell);
        }
    }
    gridHeight.disabled = true;
    gridWidth.disabled = true;
    go.classList.add("hide");
    event.preventDefault();
}

function resetIt() {
    gridHeight.disabled = false;
    gridWidth.disabled = false;
    go.classList.remove("hide");
    table.textContent = "";
}
function colorCell() {
    let colour = document.querySelector("#colour").value;
    this.style.backgroundColor = colour;
}