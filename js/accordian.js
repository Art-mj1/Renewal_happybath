$(".gift").click(function(){
  if($(this).hasClass("active")){
    $(this).removeClass("active");
       $(this).siblings(".mobile_sub_nav").slideUp(200);
       $(this).removeClass("rotate");
       $(".mobile_tit").removeClass("rotate");
  } else{
    $(".mobile_tit").removeClass("active");
    $(".mobile_tit").removeClass("rotate");
    $(this).addClass("active"); 
    $(".mobile_sub_nav").slideUp(200);
    $(this).siblings(".mobile_sub_nav").slideDown(200);
    $(this).addClass("rotate");
  }
});