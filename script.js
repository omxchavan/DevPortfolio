//darkmode
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  const isDarkMode = body.getAttribute("data-bs-theme") === "dark";
  body.setAttribute("data-bs-theme", isDarkMode ? "light" : "dark");

  // Update button text
  toggleButton.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
});

//msic add on
var aud = new Audio("./music/rap.mp3");
$(".music").on("click", function (e) {
  if (aud.paused) {
    aud.play();
  } else {
    aud.pause();
    aud.currentTime = 0;
  }
});
