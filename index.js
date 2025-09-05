/* title matir */
const originalTitle = document.title;
const newText = document.title;
let index = 0;
function updateTitle() {
  document.title = newText.substring(0, index);
  index++;
  if (index <= newText.length) {
    setTimeout(updateTitle, Math.random() * 200 + 50); // Adjust speed here
  }
}
updateTitle();

/* greeting day/night cycle and some changes */
const hour = new Date().getHours();
const timecycle = document.getElementById("greeting");
if (hour > 12) {
  timecycle.innerHTML = "Good morning! <i class='fa-solid fa-sunrise'></i>";
  timecycle.style = "color: var(--cyan);";
} else {
  timecycle.innerHTML = "Good day! <i class='fa-solid fa-sun'></i>";
  timecycle.style = "color: var(--yellow);";
}
if (hour < 17) {
  timecycle.innerHTML = "Good day! <i class='fa-solid fa-sun'></i>";
  timecycle.style = "color: var(--yellow);";
} else {
  timecycle.innerHTML = "Good evening! <i class='fa-solid fa-sunset'></i>";
  timecycle.style = "color: orange;";
  document.body.classList.add("dark");
}
if (hour > 20) {
  timecycle.innerHTML = "Good night! <i class='fa-solid fa-moon' aria-hidden='true'></i>";
  timecycle.style = "color: #788;";
  document.body.classList.add("dark");
}

document.getElementById("brightness_light").addEventListener("click", function() {
  localStorage.setItem("brightness", "light");
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});
const brightness = localStorage.getItem("brightness");

  if(brightness == "light") {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
}
  if(brightness == "dark") {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
}
document.getElementById("brightness_dark").addEventListener("click", function() {
  localStorage.setItem("brightness", "dark");
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});
