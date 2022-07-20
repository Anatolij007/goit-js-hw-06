const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");
// console.log(ulEl);

const elements = ingredients.map((option) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = `${option}`;
  // console.log(itemEl);

  ulEl.append(itemEl);
  // console.log(ulEl);
});

// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];

//   const ulEl = document.querySelector("#ingredients");
//   // console.log(ulEl);

//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   itemEl.textContent = `${option}`;
//   // console.log(itemEl);

//   ulEl.append(itemEl);
// }
