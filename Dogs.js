 const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
    ];
    // MAP
    // TODO 1: using map, create a new array of dog names from the dogs array
    console.log('Exercise 1:');

    // TODO 2: using map, create a new array of dog ages from the dogs array
    console.log('Exercise 2:');

    // TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
    console.log('Exercise 3:');

    // FILTER
    // TODO 4: using filter, create a new array containing only dogs younger than 10 years old
    console.log('Exercise 4:');
    let youngDogs = dogs.filter((dog) =>{
        return dog.age < 10;
    });
    console.log(youngDogs);

    // TODO 5: using filter, create a new array containing only dogs named 'Lexie'
    console.log('Exercise 5:');

    // TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
    console.log('Exercise 6:');

    // REDUCE
    // TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
    console.log('Exercise 7:');

    // TODO 8: using reduce, return the total of adding all dog ages together (18)
    console.log('Exercise 8:');

    // TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
    console.log('Exercise 9:');
    let allDogsTrained = dogs.reduce((acc, dog) =>{
        let newDog = {
            dogName: dog.dogName,
            age: dog.age,
            isTrained: true
        };
        acc.push(newDog);
        return acc;
    }, []);
    console.log(allDogsTrained);

    // EXTRA CHALLENGES
    // TODO 10: what is the average age of each dog?
    console.log('Exercise 10:');

    // TODO 11: what is the average age of dogs that are trained?
    console.log('Exercise 11:');

    // TODO 12: what is the average length of names of untrained dogs?
    console.log('Exercise 12:');

    // TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
    console.log('Exercise 13:');
    let combinedDogYears = dog.reduce((acc, dog) =>{

    });
    // TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
    console.log('Exercise 14:');