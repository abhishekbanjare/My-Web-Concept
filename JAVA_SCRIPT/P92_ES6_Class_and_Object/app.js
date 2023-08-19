// class person{
//       constructor(n, a){
//         this.name = n;
//         this.age = a;
//         // console.log("person created......!!");
//       }
//       sayHi(){
//               console.log("Hi....");
//       }
//       static sproperty = "somthing";
//       static hello(){
//         console.log("Hello...........");
//       }

     
// }

// let person1 = new person("abhishek", 24);
// person1.sayHi();
// console.log(person1); 

// //person1.hello();     //static method / property not a call by class object it's call direct class name
// //console.log(person1.sproperty);  
// console.log(person.sproperty);
// person.hello();


// // how to inharit class properties or method in ES6..................................................................

// class emp{
//     constructor(n){
//         // console.log("emp constructor called....");
//         this.name = n;
//     }
//     masage(){
//         console.log("Hello Abhishek.......!!");
//     }
// }
// class manager extends emp{
//     constructor(p, d){   //if we create constructor() in child class, so we have to use super() in child class constructor
//         super(p);    
//         this.department = d;      
//     }

//     info(){
//         //we use one method to in onother class method
//         super.masage();   //here we can call in method of pairent class
//         console.log(this.name + " is manager of department of "+ this.department);
//     }

// }

// let mng1 = new manager("Abhishek","Computer Science");

// console.log(mng1);
// // console.log(mng1.masage());
// console.log(mng1.info())

//...............................................................................................................
// class emp{
//     constructor(n){
//         this.name = n;
//     }
//     masage(){
//         console.log("Hello Abhishek.......!!");
//     }
// }
// class manager extends emp{
//     constructor(p, d){   //if we create constructor() in child class, so we have to use super() in child class constructor
//         super(p);    
//         this.department = d;      
//     }

//     masage(){
//         console.log("Hiiiii Prashant.........!!");
//     }

//     info(){
      
//         super.masage();
//         // this.masage(); 
//         console.log(this.name + " is manager of department of "+ this.department);
//     }

// }
// class admin extends manager{

// }
// //...................
// // // let mng1 = new manager("Abhishek","Computer Science");
// // console.log(mng1);
// // // console.log(mng1.masage());
// // console.log(mng1.info())
// //.....................

// let admin1 = new admin("Vishwajeet", "web development");
// console.log(admin1);




// //Public and Privet.....................................................................................................
// //public property or method direct called by class object but private property or method not call outer side of constructor by classObject
// // private properties or private method not called outer side of class by class objects
// class emp{
//     #name = "";
//     constructor(n){
//         this.#name = n;
//     }
//     #getName(){
//         console.log(this.#name);
//     }
//     pubfun(){   //if we want to class private method in outer side of constructor so we create new public method 
//         this.#getName();
//     }

// }
// let Emp1 = new emp("Abhishek");
// // console.log(Emp1);
// // console.log(Emp1.name);

// //console.log(Emp1.#name);  //there is a error because private properties not called outer side of constructor by class object 
// // console.log(Emp1.getName());  // but we called public method and also not called private methods

// console.log(Emp1.pubfun());  


// //Mixin.................................................................................................................
// //if we want to give extra power of any class then we use Mixin
// //we want to use object in class so we can use this and its process called Mixin(mix karna)

// let usefullMethod = {
//     sayHi(){
//         console.log("Hi............");
//     },
//     sayBye(){
//         console.log("Bye............");
//     }
// };

// class user{
//     constructor(){
//         this.name = "Akhilesh";
//     }
// }

// Object.assign(user.prototype, usefullMethod);  //Mixin
// let user1 = new user();
// console.log(user1.sayHi());  
// console.log(user1);

//.......................................................................................................................

let usefullMethod2 = {
    Hello(){
        console.log("Hello G to kaise hai sare......");
    }
};

let usefullMethod = {
    sayHi(){
        console.log("Hi............");
    },
    sayBye(){
        console.log("Bye............");
    }
};

class user{
    constructor(){
        this.name = "Akhilesh";
    }
}

class admin extends user{

}

Object.assign(user.prototype, usefullMethod);  //Mixin
Object.assign(user.prototype, usefullMethod2);  //Mixin

let admin1 = new admin();
console.log(admin1.sayBye());  
console.log(admin1.Hello());
console.log(admin1);
