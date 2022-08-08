// const numbers = [1,-2,-3,4-5,6,7,8-9];

// let negativeNumbers = [];
// let positiveNumbers = [];

// function findNumber(number) {
//   for(let item of number) {
//     if(item > 0) { 
//       positiveNumbers.push(item)
      
//     }
//     else {
//       negativeNumbers.push(item)
//     }
//   }
// }
// findNumber(numbers);


// console.log("Musbat son :" + positiveNumbers);
// console.log("Manfiy son :" + negativeNumbers);



let numbers = [80, 74, 86, 59, 77];


console.log(findMark(numbers));

function findMark(marks) {
let sum = 0
    for (i of marks){
      sum += i
    }
    let avarage = (sum / marks.length);
    if( avarage > 0 && avarage <= 50) {
      console.log("F");
    }
    else if (avarage > 50 && avarage <= 60) {
      console.log("D");
    }
    else if (avarage > 70 && avarage <= 80){
      console.log("B");
    }
    else {
      console.log("A");
    }
  }

