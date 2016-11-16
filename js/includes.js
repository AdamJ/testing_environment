$(function(){
    $("#includeNavigation").load("includes/nav.html");
    $("#includeFilters").load("includes/filters.html"); 

    // Dashboard
    $("#includeDashboard").load("includes/dashboard.html");

    // Plan View
    $("#includePlanView").load("includes/work/plan.html");

    // Board View
    $("#includeAgileCards").load("includes/work/board.html");

    $("#includeFooter").load("includes/footer.html");
});