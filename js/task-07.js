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
  console.log("event.target.value:", event.target.value);
  span.style.fontSize = `${inputSize}px`;
}
// ==============================================
// const input = document.querySelector("input");
// // console.log("input:", input);
// const text = document.querySelector("span");
// // console.log("text:", text);

// function handleChangeTextSize() {
//   text.style.fontSize = input.value + "px";
//   // console.log(input.value);
// }

// input.addEventListener("input", handleChangeTextSize);
