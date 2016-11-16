// initial load of the Work module
$(function() {
    $(window).load(function() {
        if($('.work-active').hasClass('active')) {
            $('.work-active > *').removeClass('active')
            $('.home-active').addClass('active')
            $('.home-places').addClass('active')
        } else {
            $('.home-active').addClass('active')
            $('.home-places').addClass('active')
        };
    });
});

// add active class to Board when clicked
// $(function() {
//     $(window).load(function() {
//         $('.board-active a').click(function() {
//             if($('.plan-active').hasClass('active')) {
//                 $('.plan-active').removeClass('active')
//                 $('.board-active').addClass('active')
//             } else {
//                 $('.board-active').addClass('active')
//             }
//         });
//     });
// });