/*
1. Alert()   -> show a Message

2. prompt()   -> show a message and input Text

3. confirm()   ->
*/


//................................alert()..................................
alert("Hello Abhishek How are you");


//...............................prompt()..................................
let name = prompt('Enter your name: ');
let age = prompt("Enter your age: ");
document.write("Your name is: "+name);
document.write("<br>Your age is: "+age);



let result = prompt("Enter your result: ",20);
if(result != null){
    document.write('<br>your result is '+result);
}
else{
    document.write("Null.......");
}

//...................................confirm().....................................
let resonse = confirm("Are you Sure, You wnat to delete ?");
if(response){
    document.write("Deleted...........");
}
else{
    document.write("No Deleted........");
}