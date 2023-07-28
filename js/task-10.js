// Завдання
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
// ===================================
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// ===================================
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const refs = {
//   divControls: document.querySelector("#controls"),
//   input: document.querySelector("input"),
//   buttonCreate: document.querySelector("[data-create]"),
//   buttonDestroy: document.querySelector("[data-destroy]"),
//   divBoxes: document.querySelector("#boxes"),
// };

// refs.buttonCreate.addEventListener("click", createBoxes);
// refs.buttonDestroy.addEventListener("click", destroyBoxes);

// // const divSize = 30;
// let width = 30;
// let height = 30;
// function createBoxes() {
//   const newDivs = [];
//   const amount = refs.input.value;

//   for (let i = 0; i < amount; i += 1) {
//     // let growingSize = divSize + 10 * i;

//     width += 10;
//     height += 10;
//     let randomColor = getRandomHexColor();

//     const boxItem = `<div style="width:${width}px;
//     height:${height}px; background-color:${randomColor}" ></div>`;

//     newDivs.push(boxItem);
//   }

//   const allDivs = newDivs.join("");

//   refs.divBoxes.insertAdjacentHTML("beforeend", allDivs);
// }

// function destroyBoxes() {
//   refs.input.value = "";
//   refs.divBoxes.innerHTML = "";
//   width = 30;
//   height = 30;
// }
// ===============================================

const refs = {
  input: document.querySelector("input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  box: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  `<div></div>`;
  console.log("щось створили");
  refs.box.insertAdjacentHTML("beforebegin", createBoxes);
}

function destroyBoxes() {
  refs.input.value = "";
  refs.box.innerHTML = "";
  console.log("щось зруйнували");
}

refs.create.addEventListener("click", createBoxes(refs.input.value));

refs.destroy.addEventListener("click", destroyBoxes);
