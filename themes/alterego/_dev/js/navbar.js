$('.menu').click(function(event) {
	$('.navbar-links').toggleClass('active')
})
$('.open-overlay').click(function() {
	$('.open-overlay').css('pointer-events', 'none');
	var overlay_navigation = $('.overlay-navigation'),
		top_bar = $('.bar-top'),
		top_bar_home = $('.bar-top-home'),
		middle_bar = $('.bar-middle'),
		middle_bar_home = $('.bar-middle-home'),
		bottom_bar = $('.bar-bottom');
		bottom_bar_home = $('.bar-bottom-home');

	overlay_navigation.toggleClass('overlay-active');
	if (overlay_navigation.hasClass('overlay-active')) {

		top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
		top_bar_home.removeClass('animate-out-top-bar-home').addClass('animate-top-bar-home');
		middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
		middle_bar_home.removeClass('animate-out-middle-bar-home').addClass('animate-middle-bar-home');
		bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
		bottom_bar_home.removeClass('animate-out-bottom-bar-home').addClass('animate-bottom-bar-home');
	  overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
	  overlay_navigation.velocity('transition.slideLeftIn', {
		duration: 300,
		delay: 0,
		begin: function() {
		  $('nav ul a li').velocity('transition.perspectiveLeftIn', {
			stagger: 150,
			delay: 0,
			complete: function() {
			  $('nav ul a li p').velocity({
				opacity: [1, 0],
			  }, {
				delay: 10,
				duration: 140
			  });
			  $('.open-overlay').css('pointer-events', 'auto');
			}
		  })
		}
	  })

	} else {
	  $('.open-overlay').css('pointer-events', 'none');
		top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
		top_bar_home.removeClass('animate-top-bar-home').addClass('animate-out-top-bar-home');
		middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
		middle_bar_home.removeClass('animate-middle-bar-home').addClass('animate-out-middle-bar-home');
		bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
		bottom_bar_home.removeClass('animate-bottom-bar-home').addClass('animate-out-bottom-bar-home');
	  overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
	  $('nav ul a li').velocity('transition.perspectiveRightOut', {
		stagger: 150,
		delay: 0,
		complete: function() {
		  overlay_navigation.velocity('transition.fadeOut', {
			delay: 0,
			duration: 300,
			complete: function() {
			  $('nav ul a li p').velocity({
				opacity: [0, 1],
			  }, {
				delay: 0,
				duration: 50
			  });
			  $('.open-overlay').css('pointer-events', 'auto');
			}
		  });
		}
	  })
	}
  })