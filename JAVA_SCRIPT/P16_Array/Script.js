// One dimensional array .................................................................................
// let book=["math","physics","bio","computer",""];
// console.log(book[1]); //physics
// console.log(book[3]);//computer
// console.log(book[2]); //bio
// console.log(book); //maths, physics, bio, computer


//.....................................................................
//print Array using for loop
// let book=["Math","Physics","Bio","Computer Science"];
// let booklength=book.length;
// for(i=0;i<booklength;i++){
//     console.log(`Element ${i} is ${book[i]} \n`);
// }

// //print Array usinf forEach() loop
// let books=["Math","Physics","Bio","Computer Science"];
// books.forEach(myfunction);
// function myfunction(value){
//     console.log(value);
// }


//.....................................................................


// //update Array value
// book[2]="science";
// console.log(book); //math, phisics, science, computer

// operation on Array ................................................

// // //Find Length of Array
// let book=["Hindi","English","Math","Science","Physics","Chemistry"];
// console.log(book);
// console.log(book.length);  //6

// //Add new Element an Array (from end)
// book.push("JavaScript");
// console.log(book);

// //Add new Element an Array (from frunt)
// book.unshift("HTML");
// console.log(book);

// //Remove element in the array (end side)
// book.pop();
// console.log(book);
// //Remove element in th array (frunt side)
// book.shift();
// console.log(book);

// //Delete/ remove any element in the array
// //syntex:  book.splice(startingElement,howElement);
// book.splice(2,2);
// console.log(book);

// //Make Array Empty
// book=[];  //book.length=0;
// console.log(book);


// //Find position in Array.......................................
// let books=["Math","Bio","Science","Java","CPP"];
// console.log(books);
// let position=books.indexOf("Science");
// console.log("Position of Science is: "+position);//2


// //find any variable is Array or not
// console.log(Array.isArray(books));
// let abhi;
// console.log(Array.isArray(abhi));


//...................................................................
//change String to Array in word wise
// let text="This is a randum text. this tutorial is good";
// console.log(text);
// // let wordarray=text.split(' ');  //divide on space
// let wordarray=text.split('s');   //divide on s
// console.log(wordarray);

// //change Array element to string/sentence..........................
// let myintro=["Hello","my","name","is","Abhishek"];
// console.log(myintro);
// let sentence=myintro.join(' ');
// let sentence2=myintro.join('-');
// console.log(sentence);
// console.log(sentence2);

// //Add Arrays (multiple arrays).....................................
// let book1=["java","CPP","C","javascript"];
// let book2=["HTML","CSS","PHP"];
// let book3=["Hindi","English","Computer","Science"];
// let newbook=book1.concat(book2);
// let newbook2=book1.concat(book2,book3);
// console.log(newbook);
// console.log(newbook2);


//...........................................................................
// ................Multidimensional Array..............
let nameWithRoll=[
                    ["Abhishek",["2022","20222"]],
                    ["Nitesh","2024"],
                    ["Aman","2026"],
                    ["Pradip","2028"]
                 ];
console.log(nameWithRoll[0][1][1]);  //20222
console.log(nameWithRoll[2][0]);   //Aman
console.log(nameWithRoll[3][1]); //2028
//.......................................................................