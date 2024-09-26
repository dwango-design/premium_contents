import $ from 'jquery';
export default function sliderMinogashi() {
  /* -----------------------------------------------
    minogashi-slider - 見逃し
    ----------------------------------------------- */
  $('.minogashi-slider').each(function () {
    var slideCount = $(this).children('li').length;
    var randomStart = Math.floor(Math.random() * slideCount);
    $(this).not('.slick-initialized').slick({
      prevArrow: '<div class="slider-btn btn-prev">PREV</div>',
      nextArrow: '<div class="slider-btn btn-next">NEXT</div>',
      lazyLoad: 'ondemand',
      initialSlide: randomStart,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      responsive: [{
        breakpoint: 764,
        settings: 'unslick'
      }, ]
    });
  });

  /* -----------------------------------------------
  slider-list-ranking - リアルタイムランキング
  ----------------------------------------------- */
  $('.slider-list-ranking').not('.slick-initialized').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    prevArrow: '<div class="slider-btn btn-prev">PREV</div>',
    nextArrow: '<div class="slider-btn btn-next">NEXT</div>',
    lazyLoad: 'ondemand',
    responsive: [{
      breakpoint: 764,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }, ]
  });
};