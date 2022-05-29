function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');
let needfulDivs = [];

function getAmount() {
  const amount = input.value;
  needfulDivs = [];
  box.innerHTML = '';
  createBoxes(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divCube = document.createElement('div');
    const width = 30 + i * 10;
    const height = 30 + i * 10;
    divCube.style.width = `${width}px`;
    divCube.style.height = `${height}px`;
    divCube.style.background = getRandomHexColor();
    needfulDivs.push(divCube);
  }
  box.append(...needfulDivs)
}

createBtn.addEventListener('click', getAmount);

destroyBtn.addEventListener('click', (event) => {
  box.innerHTML = '';
})
