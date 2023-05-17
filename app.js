const sketchBoard = document.getElementById('container');
const grid = document.getElementById('grid');
const color = document.getElementById('color');
const resetButton = document.getElementById('clear');

var gridElems = document.getElementsByClassName('square');
var isStartUp = true;
var isPainting = false;

let gridSize = grid.value;

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        var row = document.createElement('div');
        let rowSize = 100/ gridSize;
        row.setAttribute('style', `width: 100%; height: ${rowSize}%;`)
        row.className = 'row';
        for (let j = 0; j < gridSize; j++) {
            var square = document.createElement('div');
            square.className = 'square';
            let squareSize = 100 / gridSize;
            square.setAttribute('style', `width:${squareSize}%; height:100%;`);
            square.setAttribute('onclick', 'togglePen(this)');
            square.setAttribute('onmouseenter', 'paintGrid(this)');
            square.setAttribute('ondblclick', 'eraserGrid(this)');
            row.appendChild(square);
        }
        sketchBoard.appendChild(row);
    };
    gridElems = document.getElementsByClassName('square');
    isPainting = false;
}

const togglePen = (grid) => {
    isPainting = !isPainting;
    paintGrid(grid);
    
}

const paintGrid = (grid) => {
    let paint = window.getComputedStyle(color).getPropertyValue('background-color');
    if (isPainting) {
        grid.style.backgroundColor = paint;
    }
}

const emptyGrid = () => {
    const row = document.getElementsByClassName('row');
    while (row.length > 0) {
        row[0].parentNode.removeChild(row[0]);
    }
}

const eraserGrid = (grid) => {
    grid.style.backgroundColor = 'white';
}

const startUpScript = (gridSize) => {
    if (isStartUp ) {
        isStartUp = false;
        createGrid(gridSize);
    }   
}


const clearGrid = () => {
    Array.from(gridElems).forEach(gridElem => {
        gridElem.style.backgroundColor = 'white';
    })
}

startUpScript(gridSize);

grid.addEventListener('input', ()=>{
    emptyGrid();
    createGrid(grid.value);
})

resetButton.addEventListener('click', clearGrid);


