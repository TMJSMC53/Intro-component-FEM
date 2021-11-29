const form = document.getElementById("form");

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
    document.getElementsByName("email")[0].placeholder = "email@example/com";
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeErrorMsg("email");

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
}

function removeErrorMsg(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");

  const successIcon = form[field].parentNode.querySelector(".success-icon");
  formControl.classList.toggle("success");
  successIcon.style.opacity = "1";
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
