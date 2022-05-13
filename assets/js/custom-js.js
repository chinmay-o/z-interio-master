

$('#index').click(function() {
    location.reload();
});

$("#Service").click(function() {

    $('html, body').animate({
        scrollTop: $("#ServiceContent").offset().top - 120
      }, 1000);
});

$("#Products").click(function() {

    $('html, body').animate({
        scrollTop: $("#ProductsContent").offset().top - 120
      }, 1000);
});

$("#About_Us").click(function() {

    $('html, body').animate({
        scrollTop: $("#AboutContent").offset().top - 120
      }, 1000);
});

$("#Contact").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
});

$("#ServiceMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#ServiceContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#ProductsMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#ProductsContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#About_UsMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#AboutContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#ContactMobile").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#beginNow").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

$("#beginNowTwo").click(function() {

    $('html, body').animate({
        scrollTop: $("#ContactContent").offset().top - 120
      }, 1000);
    $(".sidebar-menu, .overlay").removeClass("active");
});

var targ;

$(".details-btn").click(function(e) {

    var parent = $(e.target).parent();
    var productName = parent[0].innerText.split("\n")[0];

    if (productName.length != 0) {

      window.location.replace("https://api.whatsapp.com/send?phone=918590691476&text=Hi,%20I%20would%20like%20to%20know%20about%20"+ productName.split(" ").join("%20"));
    }
});
