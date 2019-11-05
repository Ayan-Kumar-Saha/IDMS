$(".signin-form").hide();
$(".signin").css("background", "#fff");
    
$(".signin").click(function(){
  $(".signup-form").hide();
  $(".signin-form").show();
  $(".signup").css({"background":"#fff"});
  $(".signin").css({"background": "#ecf4f3"});
});
    
$(".signup").click(function(){
  $(".signup-form").show();
  $(".signin-form").hide();
  $(".signup").css({"background": "#ecf4f3"});
  $(".signin").css({"background": "#fff"});
});


