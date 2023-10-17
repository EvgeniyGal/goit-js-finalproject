const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const setFontSize = e => {
  text.style.fontSize = e.currentTarget.value + 'px';
};

input.addEventListener('input', setFontSize);
