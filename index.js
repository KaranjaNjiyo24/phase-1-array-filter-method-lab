const { stringMatching } = require("expect");

// Code your solution here
function findMatching(drivers, string) {
return drivers.filter(driver => driver.toLowerCase() == string.toLowerCase())
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()))
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// function matchName(collection, cb){
//     const newDrivers = [];

//     for (const driver of collection) {
//         if (cb(driver)) {
//             newDrivers.push(driver);
//         }
//     }

//     return newDrivers;
// }

// const boby = filter(drivers, function (driver){
//     return driver.name ==="Bobby";
// }); 

// console.log(matchName(drivers, 'Bobby'))

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}

console.log(matchName(drivers, 'Bobby'))