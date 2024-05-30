const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#gridSizeBtn");
let size = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${960 / gridSize}px`;
        square.style.height = `${960 / gridSize}px`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        container.appendChild(square);
    }
}

gridSizeBtn.addEventListener("click", () => {
    newSize = prompt("How many squares per row (limit 100)");
    if (newSize <= 100 && newSize >= 1) {
        const squares = document.querySelectorAll(".square");
        squares.forEach(e => e.remove());
        createGrid(newSize);
    }   else {
        alert("Please enter a value between 1 and 100");
    }
})

createGrid(size);

