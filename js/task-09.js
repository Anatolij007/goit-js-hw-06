// Завдання
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
// console.log("~ body", body);
// const div = document.querySelector(".widget");
// console.log("~ div", div);
const button = document.querySelector(".change-color");
// console.log("~ button", button);
const span = document.querySelector(".color");
// console.log("~ span", span);

button.addEventListener("click", onButton);

function onButton(event) {
  const randomHexColor = getRandomHexColor();

  body.style.backgroundColor = randomHexColor;

  span.textContent = randomHexColor;
}
