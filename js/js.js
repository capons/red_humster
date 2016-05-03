var main = (function () {
    doConstruct = function () {
        this.init_callbacks = [];
    };
    doConstruct.prototype = {
        add_init_callback : function (func) {
            if (typeof(func) == 'function') {
                this.init_callbacks.push(func);
                return true;
            }
            else {
                return false;
            }
        }
    };
    return new doConstruct;
})();
$(document).ready(function () {
    $.each(main.init_callbacks, function (index, func) {
        func();
    });
});
function move_line_horizontal(line_id,width,delay,dot_delay,speed){
    if(isScrolledIntoView(line_id) == true) {
        setTimeout(function () {
            line_id.css('display', 'block');
        }, dot_delay);
        setTimeout(function () {
            if(!speed) {
                line_id.css("width", width + 'px');
            } else {
                line_id.css("width", width + 'px');
                line_id.css({'transition-duration': speed+'s'})
            }
        }, delay);
    }


}
//line move vertical
function move_line_vertical(line_id,height,delay,dot_delay,speed){
    if(isScrolledIntoView(line_id) == true) {
        setTimeout(function () {
            line_id.css('display', 'block');
        }, dot_delay);
        setTimeout(function () {
            if(!speed) {
                line_id.css("height", height + 'px');
            } else {
                line_id.css("height", height + 'px');
                line_id.css({'transition-duration': speed+'s'})
            }
        }, delay);
    }
}
//line move horizontal
function opacity_block (block_id,delay) {
    if(isScrolledIntoView(block_id) == true) {
        setTimeout(function () {
            block_id.fadeTo(2500, 1);
        }, delay);
    }
}
//detect div in screen view
function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
var web_in = (function () { //when web is ready do next
    var doConstruct = function () {
        main.add_init_callback(this.site_header);
        main.add_init_callback(this.slide_header_elements);
        main.add_init_callback(this.slide_first_screen_elements);
        main.add_init_callback(this.smooth_scrolling);
    };
    doConstruct.prototype = {
        site_header: function () {
            //vpw = $(window).width();
            vph = $(window).height();
            if(vph > 700) {
                $('.w-header').css({'height': vph + 'px'}); //header height
            } else {
                $('.w-header').css({'height': 700 + 'px'}); //header height
            }
            var scroll_header = function(){
                $(window).one("scroll",(function(){
                    $('html,body').animate({
                        scrollTop: $('#first-screen').offset().top
                    }, {
                        duration: 'slow',
                        easing: 'swing'
                    });
                }));
            };
            scroll_header();
        },
        slide_header_elements: function () { //#first-screen
            move_line_horizontal($('#whant-line-bottom'),130,1000,900); //div , whidth , animation delay , line show timeout
            move_line_vertical($('#whant-line-right'),40,1000,900);
            opacity_block($('#h-p-t-whant'),2800);
            opacity_block($('#h-p-t-pp'),3300);
            opacity_block($('#h-p-t-ppp'),3700);
            opacity_block($('#h-p-t-pp-cont'),4000);
            move_line_horizontal($('#h-p-t-line-top'),155,4000,3900);
            move_line_vertical($('#h-p-t-line-right'),42,4000,3900);
            opacity_block($('#h-p-t-t-show'),5500);
            opacity_block($('#take-action'),6000);
        },
        slide_first_screen_elements: function () { //#first-screen
            $( window ).scroll(function() {
                //first line block
                move_line_vertical($('#first-screen-ng-line-right'),65,500,400,1);
                move_line_horizontal($('#first-screen-ng-line-bottom'),85,1400,1300,1);
                opacity_block($('#first-screen-ng-t'),1500);
                opacity_block($('#f-screen-f-s'),1700);
                //second line block
                setTimeout(function () {
                    move_line_horizontal($('#first-screen-rp-line-left-after'),70,2600,2500,1);
                    move_line_vertical($('#first-screen-rp-line-left'),185,3600,3500,1);
                    move_line_horizontal($('#first-screen-rp-line-bottom'),150,4600,4500,1);
                    opacity_block($('#f-screen-f-s-f'),4800);
                    opacity_block($('#f-screen-inst-block'),5800);
                }, 1000);
                //third line block
                move_line_vertical($('#first-screen-ab-line-left'),50,6800,6700,1);
                if($(window).width() < 1200) {
                    move_line_horizontal($('#first-screen-w-line-top'),325,8000,7900,1);
                } else if ($(window).width() < 990) {
                    move_line_horizontal($('#first-screen-w-line-top'),251,8000,7900,1);
                } else {
                    move_line_horizontal($('#first-screen-w-line-top'),391,8000,7900,1);
                }
                move_line_vertical($('#first-screen-w-line-left'),135,9000,8900,1);
                move_line_horizontal($('#first-screen-w-line-bottom'),60,10000,9900,1);
                opacity_block($('#f-screen-w'),10000);
            });
        },
        smooth_scrolling: function () {
            $("#take-action").click(function() {
                $('html, body').animate({
                    scrollTop: $("#first-screen").offset().top
                }, 1000);
            });
        }
    };
    return new doConstruct;
})();




//scrolling event





