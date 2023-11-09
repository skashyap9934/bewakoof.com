const shoppingData = document.getElementById("grid");
const myAPI = "https://654a4b7ae182221f8d52e9af.mockapi.io/bewakoof";
const selectedCategory = document.getElementById("category");
const priceRange = document.getElementById("price");
let cartDataArray = JSON.parse(localStorage.getItem('cart-data')) || [];
let wishListDataArray = JSON.parse(localStorage.getItem('wish-list')) || [];
let pageNumber = 1;

async function fetchData(API) {
  const streamData = await fetch(API);
  const data = await streamData.json();
  const pageData = data.filter(
    (product, index) =>
      index >= (pageNumber - 1) * 10 && index < pageNumber * 10
  );
  displayData(pageData);
  selectedCategory.addEventListener("change", () => {
    if (selectedCategory.value != "") {
      const newData = pageData.filter(
        (product) => selectedCategory.value === product.category
      );
      displayData(newData);
    } else displayData(pageData);
  });

  priceRange.addEventListener("change", () => {
    if (priceRange.value != "") {
      const newData = pageData.filter(
        (product) => +(priceRange.value) >= product.price
      );
      displayData(newData);
    } else displayData(pageData);
  });
}

function displayData(data) {
  shoppingData.innerHTML = null;
  for (let i = 0; i < data.length; i++) {
    const productContainer = document.createElement("div");
    const productImage = document.createElement("img");
    productImage.setAttribute("src", data[i].image);
    const productName = document.createElement("p");
    productName.innerText = data[i].name;
    const productCategory = document.createElement("p");
    productCategory.innerText = "Category : " + data[i].category;
    productCategory.style.fontSize = "14px";
    const productDesc = document.createElement("p");
    productDesc.innerText = data[i].description;
    productDesc.style.fontSize = "12px";
    const productPrice = document.createElement("h3");
    productPrice.innerText = "₹ " + data[i].price;
    const adder = document.createElement("div");
    const addToCart = document.createElement("button");
    addToCart.innerText = "Add To Cart";
    addToCart.addEventListener('click', () => {
      alert('Item Added To The Cart. Keep Shopping.');
      cartDataArray.push(data[i]);
      localStorage.setItem('cart-data', JSON.stringify(cartDataArray));
    });

    const addToWishList = document.createElement("button");
    addToWishList.innerText = "Add To WishList";
    addToWishList.addEventListener('click', () => {
      alert('Item Added To Wishlist. Keep Shopping.');
      wishListDataArray.push(data[i]);
      localStorage.setItem('wish-list', JSON.stringify(wishListDataArray));
    });

    adder.append(addToCart, addToWishList);
    productContainer.append(
      productImage,
      productName,
      productCategory,
      productDesc,
      productPrice,
      adder
    );
    shoppingData.append(productContainer);
  }
}

const buttonsCollection = document.querySelectorAll(".pages > button");
buttonsCollection.forEach((button) => {
  button.addEventListener("click", () => {
    pageNumber = +button.innerText;
    fetchData(myAPI);
  });
});

const loginUser = document.getElementById('login');
const activeUser = JSON.parse(localStorage.getItem('act-user')) || 'Login';
loginUser.innerText = activeUser;
if(activeUser != 'Login') {
  document.getElementById('login-first').innerHTML = null;
  document.querySelector('.filter-button').style.display = 'block';
  fetchData(myAPI);
  document.querySelector('.pages').style.display = 'flex';
} 