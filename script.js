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

/* Receive form data */
function formSubmission() {
    let inputRequest = document.getElementById('grid-size').value;
    generateNewGrid(inputRequest);
}

/* Why is this immediately disappearing? Also need to add clear function */