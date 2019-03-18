var cryptoInfo = {
    bitcoin: {
        title: "Donate Bitcoin",
        descr: "Please use this bitcoin address to donate.<br>Thanks for your contribution!",
        address: "100000000000000000000000",
        img: "qrcode_bitcoin.png"
    },

    ripple: {
        title: "Donate Ripple",
        descr: "Please use this ripple address to donate.<br>Thanks for your contribution!",
        address: "200000000000000000000000",
        img: "qrcode_ripple.png"
    },

    ethereum: {
        title: "Donate Ethereum",
        descr: "Please use this ethereum address to donate.<br>Thanks for your contribution!",
        address: "3000000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    stellar: {
        title: "Donate stellar",
        descr: "Please use this stellar address to donate.<br>Thanks for your contribution!",
        address: "4000000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    eos: {
        title: "Donate eos",
        descr: "Please use this eos address to donate.<br>Thanks for your contribution!",
        address: "5000000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    litecoin: {
        title: "Donate litecoin",
        descr: "Please use this litecoin address to donate.<br>Thanks for your contribution!",
        address: "6000000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    tron: {
        title: "Donate tron",
        descr: "Please use this tron address to donate.<br>Thanks for your contribution!",
        address: "7000000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    cardano: {
        title: "Donate cardano",
        descr: "Please use this cardano address to donate.<br>Thanks for your contribution!",
        address: "8000000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    monero: {
        title: "Donate monero",
        descr: "Please use this monero address to donate.<br>Thanks for your contribution!",
        address: "9000000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    nem: {
        title: "Donate nem",
        descr: "Please use this nem address to donate.<br>Thanks for your contribution!",
        address: "10100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    iota: {
        title: "Donate iota",
        descr: "Please use this iota address to donate.<br>Thanks for your contribution!",
        address: "11100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    dash: {
        title: "Donate dash",
        descr: "Please use this dash address to donate.<br>Thanks for your contribution!",
        address: "12100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    neo: {
        title: "Donate neo",
        descr: "Please use this neo address to donate.<br>Thanks for your contribution!",
        address: "13100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    cash: {
        title: "Donate cash",
        descr: "Please use this cash address to donate.<br>Thanks for your contribution!",
        address: "14100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    wave: {
        title: "Donate wave",
        descr: "Please use this wave address to donate.<br>Thanks for your contribution!",
        address: "15100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    omisego: {
        title: "Donate omisego",
        descr: "Please use this omisego address to donate.<br>Thanks for your contribution!",
        address: "16100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    nano: {
        title: "Donate nano",
        descr: "Please use this nano address to donate.<br>Thanks for your contribution!",
        address: "17100000000000000000000000",
        img: "qrcode_ethereum.png"
    },

    lisk: {
        title: "Donate lisk",
        descr: "Please use this lisk address to donate.<br>Thanks for your contribution!",
        address: "18100000000000000000000000",
        img: "qrcode_ethereum.png"
    }
};

$(function () {
    $('.center_more_ways').click(function () {
        $(this).next().toggle('fast');
        return false;
    });

    // popup +
    $('.js-popup').hide();

    $('.js-popup-link').on('click', function (e) {
        e.preventDefault();
        var dataPopup = $(this).data('popup');
        var dataCrypto = $(this).data('crypto');
        var popupCrypto = $(`.js-popup[data-popup=${dataPopup}]`);

        if (!dataCrypto) {
            return;
        }
        
        popupCrypto.attr("data-crypto", dataCrypto);
        setCryptoValue(popupCrypto);
        popupCrypto.addClass('is-active').fadeIn();
        
    });

    $('.js-popup-close').on('click', function () {
        $(this).parents('.js-popup').removeClass('is-active').fadeOut();
    });


    $('.js-wrap-popup').on('click', function (e) {
        if ($(this).has(e.target).length === 0) {
            $(this).removeClass('is-active').fadeOut();
        }
    });

    function setCryptoValue(popup) {
        var dataCrypto = popup.attr("data-crypto");

        if (!(cryptoInfo[dataCrypto])) {
            return;
        }

        var titleElement = $(popup).find("#cryptodonate-action");
        titleElement.html(cryptoInfo[dataCrypto].title);

        var descrElement = $(popup).find("#cryptodonate-helper");
        descrElement.html(cryptoInfo[dataCrypto].descr);

        var addressElement = $(popup).find("#cryptodonate-address");
        addressElement.val(cryptoInfo[dataCrypto].address);

        var imgElement = $(popup).find("#cryptodonate-qr");
        imgElement.attr("src", "images/" + cryptoInfo[dataCrypto].img);
    }
    // popup -

});

