"use strict";
//                  Assignment 1: Building Your Friend List
// Define an object named people containing an empty array called friends
const people = {
    friends: [],
};
const friend1 = {
    firstName: "Fazeen",
    lastName: "Farooq",
    id: 456,
};
const friend2 = {
    firstName: "Iqra",
    lastName: "Shah",
};
const friend3 = {
    firstName: "Aliza",
    lastName: "Khan",
    id: 379,
};
// Add these friend objects to the friends array within the people object.
people.friends.push(friend1, friend2, friend3);
/* Output the entire people object to the console, displaying your information and your
friend list */
console.log(people);
//            Assignment 2:Manipulating an Array: Rearranging Words
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC"
// Start with an array of elements in a scrambled order.
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Initialize an empty array to store the words in the correct order
const arrangedArray = [];
// Step 1: Rearrange elements in the desired order
arrangedArray.push(scrambledArray[7]); // "I"
arrangedArray.push(scrambledArray[4]); // "am"
arrangedArray.push(scrambledArray[5]); // "a"
arrangedArray.push(scrambledArray[0]); // "student"
arrangedArray.push(scrambledArray[1]); // "of"
arrangedArray.push(scrambledArray[6]); // "GIAIC"
// Step 2: Join elements back into a single string
const result = arrangedArray.join(" ");
console.log(result);
//                  Assignment 3: Company Product Catalog
//Create a program to represent a product catalog using an array and perform basic queries.
// Step 1: Define an array named inventory to store product information
const inventory = [];
// Step 2: Create three separate objects, each representing a product, with properties like name, model, cost, and quantity
const product1 = {
    name: "Laptop",
    model: "ABC123",
    cost: 999,
    quantity: 10,
};
const product2 = {
    name: "Smartphone",
    model: "XYZ456",
    cost: 500,
    quantity: 20,
};
const product3 = {
    name: "Headphones",
    model: "DEF789",
    cost: 350,
    quantity: 30,
};
// Step 3: Add these product objects to the inventory array using an appropriate array method
inventory.push(product1, product2, product3);
// Step 4: Access and log the quantity property of a specific product (e.g., third product) in the inventory array
console.log("Quantity of the third product:", inventory[2].quantity);
// Step 5: Explore adding and accessing more elements within the inventory array to understand how to manage product data
const product4 = {
    name: "Tablet",
    model: "PQR789",
    cost: 299,
    quantity: 15,
};
inventory.push(product4);
console.log("Updated inventory:", inventory);
console.log(inventory[3].name, inventory[3].cost);
let students = [
    {
        name: "Anum",
        isSenior: true,
        completedAssignments: true,
    },
    {
        name: "Faiza",
        isSenior: false,
        completedAssignments: false,
    },
    {
        name: "Saba",
        isSenior: true,
        completedAssignments: true,
    },
    {
        name: "Fatima",
        isSenior: false,
        completedAssignments: false,
    },
];
function senoirStudWithAssignment(students) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (student.isSenior && student.completedAssignments) {
            result.push(student);
        }
    }
    return result;
}
const seniorWithAssignment = senoirStudWithAssignment(students);
console.log(seniorWithAssignment);
function removeStudentsWithNoAssignments(students) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        if (!student.isSenior || !student.completedAssignments) {
            result.push(student);
        }
    }
    return result;
}
const updatedClassList = removeStudentsWithNoAssignments(students);
console.log(updatedClassList);
