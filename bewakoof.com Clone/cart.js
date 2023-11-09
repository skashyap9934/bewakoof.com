let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
const cartContainer = document.getElementById("cart-container");
const totalCost = document.getElementById("total-cost");
const checkOutPara = document.getElementById("checkout-para");
const checkOutLink = document.getElementById("checkout-link");
let payableCost = localStorage.getItem("total-cost") || 0;

displayData(cartData);
function displayData(data) {
  cartContainer.innerHTML = null;
  if (data.length == 0) {
    totalCost.innerHTML = null;
    checkOutPara.style.display = "none";
    checkOutLink.style.display = "none";
    localStorage.setItem("total-cost", 0);
    const gifImg = document.createElement("img");
    gifImg.setAttribute(
      "src",
      "https://th.bing.com/th/id/R.e7313cf4e2648d7170a034bdfe99894e?rik=UZdMMOMf0LiX7w&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2018%2f05%2fshopping-cart-gif-8.gif&ehk=f8rJXwuzG%2b5J%2f7wE2g1CdYsoNvR%2fOBb6fk25bZ0ELqU%3d&risl=&pid=ImgRaw&r=0"
    );
    gifImg.style.width = "50%";
    cartContainer.style.display = "flex";
    cartContainer.style.justifyContent = "center";
    cartContainer.style.margin = 0;
    cartContainer.append(gifImg);
  } else {
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
      const buttonDiv = document.createElement("div");
      const removeButton = document.createElement("button");
      removeButton.innerText = "Remove Item";

      removeButton.addEventListener("click", () => {
        cartData = cartData.filter((product) => data[i] != product);
        displayData(cartData);
        calculateTotalCost(cartData);
        localStorage.setItem("cart-data", JSON.stringify(cartData));
      });

      buttonDiv.append(removeButton);
      productContainer.append(
        productImage,
        productName,
        productCategory,
        productDesc,
        productPrice,
        buttonDiv
      );
      cartContainer.append(productContainer);
    }
  }
}

calculateTotalCost(cartData);
function calculateTotalCost(cartData) {
  var cost = 0;
  cartData.forEach((product) => (cost += +product.price));
  if (cartData.length != 0) {
    totalCost.innerText = "Total Cart Price: " + cost;
    checkOutLink.addEventListener("click", () =>
      localStorage.setItem("total-cost", cost)
    );
  } else {
    checkOutPara.style.display = "none";
    checkOutLink.style.display = "none";
  }
}

const loginUser = document.getElementById("login");
const activeUser = JSON.parse(localStorage.getItem("act-user")) || "Login";
loginUser.innerText = activeUser;