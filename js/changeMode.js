document.addEventListener("DOMContentLoaded", function () {
  const changeMode = document.querySelector('#toggleModeBtn');
  const modeText = document.querySelector('.modeText');
  const body = document.querySelector('body')


  changeMode.addEventListener('click', function (e) {

    // Obtener el contenido actual eliminando espacios en blanco al principio y al final
    const currentMode = modeText.textContent.trim();
    // console.log(currentMode);

    // Cambiar entre dark_mode y light_mode
    if (currentMode === 'Dark Mode') {
      modeText.textContent = 'Light Mode';
      body.classList.remove('body_dark')
    } else {
      modeText.textContent = 'Dark Mode';
      body.classList.add('body_dark')
    }

    // window.alert('Cambio de modo realizado');
  });

})