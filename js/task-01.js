const categories = document.querySelector('#categories').children;

console.log('Number of categories: ' + categories.length);

[...categories].forEach(el => {
  console.log('Category: ' + el.querySelector('h2').textContent);
  console.log('Elements: ' + el.querySelector('ul').children.length);
});
