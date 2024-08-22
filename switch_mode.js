const toggleButton = document.getElementById("theme-toggle");
const body = document.body;
const toggleIcon = document.getElementById("toggle-icon");
toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    toggleIcon.src = "Images/day.png";
  } else {
    body.classList.toggle("light-mode");
    toggleIcon.src = "Images/night.png";
  }
});
