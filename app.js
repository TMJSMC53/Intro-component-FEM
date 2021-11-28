const form = document.getElementById("form");
const emailExample = document.querySelector(".email-example");
// const emailInput = document.querySelector(".email-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["first-name"].value;
  const lastName = form["last-name"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("first-name", "First Name cannot be empty");
  } else {
    removeErrorMsg("first-name");
  }
  if (lastName === "") {
    addErrorTo("last-name", "First Name cannot be empty");
  } else {
    removeErrorMsg("last-name");
  }
  if (email === "") {
    addErrorTo("email", "Looks like this is not an email");
    emailExample.innerText = "email@example/com";
    // emailInput.style.opacity = "0";
    emailExample.style.opacity = "1";
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeErrorMsg("email");
    // emailExample.innerText = "";
    // emailExample.style.opacity = "0";
  }
  if (password === "") {
    addErrorTo("password", "Password cannot be empty");
  } else {
    removeErrorMsg("password");
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const errorMsg = formControl.querySelector(".error-msg");
  errorMsg.innerText = message;
  // const errorMsg = form[field].parentNode.querySelector(".error-msg");
  // errorMsg.innerText = message;
  // errorMsg.style.opacity = "1";
  // const errorIcon = form[field].parentNode.querySelector(".error-icon");
  // errorIcon.style.opacity = "1";
}

function removeErrorMsg(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  // const errorMsg = form[field].parentNode.querySelector(".error-msg");
  // errorMsg.style.opacity = "0";
  // emailInput.classList.toggle("success-icon");
  // const errorIcon = form[field].parentNode.querySelector(".error-icon");
  // errorIcon.style.opacity = "0";
}

function isValid(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

/*
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id("first-name"),
  lastName = id("last-name"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error-msg"),
  errorIcon = classes("error-icon"),
  successIcon = classes("success-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(firstName, 0, "First Name cannot be empty");
  engine(lastName, 1, "Last Name cannot be empty");
  engine(email, 2, "Looks like this is not an email"),
    engine(password, 3, "Password cannot be empty");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    errorIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    errorIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

// function isValid(email) {
//   var re =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   return re.text(String(email).toLowerCase());
// }
*/
