const first = document.getElementById("first");
const button = document.getElementById("button");
const form = document.getElementById("form");
const labels = document.querySelectorAll("label");

form.addEventListener("submit", e => {
  e.preventDefault();
  labels.forEach(label => {
    label.classList = "warning";
  });
});
