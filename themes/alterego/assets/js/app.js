/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*-----------------------------------------------------------------------------------
 *  Derechos de autor (c) Cinco 04 Digital SA de CV. Todos los derechos reservados.
 *---------------------------------------------------------------------------------*/
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
/*-----------------------------------------------------------------------------------
 *  Derechos de autor (c) Cinco 04 Digital SA de CV. Todos los derechos reservados.
 *---------------------------------------------------------------------------------*/

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var firstPanel = $('.accordion').children().first();
var firstPanelH = $(firstPanel).find('.reveal').prop('scrollHeight') + 'px';

$(firstPanel).parent().toggleClass('active');
$(firstPanel).find('.reveal').css('max-height', firstPanelH);

$('.accordion').children().first().addClass('active');
$('.accordion-item h3').on('click', function () {
	//get panel height
	panelH = $(this).siblings('.reveal').prop('scrollHeight') + 'px';

	//remove active from all
	$('.accordion-item').removeClass('active');
	$('.reveal').css('max-height', 0);

	//add to current
	$(this).parent().toggleClass('active');
	$(this).siblings('.reveal').css('max-height', panelH);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

$('.modal-toggle').on('click', function (ev) {
	ev.preventDefault();

	var target = $(this).attr('href');
	$(target).toggleClass('active');
});
$('.modal-background').on('click', function () {
	$(this).parent().removeClass('active');
});
$('.modal .close').on('click', function (ev) {
	ev.preventDefault();

	$(this).parent().parent().removeClass('active');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var firstTabLink = $('.tabs').children().first();
var firstTabContent = $('.tabs-content').children().first();

$(firstTabLink).addClass('active');
$(firstTabContent).addClass('active');

$('.tab-link').on('click', function (ev) {
	ev.preventDefault();

	//define target panel
	var target = $(this).attr('href');

	//remove active from all
	$('.tab-link').removeClass('active');
	$(this).addClass('active');

	//add active to current
	$('.tab-content').removeClass('active');
	$(target).addClass('active');

	//scroll
	$('.tabs-container').animate({ scrollLeft: '+=50' }, 500);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

$(document).ready(function () {
	new WOW().init();
})
//share Buttons
;(function ($) {

	/**
  * jQuery function to prevent default anchor event and take the href * and the title to make a share popup
  *
  * @param  {[object]} e           [Mouse event]
  * @param  {[integer]} intWidth   [Popup width defalut 500]
  * @param  {[integer]} intHeight  [Popup height defalut 400]
  * @param  {[boolean]} blnResize  [Is popup resizeabel default true]
  */
	$.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {

		// Prevent default anchor event
		e.preventDefault();

		// Set values for window
		intWidth = intWidth || '500';
		intHeight = intHeight || '400';
		strResize = blnResize ? 'yes' : 'no';

		// Set title and open popup with focus on it
		var strTitle = typeof this.attr('title') !== 'undefined' ? this.attr('title') : 'Social Share',
		    strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
		    objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
	};

	/* ================================================== */

	$(document).ready(function ($) {
		$('.customer.share').on("click", function (e) {
			$(this).customerPopup(e);
		});
	});
})(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

$('.menu').click(function (event) {
	$('.navbar-links').toggleClass('active');
});
$('.open-overlay').click(function () {
	$('.open-overlay').css('pointer-events', 'none');
	var overlay_navigation = $('.overlay-navigation'),
	    top_bar = $('.bar-top'),
	    middle_bar = $('.bar-middle'),
	    bottom_bar = $('.bar-bottom');

	overlay_navigation.toggleClass('overlay-active');
	if (overlay_navigation.hasClass('overlay-active')) {

		top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
		middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
		bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
		overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
		overlay_navigation.velocity('transition.slideLeftIn', {
			duration: 300,
			delay: 0,
			begin: function begin() {
				$('nav ul a li').velocity('transition.perspectiveLeftIn', {
					stagger: 150,
					delay: 0,
					complete: function complete() {
						$('nav ul a li p').velocity({
							opacity: [1, 0]
						}, {
							delay: 10,
							duration: 140
						});
						$('.open-overlay').css('pointer-events', 'auto');
					}
				});
			}
		});
	} else {
		$('.open-overlay').css('pointer-events', 'none');
		top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
		middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
		bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
		overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
		$('nav ul a li').velocity('transition.perspectiveRightOut', {
			stagger: 150,
			delay: 0,
			complete: function complete() {
				overlay_navigation.velocity('transition.fadeOut', {
					delay: 0,
					duration: 300,
					complete: function complete() {
						$('nav ul a li p').velocity({
							opacity: [0, 1]
						}, {
							delay: 0,
							duration: 50
						});
						$('.open-overlay').css('pointer-events', 'auto');
					}
				});
			}
		});
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);