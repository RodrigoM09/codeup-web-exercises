/*=================================DOM Warmups=================================================*/
// When the user clicks the button that has the text "Change Heading", the
// text of the <h1> element changes to read "I pwn the DOM"


//---------JQUERY---------------------------------------------------------------------->
$("button").on('click', function(){
    $("h1").text("I pwn the DOM");
});
//====================================SAME AS ABOVE USING VANILLA JAVASCRIPT===================================================>
document.getElementById("changeHead").addEventListener('click', function(){
   document.getElementsByTagName("h1")[0].innerHTML = "I pwn the DOM";
});

// Every time the user enters a character in the input with id "source", that
// character appears in the <p> element with the id "output"


$("source").on('keyup', function(){
  $("output").text($("#source").val());
});


/** When the mouse enters the h2 with the text "Lorem Generator",
A paragraph contain lorem appears in the div with the id of loremParagraphs */

//-------------------HOW JAVIER DID IT--------------------------------------------------->
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus nisl, ullamcorper in sagittis a, mattis et quam. Integer nibh nisl, varius sed pharetra in, tempus vel mauris. Morbi in sodales metus. Sed sed bibendum odio. Vestibulum lectus erat, varius scelerisque urna eget, porttitor dapibus lacus. Praesent vitae venenatis arcu."

$("loremParagraphs h2").mouseover(function (){
    $("#loremParagraphs").append(lorem);
});

//-------------------HOW I DID IT -------------------------------------------------------->
document.getElementsByTagName("h2")[0].addEventListener('mouseover', function (){
   document.getElementsByTagName('h2')[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus nisl, ullamcorper in sagittis a, mattis et quam. Integer nibh nisl, varius sed pharetra in, tempus vel mauris. Morbi in sodales metus. Sed sed bibendum odio. Vestibulum lectus erat, varius scelerisque urna eget, porttitor dapibus lacus. Praesent vitae venenatis arcu."
});



/** When the user clicks on the "Hot Pink It" button, all the text in the div with the id of loremParagraphs becomes hotpink if it's black, or black if it's hotpink.*/


//-------------------HOW JAVIER DID IT--------------------------------------------------->
$("#hotPinkIt").on('click', function (){
    $("#loremParagraphs").toggleClass('hotpink');
});


//-------------------HOW I DID IT -------------------------------------------------------->
document.getElementById("hotPinkIt").addEventListener('click', function (){
    document.getElementsByTagName('h2')[0].style.color = "HotPink"
});

/** Bonus challenge: when the user clicks on the "Pink Blinky" button, all the text in the div with the id of loremParagraphs alternates between black and hotpink once every three seconds. */

$("#blinkPink").on('click', function (){
    setInterval(function (){
        $("#loremParagraphs").toggleClass('hotpink');
    }, 3000);
});