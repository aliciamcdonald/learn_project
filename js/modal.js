// const menuBtn = document.querySelector(".header-icon-menu");

// menuBtn.addEventListener("click", () => {
//   console.log("Привет Алисия, мы клыкнули на кнопку меню");
// });

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      toggleModal(refs.modal);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target === refs.modal) {
      toggleModal(refs.modal);
    }
  });
})();

// document.addEventListener("DOMContentLoaded", () => {
//   const openModalButtons = document.querySelectorAll(".open-modal");
//   const closeModalButtons = document.querySelectorAll(".close-modal");
//   const modals = document.querySelectorAll(".modal");

//   // Функція для відкриття модального вікна
//   const openModal = (modalId) => {
//     const modal = document.getElementById(modalId);
//     if (modal) {
//       modal.classList.add("active");
//     }
//   };

//   // Функція для закриття модального вікна
//   const closeModal = (modal) => {
//     modal.classList.remove("active");
//   };

//   // Додаємо слухачі на кнопки для відкриття модалок
//   openModalButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const modalId = button.getAttribute("data-modal");
//       openModal(modalId);
//     });
//   });

//   // Додаємо слухачі на кнопки для закриття модалок
//   closeModalButtons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const modal = button.closest(".modal");
//       closeModal(modal);
//     });
//   });

//   // Закриття модалки при кліку поза вікном
//   modals.forEach((modal) => {
//     modal.addEventListener("click", (e) => {
//       if (e.target === modal) {
//         closeModal(modal);
//       }
//     });
//   });

//   // Закриття модалки при натисканні клавіші "Escape"
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       modals.forEach((modal) => {
//         if (modal.classList.contains("active")) {
//           closeModal(modal);
//         }
//       });
//     }
//   });
// });
