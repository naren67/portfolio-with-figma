const popup__box = document.querySelector('.popup__box')

const closePopup = document.querySelector('.closePopup')

window.addEventListener('load',()=>{
          showPopup()
})

const showPopup = ()=>{
          const totalSeconds = 3

          let i=0;
          const timeStart = setInterval(()=>{
               
                    i++
                    console.log(i)

                    if(i == totalSeconds){
                            clearInterval(timeStart)
                            
                            popup__box.classList.add('show')
                    }
          },1000)
}

closePopup.addEventListener('click',()=>{

          popup__box.classList.remove('show')

})