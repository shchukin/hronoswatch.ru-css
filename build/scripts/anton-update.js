(function ($) {

  /* Tabs */

  $('.tabs__tag').on('click', function (event) {
    event.preventDefault();
    const $tabs = $(this).parents('.tabs');
    const index = $(this).index();

    const $handler = $tabs.find('.tabs__handler');
    const label = $(this).text();

    /* tag */
    $tabs.find('.tabs__tag--current').removeClass('tabs__tag--current');
    $(this).addClass('tabs__tag--current');

    /* body */
    $tabs.find('.tabs__item--current').removeClass('tabs__item--current');
    $tabs.find('.tabs__item:eq('+index+')').addClass('tabs__item--current');
  });


  /* Swiper */
  document.querySelectorAll('.swiper--js-init-feedback').forEach((element, index) => {
    new Swiper(element, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoHeight: true,
      spaceBetween: 24,
      pagination: {
        el: element.querySelector('.swiper-pagination'),
        type: 'fraction',
      },
      navigation: {
        nextEl: element.querySelector('.swiper-button-next'),
        prevEl: element.querySelector('.swiper-button-prev'),
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          autoHeight: false,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  });


})(jQuery);

