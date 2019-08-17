$(document).ready(function() {
  ;

    $('.burger').click(function() {
      if ($('.slide-menu').width() < 1) {
        $('.all-screen').fadeToggle();
        $('.all-screen').css('display', 'flex');
        $('.slide-menu').animate({width: '70%'}, 500);
        $('body').css('overflow', 'hidden');
      }
      else {
        $('.slide-menu').animate({width: '0%'}, 500);
        $('.all-screen').css('display', 'flex')
        $('.all-screen').fadeToggle();
        $('body').css('overflow', 'auto');
      };
    });
    $('.all-screen').click(function(){
      $('.slide-menu').animate({width: '0%'}, 500);
      $('.all-screen').css('display', 'flex')
      $('.all-screen').fadeToggle();
      $('body').css('overflow', 'auto');
      if (!($('.form-window').css('display', 'none'))) {
        $('.form-window').fadeToggle();
      }
    }).children().click(function(e) {
      return false
    });

});
