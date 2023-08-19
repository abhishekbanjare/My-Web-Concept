// let x = new Date();
// console.log(x);

// let y = new Date(2018, 11, 13, 10, 33, 56, 7);
// console.log(y);

// let z = new Date("Jun 2, 2023 11:12:33");
// console.log(z);

//.....................................Get function...............................................................
// //get or acces data
// let x = new Date("Jun 2, 2023 15: 20: 33");
// //access any data
// console.log(x.getTime());
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getDate());
// console.log(x.getDay());
// console.log(x.getHours());
// console.log(x.getMinutes());
// console.log(x.getSeconds());

//.....................................Set function...............................................................
// let x = new Date("Jun 2, 2023 15:31:33");    //set/change --> (july 29, 1997 10: 10:10)
// console.log(x);

// x.setFullYear(1997);  
// console.log(x);

// x.setMonth(6);
// console.log(x);

// x.setDate(29);
// console.log(x);

// x.setHours(10);
// console.log(x);

// x.setMinutes(10);
// console.log(x);

// x.setSeconds(10);
// console.log(x);

//......................................add 50 day in current days......................................................

// let x = new Date("Jul 29, 1997 10:10:10");
// console.log(x);

// x.setDate(x.getDate() + 50);      //add 50 days in this current days
// console.log(x);


//........................................compare dates...............................................................
let x = new Date("jul 29, 1997 10:10:10");
let y = new Date();

if(y > x){
    console.log("x is past date");
}
else if(x > y){
    console.log("x is tuture date");
}
else{
    console.log("x is same date");
}
