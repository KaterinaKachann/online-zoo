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

const amountRadioButtons = document.querySelectorAll(".amount__radio");
const anotherAmount = document.querySelector(".feed__another-amount");
amountRadioButtons.forEach(amountRadio => {
  amountRadio.addEventListener("click", (e) => {
    let price = e.target.parentElement.textContent;
    price = price.slice(price.indexOf("$")+1);
    price = Number(price)
    anotherAmount.value = price;
  });
});
anotherAmount.addEventListener("input", (e) => {
  switch(e.target.value) {
    case "5000":
      amountRadioButtons[0].checked = true;
      break;
    case "2000":
      amountRadioButtons[1].checked = true;
      break;
    case "1000":
      amountRadioButtons[2].checked = true;
      break;
    case "500":
      amountRadioButtons[3].checked = true;
      break;
    case "250":
      amountRadioButtons[4].checked = true;
      break;
    case "100":
      amountRadioButtons[5].checked = true;
      break;
    case "50":
      amountRadioButtons[6].checked = true;
      break;
    case "25":
      amountRadioButtons[7].checked = true;
      break;
    default:
      amountRadioButtons.forEach(elem => {
        elem.checked = false;
      });
  }
});

function validAmount(value) {
  const regex = /[\d]/;
  return regex.test(value);
}
anotherAmount.addEventListener("keypress", (e) => {
  if ((! validAmount(e.key)) || (anotherAmount.value.length === 4)) {
    e.preventDefault();
  };
});
