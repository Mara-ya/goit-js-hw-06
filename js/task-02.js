const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientEl = ingredients.map(ingredient => {
  const itemIngridient = document.createElement('li');
  itemIngridient.classList.add('item')
  itemIngridient.textContent = ingredient;

  return itemIngridient;
}) 

const listIngridients = document.querySelector('ul#ingredients');
listIngridients.append(...ingredientEl);