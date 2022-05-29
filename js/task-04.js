const subtractionBtn = document.querySelector('[data-action="decrement"]');
const additionBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

function onSubtractionBtnClick(event) {
    value.textContent = --counterValue;
};
subtractionBtn.addEventListener('click', onSubtractionBtnClick);

function onAdditionBtnClick(event) {
    value.textContent = ++counterValue;
};
additionBtn.addEventListener('click', onAdditionBtnClick);
