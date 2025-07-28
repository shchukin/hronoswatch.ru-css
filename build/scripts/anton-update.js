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


})(jQuery);

