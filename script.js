var Number_of_moves = 0;
var time = 0;
var timer;

function updateMovesAndTime() {
    document.getElementById("moves").textContent = "Number of Moves thus far: " + Number_of_moves;
    document.getElementById("time").textContent = "Time spent in the current game: " + time + " seconds.";
}

function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function shuffle() {
    for (var row = 1; row <= 4; row++) {
        for (var column = 1; column <= 4; column++) {
            var row2 = Math.floor(Math.random() * 4 + 1);
            var column2 = Math.floor(Math.random() * 4 + 1);
            swapTiles("cell" + row + column, "cell" + row2 + column2);
        }
    }
    Number_of_moves = 0;
    clearInterval(timer);
    time = 0;
    updateMovesAndTime();
    startTimer();
}

function simpleGame() {

    document.getElementById("cell11").className = "tile1";
    document.getElementById("cell12").className = "tile2";
    document.getElementById("cell13").className = "tile3";
    document.getElementById("cell14").className = "tile4";
    document.getElementById("cell21").className = "tile5";
    document.getElementById("cell22").className = "tile6";
    document.getElementById("cell23").className = "tile7";
    document.getElementById("cell24").className = "tile8";
    document.getElementById("cell31").className = "tile9";
    document.getElementById("cell32").className = "tile10";
    document.getElementById("cell33").className = "tile11";
    document.getElementById("cell34").className = "tile12";
    document.getElementById("cell41").className = "tile13";
    document.getElementById("cell42").className = "tile14";
    document.getElementById("cell43").className = "tile16";
    document.getElementById("cell44").className = "tile15";

    Number_of_moves = 0;
    clearInterval(timer);
    time = 0;
    updateMovesAndTime();
    startTimer();
}

function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;

    if (tile !== "tile16") {
        if (column < 4 && document.getElementById("cell" + row + (column + 1)).className === "tile16") {
            swapTiles("cell" + row + column, "cell" + row + (column + 1));
            Number_of_moves++;
            updateMovesAndTime();
            checkWin();
            return;
        }

        if (column > 1 && document.getElementById("cell" + row + (column - 1)).className === "tile16") {
            swapTiles("cell" + row + column, "cell" + row + (column - 1));
            Number_of_moves++;
            updateMovesAndTime();
            checkWin();
            return;
        }

        if (row > 1 && document.getElementById("cell" + (row - 1) + column).className === "tile16") {
            swapTiles("cell" + row + column, "cell" + (row - 1) + column);
            Number_of_moves++;
            updateMovesAndTime();
            checkWin();
            return;
        }

        if (row < 4 && document.getElementById("cell" + (row + 1) + column).className === "tile16") {
            swapTiles("cell" + row + column, "cell" + (row + 1) + column);
            Number_of_moves++;
            updateMovesAndTime();
            checkWin();
        }
    }
}


function checkWin() {
    var correctOrder = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12", "tile13", "tile14", "tile15", "tile16"];
    
    for (var row = 1; row <= 4; row++) {
        for (var column = 1; column <= 4; column++) {
            var cell = document.getElementById("cell" + row + column);
            if (cell.className !== correctOrder.shift()) {
                return;
            }
        }
    }

    clearInterval(timer);

    setTimeout(function () {
        var playAgain = confirm("CONGRATULATIONS!\n\nYou've successfully reordered the puzzle numbers in sequential order!\n\nNumber of moves it took to complete: " + Number_of_moves + "\nTime spent to complete it: " + time + " seconds(s)." + "\n\nTo play again, click OK");        if (playAgain) {
            shuffle();
        }
    }, 1000);
}

function startTimer() {
    timer = setInterval(function () {
        time++;
        updateMovesAndTime();
    }, 1000);
}