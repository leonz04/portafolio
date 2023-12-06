document.addEventListener('DOMContentLoaded', function () {
const sections = document.querySelectorAll('section')
const footer = document.querySelectorAll('footer')
  
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
        rangeEnd: 'cover 40%',
      }
      )
    })

    footer.forEach(function(section){
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
        rangeEnd: 'cover 40%',
      }
      )
    })




  })

  
 
   
    const imgTumbling = [
      { transform: 'translate(0, 0)', scale:0  }, 
      { transform: 'translate(0, 0)', scale:1, }
      
    ]


    const imgTiming = {
      duration: 3000,
    }
    document.getElementById("tunnel").animate(
      imgTumbling, 
      imgTiming

    )
    