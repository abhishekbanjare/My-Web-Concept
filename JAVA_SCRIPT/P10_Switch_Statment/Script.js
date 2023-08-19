/*
if input : 1 or y  or Yes  ->   output: continue
if input : 0 or n  or no   ->   output: End.....
*/
let input = 'Yes';

switch(input){
    case 1: 
        document.write("Continue.......");
        break;
    case 'Y':
        document.write("Continue........");
        break;
    case 'Yes':
        document.write("Continue........");
        break;
    case 0:
        document.write("End........");
        break;
    case 'N':
        document.write("End........");
        break;
    case 'No':
        document.write("End........");
        break;
    default:
        document.write("Wrong Input...............");
}