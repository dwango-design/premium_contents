import $ from 'jquery';
export default function sliderPremiumAnime() {
  $('#premium-contents-limited-anime').not('.slick-initialized').slick({
    prevArrow: '<div class="slider-btn btn-prev">PREV</div>',
    nextArrow: '<div class="slider-btn btn-next">NEXT</div>',
    lazyLoad: 'ondemand',

    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    responsive: [{
      breakpoint: 764,
      settings: 'unslick'
    }, ]
  });
};