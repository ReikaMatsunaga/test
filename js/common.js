window.ounload = function () { };

function sizecheck() {
  w = window.inner ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();

$(function () {
  
  if (w > 769) {
    
  } else {
    $("header .drawer").click(function () {
      $(`body`).toggleClass(`nav-open`);
      $(`header .navbar`).fadeToggle(200);
    });
  }
});