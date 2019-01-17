$(function(){
	$('.center_more_ways').click(function(){
        $(this).next().toggle('fast');
        return false;
    });

    $('.js-popup').hide();
    $('.js-overlay').hide();

    $('.js-popup-link').on('click', function(e) {
        e.preventDefault();
        let dataPopup = $(this).data('popup');
        $(`.js-popup[data-popup=${dataPopup}]`).addClass('is-active').fadeIn();
        $('.js-overlay').show();
    });

    $('.js-popup-close').on('click', function() {
        $(this).parents('.js-popup').removeClass('is-active').fadeOut();
        $('.js-overlay').hide();
    });



});	

