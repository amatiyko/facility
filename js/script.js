$(document).ready(function () {
    $(".menu-link").click(function () {
        var menuElement = $(this).attr("href");
        var destination = $(menuElement).offset().top;
        $('html').animate({ scrollTop: destination - 60}, 1500);
        return false;
    });
});