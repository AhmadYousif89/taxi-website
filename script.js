const menuBtn = document.querySelector("#menu");
const navMenu = document.querySelector(".nav__list");
const navBar = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  if (navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
    menuBtn.innerHTML = `<img src="imgs/icons/menu-x.svg" alt="menu pic">`;
  } else {
    navMenu.classList.add("show");
    menuBtn.innerHTML = `<img src="imgs/icons/menu.svg" alt="menu pic">`;
  }
});

navBar.addEventListener("mouseleave", () => {
  navMenu.classList.add("show");
  menuBtn.innerHTML = `<img src="imgs/icons/menu.svg" alt="menu pic">`;
});
