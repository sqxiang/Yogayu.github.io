$(document).ready(function() {
    $(".container").hide();
    $(".container").fadeIn('5000');
    $(".showcase-wrapper").hide();
    $(".showcase-wrapper").fadeIn("slow");
});


/*
var toggle = false;
$('.nav-toggle').on('click', function () {
    if (toggle == false) {
        $('#sidebar-wrapper').stop().animate({
            'left': '4px'
        });
        toggle = true;
    } else {
        $('#sidebar-wrapper').stop().animate({
            'left': '250px'
        });
        toggle = false;
    }
});
*/
  $('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class


$(function() {
    $('.project-box').click(function() {
        $(this).find('.post').slideToggle();
    });
});
