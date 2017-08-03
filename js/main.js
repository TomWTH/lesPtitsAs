$(function() {
  'use strict';
  var lesPtitsAs = {

    // Call or not my methods
    init: function() {
      // loading logo
      this.loadingLogo();
      this.stickyNav();

    },

    // Methods
    loadingLogo: function() {
      $(window).on('load', function() {
        $('.plop').addClass('nope');
      });
    },

    stickyNav : function() {
      var headerMinusNav = ($('.header').height())-($('.nav-desktop').height());
      $(window).scroll(function() {
        if ($(this).scrollTop()>=headerMinusNav) {
          $('.nav-desktop').addClass('sticky-nav');
        }
        else {
          $('.nav-desktop').removeClass('sticky-nav');
        }
      });
    },
  }
  // Call instance of my object
  lesPtitsAs.init();
});
