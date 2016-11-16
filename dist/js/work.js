// initial load of the Work module
$(function() {
    $(window).load(function() {
        if($('.home-active').hasClass('active')) {
            $('.home-active > *').removeClass('active')
            $('.work-active').addClass('active')
            $('.plan-active').addClass('active')
        } else {
            $('.work-active').addClass('active')
            $('.plan-active').addClass('active')
        };
    });
});

// add active class to Board when clicked
$(function() {
    $(window).load(function() {
        $('.board-active a').click(function() {
            if($('.plan-active').hasClass('active')) {
                $('.plan-active').removeClass('active')
                $('.board-active').addClass('active')
            } else {
                $('.board-active').addClass('active')
            }
        });
    });
});