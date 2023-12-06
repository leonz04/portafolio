document.addEventListener("DOMContentLoaded", function () {
  const changeMode = document.querySelector('#toggleModeBtn');
  const modeText = document.querySelector('.modeText');
  const body = document.querySelector('body')


  changeMode.addEventListener('click', function (e) {

    // Obtener el contenido actual eliminando espacios en blanco al principio y al final
    const currentMode = modeText.textContent.trim();
    // console.log(currentMode);

    // Cambiar entre dark_mode y light_mode
    if (currentMode === 'Light Mode') {
      modeText.textContent = 'Dark Mode';function cambiarImagenJS(){
        document.getElementById("tunnel").src="image2.jpg";
      }
       
      body.classList.remove('body_dark')

    } else {
      modeText.textContent = 'Light Mode';
      body.classList.add('body_dark')
    }

    // window.alert('Cambio de modo realizado');
  });

})