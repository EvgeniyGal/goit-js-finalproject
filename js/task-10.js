function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('#controls > input');

const createBoxes = () => {
  const amount = inputNumber.value;
  let strDivs = [];
  let width = 30;
  let height = 30;

  destroyBoxes();

  for (let i = 1; i <= amount; i++) {
    strDivs += `<div style = "background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>`;
    width += 10;
    height += 10;
  }

  divBoxes.insertAdjacentHTML('afterbegin', strDivs);
  inputNumber.textContent = '';
};

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
  inputNumber.value = '';
};

destroyBtn.addEventListener('click', destroyBoxes);

createBtn.addEventListener('click', createBoxes);
