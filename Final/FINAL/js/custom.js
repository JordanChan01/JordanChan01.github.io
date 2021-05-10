$(document).ready(function(){


  $("#openLB").click(function(){
    $("#lightbox").css("display", "flex");
    $("#ad").velocity("callout.bounce");

  });

  $("#closeLB").click(function(){
    $("#ad").velocity("transition.whirlOut", function(){
      $("#lightbox").css("display", "none");

    });
  });

  


  var isDrawerOpen = false;

  $("#drawer_icon").click(function(){

      console.log( $("#drawer").css("right") )

      if(isDrawerOpen){
      	$('#drawer').css('background','rgba(171, 146, 202, 0.95)');
          $("#menu_icon").attr("src", "images/menu.png");
          $("#drawer").animate(
            {
              right : "-=400px"
            }
          );
          isDrawerOpen = false;
      }else{
      	  $('#drawer').css('background','rgb(171, 146, 202, 0.95)');
          $("#menu_icon").attr("src", "images/menu_open.png");
          $("#drawer").animate(
            {
              right : "+=400px"
            }
          );
          $("#aboutBTS").html("<p>BTS is a South Korean boyband that has been capturing the hearts of millions of fans globally since their debut in June 2013. Their lyrics, often focused on personal and social commentary, touch on the themes of mental health, troubles of school-age youth, loss, the journey towards loving oneself, and individualism. <p>");

          isDrawerOpen = true;
      }

  });

  //

  $(".blackCirc").click(function(){

  	$(".circ_pic").attr("src", "images/party.gif");
  });

});


