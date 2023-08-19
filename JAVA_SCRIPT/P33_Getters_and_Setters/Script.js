//getter -> Value get karke dena
//setter -> Value set karke dena


// let obj = {
//     fname: "Abhishek",
//     lname: "Banjare",
//     fullname:function(){
//         return this.fname+" "+this.lname;
//     }
// }
// document.write(obj.fullname());
//......................................................................................

let obj ={
    fname: "Abhishek",
    lname: "Banjare",

    get getFullName(){
        return this.fname+"  "+this.lname;
    },

    set setFullName(par){
        this.fname = par.fn;
        this.lname = par.ln;
    }
};
document.write(obj.getFullName);

document.write("<br>");

obj.setFullName ={fn:"Prashant",ln:"Suryaa"};
document.write(obj.getFullName);
console.log(obj);
//...........................................................................................

// var person ={
//        fname: "Abhishek",
//        lname: "Banjare",

//        getname: function(){     //normal method
//         return this.fname.toUpperCase();
//        }
// };

// console.log(person.getname());

// ................................Getter.......................................................
// var person={
//          fname: "Abhishek",
//          lname: "Banjare",
//          address: "Bilaspur",
//          age: 24,
         
//          get getname(){  
//             //here we manupulate any data and return

//             // return this.fname.toUpperCase()+" "+this.lname;
//             return this.fname+" "+this.lname+" "+this.address+" "+this.age;  
//          }
// };

// console.log(person.getname);  // here get method call is like property call not a function call



// ................................Setter.......................................................
// var person={
//          fname: "Abhishek",
//          lname: "Banjare",
//          address: "Bilaspur",
//          age: 24,
         
//          set setname(n){    //single parameter pass
//              this.fname = n;
//          }
 
//         // set setname(n){       //multiple parameter pass
//         //     this.fname = n.fn;
//         //     this.lname = n.ln;
//         //     this.address = n.add;
//         // }
// };

// person.setname = "Prashant";    //single parameter pass
// // person.setname = {fn:"Prashant", ln:"Suryaa", add:"Raipur"};  //multiple parameter pass

// console.log(person);  // here get method call is like property call not a function call

//.................................................................................................