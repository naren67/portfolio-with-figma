const burger = document.querySelector('.hamburger')
const mobile_menu = document.querySelector('.nav-menu')

burger.addEventListener('click',function(){
          burger.classList.toggle('is-active');
          mobile_menu.classList.toggle('is-active')
})