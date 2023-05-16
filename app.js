const sketchBoard = document.getElementById('container');
const grid = document.getElementById('grid');
let gridSize = grid.value;



const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        var row = document.createElement('div');
        let rowSize = 100/ gridSize;
        row.setAttribute('style', `width: 100%; height: ${rowSize}%`)
        row.className = 'row';
        for (let j = 0; j < gridSize; j++) {
            var square = document.createElement('div');
            square.className = 'square';
            let squareSize = 100 / gridSize;
            square.setAttribute('style', `width:${squareSize}%; height:100%`);
            row.appendChild(square);
        }
        sketchBoard.appendChild(row);
    };
}

const emptyGrid = () => {
    const row = document.getElementsByClassName('row');
    while (row.length > 0) {
        row[0].parentNode.removeChild(row[0]);
    }
}

createGrid(gridSize);

grid.addEventListener('input', ()=>{
    emptyGrid();
    createGrid(grid.value);
})
