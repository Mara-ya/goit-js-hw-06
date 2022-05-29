const subtractionBtn = document.querySelector('[data-action="decrement"]');
const additionBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

const value = document.querySelector('#value');


function onSubtractionBtnClick(event) {
    value.textContent = --counterValue;
    console.log(value);
};
subtractionBtn.addEventListener('click', onSubtractionBtnClick);

function onAdditionBtnClick(event) {
    value.textContent = ++counterValue;
    console.log(value);
};
additionBtn.addEventListener('click', onAdditionBtnClick);
