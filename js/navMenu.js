
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('#menu')
    const navMenu = document.querySelector('.navBar')
    const navClose = document.querySelectorAll('.navClose')

    menu.addEventListener('click', function () {
        navMenu.classList.toggle('nav--transalate')
    })



    navClose.forEach(function (e) {
        e.addEventListener('click', function () {
            // window.alert('clickkkkkkkkkkkk 👌')
            navMenu.classList.toggle('nav--transalate')
        })
    })

})