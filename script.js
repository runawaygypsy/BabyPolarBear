jQuery(document).ready(function($) {
  jQuery('.chocolate-box').addClass('animateIt');
});

$('.chocolate-box').mouseleave(function(){
    $(this).removeClass('animateIt');
});

$('.chocolate-box').mouseenter(function(){
    $(this).addClass('animateIt');
});