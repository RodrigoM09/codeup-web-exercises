let sayHey = function(){
    let count = 0;

    function hey(){
        console.log('hey' + count);
        count++;
    }

    setInterval(hey, 1000);
}

