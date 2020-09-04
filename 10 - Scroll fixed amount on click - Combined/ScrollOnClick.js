$(document).ready(function (){
    $("#arrow").click(function (){
        $('html, body').animate(
            {scrollTop: $("#div2").offset().top}, 
            {duration: 2000,
            easing: "swing"}
            );
    });
});

