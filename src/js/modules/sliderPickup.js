import $ from 'jquery';
export default function sliderPickup() {

    $('.slider-list-pickup').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '10%',
        autoplay: true,
        autoplaySpeed: 2500,

        responsive: [{
                breakpoint: 764,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '16%',
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10%',
                    arrows: false
                }
            },
        ]
    });
};