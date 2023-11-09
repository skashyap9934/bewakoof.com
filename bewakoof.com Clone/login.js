const registeredUsers = JSON.parse(localStorage.getItem("reg-users")) || [];
const mobileNumber = document.getElementById("mobile");
const userName = document.getElementById("name");
const takeAction = document.getElementById("take-action");
let alertMsg = "";
const alertCustomBox = document.querySelector(".alertPop");
const customMsg = document.querySelector(".alertPop > h2");
const redirectLink = document.getElementById("redirect-link");

takeAction.addEventListener("click", (event) => {
  event.preventDefault();
  let activeUser = userName.value;
  let flag = false;
  if (mobileNumber.value.length != 10 || userName.value == "") {
    customMsg.innerText = "Invalid Data.";
    redirectLink.addEventListener("click", () => {
      redirectLink.setAttribute("href", "./login.html");
    });
  } else {
    if (registeredUsers.length == 0)
      customMsg.innerText = "User Registered Successfully. Go To Shopping Page.";
    else {
      for (let i = 0; i < registeredUsers.length; i++) {
        if (
          mobileNumber.value == registeredUsers[i].mobile &&
          userName.value == registeredUsers[i].fullName
        ) {
          customMsg.innerText = "Signed In Successfully. Go To Shopping Page.";
          flag = true;
          break;
        } else customMsg.innerText = "Signed In Successfully. Go To Shopping Page.";
      }
    }
    const userData = {
      fullName: userName.value,
      mobile: mobileNumber.value,
    };
    if (!flag) {
      registeredUsers.push(userData);
      localStorage.setItem("reg-users", JSON.stringify(registeredUsers));
    }
    localStorage.setItem("act-user", JSON.stringify(activeUser));
    redirectLink.addEventListener("click", () => {
      redirectLink.setAttribute("href", "./shopping.html");
    });
  }
  alertCustomBox.style.display = "flex";
});