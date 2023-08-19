//prototype -> constructor function ke bahar se constructor function ke andar me properties ko add kar deta hai
// function Student(first, last, age, cls){    //Object constructor function
//     this.fName = first;
//     this.lName = last;
//     this.age = age;
//     this.class = cls;
//     this.nationality = "Indian";
//     this.fullName = function(){
//                               return this.fName +" "+ this.lName;
//                         };
// }
// Student.prototype.nationality = "Indian";

// var student1 = new Student("Abhishek", "Banjare", 24, 12);
// var student2 = new Student("Prashant", "Suryaa", 25, 10);

// console.log(student1);
// console.log(student1.nationality);
// console.log(student2);
// console.log(student2.nationality);

//..............................................................................................
function Student(first, last, age, cls){    //Object constructor function
    this.fName = first;
    this.lName = last;
    this.age = age;
    this.class = cls;
    this.nationality = "Indian";
}
Student.prototype.fullName = function(){
                                  return this.fName +" "+ this.lName;
                              };

var student1 = new Student("Abhishek", "Banjare", 24, 12);
var student2 = new Student("Prashant", "Suryaa", 25, 10);

console.log(student1);
console.log(student1.fullName());
console.log(student2);
console.log(student2.fullName());