

$(function () {
    $('.center_more_ways').click(function () {
        $(this).next().toggle('fast');
        return false;
    });

    // popup +
    $('.js-popup').hide();

    $('.js-popup-link').on('click', function (e) {
        e.preventDefault();
        let dataPopup = $(this).data('popup');
        $(`.js-popup[data-popup=${dataPopup}]`).addClass('is-active').fadeIn();
    });

    $('.js-popup-close').on('click', function () {
        $(this).parents('.js-popup').removeClass('is-active').fadeOut();
    });


    $('.js-wrap-popup').on('click', function (e) {
        if ($(this).has(e.target).length === 0) {
            $(this).removeClass('is-active').fadeOut();
        }
    });
    // popup -

});

