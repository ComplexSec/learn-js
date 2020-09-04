# Introduction to JavaScript - Day 4

## Short Review

* Functions are re-usable blocks of code that group together a sequence of statements
* A function declaration
```javascript
function greetWorld() {

}
```
* A parameter is a named variable inside a function's block which will be assigned the value of the argument passed
```javascript
function calculateArea(width, height) {
	console.log(width * height);
}
```
* To call a function in your code
```javascript
greetWorld()
```
* ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed
* To return a value from a function, use the `return statement`
* To define a function using __arrow function notation__
```javascript
const calculateArea = (width, height) => {
	const area = width * height;
	return area;
}
```
* Function definition can be made concise using __concise arrow notation__
```javascript
// SINGLE-LINE BLOCK
const sumNumbers = number => number + number;

// MULTI-LINE BLOCK
const sumNumbers = number => {
	const sum = number + number;
	return sum;
}
```

## In-depth Details

<details><summary>What are Functions?</summary>
<p>
	
* Instead of re-writing the same code, we can group a block together and associate it with one task
* Achieve this by creating a function
* Function is a reusable block of code that groups together a sequence of statements

</p>
</details>

<details><summary>Function Declarations</summary>
<p>

* One way to create a function is by using __function declaration__
* Function declaration binds a function to a name or __identifier__

```javascript
function greetWorld() {
	console.log('Hello, World!');
}
```

Function declaration consists of:
* The `function` keyword
* Name of the function, followed by parentheses
* Function body or block of statements enclosed in `{}`

A function declaration is a function that is bound to an identifier

* Be aware of the `hoisting` feature in JS which allows access to function declarations before they are defined

```javascript
console.log(greetWorld());
// Output: Hello, World!

function greetWorld() {
	console.log('Hello, World!');
}
```

* Hoisting is not considered good practice but be aware of it

Examples:
```javascript
function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas Tardes.');
}
```
</p>
</details>

<details><summary>Calling a Function</summary>
<p>

* A function declaration just declares the existence of the function
* Code inside a function runs only when function is called
* To call a function, type the function name followed by `()`

```javascript
function getGreeting() {
	console.log('Hello, World!');
}

getGreeting();
```

This function call executes the function body

```javascript
function sayThanks() {
	console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks()
sayThanks()
sayThanks()
```

</p>
</details>

<details><summary>Parameters and Arguments</summary>
<p>

* Some functions take inputs and use the inputs to perform a task 
* When declaring a function, you can specify its parameters
* Parameters allow functions to accept inputs and perform tasks
* Parameters are placeholders for information that are passed to the function when called

```javascript
function calculateArea(width, height) {
	console.log(width * height);
}
```

Parameters specified above between brackets as `width` and `height`
* Inside the function, they act just like regular variables
* `width` and `height` act as placeholders for values
* When calling a function that has parameters, we specify the values in the brackets
* Values that are passed to function are called arguments
* Arguments can be passed to the function as values or variables

```javascript
calculateArea(10, 6);
```

* In function call above, number 10 is width and 6 is height

```javascript
// Declare function
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name +  '! We appreciate your business.');
}

// Pass parameter to function
sayThanks('Cole')
```

</p>
</details>

<details><summary>Default Parameters</summary>
<p>
	
* Default parameters allow parameters to have a predetermined value if there is no argument passed

