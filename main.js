const blocks = document.querySelectorAll('.block');
const message = document.getElementById('heade');
const loseMsg = ['Good game', 'Try again', 'Oops! That\'s GG.', 'E for Effort'];
const tiles = [];
var mines = 0;
var count = 0;

blocks.forEach((element, i) => {
    let mine = Math.floor(Math.random() * 100) < 90 ? true: false;
    let clicked = false;
    if (mine) {
        element.style.backgroundColor = 'red';
        mines++;
    }
    tiles.push({element, mine, clicked});
    element.addEventListener('click', () => {
        if (mine) {
            message.innerHTML = loseMsg[Math.floor(Math.random() * 3)];
            element.style.backgroundColor = 'red';
        } else {
            tiles[i].clicked = true;
            element.style.backgroundColor = 'blue';
        }
        if (checkWin(tiles)) {
            message.innerHTML = "You Win!";
        }
    });
});

function checkWin(tiles) {
    let flag = true;
    tiles.forEach(element => {
        if (!element.mine) {
            if (!element.clicked) {
                flag = false;
            }
        }
    });
    return flag;
}

function test() {
    console.log(checkWin(tiles));
}

console.log(mines);