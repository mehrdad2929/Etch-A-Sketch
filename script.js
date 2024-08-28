const container = document.getElementById("container");
let gridNumber = 100 ; //prompt("grid size: "); // You can change this value to any number
let isMouseDown = false;

function createGrid(gridSize) {
    // Clear existing grid
    container.innerHTML = '';

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
}

// Initial grid creation
createGrid(gridNumber);

// // Recreate grid on window resize to maintain square shape
// window.addEventListener('resize', () => createGrid(gridNumber));

function paintCell(e) {
    if (e.target.classList.contains('cell')) {
        e.target.classList.add('painted');
    }
}

container.addEventListener('mousedown', () => {
    isMouseDown = true;
});

container.addEventListener('mouseup', () => {
    isMouseDown = false;
});

container.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

container.addEventListener('mouseover', (e) => {
    if (isMouseDown) {
        paintCell(e);
    }
});

container.addEventListener('mousedown', paintCell);