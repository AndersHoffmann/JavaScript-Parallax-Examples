window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.scroll');

    var scrolled = window.pageYOffset;

    var parallaxRate = scrolled * 0.01;

    target.style.transform = 'scale('+parallaxRate+', '+parallaxRate+')';

});



