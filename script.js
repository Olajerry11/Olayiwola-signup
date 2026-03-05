function togglePassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function validateSignupForm() {
  let isValid = true;

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  usernameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";

  if (username.value.trim() === "") {
    usernameError.innerText = "Username is required";
    isValid = false;
  }

  if (email.value.trim() === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  } else if (!email.value.includes("@")) {
    emailError.innerText = "Enter a valid email";
    isValid = false;
  }

  if (password.value.length < 6) {
    passwordError.innerText = "Password must be at least 6 characters";
    isValid = false;
  }

  return isValid;
}

function handleSignup(event) {
  event.preventDefault(); // Stop normal form action
  if (validateSignupForm()) {
    const username = document.getElementById("username").value;
    localStorage.setItem("olayiUser", username); // Store the name
    window.location.href = "dashboard.html"; // Redirect
  }
}