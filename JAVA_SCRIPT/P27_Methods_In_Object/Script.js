// ection persome in objects....

// let person = {
//          firstName: 'Abhishek',
//          lastName: 'Banjare',
//          mobilNo: 9098035866,
//          address: 'Bilaspur'
         
// }
// person.age = 24;
// //1st way.......................
// person.sayHello = function(){     //anonimus function
//     console.log("Hello Abhishek..!!");
// }

// person.sayHello();

// //2nd way..........................
// function greet(){                 //normal function
//          console.log("Hello Abhishek bhaiya..!!");
// }

// person.sHello = greet;
// person.sHello();

//3rd way..........................
// let person = {
//     firstName: 'Abhishek',
//     lastName: 'Banjare',
//     mobilNo: 9098035866,
//     address: 'Bilaspur',
//     sayHello: function(){
//                        console.log("Hello Namastey .....!!");
//               }   
// }
// person.age = 24;
// person.sayHello();

//4th way..........................
let person ={
          firstName: 'Abhishek',
          lastName: 'Banjare',
          mobileNo: 9098035866,
          sayHello(){
            console.log("Hello Namastey pranam..!!");
          }
}

person.age = 25;

person.sayHello();