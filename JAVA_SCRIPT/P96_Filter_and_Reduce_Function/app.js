// ek array hai jisme se greater value of 10 ko kisi dusre array me filter karana hai stor karana hai
//we want to get greater value of 10 in array and store another array 
//....................................................................................................
// let arr = [2, 22, 13, 5, 6, 61, 23, 7];

// //Result [22, 13, 61, 23]


// // //we use arrow function in filter function
// // let arr1 = arr.filter((val) => val > 10);
// // console.log(arr1);

// //we use anonamus function
// let arr1 = arr.filter(function(val){
//      return val > 10;
// });
// console.log(arr1);
//...................................................................................................
//here we want to get all Engineers name/data
// let team = [
//     {
//         name: "Abhishek",
//         position: "Engineer"
//     },
//     {
//         name: "Ram",
//         position: "ui designer"
//     },
//     {
//         name: "shyam",
//         position: "Engineer"
//     },
//     {
//         name: "tom",
//         position: "content manager"
//     },
//     {
//         name: "harry",
//         position: "cto"
//     },
//     {
//         name: "Raj",
//         position: "Backend Engineer"
//     },
//     {
//         name: "georg",
//         position: "Engineer"
//     }
// ];

// let Engineer = team.filter(val => val.position == "Engineer");
// console.log(Engineer);

//..............................................................
// let Engineer = team.filter((val) => {  // here we use Arrow function
//     if(val.position == 'Engineer'){
//         console.log(val);
//     }
// });








// Reduce function() ............................................................................................
//...............................................................................................................
// reduce an array to a single value
//pure array me operation perform karke ek value reduce(return) karta hai 
const array = [1,2,3,4,5,6];
// 0 + 1 + 2 + 3 + 4 + 5 + 6
const initialValue = 0;
const sumWithInitial = array.reduce((accumulator,currentValue)=> accumulator + currentValue, initialValue );
console.log(sumWithInitial);

//.......................................................

const myNums = [1,2,3,4,5]
const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval;
}, 0)
console.log(myTotal);