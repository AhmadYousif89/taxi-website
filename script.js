const menuBtn = document.querySelector("#menu");
const navMenu = document.querySelectorAll(".list__container");
const navBar = document.querySelector(".nav");
const actvCard = document.querySelectorAll(".col-content");

menuBtn.addEventListener("click", () => {
  navMenu.forEach((e) => {
    if (e.classList.contains("show")) {
      e.classList.remove("show");
      menuBtn.innerHTML = `<img src="imgs/icons/menu-x.svg" alt="menu pic">`;
    } else {
      e.classList.add("show");
      menuBtn.innerHTML = `<img src="imgs/icons/menu.svg" alt="menu pic">`;
    }
  });
});

navBar.addEventListener("mouseleave", () => {
  navMenu.forEach((e) => {
    e.classList.add("show");
    menuBtn.innerHTML = `<img src="imgs/icons/menu.svg" alt="menu pic">`;
  });
});

actvCard.forEach((e) => {
  e.addEventListener("mouseenter", (e) => {
    e.target.classList.toggle("active");
  });
});
