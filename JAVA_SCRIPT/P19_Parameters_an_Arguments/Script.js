function MulTable(num){
    for(i=1;i<=10;i++){
    document.write(`${num} * ${i} = ${num * i}`);
    document.write("<br>");
    }
    document.write("<br><br>");
}

MulTable(2);
document.write("<br>");
MulTable(5);