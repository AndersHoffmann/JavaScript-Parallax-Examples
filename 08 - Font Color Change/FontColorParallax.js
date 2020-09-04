const [red, green, blue] = [0, 0, 128]

const text = document.querySelector('.scroll')

window.addEventListener('scroll', () => {

    let y = 1 + (window.scrollY || window.pageYOffset) / 100

    var scrolled = window.pageYOffset;
    var colorChangeRate = scrolled * 5;
    var movementRate = 2 * scrolled * -1;
    var scalingRate = 1 + scrolled * -0.004;
    
    if(scrolled < 150){
    text.style.color = `rgb(${colorChangeRate}, ${colorChangeRate}, ${colorChangeRate})`;
    text.style.transform = 'translate3d('+movementRate+'px, 0px, 0px) scale('+scalingRate+', '+scalingRate+')';
    }   
  

})
