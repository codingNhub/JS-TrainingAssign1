let employee1 = {
    name: "Ali Ahmad",
    age: 23,
    address: 'LA'
}

let employee2 = employee1 // shallow copy ----> means employee1 pass its reference to the employee2 
console.log(employee1);

employee2.name= "Hassan";
console.log(employee1);
console.log(employee2);
 
//DEEP copy Method 1 
let employee3 = JSON.parse(JSON.stringify(employee1)); // Chnage object into string and then again parse into object again 
// create complete new object remove any reference 
employee3.address=  "Pakistan";
console.log(employee1);
console.log(employee3);

//cons: Can not apply on functions, dates 

//DEEP Copy Method 2 structuredClone(obj)
 let data = {
    data: new Date(),
    address : {city : "Lahore", provience: "Punjab"},
    friends: new Set(["Ali", "Ahmad"]),
 }
 console.log(data);
 let dataCopy = structuredClone(data);

 dataCopy.address.city = "Karachi";
 console.log(data); // no chnage in city
 console.log(dataCopy); // from lahore to karachi modification

 console.log(dataCopy.friends.has("Ali"));
 
 // Cons : This method can not handle function if we try to copy functions it show undefined

 //Deep Copy Method 3 
 const _ = require("lodash");

 let original = {
   name: "Fatima",
   birthDate: new Date(),
   address: { city: "Lahore", zip: "50500" },
   friends: new Set(["BOB", "Alice"]),
   mapData: new Map([["key", "value"]]),
   greet: function() { console.log("My name is Fatima"); }
 };
 
 let deepCopy = _.cloneDeep(original);

 console.log(deepCopy);
 
 deepCopy.address.city = "Karachi";
 deepCopy.friends.add("Fizz");
 
 console.log(original.address.city); // Lahore (original remains unchanged)
 console.log(deepCopy.address.city); // Karachi (only deepCopy is modified)
 // false (not added to the original)
 console.log(original.friends.has("Fizz")); 
 // true (added to deep copy)
 console.log(deepCopy.friends.has("Fizz")); 
 
 deepCopy.greet(); // "My name is Fatima"
 