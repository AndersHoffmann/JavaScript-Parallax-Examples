window.addEventListener('scroll', function(e) {

    var scrolled = window.pageYOffset;

    //Autoscroll arrow
    var scrollMessage = document.getElementById("scrollMessage")
    var changePosition = window.innerHeight + 8 ;
    console.log(scrolled);
    console.log(changePosition);

    if(scrolled >= changePosition){
    scrollMessage.innerHTML = "Strong together";
    }
    if(scrolled < changePosition){
    scrollMessage.innerHTML = "Scroll to explore";
    }

    // Cloud 1 movement + scaling
    var cloud1 = document.getElementById("cloud1");
    var cloud1MovementRateX = scrolled * 0.1;
    var cloud1MovementRateY = scrolled * 0.5;
    var cloud1ScaleRate = scrolled*0.2;

    cloud1.style.transform = 'translate3d('+cloud1MovementRateX+'px, '+cloud1MovementRateY+'px, 0px) scale('+cloud1ScaleRate+', '+cloud1ScaleRate+')';

    // Cloud 2 movement + scaling

    var cloud2 = document.getElementById("cloud2");
    var cloud2MovementRateX = scrolled * 0.1;
    var cloud2MovementRateY = scrolled * 0.5;
    var cloud2ScaleRate = scrolled*0.2;

    cloud2.style.transform = 'translate3d('+cloud2MovementRateX+'px, '+cloud2MovementRateY+'px, 0px) scale('+cloud2ScaleRate+', '+cloud2ScaleRate+')';

    // Transparent Clouds movement + scaling

    var transparentCloud1 = document.getElementById("transparentCloud1");
    var transparentCloud2 = document.getElementById("transparentCloud2");
    var transparentCloudsMovementRateX = scrolled * 0.1;
    var transparentCloudsMovementRateY = scrolled * 0.5;
    var transparentCloudsScaleRate = scrolled*0.2;

    transparentCloud1.style.transform = 'translate3d('+transparentCloudsMovementRateX+'px, '+transparentCloudsMovementRateY+'px, 0px) scale('+transparentCloudsScaleRate+', '+transparentCloudsScaleRate+')';

    transparentCloud2.style.transform = 'translate3d('+transparentCloudsMovementRateX+'px, '+transparentCloudsMovementRateY+'px, 0px) scale('+transparentCloudsScaleRate+', '+transparentCloudsScaleRate+')';

    // Brunata & Zenner logo movement

    var brunataLogo = document.getElementById("brunataLogo");
    var zennerLogo = document.getElementById("zennerLogo");

    var brunataLogoMovementRate = scrolled * 0.5;
    var zennerLogoMovementRate = scrolled * 0.5;

        //if scrolling > threshhold 
    brunataLogo.style.transform = 'translate3d('+brunataLogoMovementRate+'px, 0px, 0px)';
    zennerLogo.style.transform = 'translate3d('+zennerLogo+'px, 0px, 0px)';
        //if scrolling <= threshhold
    brunataLogo.style.transform = 'translate3d(0px, '+brunataLogoMovementRate+'px, 0px)';
    zennerLogo.style.transform = 'translate3d(0px, '+zennerLogoMovementRate+'px, 0px)';


    // BrunataZenner logo movement, scaling, color change

    var brunataZennerLogo = document.getElementById("brunataZennerLogo");
    var brunataZennerLogoMovementRate = scrolled * 0.5;
    var brunataZennerLogoScalingRate = scrolled * 0.2;
    var brunataZennerColorChangeRate = scrolled * 0.5;

    brunataZennerLogo.style.color = `rgb(${brunataZennerColorChangeRate}, ${brunataZennerColorChangeRate}, ${brunataZennerColorChangeRate})`;

    brunataZennerLogo.style.transform = 'translate3d('+brunataZennerLogoMovementRate+'px, 0px, 0px) scale('+brunataZennerLogoScalingRate+', '+brunataZennerLogoScalingRate+')';

    // Slogan & description fade
            //Combiner til ét samlet element og brug fade effekt derpå. Div box eller andet. 
        
    var slogan1 = document.getElementById("domestic");
    var threshhold = 100;
    var sloganFateinRate = scrolled / 500; 

        //if position > threshhold
        if(scrolled > threshhold)
        {
            slogan1.animate(
        
                {opacity: sloganFateinRate}, 
        
                {duration: 20});

        }
        if(scrolled <= threshhold)
        {
            slogan1.animate(
        
                {opacity: 1}, 
        
                {duration: 20});
        }

    // Design elements fase in and mouse parallax

    // Skew colored boxes




});
