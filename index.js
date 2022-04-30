const RegExEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const sendButton = document.querySelector(".send-button");
const inputEl = document.querySelector("#email-field");
const iconError = document.querySelector(".error-warning");
const textError = document.getElementById("textError-warning");
let email = "selam@gmail.com";

sendButton.addEventListener("click", function () {
  console.log("clicked");
  if (RegExEmail.test(inputEl.value)) {
    console.log("Your email is valid.");
    iconError.style.display = "none";
    textError.innerText = "";
  } else {
    iconError.style.display = "block";
    textError.innerText = "Please provide a valid email.";
    inputEl.style.border = "2px solid var(--soft_red)";
  }
});
// sendButton.addEventListener("click");
