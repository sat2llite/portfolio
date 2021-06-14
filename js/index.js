//menu
$(function () {
  $(".menuBtn").click(function (ev) {
    ev.preventDefault();

    $(this).toggleClass("active");
    $(".menuwrap").toggleClass("visible");
  });
});

$(document).ready(function ($) {
  // jQuery(document).ready(function($) {

  $(".header").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

//메뉴이동
jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

//tab
new CBPFWTabs(document.getElementById("tabs"));

premier(1);

function premier(n) {
  for (var i = 1; i < 9; i++) {
    var obj = document.getElementById("premier" + i);

    var menu = document.getElementById("premier_button" + i);

    if (n == i) {
      obj.style.display = "block";

      menu.style.background = "#fff";

      menu.style.color = "#ffaea5";
    } else {
      obj.style.display = "none";

      menu.style.background = "";

      menu.style.color = "";
    }
  }
}

function modal(n) {
  for (var i = 1; i < 9; i++) {
    var modal = document.getElementById("myModal" + i);

    if (n === i) {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
}

function cloaeEvent(i) {
  var modal = document.getElementById("myModal" + i);

  modal.style.display = "none";
}
