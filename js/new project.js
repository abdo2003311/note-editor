/*global $,document*/
$(".header .row .fa-list").on("click", function () {
    "use strict";
    $(".headerSlider").toggleClass("active");
    $(".container-fluid").toggleClass("activeC");
    $(".fa-list").toggleClass("activeL");
});
$(".wow").parent().css("overflow","hidden");
var i,
    I,
    x = true,
		f = document.getElementById("f");