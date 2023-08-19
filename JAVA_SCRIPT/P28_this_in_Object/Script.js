// if we want to use own properties so we can use this
//.......................................................................................................
// let person = {
//           firstName: "Abhishek",
//           lastName: "Banjare",
//           mobileNo: 9098035866,
//           address: "Bilaspur",
//           sayHello(){
//                   console.log("Hello ! i am: "+ person.firstName +" i have a: "+car.brand+" car");
//                   console.log("My last name is: "+ person.lastName +" and i am from: "+person.address+" and my mob no is: "+person.mobileNo);
//           }
// };


// let car = {
//           brand: 'Tata',
//           model: 'Safari'
// };

// person.sayHello();
//.......................................................................................................
// we use this keyword
let person = {
    firstName: "Abhishek",
    lastName: "Banjare",
    mobileNo: 9098035866,
    address: "Bilaspur",
    sayHello(){
            console.log("Hello ! i am "+ this.firstName +" and i have a "+car.brand+" car");
            console.log("My last name is "+ this.lastName +" and i am from "+this.address+" and my mob no is "+this.mobileNo);
    }
};


let car = {
    brand: 'Tata',
    model: 'Safari'
};

person.sayHello();