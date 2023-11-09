const addressData = JSON.parse(localStorage.getItem("address")) || [];
const addressDetails = document.querySelectorAll("#address > form > input");
const totalCost = localStorage.getItem("total-cost");
const paymentData = JSON.parse(localStorage.getItem("payments")) || [];
const paymentElement = document.querySelector("#payments > form > h3 > span");
paymentElement.innerText = totalCost;

function addUserData() {
  let individualAddress = {};
  let flag = true;
  for (let i = 0; i < addressDetails.length - 1; i++) {
    if (addressDetails[i].value != "")
      individualAddress[addressDetails[i].name] = addressDetails[i].value;
    else flag = false;
  }
  if (flag) {
    addressData.push(individualAddress);
    localStorage.setItem("address", JSON.stringify(addressData));
    alert("Shipping Address Added Successfully");
    document.querySelector("#address > form").innerHTML = null;
    document.querySelector("#address > p").innerHTML = null;
  }
  return individualAddress;
}

function isValidEntry(data) {
  if (Object.keys(data).length == 4) return true;
  return false;
}

addressDetails[addressDetails.length - 1].addEventListener("click", (event) => {
  const adminData = addUserData();
  const flag = isValidEntry(adminData);
  if (flag) document.getElementById("payments").style.display = "flex";
});

const paymentAmount = document.getElementById("total-amt");
const confirmButton = document.getElementById("confirm");
const paymentInputs = document.querySelectorAll("#payments > form input");

function addPaymentData(event) {
  let paymentDetails = {};
  let flag = true;
  for (let i = 0; i < paymentInputs.length - 1; i++) {
    if (paymentInputs[i].value != "")
      paymentDetails[paymentInputs[i].name] = paymentInputs[i].value;
    else flag = false;
  }

  if (paymentAmount.value != totalCost) {
    flag = false;
    event.preventDefault();
    alert("OOPS !! Check Amount...");
  } else if (paymentAmount.value == totalCost && flag) {
    event.preventDefault();
    paymentDetails.total = totalCost;
    document.getElementById("payments").innerHTML = null;
    document.getElementById("done").style.display = "flex";
    return paymentDetails;
  }
}

confirmButton.addEventListener("click", (event) => {
    let paymentDetails = addPaymentData(event);
    if(Object.keys(paymentDetails).length == 4 && paymentDetails.total == totalCost) {
        console.log(paymentDetails);
        paymentData.push(paymentDetails);
        localStorage.setItem('payments', JSON.stringify(paymentData));
    }
});

const loginUser = document.getElementById("login");
const activeUser = JSON.parse(localStorage.getItem("act-user")) || "Login";
loginUser.innerText = activeUser;

document.getElementById('done').addEventListener('click', () => {
  localStorage.removeItem('cart-data');
  localStorage.removeItem('total-cost');
});