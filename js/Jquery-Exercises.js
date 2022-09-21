// $(document).ready(function (){
//     alert("DOM has finished loading");
// });

$(function (){
    // let $learn = $("#learn").text();
    // alert($learn);
    // let $codeup = $(".codeup").html();
    // $(".codeup").css({
    //     'border': '1px solid black',
    //     'width': 'fit-content'
    // })

    $("li").css({
        'fontSize': "20px",
    })



    $("li, p, h1").css({
        'backgroundColor': "yellow",
    })

    let $alert = $("h1").text();
    alert($alert);
});