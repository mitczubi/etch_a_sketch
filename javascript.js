const container = document.querySelector('#container');
const clrGridBtn = document.querySelector('#clear-grid');
const newGridBtn = document.querySelector('#new-grid');

function createGrid(x) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let gridSize = x;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    container.appendChild(row);

    for (let j = 0; j < gridSize; j++) {
      const col = document.createElement('div');
      col.classList.add('grid-col');
      row.appendChild(col);
    }
  }
};

function colorGrid(e) {
  if (e.target.classList[0] === 'grid-col') {
    e.target.style.backgroundColor = 'rgba(238, 137, 17)';    
  }
};

function clearGrid() {
  const boxes = document.querySelectorAll('.grid-col');

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = 'none';
  }
}

function newGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  clearGrid()
  let newSize = 0;
  while (newSize < 1 || newSize > 64 || !Number.isInteger(newSize)) {
    newSize = parseInt(prompt('Enter a new grid size from 1-64', 16));
  }
  createGrid(newSize);
}

createGrid(16);
container.addEventListener('mouseover', colorGrid);
clrGridBtn.addEventListener('click', newGrid);
newGridBtn.addEventListener('click', newGrid);
