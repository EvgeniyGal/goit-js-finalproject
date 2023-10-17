let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const currentValueView = document.querySelector('#value');

const incrementCounter = () => {
  counterValue++;
  currentValueView.textContent = counterValue;
};

const decrementCounter = () => {
  counterValue--;
  currentValueView.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);
