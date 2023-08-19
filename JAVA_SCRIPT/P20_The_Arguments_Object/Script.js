// function add(){
//     // console.log(arguments.length);

//     console.log(arguments);
// }

// add(5, 7);
// add(5, 7, 8);
// add(5, 7, 2, 6);

//.....................................................................................
// function add(){
//     if(arguments.length == 0){
//         console.log("No parameter passed");
//     }
//     else{
//         console.log(arguments[1]);
//         console.log(arguments[0]);
//         console.log(arguments[2]);
//         console.log(arguments[3]);
//     }
// }
    
//     // add(5, 7, 8);
//     add();

//......................................................................................

function add(){
    if(arguments.length == 0){
        console.log("No arguments passed");
    }
    else{
        let sum=0;
        for(let i=0 ; i < arguments.length ; i++){
               sum = sum + arguments[i];
        }
        console.log(sum);
    }
}

// add();
// add(7);
// add(7, 8);
// add(6, 7, 8);
add(8, 4, 8, 9);

let addition = add;   //add function to variable
addition(10, 20, 40, 30);