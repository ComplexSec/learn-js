const kelvin = 293; // Const variable declaration
const celsius = kelvin - 273; // Const variable declaration

let fahrenheit = celsius * (9 / 5) + 32; // Convert F to C
fahrenheit = Math.floor(fahrenheit); // Round down

// Prints degrees F to screen
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Converts to Newton Scale
let newton = celsius * (33 / 100);
newton = Math.floor(newton); // Round Down

console.log(`The temperature is ${newton} degrees Newton`);
