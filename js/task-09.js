function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const snapColor = document.querySelector('.color');
const changeBtnColor = document.querySelector('.change-color');

changeBtnColor.addEventListener('click', (event) => {
  snapColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = `${getRandomHexColor()}`
})