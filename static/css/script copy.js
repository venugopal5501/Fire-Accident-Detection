document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("errorMessage");
  
  if (username === "" || password === "") {
    errorMessage.textContent = "Please enter both username and password.";
  } else if (username !== "admin" || password !== "password") {
    errorMessage.textContent = "Invalid username or password.";
  } else {
    // Redirect to home.html
    window.location.href = "home.html";
  }
});

// Path: home.html
// Event listener for the "Accident Detection" button to navigate to the home page
document.getElementById('accident-detection-button').addEventListener('click', function() {
  window.location.href = 'home.html';
});

// Additional event listeners or functions can be added below this line