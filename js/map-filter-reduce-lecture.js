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

//new syntax for doubling an array -----------------------IMPORTANT!!
const doubleArray = prices.map(price => price * 2);
console.log(doubleArray);

// classic way of doubling an array -----------------------IMPORTANT!!
const array = [4, 5, 7, 9];
function doubleTheArray(array){
   let newArray = [];
   for (let i = 0; i < array.length; i++){
      newArray.push(array[i] * 2);
   }
   return newArray;
}
console.log(doubleTheArray(array));



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

const mileages = cars.map(car => car.mileage);
console.log(mileages)

const newObject = cars.map(car => {
   car.newProp = 'new property';
   return car;
});
console.log(cars[0]);

