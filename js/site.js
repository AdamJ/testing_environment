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
})(jQuery);;