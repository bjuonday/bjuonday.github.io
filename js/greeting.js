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
}
if (hour > 20) {
  timecycle.textContent = "Good night! *";
  timecycle.style = "color: grey;";
}
const whydespise = document.getElementById("howdespise");
const popup = document.getElementById("popupdespise");
whydespise.addEventListener("click", whendespise());
function whendespise() {
  popup.classList.toggle('hidden');
}
