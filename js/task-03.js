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

// const imagesGallery = document.querySelector(".gallery");
// // console.log(imagesGallery);

// const elements = images.map((option) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("item");
//   // console.log(itemEl);

//   const imgEl = document.createElement("img");
//   imgEl.src = `${option.url}`;
//   imgEl.alt = `${option.alt}`;
//   imgEl.width = 320;
//   // imgEl.style.backgroundColor =
//   // console.log(imgEl);

//   // images.push(option);

//   itemEl.append(imgEl);

//   return itemEl;
//   // imagesGallery.append(itemEl, imgEl);
// });
// // .join("");
// // console.log(imagesGallery);
// // console.log(elements);
// // imagesGallery.insertAdjacentHTML("beforeend", elements);
// imagesGallery.append(...elements);
// //
// ===========================================================

const imagesGallery = document.querySelector(".gallery");

const itemGallery = ({ url, alt }) =>
  `<li class = item3 ><img src = '${url} alt = '${alt}' width = '320' <li> `;
console.log(itemGallery);

const itemEl = images.reduce((item, items) => item + itemGallery(items), "");
console.log(itemEl);
imagesGallery.insertAdjacentHTML("beforeend", itemEl);
