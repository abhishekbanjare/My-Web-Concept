// let obj = {
// 	name: 'deepak',
//   pin: 121212,
//   printfn: function() {
//   	console.log('object function')
//   }
// }

// console.log(obj)
// obj.printfn()

//.........................................................................................................

// class TempClass {
// 	constructor() {
//   	this.name = 'deepak';
//     this.pin = 121212
//     this.printFn()
//   }
//   printFn() {
//   	console.log('object function in class......')
//   }
// }

// let classObj = new TempClass();

// console.log(classObj)
// console.log(classObj.name)
// classObj.printFn()


//....................................................................................................




// class Person {
// 	constructor(tempname, temppin) {
//   	this.name = tempname;
//     this.pin = temppin
//   }
//   printfn() {
//   	console.log(this.name, this.pin)
//   }
// }

// let classObj2 = new Person('Deepak', 121212);
// let classObj3 = new Person('John', 121212);
// let classObj4 = new Person('ABC', 121212);

// console.log(classObj2)
// console.log(classObj3)
// console.log(classObj4)
// classObj2.printfn()
// classObj3.printfn()
// classObj4.printfn()

//................................................................................................................
// Constructor Function...................................
// function person(tempname, tempage) {
//     this.name = tempname;
//     this.age = tempage
//   }
  
//   let person1 = new person('Test', 111)
//   let person2 = new person('abc', 55555)
  
//   console.log(person1)
//   console.log(person2)




//................................................................................................................
// OOP's 4 piller...................................
// class Person { //parent class
// 	constructor(tempname, temppin) {
//   	this.name = tempname;
//     this.pin = temppin
//   }
//   printfn() {
//   	console.log(this.name, this.pin)
//   }
//   getPin() {
//   	console.log(this.pin)
//   }
//   getName() {
//   	console.log(this.name)
//   }
// }

// /* class Person2 */

// class Student extends Person { //child class
// 	constructor(tempname, temppin, tempid) {
//   	super(tempname, temppin);
//   	this.studentid = tempid
//   }
//   getStudentId() {
//   	console.log(this.studentid)
//   }
//   getName() {
//   	console.log('Hahahahahaha - New Name - ', this.name)
//   }
// }


// class PrimaryStudent extends Student {
// 	constructor(tempname, temppin, tempid, tempparentname) {
//   	super(tempname, temppin, tempid)
//     this.parentname = tempparentname
//   }
//   getParentName() {
//   	console.log(this.parentname)
//   }
// }



// let student1 = new Student('Name', 121212, 'ABC0001')
// student1.getStudentId()
// student1.getName()




// let classObj = new Person('Name', 121212);
// let classObj2 = new Person('trs', 555555555555555555);


// //console.log(classObj)
// classObj.getName()
// classObj.getPin()
// classObj2.getPin()


// console.log(student1)



//................................................................................................................
// call apply bind...................................
// call, apply, bind
//Before ES6 - rest spread

let person = {
	firstname: 'firstname',
  lastname: 'lastname'
  /* //printFn{
    this.firstname, this.lastname
  } */
}

let printFn = function(city, state) {
	console.log(this.firstname, this.lastname, city, state)
}

//printFn('GGN', 'HR');


printFn.call(person, 'GGN', 'HR') //comma separated parameters
printFn.apply(person, ['GGN', 'HR']) 	//array for parameters

let retNewPerson = printFn.bind(person);
retNewPerson('GGN', 'HR');
retNewPerson('LKO', 'UP');
retNewPerson('Mumbai', 'MH');
retNewPerson('Bangalore', 'KA');