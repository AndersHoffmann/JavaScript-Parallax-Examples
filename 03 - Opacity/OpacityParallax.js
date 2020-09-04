window.addEventListener('scroll', function(e) {

    const target =  $('li');

    var scrolled = window.pageYOffset;

    var parallaxRate = scrolled/500;

    target.animate(
        
        {opacity: parallaxRate}, 

        {duration: 20});
    
});



