// // Here we stored, returned data from data.json file
// // yahan ham sikhenge ki server se jo data/value aayega use ham kaise nikalenge/access karenge 
// let data = `{
//     "name": "Vishwajeet",
//     "age": 25,
//     "is_student": true,
//     "passport_to": null,
//     "p_language": ["c","c++","java","python"],
//     "address":{
//         "city": "delhi",
//         "state": "new delhi",
//         "pincode": 110011
//     }
// }`;

//     // this is a (data) JSON string, so we have to convert it to javaScript Object 

//     let dObject = JSON.parse(data);  // here we convert JSON string to javaScript Object

//     console.log(dObject['name']);
//     console.log(dObject['age']);
//     console.log(dObject['is_student']);

//     // we want to acces Programing_language so
//     console.log(dObject['p_language']);      //array
//     console.log(dObject['p_language'][2]);  // we want to access value = java in array

//     // if we want to access abject
//     console.log(dObject['address']);
//     console.log(dObject['address']['state']); //if we have to acces indivisual value from object

//.....................................................................................................................
//.....................................................................................................................
//P_102 JSON_Stringigy
//ab ham yahan sikhenge ki hamare pass jo data hai use server par kaise bhejenge

//here we create object
let student = {
    name: "Abhishek",
    age: 25,
    city: "delhi"
}
console.log(student);
//this is a student object, its we have to pass server but we don't pass direct object of server
// if we want to pass this object to server so first of all we have to convert this object to JSON String

let Jdata = JSON.stringify(student); //here we have convert / access Json String data from student object
console.log(Jdata);

// we have JSON String data so, now we have pass JSON data/string to server 