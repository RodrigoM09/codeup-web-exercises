let shoes = [
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23]
];

function pairOfShoes(shoes){
    let shoeThatMatches;
    let shoeHasMatch = false;
    let newArray;
    for (let i = 1; i < shoes.length; i++){
        if (shoes[i][1] === shoes[0][1]){
            if(shoes[i][0] !== shoes[0][0]) {
                shoeHasMatch = true;
                shoeThatMatches = true;
                newArray =shoes.slice(1, shoes.length);

            }
        }
    }

    return shoeHasMatch;
}