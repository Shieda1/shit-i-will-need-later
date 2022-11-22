// header and hero 

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// progress

var scroll = this.document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {
  scroll.classList.toggle('active', window.scrollY > 300)

  
})

scroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// end progress


// scroll animation

const sr = ScrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2000,
  reset: true
})

sr.reveal('.cta', {})  
sr.reveal('.icons', {})  
sr.reveal('.title', {})  
sr.reveal('.service-card', {})  
sr.reveal('.slide-container', {})  
sr.reveal('.table', {})   
sr.reveal('.text-p', {})   
sr.reveal('.map', {})   
sr.reveal('#img-slider', {})   
sr.reveal('#video', {})   

// end scroll animation

// loader

var loader = document.querySelector("#loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
} 

// end loader

// img-slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// img-slider