document.addEventListener('DOMContentLoaded', function () {
    // API web animations
  
    const progressBar = document.getElementById('progress')
  
    progressBar.animate(
      // como argumento, el metodo animate recibne un array de objetos que describen los estados de la animacion.
      [
        { width: 0 },
        { width: '100%' }
      ],
      {
        fill: 'forwards',
        timeline: new ScrollTimeline({
          subject: document.documentElement
        })
  
      }
    )
    const dialog = document.getElementById('dialog');

    const close = document.getElementById('form__button_close');
    const close1 = document.getElementById('jsbutton');
    const contact1 = document.getElementById('contact1');

    modal.addEventListener('click', (event) => {
        dialog.showModal();
    });
    contact1.addEventListener('click', (event) => {
      dialog.showModal();
  });



    close.addEventListener('click', (event) => {
        dialog.close();
    })
    close1.addEventListener('click', (event) => {
        dialog.close();
       
    })
    const menu = document.querySelector('#menu')
  const navMenu = document.querySelector('.navBar')

  menu.addEventListener('click', function () {
    navMenu.classList.toggle('nav--transalate')
  })

  const sections = document.querySelectorAll('section')
  
    sections.forEach(function(section){
      section.animate(
      [
        {opacity:0, scale:0.5},
        {opacity:1, scale:1}
      ],
      {
        fill:'both',
        timeline: new ViewTimeline({
          subject: section
        }),
        rangeStart: 'entry 10%',
        rangeEnd: 'cover 45%',
      }
      )
    })

   
    var imgTumbling = [
      { transform: 'translate(0, 0)', scale:0  }, 
      { transform: 'translate(0, 0)', scale:1, }
      
    ]

    var titlesTumbling = [
      { transform: 'translate(0, -  500px)'}, 
      { transform: 'translate(0, 0)' }
      
    ]

    var imgTiming = {
      duration: 3000,
    }
    document.getElementById("tunnel").animate(
      imgTumbling, 
      imgTiming
    )
    document.getElementById("secHed").animate(
      titlesTumbling, 
      imgTiming
    )
  

})

