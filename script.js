// Variables
let ROW_WIDTH = 960;
let GRID_SIZE = 16;

const container = document.querySelector(".container");

// Executable
createGrid(ROW_WIDTH, GRID_SIZE);

// Functions

// create grid
function createGrid(ROW_WIDTH, GRID_SIZE) {
    for (let i = 0; i < GRID_SIZE; i++) {

        // create rows
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        row.setAttribute(`style`, `width: ${ROW_WIDTH}px;`);
        container.appendChild(row);
    
        for (let j =0; j < GRID_SIZE; j++) {

            // create squares
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.setAttribute(`style`, `width: ${ROW_WIDTH / GRID_SIZE}px; height: ${ROW_WIDTH / GRID_SIZE}px;`);
            row.appendChild(square);
        }
    }
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    // paint square on mouseover
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "purple";
    })
});
    
// reset background on squares when btn clicked
const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "";
    })
})

// prompt user for new grid when btn clicked
const newGridBtn = document.querySelector(".new-grid-btn");

newGridBtn.addEventListener('click', () => {

})