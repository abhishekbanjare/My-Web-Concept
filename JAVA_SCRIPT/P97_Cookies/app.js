//here we set cookies 
//add expires 
document.cookie = "item=milk; expires=Sun, 16 Jul 2023 01:00:00 UTC";
document.cookie = "loc=india";

//change/add cookies
document.cookie = "item=bread,Eggs; expires=Sun, 16 Jul 2023 01:00:00 UTC";

//how to read cookie
// let x = document.cookie;
// alert(x);
// console.log(x);

// if we want to delete cookies then we se expiry date in past
document.cookie = "item=bread,Eggs; expires=Sat, 15 Jul 2023 01:00:00 UTC"; 