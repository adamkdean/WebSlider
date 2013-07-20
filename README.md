WebSlider
=========

I'm not quite sure how to describe this, "Lightweight single page slider" doesn't really seem to make that much sense when you think about it. It could be anything!

*Basically*, WebSlider is a project where you have all your "pages" on a single page inside divs, and the divs -- or slides as I call them -- fill the screen, no matter the height. You can then scroll from "page" to "page", allowing a multiple site feel on a single page.

I hope that makes sense.

See an example here: [WebSlider demo](http://imdsm.github.io/WebSlider/).

P.S, if you're implementing this, make sure you change the selector in `webslider.js` line 10: 
    
    $('p.button a').click(function(event) { ... }
       __________ <- this part

If you have any problems, [get in touch](http://www.adamkdean.co.uk/contact).