$(document).ready(function(){
  var likes=$(".like");
  var covers=$(".cover");
  likes.click(function(){
      $(this).fadeTo("slow",0);
      $(this).fadeTo("slow",1);
  });
  covers.mouseenter(function(){
    var nombrep=$(this).attr("alt");
    $(this).fadeTo("fast",0.5);
    $("#nombre").text(nombrep);
    $("#nombre").css({"padding":"25px","font-size": "20px","font-weight": "bold"});
  });
  covers.mouseleave(function(){
    $(this).fadeTo("fast",1);
    $("#nombre").text("Playlist")
    $("#nombre").css({"padding":"25px","font-size": "20px","font-weight": "bold"});
  });



});