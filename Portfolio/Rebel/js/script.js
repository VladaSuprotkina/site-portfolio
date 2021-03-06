$(document).ready(function(){
$('.read-more-content').addClass('hide')
$('.read-more-show, .read-more-hide').removeClass('hide')

$('.read-more-show').on('click', function(e) {
    $(this).next('.read-more-content').removeClass('hide');
    $(this).addClass('hide');
    e.preventDefault();
});

$('.read-more-hide').on('click', function(e) {
    var p = $(this).parent('.read-more-content');
    p.addClass('hide');
    p.prev('.read-more-show').removeClass('hide');
    e.preventDefault();
});




    let slider = $('.top-slider'); 
    
    let slidesCount = 1;
    let currentSlide = 1;
    
    let sliderCounterElement = document.createElement('div');
    sliderCounterElement.classList.add('slider-counter');
    let spanCurrentSlideElement = document.createElement('span');
    spanCurrentSlideElement.classList.add('slider-counter-current');
    let spanCounterTotalElement = document.createElement('span');
    spanCounterTotalElement.classList.add('slider-counter-total');


    var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        $(spanCurrentSlideElement).text(currentSlide);
        $(spanCounterTotalElement).text(slidesCount);
    };
    
    slider.on('init', function(event, slick) {
        slider.append(sliderCounterElement);
        sliderCounterElement.append(spanCurrentSlideElement);
        sliderCounterElement.append(spanCounterTotalElement);
        slidesCount = slick.slideCount;
        updateSliderCounter(slick);
    });
    
    slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });
    
    slider.slick();
    $(function() {
        $('.responsive-menu').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            mobileFirst: true,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1140,
                    settings: 'unslick'
                }
            ]
        });

        $(window).on('resize', function() {
            $('.responsive-menu').slick('resize');
        });
    });
});
