// // Normal function
// function sum(a, b){
//     return a+b;
// }


// //Arrow Function
// let Asum = (x, y) =>{
//     return x+y;
// }

// console.log(sum(10, 20));
// console.log(Asum(20, 30));

// //agar Arrow function me only one / 1 hi line ho aur oo koi value return kar raha ho to ham Arrow function ko thoda sort me likh sakte hai

// let Amult = (a, b) => a*b;
// console.log(Amult(10, 10));




//...................................................................................................................
// // in normal function
// function double(a){
//     return 2*a;
// }


// // Arrow function
// // agar Arrow function me 1 hi line ho aur use return karana ho aur sath hi usme only one / 1 hi argument pass ho raha ho to ham Arrow function ko sort me kuchh is tarah se likh sakte hai
// let Adouble = a => 2*a;

// console.log(double(10));
// console.log(Adouble(20));



// ..................................................................................................................
// function random(){
//     return Math.random();
// }

// //Arrow function
// let Arandom = () => Math.random();   //if dont any argument pass in our Arrow function so also make parenthasis

// // console.log(random());   
// console.log(Arandom());



//Anonamus Function..................................................................................................

//normal function
// document.addEventListener('click', function(){
//     console.log("clicked.......");
// });

// Arrow function
document.addEventListener('click', () => {
    console.log("documentn clicked by Arrow function....");
});