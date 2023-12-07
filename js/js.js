document.addEventListener('DOMContentLoaded', function () {
    // API web animations
  
    
  
    
    const dialog = document.getElementById('dialog');

    const close = document.getElementById('form__button_close');
    const close1 = document.getElementById('jsbutton');


    modal.addEventListener('click', (event) => {
        dialog.showModal();
    });
  



    close.addEventListener('click', (event) => {
        dialog.close();
    })
    close1.addEventListener('click', (event) => {
        dialog.close();
       
    })



  
  

})

