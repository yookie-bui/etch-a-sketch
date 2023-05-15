const sketchBoard = document.getElementById('container');


for (let i = 0; i < 16; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 16; j++) {
        var square = document.createElement('div');
        square.className = 'square';
        row.appendChild(square);
    }
    sketchBoard.appendChild(row);
};
// sketchBoard.appendChild(row);

// for (let i = 0; i < 16; i++) {
//     sketchBoard.appendChild(row)
//     for (let j = 0; i < 16; j++) {
//         row.appendChild(squareDiv);
//     } 
// }