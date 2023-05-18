const sketchBoard = document.getElementById('container');
const grid = document.getElementById('grid');
const color = document.getElementById('color');
const resetButton = document.getElementById('clear');
const colorSlider = document.getElementById('color-slider');
const colorCanvas = document.getElementById('color-canvas');
const sliderCtx = colorSlider.getContext('2d');
const canvasCtx = colorCanvas.getContext('2d');

var gridElems = document.getElementsByClassName('square');
var isStartUp = true;
var isPainting = false;

let gridSize = grid.value;

const sliderGradient = sliderCtx.createLinearGradient(0, 0, 520, 25);
sliderGradient.addColorStop(0, "#FF0000");
sliderGradient.addColorStop(0.1, "#FF8000");
sliderGradient.addColorStop(0.15, "#FFFF00");
sliderGradient.addColorStop(0.25, "#00FF00");
sliderGradient.addColorStop(0.35, "#00FFFF");
sliderGradient.addColorStop(0.4, "#0080FF");
sliderGradient.addColorStop(0.45, "#0000FF");
sliderGradient.addColorStop(0.55, "#7F00FF");
sliderGradient.addColorStop(0.6, "#FF00FF");
sliderGradient.addColorStop(0.65, "#FF007F");

sliderCtx.fillStyle = sliderGradient;
sliderCtx.fillRect(0, 100, 520, 40);

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

const updateColor = () => {
    let color = window.getComputedStyle(colorSlider).getPropertyPriority
}

startUpScript(gridSize);

grid.addEventListener('input', ()=>{
    emptyGrid();
    createGrid(grid.value);
})

resetButton.addEventListener('click', clearGrid);


