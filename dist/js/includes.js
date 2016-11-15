$(function(){
    $("#includeNavigation").load("includes/nav.html");
    $("#includeFilters").load("includes/filters.html"); 

    // Dashboard
    $("#includeDashboard").load("includes/dashboard.html");

    // Plan View
    $("#includePlanView").load("includes/work/plan-view.html");

    // Agile Card View
    $("#includeAgileCards").load("includes/work/board-view.html");

    $("#includeFooter").load("includes/footer.html");
});