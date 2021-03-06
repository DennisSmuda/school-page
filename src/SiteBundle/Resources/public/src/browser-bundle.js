/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	  console.log('Document ready');
	
	  $('.intro__carousel').slick({
	    slidesToShow: 1,
	    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg></button>',
	    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M360.73 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/></svg> </button>'
	  });
	
	  // Menu code
	  var $hamburger = $('.hamburger');
	  var $mobileNav = $('nav.mobile');
	  var $mobileOverlay = $('.mobile-menu-overlay');
	  $hamburger.on('click', function () {
	    console.log('butz');
	    $mobileNav.toggleClass('hidden');
	    $mobileOverlay.toggleClass('hidden');
	  });
	
	  $mobileOverlay.on('click', function () {
	    $mobileOverlay.toggleClass('hidden');
	    $mobileNav.toggleClass('hidden');
	  });
	
	  var FadeTransition = Barba.BaseTransition.extend({
	    start: function start() {
	      /**
	       * This function is automatically called as soon the Transition starts
	       * this.newContainerLoading is a Promise for the loading of the new container
	       * (Barba.js also comes with an handy Promise polyfill!)
	       */
	
	      // As soon the loading is finished and the old page is faded out, let's fade the new page
	      Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
	    },
	
	    fadeOut: function fadeOut() {
	      /**
	       * this.oldContainer is the HTMLElement of the old Container
	       */
	
	      return $(this.oldContainer).animate({ opacity: 0 }).promise();
	    },
	
	    fadeIn: function fadeIn() {
	      /**
	       * this.newContainer is the HTMLElement of the new Container
	       * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
	       * Please note, newContainer is available just after newContainerLoading is resolved!
	       */
	
	      var _this = this;
	      var $el = $(this.newContainer);
	
	      $(this.oldContainer).hide();
	
	      $el.css({
	        visibility: 'visible',
	        opacity: 0
	      });
	
	      $el.animate({ opacity: 1 }, 400, function () {
	        /**
	         * Do not forget to call .done() as soon your transition is finished!
	         * .done() will automatically remove from the DOM the old Container
	         */
	
	        _this.done();
	      });
	    }
	  });
	
	  Barba.Pjax.getTransition = function () {
	    return FadeTransition;
	  };
	
	  Barba.Pjax.start();
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=browser-bundle.js.map