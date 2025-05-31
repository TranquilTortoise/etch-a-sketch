const GRID_SIZE = 16;
const container = document.querySelector(".container");

// create grid
for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    
    for (let j =0; j < GRID_SIZE; j++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.setAttribute("style", `height: ${80 / GRID_SIZE}vh; width: ${80 / GRID_SIZE}vh;`);;
        row.appendChild(square);
    }
}