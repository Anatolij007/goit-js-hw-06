// Пошук елементів
const removeDecrementBtn = document.querySelector("[data-action='decrement']");
const addIncrementBtn = document.querySelector("[data-action='increment']");
const updateValue = document.querySelector("#value");

let counterValue = 0;
// колбєк фунції

function handleDecrementButtonClick() {
  counterValue -= 1;
  updateValue.textContent = counterValue;
  console.log("-");
}

function handleIncrementButtonClick() {
  counterValue += 1;
  updateValue.textContent = counterValue;
  console.log("+");
}

// додаємо слухачів
removeDecrementBtn.addEventListener("click", handleDecrementButtonClick);
addIncrementBtn.addEventListener("click", handleIncrementButtonClick);

// -------------------------------------------------------------------

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const value = document.querySelector("#value");

// let counterValue = 0;

// function valueClickUpdate() {
//   value.textContent = counterValue;
// }

// function handleClickDecrement() {
//   counterValue -= 1;
//   // console.log("тицьнув на мінус");
//   valueClickUpdate();
// }

// function handleClickIncrement() {
//   // console.log("тицьнув на плюс");
//   counterValue += 1;
//   valueClickUpdate();
// }

// decrementBtn.addEventListener("click", handleClickDecrement);

// incrementBtn.addEventListener("click", handleClickIncrement);
