$(function () {
  // Mega Box Menu Show When Hovering Navigation
  $(".navi>li, .hidden_sub").on("mouseenter", function () {
    $(".hidden_sub").css({ display: "block" });
    $(".hidden_sub").stop().animate({ height: "380px" }, 300);
  });
  $(".navi>li, .hidden_sub").on("mouseleave", function () {
    $(".hidden_sub")
      .stop()
      .animate({ height: 0 }, 300, function () {
        $(".hidden_sub").css({ display: "none" });
      });
  });
  //  Sub Mega Box Menu Hide and Show
  $(".navi li").on("mouseenter", function () {
    const i = $(this).index();
    $(".subnav_box").hide();
    $(".subnav_box").eq(i).show();
  });

  //Mobile Menu Animation Effect
  $(".menu_ico").hover(function () {
    $(this).toggleClass("active");
  });

  //Mobile Menu Click Effect
  $(".menu_ico").click(function () {
    $(".mobile_nav").animate({ left: "0" }, 300);
  });
  $(".close_btn, .overlay").click(function () {
    $(".mobile_nav").animate({ left: "-60%" }, 300);
  });

  //Mobile Menu Accordion Effect
  $(".mobile_tit").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".mobile_sub_nav").slideUp(200);
      $(this).removeClass("rotate");
      $(".mobile_tit").removeClass("rotate");
    } else {
      $(".mobile_tit").removeClass("active");
      $(".mobile_tit").removeClass("rotate");
      $(this).addClass("active");
      $(".mobile_sub_nav").slideUp(200);
      $(this).siblings(".mobile_sub_nav").slideDown(200);
      $(this).addClass("rotate");
    }
  });
});

// $(document).ready(function () {});
