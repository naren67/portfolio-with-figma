const hamburger = document.getElementById('hamburger')
const nav__options = document.getElementById('nav__options')

hamburger.addEventListener('click',()=>{
          nav__options.classList.toggle('show')
})