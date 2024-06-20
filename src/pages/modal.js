// modal.js

function initializeModal(modalId, openBtnId, closeBtnId) {
  document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById(openBtnId);
    const closeModalBtn = document.getElementById(closeBtnId);
    const modal = document.getElementById(modalId);

    openModalBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });
}

export function initializeModal1() {
  initializeModal("modal1", "openModal1", "closeModal1");
}

export function initializeModal2() {
  initializeModal("modal2", "openModal2", "closeModal2");
}
