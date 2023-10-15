const gameBoard = {
    board: [
        [X, X, X],
        [X, X, X],
        [X, X, X],
    ],
    resetBoard: function () {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]
    },
    isBoardFull: function () {
        for (let row of this.board) {
            if (row.includes(null)) {
                // Board is not full
                return false;
            }
        }
        // Board is full
        return true;
    },
}

function createPlayer(marker) {
    return {
        marker: marker,
    }
}

const gameController = {
    player1: createPlayer('X'),
    player2: createPlayer('O'),
    currentPlayer: player1,
    nextPlayer: null,
    updateDisplay: null,
    makeMove: null,
    checkWinner: null,
    makeMoveAndCheckWinner: null,
}
