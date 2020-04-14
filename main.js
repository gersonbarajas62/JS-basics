/*alert("hey")

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

// Conditionals
// looslie equals ==
//strictly equals ===

const x = 10;
if(x === 10) {
    Console.log('x is 10');
}else if(x > 10) {
    console.log('x is greater than 10');
}else {
    console.log('x is less than 10')
}

const x = 4;
const y = 11;
if( x > 5 && y > 10){
    console.log('x is more')
}

//turnieror operator 
const x = 10;

const color = x > 10 ? 'red' : 'blue';
//switches to evaluate a condition 
switch(color) {
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log('color is not blue');
        break;
        default:
            console.log('color is not red or blue');
            break;
}

//functions 
//functions take paramaters that are num1 and num2 
// we can set up a default value to our params with =1 inside the perantecis
//we have to always return the output with 
function addNums(num1, num2){
//console.log(num1 + num2)
return num1 + num2;
}
addNums(5,4)

//ES6 arrow function or fat arrow 
//we don't use key word function 
//we declare the variable with const
const addNumbers = (numb1,numb2) => {
    return numb1 + numb2
}
//if  function only has one expresion we can get rid of the curly brackets
// we can get rid of the return key word  
const addNumbers = (numb1,numb2) => numb1 + numb2
//if there is only one param we can do this 
const addNumbers = numb1 => numb1 + 5;
//arrow function inside methods 
todos.forEach((todo) => console.log(todo));
//lexical this word inside arrow functions

//object oriented programming 
//constructor function in prototypes and in ES6 classess 
//capital letter when its a constructor function 
//takes in params and key value pairs 
// we can use the date constructor to format the date from string to date 


function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    //this.dob = dob;
    this.dob = new Date(dob);
    // by using date constructor we can call different functions with the .dob expresion
    //adding methods toconstructor
    //methods have functions inside the value 
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

//instantiate object 
// new key word is use to create a new instance of the constructor 
// we decalre name for new person and pass in the info that the constructor requires
const person1 = new Person('Gerson', 'Roa', '2-3-1996');

// using protoypes t
//we can use them to get rid off the methos inside the constructor because not every instance need all methods
// we can add the method to the prototype by 
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

//ES6 classes we can do it like this 
//does the same but in a nicer way
// we decalre it with the class key word  
class Person {
    //we use the method constructor 
    //methods are functions inside classes
    //takes in params
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    //methods inside the class
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


//single element
document.getElementById()
document.querySelector()
//multiple element 
document.querySelectorAll()
document.getElementsByClassName()
document.getElementsByTagName()


//to loop thru the items 
const items = document.querySelectorAll('.item');

items.forEach(item) => console.log(items)

// to maniputale elemts in the dom 
const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'gerson';
ul.lastElementChild.innerHTML = '<h1> hello </h1>';
 
// we can change the style in the button by 
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events 
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    console.log('click')
})*/


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode( `${nameInput.value} : 
        ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields 
        nameInput.value = '';
        emailInput.value = '';

    }
}
