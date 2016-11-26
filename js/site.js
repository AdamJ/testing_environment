$(function() {
    $(document).ready(function() {
        // Initialize the vertical navigation
        $().setupVerticalNavigation(true);
        $("input[type='checkbox']").change(function (e) {
        if ($(this).is(":checked")) {
            $(this).closest('.list-group-item').addClass("active");
        } else {
            $(this).closest('.list-group-item').removeClass("active");
        }
        });
        // Upon clicking the find button, show the find dropdown content
        $(".btn-find").click(function () {
        $(this).parent().find(".find-pf-dropdown-container").toggle();
        });
        // Upon clicking the find close button, hide the find dropdown content
        $(".btn-find-close").click(function () {
        $(".find-pf-dropdown-container").hide();
        });
    });
    /*Menu and Search triggers*/
    $('.trigger--menu').click(function () {
        $('.ug-menuButtonDesk').toggleClass('active--menu');
        $('.trigger--menu').toggleClass('button-translate');
    });
    // Close search when click target is something else
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.ug-menuButtonDesk').length) {
            $('.ug-menuButtonDesk').removeClass('active--menu');
            $('.trigger--menu').removeClass('button-translate');
        }
    });
});