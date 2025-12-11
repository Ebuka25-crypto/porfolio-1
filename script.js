const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  response.textContent = "Your message has been sent!";
});