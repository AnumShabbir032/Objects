// =========════============================ ⋆★⋆ ════===========================================
//Chapter :69 "Objects" 
// =========════============================ ⋆★⋆ ════===========================================


// ●○●○●○●○●●○●○●○●○● Question no : 01 ●○●○●○●○●●○●○●○●○●


// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;


// var itemsArray = [
//     {
//         name: "juice",
//         price: 50,
//         quantity: 3
//     },
//     {
//         name: "Cookie",
//         price: 30,
//         quantity: 9
//     },
//     {
//         name: "shirt",
//         price: 880,
//         quantity: 1
//     },
//     {
//         name: "pen",
//         price: 100,
//         quantity: 2
//     },
// ]

// var item1 = (itemsArray[0].price * itemsArray[0].quantity);
// var item2 = (itemsArray[1].price * itemsArray[1].quantity);
// var item3 = (itemsArray[2].price * itemsArray[2].quantity);
// var item4 = (itemsArray[3].price * itemsArray[3].quantity);

// var totalPrice = (item1 + item2 + item3 + item4);

// document.write(`Item 1 : ${item1} <br /> Item 2 : ${item2} <br /> Item 3 : ${item3} <br /> Item 4 : ${item4} <br /> `);

// document.write(`total Price = ${totalPrice}`)

// ●○●○●○●○●●○●○●○●○● Question no : 02 ●○●○●○●○●●○●○●○●○●

// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.


// var obj = {
//     name : "Baber",
//     email : "abc@gmail.com",
//     password : "abc12345",
//     age : 20,
//     gender : "male",
//     city : "Karachi",
//     country : "Pakistan"
// }

// if("age" in obj && "country" in obj == true ){
//     document.write(`<br /> Yes age and country exist in obj`);
// }
// else{
//     document.write(`Not found`);
// }



// ●○●○●○●○●●○●○●○●○● Question no : 03 ●○●○●○●○●●○●○●○●○●

// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

// function Stud(first, last , age , country){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.country = country;
// }

// var stud1 = new Stud("babar", "Shabbir", 20 , "Pakistan");
// var stud2 = new Stud("jawad", "Ahmed", 25 , "Pakistan");
// var stud3 = new Stud("asra", "yousuf", 19 , "Pakistan");
// var stud4 = new Stud("wania", "Shabbir", 22 , "Pakistan");

// console.log(stud1)
// console.log(stud2)
// console.log(stud3)
// console.log(stud4)


// ●○●○●○●○●●○●○●○●○● Question no : 04 ●○●○●○●○●●○●○●○●○●

// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one. 

//???