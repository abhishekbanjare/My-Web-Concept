// let str = "Abhishek";
// let greet = `Hi ${str}`;   //(templet literal)
// console.log(greet); 
//.........................................................................

// let str ="Abhishek Banjare";
// console.log(str);

// let str1 = "Abhishek \n Banjare";
// console.log(str1);

// let str2 = "Abhishek \t Banjare";
// console.log(str2);

//........................................................................
// //fined Number of charactor's (length)

// let str = "Abhishek Banjare"
// console.log(str.length);

//..........................................................................
//fetch any charector

// let str = "Abhishek Banjare";
// console.log(str[4]);
// console.log(str[7]);

//..........................................................................
// //String concatination

// let str1 = "Abhishek ";
// let str2 = "Banjare";
// let str3 = str1 + str2;
// console.log(str1 + str2);
// console.log(str3);

//.........................................................................
// //String compare
// let str ="Abhishek";
// if(str == "Abhishek"){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//........................................................................
// //String concatination using function
// let str1 = "Abhishek";
// let str2 = "Banjare";
// let str3 = str1.concat(str2);
// let str4 = str1.concat(" ",str2);
// console.log(str3);
// console.log(str4);

//........................................................................
// //get substring or fetch substring
// let str = "This is JavaScript tutorial. It is a good tutorial.";
// let Substring = str.substr(8, 19);   //(starting position, length)
// console.log(Substring);

//........................................................................
// // let str = "This is JavaScript tutorial. It is a good tutorial.";
// let Substring = str.substring(8, 18);   //(position, position)
// console.log(Substring);

//.......................................................................
//fined position of any substring
// let str ="This is JavaScript tutorial. It is a good tutorial.";
// let position = str.indexOf('good');
// console.log(position);

//.......................................................................
// // let str = "This is JavaScript tutorial. It is a good tutorial.";
// let position = str.indexOf('is', 6);  //(is, search start);
// console.log(position);

//.......................................................................
// //search from last index
// let str = "This is javaScript tutorial. It is a good tutorial.";
// let position = str.lastIndexOf("is");
// console.log(position);
// //is we search whose not in string then return -1.

// let position1 = str.lastIndexOf('iss');  // return -1
// console.log(position1);

//.......................................................................
// //Remove white space (trim())
// let str = "        This is JavaScript        ";
// let trimedstr = str.trim();
// console.log(str);
// console.log(trimedstr);
// //if we want to removed white space in string from start or end then....
// let trimedStart = str.trimStart();
// let trimedEnd = str.trimEnd();
// console.log(trimedStart);
// console.log(trimedEnd);

//.......................................................................
// //Convert String to UPPERCASE and Lowercase
// let str = "This is Javascript Tutorial. It is a Good tutorial.";
// let upper = str.toUpperCase();
// let lower = str. toLowerCase();
// console.log(str);
// console.log(upper);
// console.log(lower);

//........................................................................
// //change or replace substring
// let str = "This is a good tutorial";
// let replace = str.replace('good', 'best');
// console.log(str);
// console.log(replace);

//........................................................................
// //includes(), if we check any substring available or not
// let str = "This is a JavaScript tutorial.";
// let str2 = str.includes('JavaScript');
// console.log(str);
// console.log(str2);

//........................................................................