window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.scroll');

    var scrolled = window.pageYOffset;

    var parallaxRate = scrolled * 0.1;

    target.style.transform = 'skew('+parallaxRate+'deg)';

});



