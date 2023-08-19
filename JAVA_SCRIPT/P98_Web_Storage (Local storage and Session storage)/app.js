// this features add after ES5
// //set local storage.............................................................................
// localStorage.setItem('FirstName', 'vishwajeet');
// localStorage.setItem('Location', 'Delhi');

// console.log(localStorage.getItem('Location'));   //get value.................

// localStorage.removeItem('Location');    //remove item.....................



//Session storage....................................................................................................
// isme tab close karne par band ho jayega aur same/usi tab me hi acces hoga

// set sessionStorage
sessionStorage.setItem('FirstName', 'Abhishek');
sessionStorage.setItem('LastName',"Banjare");

console.log(sessionStorage.getItem('FirstName')); //get value from session storage

sessionStorage.removeItem('FirstName');    //remove firstname and value
