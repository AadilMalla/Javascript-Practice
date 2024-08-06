// Primitive and Non Primitive
// Primitive: 7 types
// String,Number,Boolean,null,undefined,Symbol,BigInt
const score = 100 // return typeof is Number
const scoreValue = 100.3 // return typeof is Number
const isLoggedIn = false // return typeof is Boolean
const outsideTemp = null // return typeof is Object


const id = Symbol('123') // return typeof is Symbol
const anotherId = Symbol('123')

console.log(id,anotherId)


const bigNumber = 34567628839n // return typeof is bigInt

console.log(typeof bigNumber)
// Reference Type(non P)
// Array,Objects,Functions

const heroes = ['abc','cdef','ghd', 6737] // return typeof is Array

let myObj = {  // return typeof is Object
    myName: "abced",
    age: 32
}
const myFunction = function(){ // return typeof is function
    console.log("this is my function");
    
}

console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);


