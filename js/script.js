const HAM_BTN = document.querySelector(".main-header__ham");
const HEADER_LIST = document.querySelector(".main-header__list");

HAM_BTN.addEventListener("click", () => {
  HEADER_LIST.classList.toggle("active");
  HAM_BTN.classList.toggle("active");
});
