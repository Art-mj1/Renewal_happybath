$(function(){
 // Mega Box Menu Show When Hovering Navigation
 $(".navi>li, .hidden_sub").on("mouseenter",function(){
   $(".hidden_sub").css({display:"block"});
   $(".hidden_sub").stop().animate({height:"380px"},300);
});
 $(".navi>li, .hidden_sub").on("mouseleave",function(){
   $(".hidden_sub").stop().animate({height:0},300,function(){
     $(".hidden_sub").css({display:"none"});
   });
 });
//  Sub Mega Box Menu Hide and Show
 $(".navi li").on("mouseenter",function(){
   const i = $(this).index();
   $(".subnav_box").hide();
   $(".subnav_box").eq(i).show();
 });

});

// $(document).ready(function(){});