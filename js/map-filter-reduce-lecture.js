const prices = [32.99, 21.99, 6.99, 12.99, 8.98, 5.99];
let output = '';


// prices.forEach((price, index,array) => {
//    const tax =(price + 0.825).toFixed(2);
//    const total = (price + parseFloat(tax).toFixed(2));
//    output += `<p id="price-${index +1}">Item number: ${index + 1}. Price: $${price}. Tax: $${tax}. Total: $${total}.</p>`;
//    console.log(output)
//    $('div').html(output);
//    if (index === array.length - 1){
//       $('div').append("<p>That's it!!</p>")
//    }
// });
const pricesAfterTax = prices.map(price => {
   const tax =(price + 0.825).toFixed(2);
   const total = (price + parseFloat(tax).toFixed(2));
   return parseFloat(total);

});
console.log(prices)
console.log(pricesAfterTax);

//NEW SYNTAX FOR DOUBLING AN ARRAY ------------------------------------------------------------------IMPORTANT!!
const doubleArray = prices.map(price => price * 2);
console.log(doubleArray);

// CLASSIC WAY OF DOUBLING AN ARRAY -----------------------------------------------------------------IMPORTANT!!
const array = [4, 5, 7, 9];
function doubleTheArray(array){
   let newArray = [];
   for (let i = 0; i < array.length; i++){
      newArray.push(array[i] * 2);
   }
   return newArray;
}
console.log(doubleTheArray(array));


// APPENDS EACH OF THE ARRAY ELEMENTS TO THE HTML INDIVIDUALLY ----------------------------------------------->
const desserts = ['sherbet', 'whiskey cake', 'cupcake', 'eclair'];
const eatingDessert = desserts.map(dessert => `Eating ${dessert} makes you fat`)
eatingDessert.forEach(element => {
   $("div").append(`<p>${element}</p>`);
});

const cars = [
   {
      make: "Honda",
      model: "Civic",
      mileage: 10428
   },
   {
      make: "Toyota",
      model: "Corolla",
      mileage: 9425
   },
   {
      make: "Ford",
      model: "Mustang",
      mileage: 2567
   },
   {
      make: "Audi",
      model: "A3",
      mileage: 14500
   },
   {
      make: "Mazda",
      model: "3",
      mileage: 11248
   }
];
// ADDS A NEW PROPERTY TO THE OBJECTS------------------------------------------------------------------->
const mileages = cars.map(car => car.mileage); //.MAP TAKE PART(MILEAGE) OF THIS ARRAY OF OBJECTS AND RETURNS IT AS AN ARRAY
console.log(mileages)
const newObject = cars.map(car => {
   car.newProp = 'new property';
   return car;
});
console.log(cars[0]);


const under10K = cars.filter(car => car.mileage < 10000);
//THIS IS OBJECT DECONSTRUCTION ------------------------------------------------------------------------>
under10K.forEach(({make, model, mileage}) =>{
   output += `<p> I found a ${make} with ${mileage} miles</p>`
   $('#output').html(output);
});

// CHAINING FUNCTIONS------------------------------------------------------------------------------------>
prices.filter(price => price < 10) //. FILTER LOOKS FOR CRITERIA (PRICES UNDER 10)--------------------------->
   .map(price => { // CALCULATES PRICE WITH TAXES AND OUTPUTS AN ARRAY USING .MAP------------------------>
   const tax =(price + 0.825).toFixed(2);
   const total = (price + parseFloat(tax).toFixed(2));
   return parseFloat(total);
}).forEach(price => $("div").append(`<p>${price}</p>`));
// FOREACH WORKS ON ARRAYS, SINCE .MAP OUTPUTS AN ARRAY THIS CAN BE USED ----------------------IMPORTANT!!


const totalCost = prices.reduce(function(total, price){
   return total + price;
});
console.log(totalCost);


// const prices = [32.99, 21.99, 6.99, 12.99, 8.98, 5.99]; GLOBALLY DECLARED AT TOP OF PAGE
// AT INDEX 0 IT IS LIKE IT DOES LET TOTAL = ARRAY[0]
 let total = prices.reduce(function(total, itemPrice, index){
   console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the itemPrice is ${itemPrice}`);
   return total + itemPrice;
});
$("#output").append(`<p>The total is ${totalCost}</p>`);

// The function passed to the reduce method takes an extra parameter, The Accumulator
// The Accumulator is often abbreviated to "acc


//-----REDUCE WILL REDUCE AN ARRAY OR OBJECT TO ITS ELEMENTS OR PROPERTIES, ALLOWING ME TO MANIPULATE THOSE COMPONENTS.


//--------------------IN THIS EXAMPLE WE USE REDUCE TO ACCESS EACH OF THE PRICES IN THE ARRAY ABOVE. ----------------------------->
const averagePrice = prices.reduce((function(accumulator, current,index, array){
   accumulator += current;
   if(index === array.length -1){
      return accumulator/array.length;
   }
   return accumulator;
}));

// const cars = [
//    {
//       make: "Honda",
//       model: "Civic",
//       mileage: 10428
//    },
//    {
//       make: "Toyota",
//       model: "Corolla",
//       mileage: 9425
//    },
//    {
//       make: "Ford",
//       model: "Mustang",
//       mileage: 2567
//    },
//    {
//       make: "Audi",
//       model: "A3",
//       mileage: 14500
//    },
//    {
//       make: "Mazda",
//       model: "3",
//       mileage: 11248
//    }
// ];
//-----------------------------USES REDUCE TO CREATE AN ARRAY OF JUST MILEAGES------------------------------------------->
const mileages3 = cars.reduce((accumulator, car) => {
   accumulator.push(car.mileage);
   return accumulator;
}, []);
console.log(mileages3);


//--------------------USES REDUCE TO CREATE ARRAY OF MILEAGES AND THEN SORTS TO RETURN HIGHEST MILEAGE------------------->
const newMileages = cars.reduce((accumulator, car, index, array) => {
   accumulator.push(car.mileage);
   if (index === array.length -1){
      return accumulator.sort(function (a,b){return b-a})[0];
   }
   return accumulator;
}, []);
console.log(newMileages);

//-------------DOES SAME AS ABOVE USING REDUCE TWICE AND MATH.MAX, RETURNS THE HIGHEST MILEAGE.
const highestMileage = cars.reduce((accumulator, car) => {
   accumulator.push(car.mileage);
   return accumulator;
}, []).reduce((accumulator, mileage) => {
   return Math.max(accumulator, mileage);
});
console.log(highestMileage);
