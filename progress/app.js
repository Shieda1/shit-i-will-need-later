// progress

var scroll = this.document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {
  scroll.classList.toggle('active', window.scrollY > 300)

  
})

window.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// end progress