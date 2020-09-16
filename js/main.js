$(function(){
    $('.slider__list').slick({
        dots:true,
        infinite:true,
        fade:true,
        speed: 500,
        centerMode:true,
        prevArrow:  '<img class="slider-arrows slider-arrows__left" src="./images/icons/arrow-left.png" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/icons/arrow-right.png" alt=""></img>',
       
    });

    $('.burger').click(function(){
        $('.burger').toggleClass('burger--active'),
        $('.menu').toggleClass('menu--active')
    });
    $('.burger--active').click(function(){
        $('.burger').removeClass('burger--active')
    });
    $('.menu__link').click(function(){
        $('.menu').toggleClass('menu--active'),
        $('.burger').toggleClass('burger--active')
    });
    $('.menu__item').click(function(){
        $('.menu__item').removeClass('active'),
        $(this).addClass('active')
    });
    
    

});
    