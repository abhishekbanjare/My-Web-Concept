// Searching any number  (break)
/*
let s=6;
let i;
for(i=1;i<=100;i++){
    if(i===s){
        document.write("Found................");
        break;
    }
}
if(i==101){
    document.write("Not Found.............");
}
*/
//...............................................................................
// print "hello Abhishek 10 times"
/*
let name = "Hello Abhishek";
let j = 1;
do{
    if(j==11){
        break;
    }
    document.write(name+"<br>");
    j++;
}while(j<=100);
*/
//..............................................................................
//print even number   (continue)
/*
let i;
for(i=1;i<=50;i++){
    if(i%2==1){
        continue;
    }
    document.write(i+"<br>");
}
*/
//............................................................................
//write a program to print 1 to 10 table using nexted loop
/*
let i;
let j;
for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
        document.write(i*j+"  ");
    }
    document.write("<br>");
}
*/
//.................................................................................
//continue break nested loop
let i;
let j
for(i=1;i<=10;i++){
    document.write(i+"<br>");
    if(i==3 || i==5){
        continue;
    }
    for(j=1;j<=i;j++){
        if(j==11){
            break;
        }
        document.write(j+" Hello ");
    }
    document.write("<br>");
}