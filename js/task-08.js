// Завдання
// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");
// console.log("~ form", form);

const button = document.querySelector("button");
// console.log("~ button", button);

form.addEventListener("submit", onFormSumbit);

function onFormSumbit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Всі поля повинні бути заповнені");
  } else {
    const formData = new FormData(event.currentTarget);

    const formValue = [];
    formData.forEach((value, name) => {
      //   console.log("name", name);
      //   console.log("value", value);
      formValue.push({ value, name });

      console.log(...formValue);
    });

    // console.dir(event.currentTarget.elements.email.value);
    // console.dir(event.currentTarget.elements.password.value);
  }
  form.reset();
}
