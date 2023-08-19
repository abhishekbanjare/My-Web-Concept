// // let x = Math.random();  //every time print difreent number
// let x = Math.random() * 10;   //give 0 - 9 only
// console.log(x);   

// let y = Math.floor(Math.random() * 10);  //remove point .   give 0 - 9 only
// console.log(y);

// // let z = Math.floor(Math.random() * 11);  //give 0 - 10 only
// let z = Math.floor(Math.random() * 100);  //give 0 - 99 only
// console.log(z);

// //if we want to that our digits start from 1
//  let a = Math.floor(Math.random() * 10) + 1; // give 1 to 10 only

 //.....................................................................................................
 //we want to set Upper limite and lower limit then
 //                                 (here starting position +15)
//  let x = Math.floor(Math.random() * (25 - 15)) + 15;
//  console.log(x);
//.......................

function getRandom(min, max){
    let x = Math.floor(Math.random() * (max - min) ) + min;    //here give 10 to 19
    // let x = Math.floor(Math.random() * (max - min)+1) + min;   //here give 10 to 20
    return x;
}

console.log(getRandom(10, 20));
//........................................................................................................