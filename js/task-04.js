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
