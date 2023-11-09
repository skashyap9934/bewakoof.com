let wishlistData = JSON.parse(localStorage.getItem("wish-list")) || [];
const wishListContainer = document.getElementById("wishlist-container");

displayData(wishlistData);
function displayData(data) {
  wishListContainer.innerHTML = null;
  if (data.length == 0) {
    const gifImg = document.createElement("img");
    gifImg.setAttribute(
      "src",
      "https://th.bing.com/th/id/R.e7313cf4e2648d7170a034bdfe99894e?rik=UZdMMOMf0LiX7w&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2018%2f05%2fshopping-cart-gif-8.gif&ehk=f8rJXwuzG%2b5J%2f7wE2g1CdYsoNvR%2fOBb6fk25bZ0ELqU%3d&risl=&pid=ImgRaw&r=0"
    );
    gifImg.style.width = "50%";
    wishListContainer.style.display = "flex";
    wishListContainer.style.justifyContent = "center";
    wishListContainer.style.margin = 0;
    wishListContainer.append(gifImg);
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
        wishlistData = wishlistData.filter((product) => data[i] != product);
        displayData(wishlistData);
        localStorage.setItem("wish-list", JSON.stringify(wishlistData));
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
      wishListContainer.append(productContainer);
    }
  }
}

const loginUser = document.getElementById("login");
const activeUser = JSON.parse(localStorage.getItem("act-user")) || "Login";
loginUser.innerText = activeUser;