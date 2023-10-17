const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const checkInput = e => {
  const str = e.currentTarget.value;
  outputName.textContent = !!str ? str : 'Anonymous';
};

inputName.addEventListener('input', checkInput);
