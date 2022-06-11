// write a file that clicks the login button to store user information in an object called
// userInfo in local storage or cookie.
// note:<button onclick="myfunction()"></button>
// note: get information with id inputs

// for example
// user information included

// then design a custom page that uses flexbox and takes the information localStorage
// or cookie and display the username and password on the screen after 5 seconds.

// for example

// "welcome parisa" and your password is ******


let infoUser = { userName: "parisa", passWord: 123456 };

function setUserInfo() {
  let userInfo = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  document.getElementById("login").innerHtml = alert(
    `Welcome ${userInfo.username}, your password is ${userInfo.password}`
  );
}



// function setUserInfo() {
//   localStorage.setItem("infoUser", JSON.stringify(infoUser));
//   console.log("set successfully")
// }

// function getUserInfo() {
//   let information = localStorage.getItem("infoUser");
//   console.log("information: ", JSON.parse(information));
// }

// function setUserInfo() {
//   document.cookie = "username = parisa";
//   document.cookie = "password = 123456";
//   // alert("set successfully");
// }

// function getUserInfo() {
//   var result = document.getElementById("Result");
//   result.innerHTML = document.cookie;
// }


