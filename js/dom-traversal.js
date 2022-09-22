$(function (){

    //loops through each li and give it an italic fontstyle.
    // using .each allows you to add code to the function .each
   $("li").each(function (){
      $(this).css("font-style", "italic")
   });
   // using this to give each li italic fontstyle but cant be used to give every other one or just the last one.
   // $("li").css("font-style", "italic");

   $("button").on('click', function (){
      // $("main").children().css("font-family", "sans-serif");
      $("main").toggleClass("sansSerif");
   });

   $("h2").css({
      "color": "blue",
      "text-decoration": "underline",
      "cursor": "pointer"
   });


   $("h2").on('click', function(){
      $(this).next().slideToggle();
   });

   $("header p").hover(function (){
      $(this).parent().toggleClass("dark-mode")
   })

});