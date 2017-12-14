/*var links = [$('#home'),$('#about'),$('#services'),$('#clients'),$('#blog'),$('#contacts')];
 */



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





    $('li:nth-child(1)').click(function () {

        $('html,body').animate({

            scrollTop: $('#home').offset().top


        }, 700);
    })

    $('li:nth-child(2)').click(function() {

        $('html,body').animate({

            scrollTop: $('#about').offset().top


        }, 700);
    })

    $('li:nth-child(3)').click(function () {

        $('html,body').animate({

            scrollTop: $('#services').offset().top


        }, 700);
    })




    $('li:nth-child(4)').click(function () {

        $('html,body').animate({

            scrollTop: $('#profiles').offset().top


        }, 700);
    })

    $('li:nth-child(5)').click(function () {

        $('html,body').animate({

            scrollTop: $('#clients').offset().top


        }, 700);
    })

    $('li:nth-child(6)').click(function () {

        $('html,body').animate({

            scrollTop: $('#blog').offset().top


        }, 700);
    })

    $('li:nth-child(7)').click(function () {

        $('html,body').animate({

            scrollTop: $('#contacts').offset().top


        }, 700);


    })

    /* var i = 0;
       
    
    $('links[i]').click(function(){
        
        console.log(i);
    
    for (i>= 0; i <= links.length; i++)
{
            $(window).animate({
            
            scrollTop:$('links[i]').scrollTop
            
            
        },700)
        
        
        
    }}) 
*/


});


$(window).scroll(function()
                {
    
    if ($(document).scrollTop() > 0)
        
        
        
    
    
    
    {
        
        $('.top-section').css('position','fixed');
        $('.top-section').css('width','100%');
        $('.top-section').css('background-color','#00407F');
        $('.top-section_wrapper').css('margin-top','0');
        
        
    }





                 else
                 
                 {
                
                     $('.top-section').css('position','static');
                      $('.top-section').css('background','none');
                 
                 }
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
