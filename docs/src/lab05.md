---
title: "Practical 05: JavaScript Program Control Structure & Arrays"
editlink: true
navbar: true
---

# Practical 05: JavaScript Program Control Structure

This practical activity explores program control structures that can be used to implement logic into web sites.

## Tasks

### Task 1

Create a HTML file that uses embedded JavaScript to carry out the following.

**Part 1:** Display the numbers between 5 to 22 (inclusive of both) in ascending order using a for loop in the browser's console.

**Part 2:** In the same HTML file, display the numbers between -14 and 7 (exclusive of both) in descending order using a for loop in the browser's console.

**Part 3:** In the same HTML file, display the even numbers between 208 and 251 (inclusive of both) in descending order using a for loop in the browser's console.

### Task 2

Create a HTML file that uses embedded JavaScript to carry out the following.

**Part 1:** Display the numbers between -45 to -23 (inclusive of both) in descending order using a while loop in the browser's console.

**Part 2:** In the same HTML file, display the numbers between 18 and 36 (exclusive of both) in ascending order using a while loop in the browser's console.

**Part 3:** In the same HTML file, display the odd numbers between 208 and 251 (inclusive of both) in ascending order using a while loop in the browser's console.

### Task 3

Create an empty HTML file containing the following in the `<body>` section:

```html
<script>
	let num = 16;

	console.log("while looping..");
	while (num < 15) {
		console.log(num);
		num++;
	}

	console.log("do-while looping..");
</script>
```

After the last line given, utilize a do-while loop to carry out the same purpose as with the given while loop (i.e., use a do-while loop to print the value of `num` as it increases after each loop).

What is the difference between these two loops in terms of their functions?

### Task 4

Create a HTML file that uses embedded JavaScript to carry out the following.

Prompt users to enter a year using a prompt box.
Set the default value to the current year.
After entering the year, the browser window should display the Chinese zodiac animal that corresponds with the given remainder after dividing by 12:

| Remainder | Chinese Zodiac Animal | Remainder | Chinese Zodiac Animal |
| :-------: | :-------------------: | :-------: | :-------------------: |
|     0     |        Monkey         |     6     |         Tiger         |
|     1     |        Rooster        |     7     |        Rabbit         |
|     2     |          Dog          |     8     |        Dragon         |
|     3     |          Pig          |     9     |         Snake         |
|     4     |          Rat          |    10     |         Horse         |
|     5     |          Ox           |    11     |         Sheep         |

### Task 5

The Body Mass Index (BMI) is a measure of health on weight.
A person's BMI is calculated by taking the person's weight (in kilograms) divided by the person's height squared (height in meters).
Create a BMI script that takes in both a person's weight and height as values to interpret the person's BMI.
The respective BMI interpretations are as follows:

|        BMI        | Interpretation |
| :---------------: | :------------: |
|    BMI < 18.5     |  Underweight   |
| 18.5 ≤ BMI < 25.0 |     Normal     |
| 25.0 ≤ BMI < 30.0 |   Overweight   |
|    BMI ≥ 30.0     |     Obese      |

Implement the written script in a separate JavaScript file separate from your HTML file.
You may choose to output the result from the console or via visual elements on your web page
(i.e., print the result in the browser window as a paragraph or regular text).

### Task 6

Create a HTML file that uses external JavaScript to carry out the following.

1. Create an external JavaScript file that contains an array named `students` which contains the following values: 'Anthony', 'Barry', 'Desmond', 'Grenda'.

2. Print the `students` array in the console. Utilize a for-of loop to display the array elements in the console.

3. Pop the last element in the `students` array (i.e., Grenda).
   ::: details HINT
   Use the `pop()` function.
   :::

4. Append the values 'Marie' and 'Zacchaeus' to the end of the `students` array. Print the array again; you do not need any loop structure this time.
   ::: details HINT
   Use the `push()` function.
   :::

5. Remove the first value from the `students` array (i.e., Anthony), and replace it with a new element 'Charlie'. Print the array again; just like last time, you do not need any loop structure here.
   ::: details HINT
   There exists a `shift()` function that can do one of the given requirements here. Perhaps there's also an _unshift_ function which does the opposite as well?
   :::

## Getting Started

### JavaScript Program Control Structure Syntax

The syntax used is applicable to many other languages, but that is not of our concern at the moment.

if-else Statement Syntax (Example):

```js
if (condition1) {
	// actions #1
} else if (condition2) {
	// actions #2
} else {
	// actions otherwise
}
```

switch Statement Syntax (Example):

```js
switch (variable) {
	case 1:
		// do something
		break;

	case 2:
	// do something

	case 3:
		// do something (will carry on from Case 2 since no break statement exists)
		break;

	default:
	// do something
}
```

for Loop Syntax:

```js
for (init; condition; update) {
	/* do something here */
}
```

for-of Loop Syntax:

```js
for (let iter of arr) {
	/* do something here */
}
```

while Loop Syntax:

```js
init;
while (condition) {
	/* do something here */
	update;
}
```

do-while Loop Syntax:

```js
init;
do {
	/* do something here */
	update;
} while (condition);
```

### JavaScript Arrays

Presently, there are two ways to declare arrays:

- using the `array()` function to contain variables
- using square brackets `[]` (I very much prefer this method)

<!-- ::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 6.**
::: -->
