const container = document.querySelector("#container");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        container.appendChild(square);
    }
}

createGrid(16);

