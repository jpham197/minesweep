const blocks = document.querySelectorAll('.block');
const message = document.getElementById('heade');
const loseMsg = ['Good game', 'Try again', 'Oops! That\'s GG.', 'E for Effort'];
const tiles = [];
var mines = 0;
var count = 0;

blocks.forEach(element => {
    let flag = Math.floor(Math.random() * 100) < 15 ? true: false;
    if (flag) {
        element.style.backgroundColor = 'red';
        mines++;
    }
    tiles.push({element, flag});
    element.addEventListener('click', () => {
        if (flag) {
            message.innerHTML = loseMsg[Math.floor(Math.random() * 3)];
            element.style.backgroundColor = 'red';
        } else {
            count++;
            if (count == (100 - mines)) {
                message.innerHTML = "Yeet";
            }
            element.style.backgroundColor = 'blue';
        }
    });
});

console.log(mines);