---
title: "Practical 05"
editlink: true
navbar: true
---

# Practical 05: JavaScript Program Control Structure & Arrays

Program control structures can be leveraged in many programming languages to enable easier implementation of tasks that require decision-making or repetition that would otherwise be tedious to incorporate.
This practical activity explores program control structures that can be used to implement logic into websites.

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
- using square brackets `[]` **(I very much prefer this method)**

## Tasks

### Task 1

Create a HTML file that uses embedded JavaScript to carry out the following.

**Part 1:** Display the numbers between 5 to 22 (inclusive of both) in ascending order using a for loop in the browser's console.

**Part 2:** In the same HTML file, display the numbers between -14 and 7 (exclusive of both) in descending order using a for loop in the browser's console.

**Part 3:** In the same HTML file, display the _even_ numbers between 208 and 251 (inclusive of both) in descending order using a for loop in the browser's console.

### Task 2

Create a HTML file that uses embedded JavaScript to carry out the following.

**Part 1:** Display the numbers between -45 to -23 (inclusive of both) in descending order using a while loop in the browser's console.

**Part 2:** In the same HTML file, display the numbers between 18 and 36 (exclusive of both) in ascending order using a while loop in the browser's console.

**Part 3:** In the same HTML file, display the _odd_ numbers between 208 and 251 (inclusive of both) in ascending order using a while loop in the browser's console.

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
You may choose to output the result from the console or via visual elements on your webpage
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

## Activity: Bubble Sort

Bubble sort is one of many types of sorting algorithms taught in data structures and algorithms courses.
Watch the following video to understand the concept behind bubble sort (0:48 to 2:40).

<div style="text-align: center;">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uJLwnsLn0_Q?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

In this activity, we will be using an external JavaScript file to contain our logic and the browser's inspector console to view our outputs.
Our HTML page should be as follows:

```html
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JavaScript Bubble Sort</title>
	</head>
	<body>
		<!-- I'm assuming the JavaScript file is named as follows and is in the same file directory as this HTML file. -->
		<script src="bubbleSort.js"></script>
	</body>
</html>
```

Let's start our JavaScript file as follows:

```js
const array = [10, -3, 55, -10, -24, 54, 0, -21, 8];
console.log(`Unsorted array:`, array);
```

Line 2 should print out the array with its elements in the original order.
Let's use bubble sort to reorder the elements in this array in ascending order.

Below the given JavaScript code snippet, declare a variable called `is_sorted`.
This variable will serve as a flag variable that will determine whether to continue running through another iteration of the bubble sort algorithm.

Our implementation of the bubble sort algorithm will be encapsulated within a do-while loop like as follows:

```js{4-13}
const array = [10, -3, 55, -10, -24, 54, 0, -21, 8];
console.log(`Unsorted array:`, array);

let is_sorted;

/**
 * the bubble sort algorithm will continue running
 * as long as is_sorted is true AFTER each iteration
 */
do {
	// we start every iteration of the algorithm by making is_sorted true
	is_sorted = true;
} while(is_sorted);

console.log(`Sorted array:`, array);
```

Using a do-while loop makes it such that we won't require `is_sorted` to be initialized with a value just yet.
Upon completing all the necessary rounds with the bubble sort algorithm, we will print out the sorted array.
An alternative to using the do-while loop in this case is a for/of loop.

Within the do-while loop, we will implement another loop structure - this time, we will be using a for loop.

```js{14-16}
const array = [10, -3, 55, -10, -24, 54, 0, -21, 8];
console.log(`Unsorted array:`, array);

let is_sorted;

/**
 * the bubble sort algorithm will continue running
 * as long as is_sorted is true AFTER each iteration
 */
do {
	// we start every iteration of the algorithm by making is_sorted true
	is_sorted = true;

	for(let j = 0; j < array.length; ++j) {
		// we start comparing elements in here
	}
} while(is_sorted);

console.log(`Sorted array:`, array);
```

