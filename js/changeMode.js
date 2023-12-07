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
      modeText.textContent = 'Dark Mode';
      body.classList.remove('body_dark');
      document.getElementById("tunnel").src="../assets/img/lionsvglight.svg";
      document.getElementById("imgTech1").src="../assets/icons/js-icon-ligth.svg";
      document.getElementById("imgTech2").src="../assets/icons/html5-icon-ligth.svg";
      document.getElementById("imgTech3").src="../assets/icons/css3-icon-ligth.svg";
      document.getElementById("imgTech4").src="../assets/icons/git-icon-ligth.svg";



    } else {
      modeText.textContent = 'Light Mode';
      body.classList.add('body_dark');
      document.getElementById("tunnel").src="../assets/img/lionsvgdark.svg";
      document.getElementById("imgTech1").src="../assets/icons/js-icon-dark.svg";
      document.getElementById("imgTech2").src="../assets/icons/html5-icon-dark.svg";
      document.getElementById("imgTech3").src="../assets/icons/css3-icon-dark.svg";
      document.getElementById("imgTech4").src="../assets/icons/git-icon-dark.svg";



    }

  });

})