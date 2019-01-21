(function($) {
	"use strict"; // Start of use strict

	var $body = $(document.body);

	var mapping = {
		overview: "Startseite",
		background: "Hintergrund",
		offer: "MeinAngebot",
		about: "UeberMich",
		councelling: "Einzelberatung",
		workshops: "Workshops",
		contact: "Kontakt"
	};

	function setBackground(target) {
		var id = $(target).attr("id");
		var paeId = mapping[id];
		var lastPaeField, backgroundSet = false;
		if (paeId) {
			if (PAE[paeId]) {
				lastPaeField = PAE[paeId][PAE[paeId].length-1];
				if (lastPaeField.startsWith("#")) {
					$body.css("background-color", lastPaeField);
					backgroundSet = true;
				}
			}
		}
		if (!backgroundSet) {
			$body.css("background-color", "#fff");
		}
	}

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				setBackground(target);
				$('html, body').animate({
					scrollTop: (target.offset().top)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#sideNav'
	});

	$(document).ready(function() {
		$('.pae-section').css('background', PAE.Hintergrundfarbe);
	});


})(jQuery); // End of use strict
