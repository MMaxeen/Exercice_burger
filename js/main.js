var burger = document.querySelector('.menu'); 
var nav = document.querySelector("nav");
burger.addEventListener("click", function(e) {
    nav.classList.toggle("visible");
  });

burger.addEventListener("click", function(e) {
  burger.classList.toggle("active");
});