$(".owl-carousel").owlCarousel({
  items: 3, // Number of cards shown in each slide
  loop: true, // Continuously loop the carousel
  margin: 20, // Space between cards
  nav: true, // Show navigation buttons
  //lazyLoad: true,
  loop: true,

  responsive: {
    0: {
      items: 1, // Number of cards shown in the carousel for smaller screens
    },
    768: {
      items: 1, // Number of cards shown in the carousel for medium screens
      margin: 60,
    },
    992: {
      items: 2, // Number of cards shown in the carousel for large screens
      margin: 60,
    },
  },
});

$(".owl-carousel-story").owlCarousel({
  items: 4, // Number of cards shown in each slide
  loop: true, // Continuously loop the carousel
  margin: 20, // Space between cards
  nav: true, // Show navigation buttons
  //lazyLoad: true,
  loop: true,

  responsive: {
    0: {
      items: 1, // Number of cards shown in the carousel for smaller screens
    },
    768: {
      items: 1, // Number of cards shown in the carousel for medium screens
    },
    992: {
      items: 3, // Number of cards shown in the carousel for large screens
    },
  },
});

// Pre - loader
window.addEventListener("load", () => {

  
  const loader = document.querySelector(".loader");

  setTimeout(() =>{
    loader.classList.add("loader-hidden");
  }, 1000);

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

//menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


const sr = ScrollReveal({
  distance : '65px',
  duration : 2600,
  delay : 450,
  reset : true
});

sr.reveal('.help-form',{delay : 0 , origin : 'right'});
sr.reveal('.overview',{delay : 0 , origin : 'bottom'});
sr.reveal('.container',{delay : 0 , origin : 'bottom'});
sr.reveal('.footer',{delay : 0 , origin : 'bottom'});
