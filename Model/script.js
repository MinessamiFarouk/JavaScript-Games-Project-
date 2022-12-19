"use strict";

let modal = document.querySelector(".modal");
let btncloseModal = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");
let btnOpenModals = document.querySelectorAll(".btn-show-modal");

let openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

let closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModals.forEach((m) => {
  m.addEventListener("click", openModal);
});

btncloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (key) => {
  if (key.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
