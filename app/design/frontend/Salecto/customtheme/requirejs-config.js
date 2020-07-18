var config = {
    map: {
        '*': {
            flexisel: 'js/jquery.flexisel',
            toggleGiftCard: 'Ayko_CustomGiftcard/js/toggle-gift-card'
        }
    },
    deps: [
        'flexisel',
        'js/salecto'
    ],
    paths: {
        'flexslider': 'js/jquery.flexslider.min'
    },
    shim: {
        'flexisel': {
            deps: ['jquery']
        },
        'flexslider': {
            deps: ['jquery']
        }
    }
};
