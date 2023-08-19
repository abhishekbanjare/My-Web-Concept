//generally we pass 'arguments' in function but if we have to need pass 'function' as a argument to another function , so its process we call callback function

function sayHello(){
    console.log("Hello Abhishek..........");
}

function sayHii(){
    console.log("Hiiii Akhilesh..........");
}

function add(num1, num2, callback){
     console.log(num1 + num2);
     callback();
}
let a = 100;
let b = 200;

// there are both line call same function and work diferent
add(a, b, sayHello);
add(300, 800, sayHii);


// we can also pass anonamus function as a arguments
add(30, 50, function(){
                console.log("Bye..................");
});

// add(10, 20, notdefinedfunc);  //Error: not definedFunction