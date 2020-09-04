window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.scroll');

    var scrolled = window.pageYOffset;

    if(scrolled > 100)
    {
        target.style.fontFamily = 'Monospace';
    }
    if(scrolled <= 100)
    {
        target.style.fontFamily = 'Montserrat';
    }

});



