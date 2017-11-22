$(document).ready(function () {


    $('.mobile_menu_icon').click(function () {

        $('.menu_mobile').toggle(300).css({

            'display': 'block',

            'right': '0',

        })


    })


    $('.mobile_menu_icon').click(function () {
        $('.bar1').toggleClass("bar1-active");
        $('.bar2').toggleClass('bar2-active');
        $('.bar3').toggleClass("bar3-active");
    })
});









/*
const menuIcon = document.querySelector('.icon');
const menuMobile = document.querySelector('.menu_mobile');

function menuToggle(e) {

    menuMobile.classList.toggle('menu_mobile');
    menuMobile.classList.toggle('visible');


}


menuIcon.addEventListener("click", menuToggle);
*/
