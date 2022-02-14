$(document).ready( function(){

    //Hacky nonsense to work around the "browser chrome"
    // $(window).resize(function() {
    //     $("body").height(window.innerHeight*0.98);
    //     // console.log(document.documentElement.clientHeight);
    // });

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