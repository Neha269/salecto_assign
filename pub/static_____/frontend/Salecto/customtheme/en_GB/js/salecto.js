define([
    'jquery',
    'mage/translate'
], $ => {
    if (typeof localStorage.price_mode === 'undefined') {
        localStorage.price_mode = true;
    }
    $('.logged-out .miniaccount .header-dropdown__block a span').html($.mage.__('My Account'));
    $('.breadcrumbs-mobile-button').appendTo('.breadcrumbs');
    $('.breadcrumbs-mobile-button span').click(function () {
        $('.breadcrumbs').toggleClass('active-breadcrumbs');
    });
    $('span.mobile-nav-title').click(function () {
        $(this).next('[data-content-type=\'tab-item\'] .sub-menu').slideToggle();
        $(this).toggleClass('active');
    });
});
