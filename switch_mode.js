const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    toggleButton.innerText = "Light";
  } else {
    body.classList.toggle("light-mode");
    toggleButton.innerText = "Dark";
  }
});
