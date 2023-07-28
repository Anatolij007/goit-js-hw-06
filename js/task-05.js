// Завдання
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// // Пошук елементів
// const inputName = document.querySelector("#name-input");
// const outputName = document.querySelector("#name-output");

// // Додаємо слухача
// inputName.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   outputName.innerHTML = event.currentTarget.value
//     ? event.currentTarget.value
//     : "Anonymous";
// }

// ======================================================

const refs = {
  input: document.querySelector("#name-input"),
  textChange: document.querySelector("#name-output"),
};

function handleChangeText(event) {
  refs.textChange.textContent = event.currentTarget.value;

  if (refs.textChange.textContent === "") {
    refs.textChange.textContent = "Anonymous";
  }
}

refs.input.addEventListener("input", handleChangeText);
