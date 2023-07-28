// Завдання
// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const form = document.querySelector(".login-form");
// const button = document.querySelector("button");

// form.addEventListener("submit", onFormSumbit);

// function onFormSumbit(event) {
//   event.preventDefault();

//   const dataUser = [
//     {
//       email: event.currentTarget.elements.email.value,
//       password: event.currentTarget.elements.password.value,
//     },
//   ];
//   if (
//     event.currentTarget.elements.email.value === "" ||
//     event.currentTarget.elements.password.value === ""
//   ) {
//     alert("Всі поля повинні бути заповнені");
//   } else {
//     console.log(...dataUser);

//     form.reset();
//   }
// }
// ===========================================
const form = document.querySelector(".login-form");
// console.log("form:", form);

form.addEventListener("submit", handleSendForm);

function handleSendForm(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (mail === "" || password === "") {
    alert("Всі поля повинні бути заповнені.");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);

    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //   console.log("name", name);
    //   console.log("value", value);
    // });
  }

  form.reset();
}
