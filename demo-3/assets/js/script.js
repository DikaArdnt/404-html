
(function ($) {
  "use strict";

  /*========== Loader start ================*/
  $(window).on('load', function () {
    $('#loader-wrapper').fadeIn();
    setTimeout(function () {
      $('#loader-wrapper').fadeOut();
    }, 500);
  });
  /*========== Star loop start ================*/
  for (var i = 1; i <= 200; i++) {
    $('.galaxy').append('<div class="star"></div>');
  }

})(jQuery);
