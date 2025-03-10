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
  timecycle.textContent = "Good morning!";
  timecycle.style = "color: cyan;";
} else {
  timecycle.textContent = "Good day!";
  timecycle.style = "color: yellow;";
}
if (hour < 17) {
  timecycle.textContent = "Good day!";
  timecycle.style = "color: yellow;";
} else {
  timecycle.textContent = "Good evening!";
  timecycle.style = "color: orange;";
  document.body.classList.add("dark");
}
if (hour > 20) {
  timecycle.innerHTML = "Good night! <i class='fa fa-moon-o' aria-hidden='true'></i>";
  timecycle.style = "color: #788;";
  document.body.classList.add("dark");
}
const whydespise = document.getElementById("howdespise");
const popup = document.getElementById("popupdespise");
whydespise.addEventListener("click", whendespise());
function whendespise() {
  popup.classList.toggle('hidden');
}