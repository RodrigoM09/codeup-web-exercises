
        const showMultiplicationTable = parseInt(prompt('Enter an number: '));
        //creating a multiplication table
        for(let i = 1; i <= 10; i++) {
            // multiply i with number
            const result = i * showMultiplicationTable;
            // display the result
            console.log(`${showMultiplicationTable} * ${i} = ${result}`);
        }



    for (let i = 0; i < 10; i++){
        const min = 20;
        const max = 200;
        const number = Math.floor(Math.random() * (max - min + 1)) + 1;
        if (number % 2 === 0){
            console.log(number + " is even");
        } else if (number !== 0) {
            console.log(number + " is odd");

        }
    }


    for(let i = 1; i <= 9; i++){
        let row =[]
        for (let a = 1; a <= i; a++) {
            row.push(i);
        }
        console.log(row.join(""));
    }
    // same as above, shorter way.
    // for(let i = 1; i <= 9; i++){
    //     console.log(i.toString().repeat(i));
    // }
        // Same as above
        // for(let i = 1; i <= 9; i++) {
        //     let outputString = "";
        //     for (let count = 0, count <i; count++){
        //         outputString = outputString + i;
        //     }
        //     console.log(outputString);
        // }

    for (let i = 100; i >= 5; i -= 5){
        console.log(i);
    }