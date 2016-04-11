var scrollvalue;
var lastPos = 0;
var menu = $('nav');
var head = $('header');
var foot = $('footer');



function scrollmenu() {
    scrollvalue = $(this).scrollTop();
    
    if (scrollvalue > lastPos ) {
        console.log("Scrolling down");
        lastPos = scrollvalue - 10;
        // Scrollvalue -10 regelt dat wanneer je heel langzaam omhoog scrolt het menu en header niet direct in beeld komt.
        
        menu.css('top', '-200px');
        menu.css('opacity', '.9');
        head.css('top', '-200px');
        
        foot.css('bottom', '0');
        
    }
    
    else {
        console.log("Scrolling up");
        
        lastPos = scrollvalue;
        menu.css('top', '50px');
        head.css('top', '0');
        foot.css('bottom', '-100px');
        menu.css('opacity', '1');
        
        
    }
    console.log("Waarde is: " + scrollvalue);
}


$(window).on('scroll', scrollmenu);