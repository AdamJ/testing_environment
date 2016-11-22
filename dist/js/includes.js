$(function(){
    $("#includeNavigation").load("includes/nav.html");
    $("#includeFilters").load("includes/filters.html"); 

    // Dashboard
    $("#includeDashboard").load("includes/dashboard.html");

    // Plan View
    $("#includeIterations").load("includes/work/iterations.html");
    $("#includePlanView").load("includes/work/plan.html");

    // Board View
    $("#includeAgileCards").load("includes/work/board.html");

    $("#includeAddFooter").load("includes/add-footer.html");

    $("#includeFooter").load("includes/footer.html");

    $("#includeWarning").load("includes/warning.html");
});