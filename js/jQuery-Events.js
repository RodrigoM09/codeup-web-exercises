$(function (){

    $('#clickMe').on('click',function (){
        alert("YO")
    });



    $('#createAnElement').on('click', function (){
        $(this).after("<button class='will-this-work'>click me </button>")
    });


    // this doesn't work because we are trying to register an event handler with an element that doesnt exist yet.
    // $(".will-this-work").on('click', function (){
    //     alert(":(This won't work");
    // });


    $("#dynamicContent").on('click', '.will-this-work', function (){
        alert("YO YO YO")
    });

    $(".box").hover(function (){
       $(this).addClass("hotPink");
    },
    function(){
        $(this).removeClass("hotPink")

    });

    $(document).keydown(function (e){
        // alert("you just pressed a key down");
        console.log(e.originalEvent.key);
    })

});