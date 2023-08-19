// befor ES6 class was not in javaScript  to javaScript me class hi nahi tha to ham Object kaise create karte the
//created object
// let person1 = {
//     firstName: 'Abhishek',
//     'last name': 'Banjare',
//     age: 24
// };   

// document.write(person1.firstName+"<br>");
// document.write(person1['last name']+"<br>");
// document.write(person1.age+"<br>");

// //we can change propertie of object
// person1.age = 25;
// document.write(person1.age);


// //create method................................................................................
// let person1 = {
//         firstName: 'Abhishek',
//         lastName: 'Banjare',
//         age: 24,

//         fullName: function(){
//             document.write(this.firstName +" "+ this.lastName);
//         }
//     };   
    
//     person1.fullName();  //method call


// //create method another ways................................................................................
// let person1 = {};
// person1.name = "Abhishek Banjare";
// person1.sayHi = function(){
//     alert("Hello World....");
// }

// console.log(person1);
// person1.sayHi();


// //create method another ways................................................................................
// let person1 = new Object;
// person1.name = "Abhishek Banjare";
// person1.sayHi = function(){
//     alert("Hello World....");
// }

// console.log(person1);
// person1.sayHi();


// //...........................................................................................................
// let person1 = {
//     firstName: 'Abhishek',
//     'last name': 'Banjare',
//     age: 24
// };   

// document.write(person1.firstName+"<br>");
// document.write(person1['last name']+"<br>");
// document.write(person1.age+"<br>");

// let person2 = {
//     firstName: 'Prashant',
//     lastName: 'Surya',
//     age: 26
// };   

// document.write(person2.firstName+"<br>");
// document.write(person2.lastName+"<br>");
// document.write(person2.age+"<br>");

//DRY dont dry yourself............................................................................
// This is a Custructor function //bluePrint
// function Person(first, last, ag){
//     this.firstName = first;         //property
//     this.lastName = last;            //property
//     this.age = ag;                     //property

//     this.sayHi = function(a="Hello World....!!"){     //method
//         alert(a);
//     }

//     this.changeAge = function(newAge){                //method
//         this.age = newAge;
//     }
// }

// let person1 = new Person("Abhishek", "Banjare",26);
// person1.sayHi();
// console.log(person1);

// let person2 = new Person("Prashant", "Suryaa", 24);
// person2.changeAge(22);
// console.log(person2);
// person2.sayHi("Hello India....!!");


// Inheritange    class hai hi nahi to inheritange kaise implement kiya jata hai ????, to ham inheritange ko implement karne ke liye prototype ka use karenge...........................................


