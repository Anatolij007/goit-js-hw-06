// Завдання
// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector("#font-size-control");
// console.log("~ fontSizeControl", fontSizeControl);

const span = document.querySelector("#text");
// console.log("~ span", span);

fontSizeControl.addEventListener("input", onScroll);

function onScroll(event) {
  const inputSize = event.target.value;
  span.style.fontSize = `${inputSize}px`;
}
