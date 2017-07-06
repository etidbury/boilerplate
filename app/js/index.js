'use strict';

if (process.env.NODE_ENV !== 'production') {
    // Enable React devtools
    //window.React = React;
}

let to;

jQuery(document).ready(function () {

    var mx = 0;
    var my = 0;

    $(document).mousemove(function(e) { // no expensive logic here
        mx = e.clientX;
        my = e.clientY;
    });
    $.fn.isMouseOverMe = function() {

        var $el = $(this);
        var el_xmin = $el.offset().left;
        var el_ymin = $el.offset().top;
        var el_xmax = el_xmin + $el.width();
        var el_ymax = el_ymin + $el.height();
        return mx >= el_xmin && mx <= el_xmax && my >= el_ymin && my <= el_ymax;
    };


    const $packshotMenu = jQuery('.menu');

   // jQuery('.packshot-wrap').toggleClass('active', true);return;//fordebug

    jQuery('.packshot-wrap').bind('mouseenter', function () {

        $(this).toggleClass('active', true);

        clearInterval(to);
        to=setInterval(function(){
            try {

                if ($packshotMenu.isMouseOverMe() || $(this).isMouseOverMe()) {
                    return;
                }

            }catch(err){
                //suppress
                console.log("index.js:err (30)",err);//fordebug: debug print
            }

            $(this).toggleClass('active', false);

        }.bind(this),1000);

    });

});
