// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll to portfolio section
function scrollToPortfolio() {
  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
}