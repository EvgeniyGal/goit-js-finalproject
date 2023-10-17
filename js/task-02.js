const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

function createMarkupIngredients(arr) {
  return arr.map(el => {
    const li = document.createElement('li');
    li.textContent = el;
    li.classList.add('item');
    return li;
  });
}

ingredientList.append(...createMarkupIngredients(ingredients));
