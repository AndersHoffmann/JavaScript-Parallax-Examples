window.addEventListener('scroll', function(e) {

    const target = document.querySelector('.scroll');

    var scrolled = window.pageYOffset;

    var parallaxRate = scrolled / 2;

    target.style.transform = 'rotate('+parallaxRate+'deg)';

});



