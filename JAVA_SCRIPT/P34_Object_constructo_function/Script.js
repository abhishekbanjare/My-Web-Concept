// befor happend  pahele is tarike se same properties ke liye bar bar object ko likha jata tha
// var student1 ={
//     fname: "Abishek",
//     lname: "Banjare",
//     class: 12,
//     age: 24
// }

// var student2 ={
//     fname: "Prashant",
//     lname: "Suryaa",
//     class: 10,
//     age: 25
// }
//.............................................................................................
//Object constructor function...........
// function Student(first, last, age, cls){    //Object constructor function
//          this.fName = first;
//          this.lName = last;
//          this.age = age;
//          this.class = cls;
// }
// var student1 = new Student("Abhishek", "Banjare", 24, 12);
// var student2 = new Student("Prashant", "Suryaa", 25, 10);
// console.log(student1);
// console.log(student2);

//................................................................................................

// function Student(first, last, age, cls){    //Object constructor function
//              this.fName = first;
//              this.lName = last;
//              this.age = age;
//              this.class = cls;
//     }
//     var student1 = new Student("Abhishek", "Banjare", 24, 12);
//     console.log(student1);

// //add new properties
// student1.nationality = "Indian";
// // console.log(student1);


// student1.fullName = function(){
//     return this.fName +" "+ this.lName;
// }

// console.log(student1.fullName());

//...........................................................................................

function Student(first, last, age, cls){    //Object constructor function
    this.fName = first;
    this.lName = last;
    this.age = age;
    this.class = cls;
    this.nationality = "Indian";
    this.fullName = function(){
                              return this.fName +" "+ this.lName;
                        };
}
var student1 = new Student("Abhishek", "Banjare", 24, 12);
console.log(student1);

console.log(student1.fullName());