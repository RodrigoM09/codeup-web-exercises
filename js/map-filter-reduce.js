/** Create a file named map-filter-reduce.js in your js directory and copy the users data below into it. */
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



 /** Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.*/
 // ---WITHOUT FILTER "VANILLA"
//  let threeLanguages = [];
//  for (let i = 0; i < users.length; i+=1);{
//  console.log(users[i].languages.length);
//  if(users[i].languages.length > 2){
//      threeLanguages.push(users[i]);
//  }
// }
// USING .FILTER METHOD------------------------------
const languages = users.filter(function (user){
    return user.languages.length > 2;
});
console.log(languages);


 /** Use .map to create an array of strings where each element is a user's email address*/
 const strings = users.map(user => user.email);
 console.log(strings)


 /** Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.*/
 const totalYears = users.reduce((total, user) => {
     return total + user.yearsOfExperience
 }, 0);
 console.log(totalYears)

let averageExp = totalYears / users.length;
 console.log(averageExp)


 /** Use .reduce to get the longest email from the list of users.*/
const longestEmail = users.reduce((total, email) =>{
    return total.length > email.email.length ? total : email.email;
},[]);
console.log(longestEmail)


 /** Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin. */
 //-------------THE WAY I DID IT--------------------------------------------->
 const listUsers = users.reduce((total, name) => {
     return total + " " + name.name;
 },"Your instructors are:");
console.log(listUsers)

//--------THE WAY JASON DID IT-------------------------------------------------->
let userNamesBetter = users.reduce((pre, user, index, usersArray) => {
    return pre + `${pre ? ', ': 'Your instructors are: '}${user.name} ${(index == (usersArray.length -1)) ? '.' : ''}`}, "");
console.log(userNamesBetter)


/** Use .reduce to get the unique programming languages */
let uniqueLanguages = users.reduce((accumulator, user) => {
    user.languages.forEach(function (language){
        if (!accumulator.includes(language)){
            accumulator.push(language);
        }
    });
    return accumulator;
}, []);
console.log(uniqueLanguages)