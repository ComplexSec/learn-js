# Introduction to JavaScript - Day 3

## Short Review

* An if statement checks a conditon and executes a task if condition is TRUe
* If-else statements make binary decisions and execute different code blocks based on condition
* Can add more conditions using else-if statements
* Comparison operators can compare two values
* Logical AND operator checks both conditions are TRUE
* Logical OR operator checks one condition is TRUE
* Logical BANG operator switches TRUE to FALSE or FALSE to TRUE
* Ternary operator is shorthand code for if-else
* Switch statement used to simplify else-if statement
* `break` keyword stops remaining cases from being checked

## In-depth Details

<details><summary>Conditional Statements</summary>
<p>

* Conditional statement checks a specific condition and performs a task

</p>
</details>

<details><summary>If Statement</summary>
<p>
	
* "If the weather is nice, we go outside" is an example of an if statement
* Can perform a task based on a condition using `if` statement

Example
```javascript
// Prints "This message will print!"
if (true) {
	console.log('This message will print!');
}
````

If statement is composed of:
* `if` keyword followed by brackets `()` and a code block indicated via curly brackets `{}`
* Inside brackets, a condition is provided that evalutes TRUE or FALSE
* If condition is true, code inside curly brackets runs
* If condition is false, block doesn't execute

```javascript
let sale = true; // initialize variable
sale = false; // change value
if (sale) { // if sale (true), print message
	console.log('Time to buy!')
}
````

</p>
</details>

<details><summary>If..Else Statements</summary>
<p>

* Previous example used an if statement that checked a condition
* To add some default behaviour to if statement, can add an `else` statement to run code when condition is FALSE

Example
```javascript
if (false) {
	console.log('The code in this block will not run');
} else {
	console.log('But the code in this block will');
}
```

Else statement
* uses the `else` keyword following code block of `if`
* has code block that is wrapped by `{}`
* code inside `else` code block executes when `if` condition is FALSe

* If-else statements allow us to automate solutions to yes-or-no questions (__binary decisions__)

Working Example:
```javascript
// Prints "Time to wait for a sale"
let sale = true;
sale = false
if (sale) {
	console.log('Time to buy!');
} else {
	console.log('Time to wait for a sale.');
}
```

</p>
</details>

<details><summary>Comparison Operators</summary>
<p>

* Sometimes need to use different types of operators to compare values - called __comparison operators__
* Compare value on left with the value on right

List of commonly used operators:

* Less than `<`
* Greater than `>`
* Less than or equal to `<=`
* Greater than or equal to`>=`
* Is equal to `===`
* Is not equal to `!==`
	
```javascript
10 < 12 // Evaluates to TRUE
```

* Can use comparison operators on different data types like strings

```javascript
'apples' === 'oranges' // evaluates to FALSE
```

All comparison statements evaluate to TRUE or FALSE and made up of:

* two values being compared
* operator that seperates the values

Working Example:
```javascript
// Prints "Time to eat!"
let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
```
</p>
</details>

<details><summary>Logical Operators</summary>
<p>

* Operators that work with boolean values called __logical operators__
* Use logical operators to add more sophisticated logic to conditionals

Three logical operators:
* the __and__ operator (&&)
* the __or__ operator (||)
* the __not__ operator (!)

* The `&&` checks that two things are TRUE
* Both MUST be true for code to run

```javascript
if (stopLight === 'green' && pedestrians === 0) {
	console.log('Go!');
} else {
	console.log('Stop');
}
```

* Using `||` checks that only one is TRUE
* Only ONE must be true for code to run
* If first condition is true, second condition not checked

```javascript
if (day === 'Saturday' || day === 'Sunday') {
	console.log('Enjoy the weekend!');
} else {
	console.log('Do some work.');
}
```

* Using `!` takes a TRUE value and pass back FALSE or takes a FALSE value and pass back TRUE

Working Example:
```javascript
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
```
</p>
</details>

<details><summary>Truthy and Falsy</summary>
<p>
	
* Sometimes, you want to check if a variable exists and don't want it to equal a specific value

Example:
```javascript
let myVariable = 'I Exist!';

if (myVariable) {
	console.log(myVariable)
} else {
	console.log('The varaible does not exist.')
}
```
* Code block in `if` statement will run because myVariable has a `truthy` value
* Even though the value of myVariable is not TRUE, when used in boolean or conditonal context, it evaluates to TRUE

The following list are considered `falsy` variables:

* 0
* Empty strings like "" or ''
* `null` which represent when there is no value
* `undefined` which represents when a declared varaible lacks a value
* `NaN` or Not a Number

Example
```javascript
// Prints 'No apples left!' since 0 is a FALSY value
let numberOfApples = 0;

if (numberOfApples) {
	console.log('Let us eat apples!');
} else {
	console.log('No apples left!');
}
```
</p>
</details>

<details><summary>Truthy and Falsy Assignment</summary>
<p>

Say you have a website and want to take a user's username to make a personalized greeting. Sometimes, the user does not have an account, making the `username` variable FALSY

```javascript
// Checks if username is defined and assigns a default string it not
let defaultName;
if (username) {
	defaultName = username;
} else {
	defaultName = 'Stranger';
}
```

* Combining knowledge of logical operators, you can use a shorthand for the code above
* In Boolean condition, JS assigns the truthy value to a variable if you use the `||` operator in assignment

```javascript
let defaultName = username || 'Stranger';
```

* Referred to as __short circuit evaluation__

Example:
```javascript
let tool = 'marker';

// Short circuit evaluation
let writingUtensil = tool || 'pen';

// Prints 'marker' since it is not FALSY
console.log(`The ${writingUtensil} is mightier than the sword.`);
```
</p>
</details>

<details><summary>Ternary Operators</summary>
<p>
	
* Use a ternary operator to simplify `if-else` statements

```javascript
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```
* Condition `isNightTime` provided before the `?`
* Two expressions follow `?` and separated via colon
* If condition is TRUE, the first expression executes
* If condition is FALSE, the second executes

```javascript
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
```

</p>
</details>

<details><summary>Else If Statements</summary>
<p>

* Else if statements allow for more than two outcomes
* Else if statements always come after the `if` statement and before the `else` statement

```javascript
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.')
}

```
	
</p>
</details>

<details><summary>The switch keyword</summary>
<p>
	
* Switch statement provides alternative syntax
 
Example:
```javascript
let groceryItem = 'papaya';

switch (groceryItem) {
	case 'tomato':
		console.log('Tomatoes are $0.49');
		break;
	case 'lime':
		console.log('Lime are $1.49');
		break;
	case 'papaya':
		console.log('Papayas are $1.29');
		break;
	default:
		console.log('Invalid item');
		break;
}
```

* Switch keyword initiates the statement
* Inside `{}` there are multiple cases
* Case keyword checks if the expression matches the value
* Value is `papaya` so third case execute
* Break keyword tells computer to exit the block and not execute any more
* Without break keyword, the first matching case will run and so will every subsequent case
* At the end of each `switch` statement, there is a default statement that executes if no cases are TRUE

Example
```javascript
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
      console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.')
    break;
}
```

</p>
</details>
