const GRID_SIZE = 16;
const container = document.querySelector(".container");

// create grid
for (let i = 0; i < GRID_SIZE; i++) {

    // create rows
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    
    for (let j =0; j < GRID_SIZE; j++) {

        // create squares
        const square = document.createElement("div");
        square.setAttribute("class", "square");       
        row.appendChild(square);
    }
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.setAttribute("style", "background-color: purple;");
    })
})

const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener('click', () => {
    squares.forEach((square) => {
        square.setAttribute("style", "background-color: '';");
    })
})