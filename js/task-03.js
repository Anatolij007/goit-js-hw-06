const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesGallery = document.querySelector(".gallery");

const itemGallery = images
  .map(
    ({ url, alt }) =>
      `<li class = item3 ><img src = '${url}' alt = '${alt}' width = '320' <li> `
  )
  .join("");
// console.log(itemGallery);
imagesGallery.insertAdjacentHTML("beforeend", itemGallery);

// const itemEl = document.querySelectorAll("li");
// console.log("~ itemEl", itemEl);

// itemEl.style.cssText = `
// display: flex;
// justify-content: center;
// background-image: repeating-linear-gradient(
//     -90deg,
//     #606dbc,
//     #606dbc 10px,
//     #465298 10px,
//     #465298 20px
//   );
// `;

//
// ===========================================================

// const imagesGallery = document.querySelector(".gallery");

// const itemGallery = ({ url, alt }) =>
//   `<li class = item3 ><img src = '${url} alt = '${alt}' width = '320' <li> `;

// const itemEl = images.reduce((item, items) => item + itemGallery(items), "");
// // console.log(itemEl);
// imagesGallery.insertAdjacentHTML("beforeend", itemEl);
