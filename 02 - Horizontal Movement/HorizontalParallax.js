window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.scroll');

    var scrolled = window.pageYOffset;

    var parallaxRate = scrolled * 0.5;

    target.style.transform = 'translate3d('+parallaxRate+'px, 0px, 0px)';

});



