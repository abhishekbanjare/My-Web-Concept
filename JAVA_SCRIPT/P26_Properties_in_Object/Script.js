// // if we want to make array then 
//    let person = [];

// //if we want to make object then
//    let person = {};
//................................................................................................
// we access object values in tow ways.....
// (1) dot (.) notasion

// let person = {
//               firstName: "Abhishek",
//               lastName: "Banjare",
//               MobileNo: 9098035866,
//               Address: "Bilaspur"
// };

// console.log(person.firstName);
// console.log(person.MobileNo);

// console.log(person);

//.................................................................................................
// // (2) Array notasion
// let person = {
//     firstName: "Abhishek",
//     lastName: "Banjare",
//     MobileNo: 9098035866,
//     Address: "Bilaspur"
// };

// console.log(person['firstName']);
// console.log(person['MobileNo']);

// console.log(person);

//..................................................................................................
// let person = {
//     'first Name': "Abhishek",  //  <----
//     'last Name': "Banjare",
//     'Mobile No': 9098035866,
//     Address: "Bilaspur"
// };

// console.log(person['first Name']);
// console.log(person['Mobile No']);

// console.log(person);

// ................................................................................................

// let person ={
//               firstName: "Abhishek",
//               lastName: "Banjare",
//               mobileNo: 9098035866,
//               address: "Bilaspur"
// }
// //if we want to change object value then
// person.lastName = "suryaabhai";
// console.log(person);

// // if we want to add new properties then
// person.age = 24;
// console.log(person);

// // if we want to delete any properties then
// delete person.lastName;
// console.log(person);

// // if we want to fined out any variable is object properties or not then
// console.log(person.height);  //if ans-> undefined so this not a properties
//             //OR
// console.log('height' in person);

//....................................................................................................
//if we want to access all properties one by one (iterat)
let person = {
             firstName: "Abhishek",
             lastname: "banjare",
             mobileNo: 9098035866,
             address: "Bilaspur"
}
 person.age = 24;

//  for(let key in person){
//      console.log(key);
//  }
//..................................
//  for(let key in person){
//       console.log(key+": "+person.key);  //here dot(.) notasion not working
//  }
//..................................
for(let key in person){
    console.log(key+" : "+person[key]);   //here array notasion is working
}