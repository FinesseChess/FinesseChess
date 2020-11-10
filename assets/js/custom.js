/***************************************************************************************
******************************AUTHOR - CHAYAN PANT**************************************
****************************************************************************************/

$(function () {

        $(window).on('scroll', function() {
            if($(window).scrollTop() > 10 ) {
                $('.navbar').addClass('active');
            } else {
                $('.navbar').removeClass('active');
            }
        });

});


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var slideIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("slide2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel2, 2000); // Change image every 2 seconds
}