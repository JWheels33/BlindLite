$(document).ready( function(){
    //Set the height to the inner height
    $("body").height(window.innerHeight);

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
});