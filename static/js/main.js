var initApplication = (function() {
    'use strict';

    var $menuIcon = document.getElementsByClassName('menu-icon')[0],
        $offCanva = document.getElementsByClassName('off-canvas')[0],
        $siteWrap = document.getElementsByClassName('site-wrapper')[0];


    if($menuIcon) {
        $menuIcon.addEventListener('click', function() {
            toggleClass($menuIcon, 'close');
            toggleClass($offCanva, 'toggled');
            toggleClass($siteWrap, 'open');
        }, false);

        $menuIcon.addEventListener('mouseenter', function() {
            addClass($menuIcon, 'hover');
        });

        $menuIcon.addEventListener('mouseleave', function() {
            removeClass($menuIcon, 'hover');
        });
    }   
    
    function addClass(element, className) {
        element.className += " " + className;
    }

    function removeClass(element, className) {
        // Capture any surrounding space characters to prevent repeated
        // additions and removals from leaving lots of spaces.
        var classNameRegEx = new RegExp("\\s*" + className + "\\s*");
        element.className = element.className.replace(classNameRegEx, " ");
    }

    function toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        if (element.className.indexOf(className) === -1) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }


    // With options
    let b = baffle('.baffle', {
        characters: '<$ДГФѾЛѮС▒░/',
        speed: 75
    });

    b.reveal(1500);
      
    // scroll reveal https://github.com/jlmakes/scrollreveal
    window.sr = ScrollReveal();
    sr.reveal('.posts li', {
        container: '.site-wrapper', 
        reset: true,
        mobile: true,
        easing: 'ease-in-out',
        scale: 1, 
        duration: 900,
        delay: 0,
        distance: '0px'
    });

    //smooth-scrollbar
    var setScrollbar = function(){
        scrollbar = Scrollbar.init(document.getElementById('full-wrapper'), {
            speed: 1.0,
            damping: 0.1,
            overscrollDamping: 0.2,
            thumbMinSize: 20,
            renderByPixels: true,
            alwaysShowTracks: false,
            continuousScrolling: 'auto',
            overscrollEffect: 'bounce',
            overscrollEffectColor: '#000'
        });
    };

    // Open Twitter/share in a Pop-Up
    var $popup = document.getElementsByClassName('popup')[0];
    if (!$popup) {
        return;
    }
    $popup.addEventListener('click', function(e) {
        e.preventDefault()
        var width  = 575,
            height = 400,
            left   = (document.documentElement.clientWidth  - width)  / 2,
            top    = (document.documentElement.clientHeight - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;

        window.open(url, 'twitter', opts);

        return false;
    });

});

// document ready handler
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
}
