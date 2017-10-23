$(document).ready(function () {
//================================================================================scroll settings
  $(".menu-link").click(function () {
    var menuElement = $(this).attr("href");
    var destination  = $(menuElement).offset().top;

    if ($('window').width() < 768) {
        $('body,html,document').animate({scrollTop: destination}, 1500);
        $('.mobile-menu').animate({
            top: '-100%'
        }, 750);
    } else {
        $('body,html,document').animate({scrollTop: destination - 60}, 1500);
    }

	$('.navbar-toggle').toggleClass('collapsed');
	$('.menu').toggleClass('in');

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
        responsive:{
          0:{
              items:1
          },
          768: {
              items: 3
          }
         },
        nav: true,
        navText: ['','']
    })
  $('.mini-item').parent('div').addClass('col-md-4 col-sm-12 col-xs-12');
//================================================================================mini carousel control
  $('#mini-left-arrow, #mini-left-arrow-tablet').click(function(){
    console.log('click');
    $('.owl-prev').click();
    return false;
  });
  $('#mini-right-arrow, #mini-right-arrow-tablet').click(function(){
    console.log('click');
    $('.owl-next').trigger('click');
    return false;
  });
//================================================================================popup functions 
  $('#call-pop').click(function() {
    $('.popup').css("display", "flex").hide().fadeIn();
    $("body").css("overflow","hidden"); 
  })

  $('.close-pop').click(function() {
    $("body").css("overflow","auto"); 
    $('.popup').fadeOut();
  })

  $('#submit').click(function() {
    var  name = $('input[name=name]').val();
    var  email = $('input[name=email]').val();
    var dataObj = {
      name: name,
      email: email
    };
    $.ajax({
        url: "./php/save_data.php",
        type: "POST",
        data: dataObj,
    });
    return false;
  });

    $('#columns').on('swipeleft', function(e) {
        e.preventDefault();
        $('.mobile-menu').animate({
            top: '0'
        }, 750);
    });
    $('#columns').on('swiperight',function(e){
        e.preventDefault();
        $('.mobile-menu').animate({
            top: '-100%'
        }, 750);
    });
});

