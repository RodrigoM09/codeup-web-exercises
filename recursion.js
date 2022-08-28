function countDown(num){
    console.log(num);
    if (num > 1){
        countDown(num -1);
    }
}

// console.log(countDown(9));

function sum(elems){
    if(elems.length === 0){
        return 0;
    } else{
        const [head, ...rest] = elems;
        return head + sum
        (rest)

    }
}
// console.log(sum([1,2,3,4,5]));

function power(num, pow){

}