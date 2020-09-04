(function() {

    document.addEventListener("mousemove", parallax);
    const target = document.querySelector("#parallax");
   
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _mouseX = e.clientX;

        //specificér placering og bevægelseshastighed for lag
        let _depth1 = `${50 - (_mouseX - _w) * 0.02}% 50%`;
        let _depth2 = `${70 - (_mouseX - _w) * 0.03}% 50%`;
        let _depth3 = `${30 - (_mouseX - _w) * 0.1}% 50%`;
        
        var calculatedPosition = `${_depth3}, ${_depth2}, ${_depth1}`;

        target.style.backgroundPosition = calculatedPosition;
    }

})();