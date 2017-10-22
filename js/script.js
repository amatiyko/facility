$(document).ready(function () {
//================================================================================scroll settings
  $(".menu-link").click(function () {
      var menuElement = $(this).attr("href");
      var destination  = $(menuElement).offset().top;
	$('body,html,document').animate({ scrollTop: destination - 60}, 1500);
      return false;
  });
  $(window).scroll(function() {
    if($(window).scrollTop() > $('#full-slider').height() - 20) {
      $('.navbar').addClass('scrolled-nav');
    }
    else {
      $('.navbar').removeClass('scrolled-nav');
    }
  });
//================================================================================mini carousel definition 
  $('.owl-carousel').owlCarousel({
        loop:true,
        items: 3,
        nav: true,
	      navText: ['','']
    })
  $('.mini-item').parent('div').addClass('col-md-4');
//================================================================================mini carousel control
  $('#mini-left-arrow').click(function(){
    console.log('click');
    $('.owl-prev').click();
    return false;
  });
  $('#mini-right-arrow').click(function(){
    console.log('click');
    $('.owl-next').trigger('click');
    return false;
  });
//================================================================================popup functions 
  $('#call-pop').click(function() {
    $('.popup').css("display", "flex").hide().fadeIn();
  })

  $('.close-pop').click(function() {
    $('.popup').fadeOut();
  })
});

