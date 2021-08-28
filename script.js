const mainContainer = document.getElementById('container');
const buttonReset = document.querySelector('button');

buttonReset.addEventListener('click', function (e) {
    while(mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    let numberOfDivs = prompt('Enter the number of squares (maximum of 100)');
    if (numberOfDivs <= 100 && numberOfDivs > 0) {
        mainContainer.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
        mainContainer.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;
        createDiv(numberOfDivs);
    } else {
        alert('NOT LESS THAT 0 AND NO MORE THAN 100!!!');
        createDiv(16);
    }
});

function createDiv(numberOfDivs) {
    for (let i = 0; i < Math.pow(numberOfDivs, 2); i++) {
        const div = document.createElement('div');
        mainContainer.appendChild(div);
    }
}
createDiv(16)

const divs = document.querySelectorAll('div');
divs.forEach( div => {
    div.addEventListener('mouseover', function(e) {
        e.target.classList.add('passed');
    })
});