```javascript
function greeting(name = 'stranger') {
	console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

* Used the `=` operator to assign the parameter `name` a default value of `stranger`
* When code calls greeting('Nick!'), the value of the argument is passed in
* When there is no argument, the default value is used
* By using a default parameter, we account for situations when an argument is not pased


```javascript
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
```
</p>
</details>

<details><summary>Return</summary>
<p>
	
* When function is called, computers runs through function codes and evaluate the result of calling the function
* By default, the resulting value is `undefined`

```javascript
function rectangleArea(width, height) {
	let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
```

* Above, a function is defined to calculate the area of `width` and `height` parameter
* The function is invoked with arguments
* When printing the results, it prints undefined
* The function works but it did not capture it
* Capture the result via the keyword `return`

```javascript
function calculateArea(width, height) {
	const area = width * height;
	return area;
}
```

* When return is used in a function body, the execution of the function is stopped and the code that follows will NOT be executed

```javascript
function rectangleArea(width, height) {
	if (width < 0 || height < 0) {
		return 'You need positive integers to calculate area!';
	}
	return width * height;
}
```

* If argument for width/height is less than 0, then rectangleArea() will return the string
* Second return statement `width * height` will NOT run
* Return keyword is powerful because it allows functions to produce an output - can save output to variable

```javascript
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

```
</p>
</details>

<details><summary>Helper Functions</summary>
<p>
	
* Can use return value of a function inside another function
* Functions being called within another function are referred to as __helper functions__
* To write a function that converts temp from C to F, we could write two functions

```javascript
function multiplyByNineFifths(number) {
	return number * (9/5);
};

function getFahrenheit(celsius) {
	multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15) // Returns 59
```

* getFahrenheit is called and `15` is passed
* Code inside getFahrenheit calls multiply() function and passes `15`
* multiply takes argument for the `number` parameter
* Code inside multiply function multiplies `15` by `9/5` which evaluates to 27
* 27 is returned back to the function call in getFahrenheit
* getFahrenheit continues to execute and adds 32 to 27, which evaluates to 59
* 59 is returned back to function call getFahrenheit(15)

* Use functions to section off small bits of logic or tasks and use when needed
* Writing helper functions can help take large and difficult tasks and break them into smaller tasks

```javascript
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
```
</p>
</details>

<details><summary>Function Expressions</summary>
<p>

* Another way to define a function is using __function expression__ 
* To define function inside an expression, use the `function` keyword
* In function expression, the function name is usually omitted
* Function with no name is called `anonymous function`
* Function expression is often stored in a variable in order to refer to it

```javascript
const calculateArea = function(width, height) {
	const area = width * height;
	return area;
}
```

To declare a function expression:
* Declare variable to make the variable's name to be the name of the function
* Assign as that variable's value an anonymous function created by using the `function` keyword followed by a set of brackets with possible parameters then a set of curly braces that contain function body

* To invoke a function expression, write the name of the variable in which the function is stored followed by brackets enclosing any arguments being passed
* Unlike function declarations, function expressions are NOT hoisted - cannot be called before they are defined

```javascript
// DEfines Function Expression
const plantNeedsWater = function(day) {
	if (day === 'Wednesday') {
		return true;
	} else {
		return false;
	}
}
// Prints false 
console.log(plantNeedsWater('Tuesday'));

// Puts result in a variable
const waterCheck = plantNeedsWater('Tuesday');
console.log(waterCheck);
```
</p>
</details>

<details><summary>Arrow Functions</summary>
<p>
	
* Arrow functions are a shorter way to write function
* Uses special fat arrow `() =>`
* Arrow functions remove need to type out keyword `function`


```javascript
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

```
</p>
</details>

<details><summary>Concise Body Arrow Functions</summary>
<p>

* JS provides several ways to refactor arrow function syntax
* Most condensed form of function is known as __concise body__
* Functions that take only a single parameter do not need that parameter enclosed in brackets
* If a function takes zero or multiple parameters, brackets are required

```javascript
// ZERO PARAMETERS
const functionName = () => ();

// ONE PARAMETER
const functionName = paramOne => ();

// TWO OR MORE PARAMETERS
const functionName = (paramOne, paramTwo) => ();
```
	
* A function body comoosed of a single line does not need curly braces
* Without curly braces, whatever that line evaluates will be automatically returned
* Contents of the block should immediately follow the arrow `=>` and `return` keyword can be removed - referred to as `implicit return`

```javascript
// SINGLE-LINE BLOCK
const sumNumbers = number => number + number;

// MULTI-LINE BLOCK
const sumNumbers = number => {
	const sum = number + number;
	return sum;
}
```

If we have a function
```javascript
const squareNum = (num) => {
	return num * num;
};
```

We can refactor the function to
```javascript
const squareNum = num => num * num;
```
* Brackets around `num` have been removed since it has one parameter
* Curly brakcets have been removed since the function consists of a single line
* The `return` keyword has been removed since function consists of a single line

```javascript
const plantNeedsWater = (day) => {
	return day === 'Wednesday' ? true : false;
};
```

OR

```javascript
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
```
</p>
</details>
