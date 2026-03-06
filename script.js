// Toggle Password Visibility
function togglePassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

// Dashboard Tab Switching
function switchTab(event, tabId) {
  // Remove active class from all cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.remove('active'));
  
  // Hide all tab content
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active-tab'));
  
  // Add active class to clicked card and show targeted tab
  event.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active-tab');
}