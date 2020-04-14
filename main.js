alert("hey")

//Var = is global scope so oit could cause conflict with other variables
//let = allows us to reassign it to another value 

let score;

score = 10;

console.log(score)
// const  cannot be reasign and will not allow you to initialize the variable if there is no value to it 
//const score;

//Data types 
//strings , numbers , boolean, null, undefined, symbol
const name = 'John';
const age = 20;
const isCool = true;
//there is no decimal datatype in JS its just a number  
const rating = 4.5;
const x = null;
const y = undefined;
//Also undefined because variable has no value 
let z;
// to check what datatype it is we can use  typeof
console.log(typeof name)


//concatenation 
console.log('my name is ' + name + ' and i am ' + age )
// ES6 template strings 
console.log(`my name is ${name} and i am ${age}`)

//strings methods 
const s = 'hello world ';
//length will allow us to see how many caracters are in a string 
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
//we can also conbine methods 
console.log(s.toUpperCase(0, 5).toUpperCase());
console.log(s.split(''));
 //arrays - variables that can hold multiple values 
 // array constructer 
 const numbers = new Array(1,2,3,4,5);

 const fruits = ['apples', 'oranges', 'pears'];
//this way we can pull an especific value  
//console.log(fruits[1])
// to add elements in arrays 
 fruits[3] = 'grapes';
//push method is more effective because no matter what it will always send it to the end
 fruits.push('mangos')
//to add to the begining of array
 fruits.unshift('strawberries')
// to delete an element in the end of an array pop  
fruits.pop();
// to verify an array is an array we can use isArray gives boolean 
console.log(Array.isArray(fruits))
//to get index of an element we can use indexOf
console.log(fruits.indexOf('oranges'))

// object literals are key value pairs 
const person = {
    firstName: 'John',
    lastName: 'doe',
    age: 30,
    hobbies: ['music', 'movies','sport'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
//to log the whole object 
console.log(person.firstName)
//to get multiple elelmets we can use 
console.log(person.firstName, person.lastName);

// to get index out of arrays 
console.log(person.hobbies[1]);
// ES6 destructuring 
const { firstName, lastName } = person;
const { firstName, lastName, address:{ city } } = person;

// to add elements in object 
person.email = 'johndoe@gmail.com';


// arrays of objects 
const todos = [
    {
        id: 1, 
        text: 'take out trash',
        isCompleted: true 
    },
    {
        id: 2, 
        text: 'meeting with boss',
        isCompleted: true 
    },{
        id: 3, 
        text: 'dentist appt',
        isCompleted: false 
    }
]
// to pull from todos arrays and objects
console.log(todos[1].text)

//JSON format are like objects literal but syntax will have duble quotes on keys and strings no single quotes in JSOn objects
//this can be use to format the object befor sending it 
const todoJson = JSON.stringify(todos);
console.log(todoJson)

//Loops
//For loop 
for(let i = 0; i < 10; i++) {
    console.log(i)
}

// While loops 
let i = 0;
while(i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}

//loop in arrays 
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
// for of loop 
for(let todo of todos){
    console.log(todo.text)
}
//high order array methods 
//forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
})

const todoText = todos.map(function(todo){
    return todo.text
})

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

// to use multiple methods 
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})



