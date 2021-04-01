$(document).ready(function() {
    //Smooth scroll
    $(".item-link").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

    //Tabs js
    $('.designer-link').click(function() {
        $('.design-tab').addClass('active show');
        $('#Designers').addClass('in active show');

        $('.dev-tab').removeClass('active show');
        $('#Developers').removeClass('in active show');

        $('.finane-tab').removeClass('active show');
        $('#Finance-Experts').removeClass('in active show');

        $('.project-m-tab').removeClass('active show');
        $('#Project-Managers').removeClass('in active show');

        $('.product-m-tab').removeClass('active show');
        $('#Product-Managers').removeClass('in active show');
    });

    $('.developer-link').click(function() {
        $('.design-tab').removeClass('active show');
        $('#Designers').removeClass('in active show');

        $('.dev-tab').addClass('active show');
        $('#Developers').addClass('in active show');

        $('.finane-tab').removeClass('active show');
        $('#Finance-Experts').removeClass('in active show');

        $('.project-m-tab').removeClass('active show');
        $('#Project-Managers').removeClass('in active show');

        $('.product-m-tab').removeClass('active show');
        $('#Product-Managers').removeClass('in active show');
    });

    $('.project-m-link').click(function() {
        $('.design-tab').removeClass('active show');
        $('#Designers').removeClass('in active show');

        $('.dev-tab').removeClass('active show');
        $('#Developers').removeClass('in active show');

        $('.finane-tab').removeClass('active show');
        $('#Finance-Experts').removeClass('in active show');

        $('.project-m-tab').addClass('active show');
        $('#Project-Managers').addClass('in active show');

        $('.product-m-tab').removeClass('active show');
        $('#Product-Managers').removeClass('in active show');
    });

    $('.finance-link').click(function() {
        $('.design-tab').removeClass('active show');
        $('#Designers').removeClass('in active show');

        $('.dev-tab').removeClass('active show');
        $('#Developers').removeClass('in active show');

        $('.finane-tab').addClass('active show');
        $('#Finance-Experts').addClass('in active show');

        $('.project-m-tab').removeClass('active show');
        $('#Project-Managers').removeClass('in active show');

        $('.product-m-tab').removeClass('active show');
        $('#Product-Managers').removeClass('in active show');
    });

    $('.product-m-link').click(function() {
        $('.design-tab').removeClass('active show');
        $('#Designers').removeClass('in active show');

        $('.dev-tab').removeClass('active show');
        $('#Developers').removeClass('in active show');

        $('.finane-tab').removeClass('active show');
        $('#Finance-Experts').removeClass('in active show');

        $('.project-m-tab').removeClass('active show');
        $('#Project-Managers').removeClass('in active show');

        $('.product-m-tab').addClass('active show');
        $('#Product-Managers').addClass('in active show');
    });


    //mobile menu js
    $('.mobile-menu').click(function() {
        $('nav ul').toggleClass('open-menu');
        $('.mobile-menu').toggleClass('close-nav');
    });
    
	//Know more js
	$('#show-employment-data').click(function() {
		  $('#employment-data').slideToggle();
		  if ($('#show-employment-data').text() == "Know More") {
			$(this).text("Know Less")
		  } else {
			$(this).text("Know More")
		  }
	});
   
   $('#show-exp-data').click(function() {
		  $('#exp-data').slideToggle();
		  if ($('#show-exp-data').text() == "Know More") {
			$(this).text("Know Less")
		  } else {
			$(this).text("Know More")
		  }
	});
	
  $('#show-slide-data').click(function() {
		  $('#slide-more-data').slideToggle();
		  if ($('#show-slide-data').text() == "Know More") {
			$(this).text("Know Less")
		  } else {
			$(this).text("Know More")
		  }
	});
	
	
	
    // Slider js	
    var carousel = $('#clients-slider').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: false,
        dots: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        nav: true,
        singleItem: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2.5
            }
        }

    });

    checkClasses();
    carousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses() {
        var total = $('#clients-slider .owl-stage .owl-item.active').length;

        $('#clients-slider .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('#clients-slider .owl-stage .owl-item.active').each(function(index) {
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total > 1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }


    var carousel = $('#article-slider').owlCarousel({
        loop: false,
        margin: 5,
        autoplay: false,
        dots: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    });

    var carousel = $('.skills-slider-wrap').owlCarousel({
        loop: false,
        margin: 5,
        autoplay: false,
        dots: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }

    });

    var carousel = $('#special-mention-slider').owlCarousel({
        loop: false,
        margin: 5,
        autoplay: false,
        dots: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });

    var carousel = $('.portfolio-slider').owlCarousel({
        loop: false,
        margin: 5,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });


});