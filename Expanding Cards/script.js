let panel = document.querySelectorAll(".panel");
panel.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    e.preventDefault();
    removeAllClassActive();
    panel.classList.add("active");
  });
});

function removeAllClassActive() {
  panel.forEach((panel) => {
    panel.classList.remove("active");
  });
}
