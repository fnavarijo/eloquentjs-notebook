
function generateChessboard(size) {
    let chessboard = '';
    for(let i = 0; i < size; i++){
        let row = '';
        for(let j = i; j < size + i; j++){
            row += `${j % 2 == 0 ? ' ' : '#'}`
        }
        chessboard += row + '\n';
    }
    return chessboard;
}

console.log(generateChessboard(15));