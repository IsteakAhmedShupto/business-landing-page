const openBtn = document.querySelector(".header-openmenu");
const closeBtn = document.querySelector(".header-closemenu");

const navContainer = document.querySelector(".nav-container");

openBtn.addEventListener("click", function () {
  navContainer.style.display = "block";
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  navContainer.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
});
