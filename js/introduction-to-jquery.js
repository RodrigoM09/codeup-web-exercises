// jQuery("h3").click(function (){
//    alert("yo");
// });

// cause h3 elements on page to become clickable and run a toggle function
jQuery("h3").click(function (){
    $(this).next().slideToggle(500);
});

// dollar sign is shorthand for jquery
$("h3").click(function (){
    $(this).next().slideToggle(500);
});

// this will make the browser load the page before it runs the jquery code
$(document).ready(function (){
    $("h3").click(function (){
        $(this).next().slideToggle(500);
    });
});

function init(){
    $("h3").click(function (){
        $(this).next().slideToggle(500);
    });
}
window.onload = init;

