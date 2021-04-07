 gsap.registerPlugin(ScrollTrigger)

 gsap.to('.firstIcons',{duration:8,

           scrollTrigger:{
                     trigger:'.firstIcons',
                     start:'top 55%',
                     end:'top -40%',
                     toggleActions:'restart none none none',
                     pin:true,

                    //  markers:true
           }

})

gsap.to('.secondIcons',{duration:8,

          scrollTrigger:{
                    trigger:'.secondIcons',
                    start:'top 55%',
                    end:'top -33.3%',
                    toggleActions:'restart none none none',
                    pin:true,

                    // markers:true
          }

})
