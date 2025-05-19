document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();           // Stop normal form submission temporarily
  alert("Thank you for reaching out to LADDER. We'll get back to you shortly!");
  this.submit();                // Now submit the form
});
