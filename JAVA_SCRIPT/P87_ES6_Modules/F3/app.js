// //sortcut for many more file import in one line
// import {widthdraw, deposite} from './modules/account.js'; but if we import meny meny more statment this types so its not working so we can do another way

// import * as usr from './modules/user.js';  //its import all export code of statments

// console.log(usr.name);
// usr.code();
// // usr.cook();
// usr.widthdraw();


//default function() access..........................................................................
import { default as abhishek, widthdraw as wd, deposite } from './modules/account.js';
abhishek(); 
