const messageEmail = document.querySelector(".message__email");
const error = document.querySelector(".error");
const inputContainer = document.querySelector(".input");
const input = document.querySelector("input");
const button = document.querySelector("button");
const regExp = /[a-z0-9]+@[a-z]+\.[a-z]+/;

document.querySelector("button").addEventListener("click", () => {
  if (!regExp.test(document.querySelector("input").value)) {
    messageEmail.textContent = "Please provide a valid email";
    messageEmail.classList.add("message__error");
    error.classList.add("show__error");
    inputContainer.classList.add("border__error");
    return;
  }

  button.disabled = true;
  input.readOnly = true;
  input.value = "Email send!";
  inputContainer.classList.remove("border__error");
  error.classList.remove("show__error");
  messageEmail.classList.remove("message__error");
});
