
$(document).ready(function() {
  console.log('Document ready');



  $('.intro__carousel').slick({
    slidesToShow: 1,
    prevArrow: `<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M360.73 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/></svg> </button>`
  });


  // Menu code
  let $hamburger = $('.hamburger');
  let $mobileNav = $('nav.mobile');
  let $mobileOverlay = $('.mobile-menu-overlay');
  $hamburger.on('click', () => {
    console.log('butz');
    $mobileNav.toggleClass('hidden');
    $mobileOverlay.toggleClass('hidden');
  });

  $mobileOverlay.on('click', () => {
    $mobileOverlay.toggleClass('hidden');
    $mobileNav.toggleClass('hidden');
  });

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      /**
       * This function is automatically called as soon the Transition starts
       * this.newContainerLoading is a Promise for the loading of the new container
       * (Barba.js also comes with an handy Promise polyfill!)
       */

        // As soon the loading is finished and the old page is faded out, let's fade the new page
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      /**
       * this.oldContainer is the HTMLElement of the old Container
       */

      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      /**
       * this.newContainer is the HTMLElement of the new Container
       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
       * Please note, newContainer is available just after newContainerLoading is resolved!
       */

      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */

        _this.done();
      });
    }
  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };


  Barba.Pjax.start();
});
