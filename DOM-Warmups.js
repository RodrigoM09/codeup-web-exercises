/*=================================DOM Warmups=================================================*/
// When the user clicks the button that has the text "Change Heading", the
// text of the <h1> element changes to read "I pwn the DOM"


//---------JQUERY---------------------------------------------------------------------->
$("button").on('click', function(){
    $("h1").text("I pwn the DOM");
});
//====================================SAME AS ABOVE USING VANILLA JAVASCRIPT===================================================>
document.getElementsByTagName("button")[0].addEventListener('click', function(){
   document.getElementsByTagName("h1")[0].innerHTML = "I pwn the DOM";
});

// Every time the user enters a character in the input with id "source", that
// character appears in the <p> element with the id "output"


$("source").on('keyup', function(){
  $("output").text($("#source").val());
});