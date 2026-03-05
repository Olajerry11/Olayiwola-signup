// UPGRADE: Swaps the icon emoji so the user gets visual feedback
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.querySelector(".eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.innerText = "🙈"; // Change to hidden icon
  } else {
    passwordInput.type = "password";
    eyeIcon.innerText = "👁️"; // Change back to visible icon
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

  // Reset errors every time the submit button is clicked
  usernameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";

  // Username validation
  if (username.value.trim() === "") {
    usernameError.innerText = "Username is required";
    isValid = false;
  }

  // UPGRADE: Standard Regex pattern for strict email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email.value.trim())) {
    emailError.innerText = "Please enter a valid email address";
    isValid = false;
  }

  // Password validation
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
    const submitBtn = document.querySelector('button[type="submit"]');
    
    // Store the name for the dashboard
    localStorage.setItem("olayiUser", username); 
    
    // UPGRADE: Give the user visual feedback that it's working
    submitBtn.innerText = "Creating Account...";
    submitBtn.style.opacity = "0.8";

    // Small delay to simulate processing before redirecting
    setTimeout(() => {
      window.location.href = "dashboard.html"; 
    }, 800);
  }
}