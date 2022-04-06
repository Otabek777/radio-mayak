$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".mac img").css({
        "transform" : "translate(0px, -" + st/10 + "px"
    });
    $(".screen img").css({
        "transform" : "translate(0px, -" + st/10 + "px"
    });
    $(".iphone img").css({
        "transform" : "translate(0px, -" + st/20 + "px"
    });
    $(".banner__bottom img").css({
        "transform" : "translate(0px, " + st/40 + "px"
    });
});