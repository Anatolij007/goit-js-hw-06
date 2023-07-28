const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const itemEl = document.querySelector("#ingredients");
// console.log("itemEl:", itemEl);

// const elements = [];

// ingredients.forEach(function (ingredient) {
//   const item = document.createElement("li");
//   console.log("item:", item);
//   item.textContent = `${ingredient}`;
//   item.classList.add("item");
//   elements.push(item);
// });
// itemEl.append(...elements);

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];

//   const item = document.createElement("li");
//   item.classList.add("item");
//   item.textContent = `${ingredient}`;
//   // console.log(item);

//   elements.push(item);
// }
// // console.log(elements);

// itemEl.append(...elements);

const ulEl = document.querySelector("#ingredients");
// console.log(ulEl);
const array = [];
const elements = ingredients.map((option) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = `${option}`;
  array.push(itemEl);

  // console.log(ulEl);
});
ulEl.append(...array);
