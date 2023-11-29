window.addEventListener('load', function () {

    const dialog = document.getElementById('dialog');

    const close = document.getElementById('form__button_close');

    modal.addEventListener('click', (event) => {
        dialog.showModal();
    });


    close.addEventListener('click', (event) => {
        dialog.close();
    });

})

