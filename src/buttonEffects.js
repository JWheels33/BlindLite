$(document).ready( function(){

    // Listen to all the buttons for the press event
    $(".button-container > div").not(".button-all").click(function() {
        $(this).toggleClass("pressed");
    });

    //Use the "All" button to toggle everything
    $(".button-all").click(function()
    {
        if($(this).hasClass("pressed"))
        {
            $(".button-container > div").removeClass("pressed");
        }
        else
        {
            $(".button-container > div").addClass("pressed");
        }
    });

    // These pieces and below will need to be refactored out into the sidbar file
    // at some point
    var menuOpen = false;

    $(".menu-btn").click(function()
    {
        if(menuOpen)
        {
            $(".sidebar-menu").width("0");
            menuOpen = false;
            return;
        }
        //open up the sidebar now
        $(".sidebar-menu").width("250px");

        menuOpen = true;
    });

    $(".close-btn").click(function()
    {
        menuOpen = false;
        //close up the sidebar now
        $(".sidebar-menu").width("0");
    });

});