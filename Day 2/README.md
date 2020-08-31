# Introduction to JavaScript - Day 2

## Variables

* Variable is a container for a value
	* Containers for info that lives in a computer's memory
* Variables label & store data in memory
* Few things to do with variables:
	1. Create variable with a descriptive name
	2. Store/update info stored in a variable
	3. Reference info stored in a variable

## Create a Variable: var

* Two new keywords in ES6 JavaScript - `let` and `const`

Example:
```javascript
var myName = 'Arya';
console.log(myName); // Outputs Arya
```

* `var` is a keyword that creates/declares a new variable
* `myName` is the variable name
* `=` is assignment operator - assigns value to variable
* `Arya` is the value assigned to myName

Few general rules for naming variables:
* Cannot start with numbers
* Case sensitive
* Cannot be the same as keywords


```javascript
var favoriteFood = 'pizza'; // initialize var
var numOfSlices = 8; // initialize var

console.log(favoriteFood); // print pizza
console.log(numOfSlices); // print 8
```

## Create a Variable: let

* `let` keyword introduce in ES6
* `let` signals the variable can be re-assigned a different value
* When using `let` we can declare a var without assigning a value - automatically initialized with value of `undefined`

```javascript
let changeMe = true; // assign bool val to variable
changeMe = false; // change value to false
console.log(changeMe); // print false
````
## Create a Variable: const

* `const` keyword introduce in ES6
* `const` variable cannot be re-assigned
* Constant variables must be assigned a value when declared

```javascript
const entree = 'Enchiladas'; // creates const variable
console.log(entree); // prints Enchiladas
````

## Mathematical Assignment Operators

Example:

```javascript
let w = 4;
w = w + 1;

console.log(w); // outputs 5
```

* The `w = w + 1` line increases value of w by 1
* `w += 1` also increases value by 1

* `-= 5` decreases value by 5
* `*= 2` multiplies value by 2
* `/= 2` divides value by 2

```javascript
let levelUp = 10; // initialize var
let powerLeve = 9001; // initialize var
let multiplyMe = 32; // initialize var
let quarterMe = 1152; // initialize var

levelUp += 5; // add 5 to levelUp
powerLevel -= 100; // subtract 100 from powerLevel
multiplyMe *= 11; // multiply by 11
quarterMe /= 4; // divide by 4
````

## Increment and Decrement Operator

* The `++` operator increases value by 1
* The `--` operator decreases value by 1

```javascript
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++; // add 1
lostDollar--; // subtract 1
```

## String Concatenation

* The `+` operator can be used to combine two strings

```javascript
let favouriteAnimal = 'dog';
console.log('My favourite animal: ' + favouriteAnimal);
```

## String Interpolation

* ES6 can insert (interpolate) variables into strings using __template literals__
* Template literals wrapped by backticks 
* Benefits of template literals is readability of code

```javascript
let myName = 'JJ';
let myCity = 'Glasgow';

console.log(`My name is ${myName}. My favorite city is ${myCity}`);
```

## typeof Operator

* typeof allows us to check data type of variable value
* `typeof` checks value to its right and returns, a string of the dat type

```javascript
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // prints string

newVariable = 1
console.log(typeof newVariable); // prints number
```
