// SCROLL TO
function scrollToSection(sectionId) {
  const header = document.querySelector("header"); // Получаем элемент хедера
  const section = document.querySelector(sectionId); // Получаем целевую секцию

  if (section && header) {
    const headerHeight = header.offsetHeight; // Высота хедера
    const sectionPosition = section.offsetTop; // Позиция секции относительно верха страницы

    // Прокрутка с учетом высоты хедера
    window.scrollTo({
      top: sectionPosition - headerHeight,
      behavior: "smooth", // Плавный скролл
    });
  }
}
// COOKIE POPUP
document.addEventListener("DOMContentLoaded", function () {
  const popups = document.querySelectorAll(".cookie-bar"); // Get all popups
  const cookieYesButtons = document.querySelectorAll(".cookie-bar-btn"); // Get all buttons

  function checkCookie() {
    if (sessionStorage.getItem("cookie")) {
      // If cookie is accepted, hide the popup
      popups.forEach((popup) => popup.classList.add("hidden"));
    } else {
      // Show popup if cookie not accepted
      popups.forEach((popup) => popup.classList.remove("hidden"));
    }
  }

  // Event listener for all accept buttons
  cookieYesButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Hide all popups
      popups.forEach((popup) => popup.classList.add("hidden"));
      // Store cookie consent in sessionStorage
      sessionStorage.setItem("cookie", "true");
    });
  });

  // Run function to check if cookie is already accepted
  checkCookie();
});

// Lang toggle
const langButtons = document.querySelectorAll(".lang-btn");

// Добавляем обработчик события на каждую кнопку
langButtons.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.stopPropagation(); // Останавливаем всплытие, чтобы click по body не срабатывал
    this.classList.toggle("active"); // Переключаем класс .active
  });
});

// Добавляем обработчик события на body для закрытия активных кнопок
document.addEventListener("click", () => {
  langButtons.forEach((btn) => {
    btn.classList.remove("active"); // Удаляем класс .active
  });
});

// Menu
const btnBurgerMenu = document.querySelector(".btn-burger-menu");
const btnMenuMobClose = document.querySelector(".btn-menu-mob-close");
const menuMob = document.querySelector(".mobile-menu-content");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

// Открытие меню
btnBurgerMenu.addEventListener("click", function () {
  menuMob.classList.remove("hidden");
  btnBurgerMenu.style.display = "none"; // Скрываем кнопку бургер-меню
  btnMenuMobClose.style.display = "block"; // Показываем кнопку закрытия
  mobileMenuOverlay.classList.remove("hidden"); // Показываем кнопку закрытия
  mobileMenuOverlay.classList.add("block");
});

// Закрытие меню
btnMenuMobClose.addEventListener("click", function () {
  menuMob.classList.add("hidden");
  btnBurgerMenu.style.display = "block"; // Показываем кнопку бургер-меню
  btnMenuMobClose.style.display = "none"; // Скрываем кнопку закрытия
  mobileMenuOverlay.classList.remove("block");
  mobileMenuOverlay.classList.add("hidden");
});

// Аккордеон
// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".section-faq h3");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const arrow = question.querySelector("svg");

    if (!answer || !arrow) return;

    // Close all other answers and reset their arrows
    faqQuestions.forEach((q) => {
      const otherAnswer = q.nextElementSibling;
      const otherArrow = q.querySelector("svg");

      if (otherAnswer && otherArrow && otherAnswer !== answer) {
        otherAnswer.style.display = "none"; // Hide other answers
        otherArrow.style.transform = "rotate(0deg)"; // Reset arrow rotation
      }
    });

    // Toggle the clicked answer and rotate the arrow
    if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block"; // Show the answer
      arrow.style.transform = "rotate(180deg)"; // Rotate the arrow
    } else {
      answer.style.display = "none"; // Hide the answer
      arrow.style.transform = "rotate(0deg)"; // Reset arrow
    }
  });
});
