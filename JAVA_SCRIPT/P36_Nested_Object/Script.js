// object ke andar object

var user={      //object
        id: 101,
        email: "suryaa@gmail.com",

        personalInfo: {    //nested object
            name: "Abhishek",
            address: {    //nested object
                 street: "koni",
                 city: "Bilaspur",
                 state: "chhatisgarh",
                 country: "India",
            }
        }
};
console.log(user);

console.log(user.personalInfo);

console.log(user.personalInfo.address);

console.log(user.personalInfo.address.city);