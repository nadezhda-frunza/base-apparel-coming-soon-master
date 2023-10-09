document.addEventListener("DOMContentLoaded", function () {
  const emailField = document.getElementById("email-field");
  const errorMessage = document.getElementById("error-message");
  const errorImage = document.getElementById("error-icon");
  const submitButton = document.getElementById("submit-button");
  const inputEmail = document.getElementById("input-email");

  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  submitButton.onclick = (e) => {
    e.preventDefault();

    if (inputEmail.value.match(validRegex)) {
      errorMessage.style.display = "none";
      errorImage.style.display = "none";

      alert(
        `Thank you! Your email address is received successfully. ${inputEmail.value}`
      );
      inputEmail.value = "";
    } else {
      errorMessage.style.display = "block";
      errorImage.style.display = "block";
    }
  };
});
