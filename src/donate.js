const burgerIcon = document.querySelector(".menu__burger-icon");
const menu = burgerIcon.parentElement.childNodes[3];
const body = document.querySelector("body");

burgerIcon.addEventListener("click", (e) => {

  //function closed burger menu
  function closeBurgerMenu() {
    if (document.querySelector(".menu_burger-open")) {
      document.querySelector(".header").childNodes[1].childNodes[1].childNodes[1].classList.remove("logo_orange");
      document.querySelector(".menu_burger-open").classList.remove("menu_burger-open");
    }
  };


  burgerIcon.parentElement.childNodes[3].classList.add("menu_burger-open");
  document.querySelector(".header").childNodes[1].childNodes[1].childNodes[1].classList.add("logo_orange");
  body.classList.add("body_popup_open");
  
  body.addEventListener("click", (e) => {
    // if click out of menu - close burger menu
    if ( ( ! e.path.includes(menu)) && (e.target !== burgerIcon) ) {
      closeBurgerMenu();
      body.classList.remove("body_popup_open");
      body.removeEventListener;
    }
  });

  //close burger menu after click to close-icon
  document.querySelector(".close-icon").addEventListener("click", (e) => {
      closeBurgerMenu();
  });
  
});

