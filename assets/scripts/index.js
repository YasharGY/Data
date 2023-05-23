let activeFilters = [];

const productContainer = document
  .querySelector(".container")
  .querySelector(".right");

const categories = document
  .querySelector(".filter")
  .querySelectorAll(".category");

categories.forEach((x) => {
  x.addEventListener("click", (e) => {
    const id = e.target.id;
    if (e.target.checked) {
      activeFilters.push(id);
    } else {
      activeFilters = activeFilters.filter((x) => x != id);
    }
    renderProducts();
  });
});

function renderProducts() {
  productContainer.innerHTML = ``;

  let _tempProducts = [...products]

  if(activeFilters.length > 0){
    _tempProducts = _tempProducts.filter(x=>activeFilters.some(y=>y == x.category))
  }

  _tempProducts.forEach((x) => {
    const productDiv = generateProduct(x);
    productContainer.append(productDiv);
  });
}

function generateProduct(product) {
  const card = document.createElement("div");

  card.innerHTML = `<div class="card">
    <span>Title: <span class="title">${product.name}</span></span>
    <img src="./assets/images/${product.image}" />
    <span>Price: <span class="price">${product.price}</span></span>
    <span>Area: <span class="area">${product.area}</span></span>
    <span>Rooms: <span class="rooms">${product.rooms}</span></span>
  </div>`;

  return card;
}



const priceInput = document.getElementById("price");
const priceLabel = document.getElementById("priceLabel");
priceInput.addEventListener("input", renderProducts);
const areaInput = document.getElementById("area");
const areaLabel = document.getElementById("areaLabel");
areaInput.addEventListener("input", renderProducts);


const roomsCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="rooms-"]');
roomsCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", renderProducts);
});

renderProducts()




// const activeFilters = [];

// const productContainer = document.querySelector(".container .right");
// const priceInput = document.getElementById("price");
// const priceLabel = document.getElementById("priceLabel");
// const areaInput = document.getElementById("area");
// const areaLabel = document.getElementById("areaLabel");

// // Event listener for price range input
// priceInput.addEventListener("input", renderProducts);

// // Event listener for area range input
// areaInput.addEventListener("input", renderProducts);

// // Event listener for room checkboxes
// const roomsCheckboxes = document.querySelectorAll('input[type="checkbox"][id^="rooms-"]');
// roomsCheckboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     const value = checkbox.value;
//     if (checkbox.checked) {
//       activeFilters.push(value);
//     } else {
//       const index = activeFilters.indexOf(value);
//       if (index !== -1) {
//         activeFilters.splice(index, 1);
//       }
//     }
//     renderProducts();
//   });
// });

// function renderProducts() {
//   const priceValue = parseInt(priceInput.value);
//   const areaValue = parseInt(areaInput.value);

//   const filteredProducts = products.filter((product) => {
//     return (
//       (activeFilters.length === 0 || activeFilters.includes(String(product.rooms))) &&
//       product.price <= priceValue &&
//       product.area <= areaValue
//     );
//   });

//   productContainer.innerHTML = "";

//   filteredProducts.forEach((product) => {
//     const productDiv = generateProduct(product);
//     productContainer.appendChild(productDiv);
//   });
// }

// function generateProduct(product) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   card.innerHTML = `
//     <span>Title: <span class="title">${product.name}</span></span>
//     <img src="./assets/images/${product.image}" />
//     <span>Price: <span class="price">${product.price}</span></span>
//     <span>Area: <span class="area">${product.area}</span></span>
//     <span>Rooms: <span class="rooms">${product.rooms}</span></span>
//   `;

//   return card;
// }

// renderProducts();
