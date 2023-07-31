$(function () {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});

	if (window.cookieconsent) {
		window.cookieconsent.initialise({
			"palette": {
				"popup": {
					"background": "#000"
				},
				"button": {
					"background": "#f1d600"
				}
			},
			"position": "bottom-right",
			"content": {
				"href": "https://ngschool.eu/gdpr_policy/"
			}
		});
	}

	$('.contact-form form').on('submit', function(event) {
		event.preventDefault();

		populateRecaptchaInput(submitContactForm);
	});

	function populateRecaptchaInput(callback) {
		grecaptcha.execute('6LeqhtwUAAAAAAhDLg0h3XsTXzg0kVeSZl1hNae1', {action: 'homepage'}).then(function(token) {
			$('.contact-box form input[name="g-recaptcha-response"]').val(token)
		});

		if (typeof callback === 'function') {
			callback();
		}
	}

	function submitContactForm() {
		setTimeout(
			function() {
				$('.contact-form form').unbind('submit').submit();
			}, 1000
		);
	}
	
	function offsetAnchor() {
		if (location.hash.length !== 0) {
			window.scrollTo(window.scrollX, window.scrollY - 100);
		}
	}

	window.addEventListener("hashchange", offsetAnchor);
	window.setTimeout(offsetAnchor, 0);

	// Shuffle js filter and masonry
	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});
		myShuffle.filter(['organizers', 'speakers']);

		var categoriesToSort = {
			'speakers': 'a',
			'organizers': 'b',
			'organizers-past-editions': 'c',
		};

		myShuffle.sort({
			by: function(element) {
				return categoriesToSort[$(element).data('groups')[0]];
			},
			reverse: false,
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	// $('.portfolio-single-slider').slick({
	// 	infinite: true,
	// 	arrows: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000

	// });

	// $('.clients-logo').slick({
	// 	infinite: true,
	// 	arrows: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000
	// });

	$('.testimonial-slider').slick({
		slidesToShow: 4,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 612,
			  settings: {
				slidesToShow: 1,
			  }
			}
		  ]
	});


	// Magnific Popup Image
	$('.portfolio-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: true,
		fixedBgPos: true
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

});