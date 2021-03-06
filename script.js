const navMenu = document.querySelector(".list__container");
const navBar = document.querySelector(".nav");
const menuBtn = document.querySelector("#menu");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const col1 = document.querySelector(".col__1");
const col2 = document.querySelector(".col__2");
const col3 = document.querySelector(".col__3");

menuBtn.addEventListener("click", () => {
  if (navMenu.classList.contains("hide")) {
    navMenu.classList.remove("hide");
    menuBtn.innerHTML = `<img src="imgs/icons/menu-x.svg" alt="menu pic">`;
  } else {
    navMenu.classList.add("hide");
    menuBtn.innerHTML = `<img src="imgs/icons/menu.svg" alt="menu pic">`;
  }
});

navBar.addEventListener("mouseleave", () => {
  navMenu.classList.add("hide");
  menuBtn.innerHTML = `<img src="imgs/icons/menu.svg" alt="menu pic">`;
});

// col 1
col1.addEventListener("mouseenter", () => {
  if (card1.classList.contains("active")) {
    card1.classList.remove("active");
  }
  card1.classList.add("active");
});
col1.addEventListener("mouseleave", () => {
  card1.classList.remove("active");
});

// col 2
document.querySelector(".badge").classList.add("hide");
col2.addEventListener("mouseenter", () => {
  if (card2.classList.contains("active")) {
    card2.classList.remove("active");
  } else {
    card2.classList.add("active");
    document.querySelector(".badge").classList.remove("hide");
  }
});
col2.addEventListener("mouseleave", () => {
  card2.classList.remove("active");
  document.querySelector(".badge").classList.add("hide");
});

// col 3
col3.addEventListener("mouseenter", () => {
  if (card3.classList.contains("active")) {
    card3.classList.remove("active");
  }
  card3.classList.add("active");
});
col3.addEventListener("mouseleave", () => {
  card3.classList.remove("active");
});
