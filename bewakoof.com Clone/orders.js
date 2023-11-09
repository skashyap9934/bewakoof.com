const loginUser = document.getElementById("login");
const activeUser = JSON.parse(localStorage.getItem("act-user")) || "Login";
loginUser.innerText = activeUser;
if (activeUser == "Login") document.getElementById("logout").innerHTML = null;
