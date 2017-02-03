$(function(){
    $("#includeNavigation").load("includes/nav.html");
    $("#includeFilters").load("includes/filters.html");

    // Dashboard
    $("#includeDashboard").load("includes/dashboard.html");

    // Plan View
    $("#includeIterations").load("includes/work/iterations.html");
    $("#includePlanView").load("includes/work/plan.html");
    $("#includeDetailPanel").load("includes/work/detail-panel.html");

    // Board View
    $("#includeAgileCards").load("includes/work/board.html");

    $("#includeAddFooter").load("includes/add-footer.html");

    $("#includeFooter").load("includes/footer.html");

    $("#includeWarning").load("includes/warning.html");

    // Codebases
    $("#includeCodebase").load("includes/create/codebase.html");
    // Workspaces
    $("#includeWorkspace").load("includes/create/workspace.html");

    // Toolbar
    $("#includeToolbar").load("includes/toolbar.html");
});
