const sketchBoard = document.getElementById('container');
const grid = document.getElementById('grid');
const color = document.getElementById('color');
const resetButton = document.getElementById('clear');

var gridElems = document.getElementsByClassName('square');
var isStartUp = true;
var isPainting = false;
// var currentColor = window.getComputedStyle(color).getPropertyValue('background-color');

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

const rgbToHex = (rgb) => {
    let hex = [];
    let hexColor = "";
    for (let element of rgb) {
        hex.push(parseInt(element).toString(16));
    }
    hexColor = `#${hex[0]}${hex[1]}${hex[2]}`;
    return hexColor;
}

const hexToRGB = (hex, a) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    console.log(r);
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const togglePen = (grid) => {
    isPainting = !isPainting;
    paintGrid(grid);
    
}

const getColor = () => {
    let paint = window.getComputedStyle(color).getPropertyValue('background-color');
    return paint;
}

const paintGrid = (grid) => {
    let paint = getColor();
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
        let paint = getColor();
        let rgb = paint.match(/\d+/gm);
        let hex = rgbToHex(rgb);
        color.value = hex;
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
color.addEventListener('input', ()=> {
    color.setAttribute('style', `background-color: ${color.value}`);
})



