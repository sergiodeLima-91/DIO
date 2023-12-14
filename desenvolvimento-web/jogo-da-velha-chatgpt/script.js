var currentPlayer = "X";
var cells = document.querySelectorAll(".cell");

cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

function cellClicked() {
    if (this.textContent === "") {
        this.textContent = currentPlayer;

        if (checkWin()) {
            alert("O jogador " + currentPlayer + " venceu!");
            resetBoard();
        } else if (checkDraw()) {
            alert("Empate!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    var winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var combo = winningCombinations[i];
        if (cells[combo[0] - 1].textContent === currentPlayer &&
            cells[combo[1] - 1].textContent === currentPlayer &&
            cells[combo[2] - 1].textContent === currentPlayer) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            return false;
        }
    }

    return true;
}

function resetBoard() {
    cells.forEach(function (cell) {
        cell.textContent = "";
    });
}
