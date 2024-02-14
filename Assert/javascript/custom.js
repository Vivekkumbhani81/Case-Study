AOS.init({
    duration: 1000
});

// *****************************************************************************************************************************************
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text("+" + mathCount); // Add "+" before the number
        },
        complete: settings.complete
    });
};

$('#number1').jQuerySimpleCounter({ end: 35, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 15, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 5, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 0, duration: 2500 });

/* AUTHOR LINK */
$('.about-me-img').hover(function () {
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});

// ******************************************* preloader ******************************************************
var preloader = $('.preloader');
function preloader_func() {
    preloader.delay(1000).fadeOut(500);
}
preloader_func();

// ************************************************* Accordion  **********************************************************

$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});

// *************************************************** load more  ****************************************************************
// $(document).ready(function(){
//     $(".load_btn").slice(0, 4).show();
//     $("#loadMore").on("click", function(e){
//       e.preventDefault();
//       $(".load_btn:hidden").slice(0, 4).slideDown();
//       if($(".load_btn:hidden").length == 0) {
//         $("#loadMore").text("No Content").addClass("noContent");
//       }
//     });
//   })

$(document).ready(function () {
    var itemsToShow = 3;
    var $loadBtns = $(".load_btn");

    $loadBtns.slice(0, itemsToShow).show();

    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        var $hiddenItems = $loadBtns.filter(":hidden");

        if ($hiddenItems.length > 0) {
            $hiddenItems.slice(0, itemsToShow).slideDown();
            $("#loadMore").hide();
            $("#loadLess").show();
        }
    });

    $("#loadLess").on("click", function (e) {
        e.preventDefault();
        $loadBtns.slice(itemsToShow).slideUp();
        $("#loadMore").show();
        $("#loadLess").hide();
    });
});



