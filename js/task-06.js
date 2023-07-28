// Завдання
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("input");
const inputLength = input.dataset.length;

console.log("~ inputLength", inputLength);

input.addEventListener("blur", onBlur);

function onBlur(event) {
  if (event.target.value.length === Number(inputLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
// ======================================================
// const input = document.querySelector("input");
// const textLength = input.dataset.length;

// function handleChangeColor(event) {
//   // console.log(event.currentTarget.value.length);
//   if (event.currentTarget.value.length === Number(textLength)) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//     // console.log("все гуд");
//   } else {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//     // event.target.style.borderColor = "red";

//     // console.log("відстій");
//   }
// }

// input.addEventListener("blur", handleChangeColor);
