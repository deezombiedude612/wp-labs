---
title: "Practical 06: JavaScript Functions & HTML DOM Manipulation"
editlink: true
navbar: true
---

# Practical 06: JavaScript Functions and HTML DOM Manipulation

This rather challenging practical activity exposes how functions can be used within JavaScript, and how it can interact with web elements in the HTML Document Object Model (DOM).

## Tasks

### Task 1

Drivers who are 16 years of age and older can apply for driving a license online.
The government web page code requires applicants to enter their age and then checks if they are old enough to apply.

The following code captures the applicant’s age. When the applicant clicks the 'Check now' button the age is first checked to ensure that it is numeric.
The age is then checked to see if the applicant is old enough.
Suitable messages are displayed as a result of the checks.

**Part 1:** Create an empty web page with the following HTML scripts inside the `<body>` section.

```html{11-13}
<p>You can apply for a license to drive when you are 16 years old.</p>
<p>To check if you are old enough to drive, input your age and click the button:</p>

<input type="text" id="ageNow" />
<button onclick="checkAgeFunction()">Check now</button>

<p id="ageCheck"></p>

<script type="text/javascript">
	function checkAgeFunction() {
		/* ---- INSERT CODE HERE ---- */

		/* ---- END INSERT CODE ---- */

		document.getElementById("ageCheck").innerHTML = CanApply;
	}
</script>
```

**Part 2:** Complete the code for `checkAgeFunction()` that checks the age entered by the applicant and displays an appropriate response.

### Task 2

Create a HTML file that uses embedded JavaScript to carry out the following.

**Part 1:** Create a `<script>` element located in the `<head>` section containing the following code snippet:

```js{4}
function showPrimes(limit) {
	for (let number = 2; number <= limit; ++number) {
		let isPrime = true;
		/* ---- CONTINUE CODE FROM HERE ---- */
	}
}
```

The given code snippet depicts a function named `showPrimes` which takes in a parameter value called `limit`.

**Part 2:** In the `<body>` section, create another `<script>` element containing the following line:

```js
showPrimes(20);
```

### Task 3

Create a HTML file that uses embedded JavaScript to carry out the following.

Create a function called `arrayFromRange()` which creates an array of integers between and including the two numbers that are passed into the function.

Example:

```js
arrayFromRange(5, 10); // this should return [5, 6, 7, 8, 9, 10]
arrayFromRange(-10, -4); // this should return [-10, -9, -8, -7, -6, -5, -4];
```

After creating the function, add another line of JavaScript code at the very end of the `<script>` element to invoke the created function.

### Task 4

Create a HTML file that uses embedded JavaScript to carry out the following. You are required to only use the browser's inspector console to generate outputs.

**Part 1:** Create a function that takes two numbers and returns the maximum of the two. (**NOTE:** If the two numbers are the same, the function should return the same
number.)

**Part 2:** Create a function that takes in a circle's radius value and returns the area of the circle with that radius.

### Task 5

Create a HTML file that uses external JavaScript to carry out the following.

**Part 1:** In the `<body>` section, create a single paragraph `<p>` element with an `id` value `"result"` containing the text: "The FizzBuzz Test".

**Part 2:** Add a `<script>` tag referencing a JavaScript file called `fizzbuzz.js`.

**Part 3:** Create the `fizzbuzz.js` JavaScript file. It should contain the following code snippet:

```js
function fizzBuzz(input) {
	/* ---- CONTINUE CODE FROM HERE ---- */
}

const number = 15; // edit this constant value to test fizzBuzz()
document.getElementById("result").innerHTML = fizzBuzz(number);
```

The last line makes it such that the value obtained from the `fizzBuzz()` function is appended into the `<p>` element with id `"result"`.

**Part 4:** Complete the `fizzBuzz()` function such that it return "Fizz" if the number is divisible by 3, and "Buzz" if it is divisible by 5.

- If the number is divisible by both 3 and 5, `fizzBuzz()` should return "FizzBuzz".
- If the number is not divisible by 3 or 5, `fizzBuzz()` should return the value stored in the used `input` parameter.

```js
// Examples
fizzBuzz(3); // it should return "Fizz"
fizzBuzz(10); // it should return "Buzz"
fizzBuzz(30); // it should return "FizzBuzz"
fizzBuzz(31); // it should return 31
```

::: danger NOTE
Do **NOT** use `document.write()` or `console.log()` in the function. You are required to use the `return` statement instead.
:::

**Part 5:** Implement a check to see if `input` is a number or not.
If the input is not a number (e.g. string, Boolean), it should print "Not a number".
This needs to be checked first before determining its divisibility.

```js
// these should return "Not a number"
fizzBuzz("3");
fizzBuzz(false);
```

:::details HINT
Use the `typeof` operator to check the variable's type.
:::

### Task 6

Create a HTML file that uses external JavaScript to carry out the following. You are required to only use the browser's inspector console to generate outputs.

**Part 1:** Create an object named `movie` which contains the following attributes:

- title: "Big Hero 6"
- releaseYear: 2014
- rating: 7.8
- director_1: "Don Hall"
- director_2: "Chris Williams"

**Part 2:** Use the for-in loop to iterate through the `movie` object's attributes, printing them each time.

**Part 3:** In the same for/in loop, implement a check such that only the attributes containing string values are printed in the console.

## Getting Started

Functions can be tricky to understand in JavaScript, as unlike some languages like Java or C++, the urgency as to when a function needs to return a value or not is never explicitly stated.

<!-- ::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 7.**
::: -->
