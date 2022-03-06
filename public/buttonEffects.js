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

    $(".menu-btn").click(function()
    {
        //open up the sidebar now
        $(".sidebar-menu").width("250px");
    });

    $(".close-btn").click(function()
    {
        //close up the sidebar now
        $(".sidebar-menu").width("0");
    });

});