The mechanism behind how the bubble sort algorithm works revolves around comparing each element against its neighboring element in the array.
In this implementation, we compare to check if each element is smaller than the left neighbor.
At the end of each iteration, the largest element "bubbles" up to the end of the unsorted portion of the array (hence, why it's called bubble sort).

```js{15-28}
const array = [10, -3, 55, -10, -24, 54, 0, -21, 8];
console.log(`Unsorted array:`, array);

let is_sorted;

/**
 * the bubble sort algorithm will continue running
 * as long as is_sorted is true AFTER each iteration
 */
do {
	// we start every iteration of the algorithm by making is_sorted true
	is_sorted = true;

	for(let j = 0; j < array.length; ++j) {
		/**
		 * checks if element (i.e., array[j])
		 * is smaller than the left neighbor (i.e., array[j - 1])
		 *
		 * if so, flag is_sorted as false
		 * and swap the element with its neighbor
		 */
		if (array[j] < array[j - 1]) {
			is_sorted = false;

			const temp = array[j];
			array[j] = array[j - 1];
			array[j - 1] = temp;
		}
	}
} while(is_sorted);

console.log(`Sorted array:`, array);
```

And voila, we basically created a simple implementation of the bubble sort algorithm.
We can make a few changes to make this algorithm perform more efficiently though
(in data structures and algorithms courses, the idea is to produce efficient algorithms or structures that utilize as little computer resources and/or time as possible).

### Modifications for Efficiency

Here the do-while loop makes it such that the whole algorithm keeps iterating over the whole array to see if it is sorted.
However, we have established that after each iteration, every last element in the unsorted portion of the array is considered as sorted.
Therefore, we do not need each iteration to loop through to check against the sorted portion of the array.

We can do this by replacing the do-while loop with another for loop with another iterator variable.
After that, we can deduct the value of that iterator variable from `array.length` in the inner for loop (i.e., `array_length - i`).
In this implementation, the first iteration checks the whole array since `array_length - 0`.
In each subsequent iteration, `i` is incremented by 1, and the range checked in the inner for loop shrinks by size 1
(i.e., `array_length - 1` in iteration #2, `array_length - 2` in iteration #3, and so on).

```js{10,14}
const array = [10, -3, 55, -10, -24, 54, 0, -21, 8];
console.log(`Unsorted array:`, array);

let is_sorted;

/**
 * the bubble sort algorithm will continue running
 * as long as is_sorted is true AFTER each iteration
 */
for(let i = 0; i < array.length; ++i) {
	// we start every iteration of the algorithm by making is_sorted true
	is_sorted = true;

	for(let j = 0; j < array.length - i; ++j) {
		/**
		 * checks if element (i.e., array[j])
		 * is smaller than the left neighbor (i.e., array[j - 1])
		 *
		 * if so, flag is_sorted as false
		 * and swap the element with its neighbor
		 */
		if (array[j] < array[j - 1]) {
			is_sorted = false;

			const temp = array[j];
			array[j] = array[j - 1];
			array[j - 1] = temp;
		}
	}
}

console.log(`Sorted array:`, array);
```

We can also make the algorithm work such that it only proceeds if there was a swap during that iteration (i.e., `is_sorted` has turned false).
If `is_sorted` remains true after that iteration, it should indicate that there is nothing else to sort in the array and it is safe to leave the array be.
We do this by adding an if statement at the end of the outer for loop which breaks through that loop if `is_sorted` has remained true.

```js{31-33}
const array = [10, -3, 55, -10, -24, 54, 0, -21, 8];
console.log(`Unsorted array:`, array);

let is_sorted;

/**
 * the bubble sort algorithm will continue running
 * as long as is_sorted is true AFTER each iteration
 */
for(let i = 0; i < array.length; ++i) {
	// we start every iteration of the algorithm by making is_sorted true
	is_sorted = true;

	for(let j = 0; j < array.length - i; ++j) {
		/**
		 * checks if element (i.e., array[j])
		 * is smaller than the left neighbor (i.e., array[j - 1])
		 *
		 * if so, flag is_sorted as false
		 * and swap the element with its neighbor
		 */
		if (array[j] < array[j - 1]) {
			is_sorted = false;

			const temp = array[j];
			array[j] = array[j - 1];
			array[j - 1] = temp;
		}
	}

	if(is_sorted) {
		break;
	}
}

console.log(`Sorted array:`, array);
```

### Randomized Array

So far, we've only tested this algorithm on one type of array.
We can test this using different arrays to see if it works.
Here, we will implement an array of 10 randomized integers between -100 and 100.
We start with an empty array and we utilize a for loop to iterate over a set number of times (i.e., `ARRAY_SIZE`) to push integers of the aforementioned range.
If you would like to try with a larger array size, simply modify the value of `ARRAY_SIZE`, but be sure to only place in positive integers or this will not work.

```js{1-6}
const ARRAY_SIZE = 10;
const array = [];

for (let i = 0; i < ARRAY_SIZE; ++i) {
	array.push(Math.floor(Math.random() * 201 - 100));
}
console.log(`Unsorted array:`, array);

let is_sorted;

/**
 * the bubble sort algorithm will continue running
 * as long as is_sorted is true AFTER each iteration
 */
for(let i = 0; i < array.length; ++i) {
	// we start every iteration of the algorithm by making is_sorted true
	is_sorted = true;

	for(let j = 0; j < array.length - i; ++j) {
		/**
		 * checks if element (i.e., array[j])
		 * is smaller than the left neighbor (i.e., array[j - 1])
		 *
		 * if so, flag is_sorted as false
		 * and swap the element with its neighbor
		 */
		if (array[j] < array[j - 1]) {
			is_sorted = false;

			const temp = array[j];
			array[j] = array[j - 1];
			array[j - 1] = temp;
		}
	}

	if(is_sorted) {
		break;
	}
}

console.log(`Sorted array:`, array);
```

`Math.random()` produces a decimal value between 0 (inclusive) and 1 (not inclusive).
We need to expand this range to cater for all values between -100 and 100 (both inclusive), which totals up to 201 (100 -(-100) + 1).
Therefore, we multiply `Math.random()` by 201, i.e., `Math.random() * 201`.

This, however, produces numbers between 0 (inclusive) and 201 (exclusive).
To shift the range to be between -100 (inclusive) and 101 (exclusive), we deduct that product by 100 (i.e., `Math.random() * 201 - 100`).

Still, do note that `Math.random()` produces decimal values, and `Math.random() * 201 - 100` will give any decimal value between -100 and 100 (both inclusive).
We use the `Math.floor()` function to take the floor boundary of the generated value in order to produce that integer.

Note that we do not take the ceiling boundary of the generated value (i.e., `Math.ceiling()`), as this will give values between -99 and 101 (both inclusive) instead.
We also do not use regular rounding off of those decimal values (i.e., `Math.round()`), as this gives values between -100 and 101 (both inclusive).

<!-- ::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 6.**
::: -->
