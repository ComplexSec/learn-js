# Introduction to JavaScript - Day 1

## Short Review

<details><summary>Console</summary>
<p>

* Console displays important messages like errors for devs
* In JS, the `console` keyword refers to an __object__ - a collection of data & actions that we can use in code
* Keywords are words that are built into JavaScript

* One action/method built into the `console` object is the `.log()` method
* `.log()` prints the string located inside
* `;` denotes the end of a line

```javascript
console.log(5); // Prints 5 to the console
```
</p>
</details>

<details><summary>Comment</summary>
<p>

* Single line via `//`
* Multi-line via `/*` & `*/`
* Single line great for adding context to code
* Multi-line best suited to prevent a block from running

</p>
</details>

<details><summary>Data Types</summary>
<p>

* Number - any number including numbers with decimals
* String - any grouping of chars surrounded by quotes
* Boolean - either TRUE or FALSE
* Null - intentional absence of a value
* Undefined - also represents absence of a value (different than null)
* Symbol - unique identifiers useful in complex coding
* Object - collections of related data

* Number, string, boolean, null, undefined & symbol are classed as `primitive` data types

Example

```javascript
console.log('JavaScript') // Prints string
console.log(2011) // Prints number
console.log('Woohoo! I love to code! #codecademy') // Prints string
console.log(20.49) // Prints number
```
</p>
</details>


<details><summary>Arithmetic Operators</summary>
<p>
	
* Operators are chars that perform a task
* Most common operators are:

1. Add `+`
2. Subtract `-`
3. Multiply `*`
4. Divide `/`
5. Remainder `%`

* When `console.log()` called, computer evaluates expression inside brackets
* Remainder - or modulo - returns number that remains after dividing

Example:

```javascript
console.log(24 + 3.5); // Addition
console.log(2020 - 1969); // Subtraction
console.log(65 / 240); // Division
console.log(0.2708 * 100); // Multiplication
```

</p>
</details>

<details><summary>String Concatenation</summary>
<p>

* Use `+` to combine two strings
* Process of adding two strings is called __concatenation__

Example
```javascript
console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World');
```

</p>
</details>

<details><summary>Properties</summary>
<p>

* Every string instance has a propery called `length` that stores the number of chars
* Retrieve property information via appending `.length` to string
* The `.` is calle the __dot operator__

Example:
```javascript
// Prints 30 (num of chars in string)
console.log('Teaching the world how to code'.length)
```

</p>
</details>

<details><summary>Methods</summary>
<p>

* Methods are actions we can perform
* Call or use methods by appending an instance with:
	1. a period
	2. the name of the method
	3. opening and closing brackets

* Console.log calls the `.log` method on the `console` object
* List of built-in string methods located [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype)

Example:
```javascript
console.log('Codecademy'.toUpperCase()); // Prints the string in all caps
console.log('    Remove whitespace   '.trim()); // Removes the whitespace
```

</p>
</details>

<details><summary>Built-in Objects</summary>
<p>

* For more complex mathematics, JS has the `Math` object
* Objects have __methods__
* The `random()` method from `Math` object prints a random number

```javascript
Math.random() * 50; // Prints number up to 50
```

* Use `floor()` method to round down

```javascript
Math.floor(Math.random() * 50); // Prints integer up to 50
```

1. Math.random generates a number between 0 & 1
2. Multiply that number by 50
3. Math.floor rounds the number down

```javascript
// Generate number, multiply it, round it down & print
console.log(Math.floor(Math.random() * 100));

// Prints 44 to the screen after rounding
console.log(Math.ceil(43.8));

// Check 2017 is an int, returns TRUE and prints
console.log(Number.isInteger(2017));
```

</p>
</details>
