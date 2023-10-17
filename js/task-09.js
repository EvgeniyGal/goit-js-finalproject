function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const changeColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
};

changeColorBtn.addEventListener('click', changeColor);
