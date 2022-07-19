const itemEl = document.querySelectorAll(".item");
const itemElLength = itemEl.length;
console.log("Number of categories:", `${itemElLength}`);

const titleEl = itemEl.forEach((element) => {
  console.log(`Category, ${element.firstElementChild.textContent}`);
  console.log(`Elements, ${element.lastElementChild.children.length}`);
});
