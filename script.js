/* Our function for generating a new grid */

function generateNewGrid(gridSize) {
    const gridElement = document.querySelector('.grid-box');
    for (let i = 0; i < gridSize ** 2; i++) {
        let newItem = document.createElement('div');
        newItem.classList.add('grid-item');
        gridElement.appendChild(newItem);
    }

    /* Add desired height and width */
    let itemSize = 100 / gridSize + "%";
    let itemList = [...document.querySelectorAll('.grid-item')];
    itemList.forEach(function (item) {
    item.style.height = itemSize;
    item.style.flex = '0 0 ' + itemSize;
    });
}

/* Generate the correct number of boxes on load */
generateNewGrid(16);

/* Receive form data, clear the existing grid and generate a new one */
function formSubmission() {
    let inputRequest = Number(document.getElementById('grid-size').value);
    if (Number.isInteger(inputRequest) === false || inputRequest > 100) {
        return
    }
    let currentGrid = document.getElementsByClassName('grid-item');
    for (let i=currentGrid.length-1; i>=0; i--) {
        currentGrid[i].remove();
    }
    generateNewGrid(inputRequest);
}