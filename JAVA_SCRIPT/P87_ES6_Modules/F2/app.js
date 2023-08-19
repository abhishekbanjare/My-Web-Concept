import { name } from './modules/user.js';
import { code } from './modules/user.js';

// //sortcut for many more file import in one line
// import {widthdraw, deposite} from './modules/account.js';

// if we want to rename any function like widthdraw so we can
import {widthdraw as wd, deposite} from './modules/account.js';

console.log(name);
//console.log(age);  // error because age is not export and import 
code();

// widthdraw();
wd();  //renamed function of widthdraw
deposite();