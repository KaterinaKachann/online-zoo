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
  //open beurger menu
  burgerIcon.parentElement.childNodes[3].classList.add("menu_burger-open");
  //change color of logo
  document.querySelector(".header").childNodes[1].childNodes[1].childNodes[1].classList.add("logo_orange");
  // block scroll for body 
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


const animalCards = document.querySelectorAll(".cards__card");

//function shuffle array for nodelist
function shuffleArray(arr) {
    const newArr = Array.from(arr);
    let j = 0;
    let temp = 0;
    for (let i = newArr.length - 1; i > 0 ; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    };
    return newArr;
  }
  
  //function create div with new order cards
  function createNewOrderCards(arr, position) {
    let div = document.createElement("div");
    div.className = "cards__items cards__items_"+position;
    arr.forEach(card => {
      div.append(card.cloneNode(true));
    });
    return div;
  }
  
  //repair hidden modificator
  function repairHidden(arr, leng) {
    for (let i = 0; i < arr.childNodes.length; i++) {
      if (i < leng) {
        if (arr.childNodes[i].classList.contains("cards__card_hidden")) {
          arr.childNodes[i].classList.remove("cards__card_hidden");
        }
      } else {
        if ( ! arr.childNodes[i].classList.contains("cards__card_hidden")) {
          arr.childNodes[i].classList.add("cards__card_hidden")
        }
      }
    }
  }
  
  //update card items
  function updateCardItems(position) {
    let query = ".cards__items_"+position;
    let oldNode = document.querySelector(query);
    let newNode = createNewOrderCards(shuffleArray(animalCards), position);
    repairHidden(newNode, 6);
    document.querySelector(".cards").childNodes[3].replaceChild(newNode, oldNode);
  }
  //random cards after load page
  document.addEventListener("DOMContentLoaded", () => {
    updateCardItems("center");
    updateCardItems("left");
    updateCardItems("right");
  
    // check for count testimonials
    if (document.documentElement.clientWidth > 1200) {
      if (document.querySelectorAll(".testimonials__card")[3].classList.contains("hidden")) {
        document.querySelectorAll(".testimonials__card")[3].classList.remove("hidden")
      }
    } else {
        if (! document.querySelectorAll(".testimonials__card")[3].classList.contains("hidden")) {
          document.querySelectorAll(".testimonials__card")[3].classList.add("hidden")
        } 
      }
  
  });
  
  function clearHidden(arr) {
    arr.forEach(elem => {
      if (elem.classList.contains("cards__card_hidden")) {
        elem.classList.remove("cards__card_hidden");
      }
    });
  }
  //create node cards__items with left, rigth or center
  function pushCardsItems(arr, position) {
    let query = ".cards__items_"+position;
    let newNode = document.querySelector(query);
    arr.forEach(elem => {
      newNode.append(elem.cloneNode(true));
    });
    return newNode;
  }
  
  //click to right arrow
  document.querySelector(".cards__arrow-right").addEventListener("click", () => {
    let leftCards = document.querySelector(".cards__items_left");
    let centerCards = document.querySelector(".cards__items_center");
    let rightCards = document.querySelector(".cards__items_right");
  
    document.querySelector(".cards__arrow-left").disabled = true;
    document.querySelector(".cards__arrow-right").disabled = true;
    
    centerCards.style.transition = "";
    rightCards.style.transition = "";
  
    centerCards.classList.add("cards__items_center_to_left");
    rightCards.classList.add("cards__items_right_to_center");
  
      // change cards itemts from right to left
      function changeCardsItems() {
        centerCards.classList.add("cards__items_left");
        centerCards.classList.remove("cards__items_center");
      
        rightCards.classList.remove("cards__items_right");
        rightCards.classList.add("cards__items_center");
      
        leftCards.classList.add("cards__items_right");
        leftCards.classList.remove("cards__items_left");
  
        rightCards.style.transition = "all 0s";
        centerCards.style.transition = "all 0s";
  
        centerCards.classList.remove("cards__items_center_to_left");
        rightCards.classList.remove("cards__items_right_to_center");
        
        document.querySelector(".cards__arrow-left").disabled = false;
        document.querySelector(".cards__arrow-right").disabled = false;
  
        updateCardItems("left");
        updateCardItems("right");
      }
    
    setTimeout(changeCardsItems, 1100);
    
  });
  
  //click to left arrow
  document.querySelector(".cards__arrow-left").addEventListener("click", () => {
    let leftCards = document.querySelector(".cards__items_left");
    let centerCards = document.querySelector(".cards__items_center");
    let rightCards = document.querySelector(".cards__items_right");
  
    document.querySelector(".cards__arrow-left").disabled = true;
    document.querySelector(".cards__arrow-right").disabled = true;
    
    centerCards.style.transition = "";
    leftCards.style.transition = "";
  
    centerCards.classList.add("cards__items_center_to_right");
    leftCards.classList.add("cards__items_left_to_center");
  
    
  
      // change cards itemts from left to right
      function changeCardsItems() {
        centerCards.classList.add("cards__items_right");
        centerCards.classList.remove("cards__items_center");
      
        leftCards.classList.remove("cards__items_left");
        leftCards.classList.add("cards__items_center");
      
        rightCards.classList.add("cards__items_left");
        rightCards.classList.remove("cards__items_right");
  
        leftCards.style.transition = "all 0s";
        centerCards.style.transition = "all 0s";
  
        centerCards.classList.remove("cards__items_center_to_right");
        leftCards.classList.remove("cards__items_left_to_center");
        
        document.querySelector(".cards__arrow-left").disabled = false;
        document.querySelector(".cards__arrow-right").disabled = false;
  
        updateCardItems("left");
        updateCardItems("right");
  
      }
    
    setTimeout(changeCardsItems, 1100);
    
  });
  
  document.querySelector(".testimonials__slider").addEventListener("input", function() {
    let testimonials = document.querySelectorAll(".testimonials__card");
    let val = Number(this.value);
    let count = 0;
    for (let i = 0; i < testimonials.length; i++) {
      document.documentElement.clientWidth > 1200 ? count = val + 3 : count = val + 2;
      if ((val <= i) && (i <= (count))) {
        testimonials[i].classList.remove("animation_off");
        testimonials[i].classList.add("animation_on");
      
        if (testimonials[i].classList.contains("hidden")) {
          testimonials[i].classList.remove("hidden")
        };
      } else {
        testimonials[i].classList.remove("animation_on");
        testimonials[i].classList.add("animation_off");
        if ( ! testimonials[i].classList.contains("hidden")) {
          setInterval( testimonials[i].classList.add("hidden"), 300)
        };
      }
    }
  });
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth > 1200) {
      if (document.querySelectorAll(".testimonials__card")[3].classList.contains("hidden")) {
        document.querySelectorAll(".testimonials__card")[3].classList.remove("hidden");
        document.querySelectorAll(".testimonials__card")[3].classList.add("animation");
      }
    } else {
        if (! document.querySelectorAll(".testimonials__card")[3].classList.contains("hidden")) {
          document.querySelectorAll(".testimonials__card")[3].classList.remove("animation");
          setInterval(document.querySelectorAll(".testimonials__card")[3].classList.add("hidden"), 300);
          
        } 
      }
  })