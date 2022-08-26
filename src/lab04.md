---
template: base.html
---

# Practical 04: Introduction to JavaScript

In this practical, you will begin to use JavaScript in making your webpages more dynamic.
JavaScript enables users to interact with the webpage's elements (and may also consequently modify the appearance of webpages through a set of action(s)).

## Getting Started

There are two methods of implementing JavaScript into your HTML file:

- embedded style

  ```html linenums="1"
  <html>
  	<head>
  		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  		<title>JavaScript Example</title>
  	</head>
  	<body>
  		<!-- Body content -->

  		<script>
  			// JavaScript code here
  		</script>
  	</body>
  </html>
  ```

- external style

  ```html linenums="1"
  <html>
  	<head>
  		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  		<title>JavaScript Example</title>
  	</head>
  	<body>
  		<!-- Body content -->

  		<script src="script_name_here.js"></script>
  	</body>
  </html>
  ```

  To implement JavaScript using embedded style, the `<script></script>` element should be used.

### Location of `<script>` Tags

Unlike CSS, you may use them in either the `<head>` or `<body>` section, or both if necessary.
The only times when order is necessary is when you require a set of script commands to run first before another set of scripts.

### `let`, `const` and `var`

The ECMAScript 2015 (ECMA 6) standard introduces the `let` and `const` keywords as better alternatives to `var` when naming variables.
`let` is used to declare regular variables virtually the same way as how `var` was the go-to for the same purpose, whilst `const` introduces a way to create constant variables that cannot be altered upon declaration.

Going forward, `let` and `const` should be used instead of `var`.
This is mainly due to their effects on variable declarations.
Declaring `var` is synonymous to declaring a global variable in JavaScript that can easily be modified regardless of context (i.e., in a function vs. outside of a function).
By declaring a variable using `var`, you can expect unwanted changes in your code (basically bugs) and problems revolving scopes (i.e., function scope and block scope).

Refer to the following:

```javascript linenums="1"
function aRandomFunction() {
	var a = "Red";
	let b = "Blue";

	console.log(a, b); // this prints: "Red Blue"

	{
		// Inside a block (can be for program control statements
		// or practically anything that uses curly parentheses)
		var a = "Green";
		let b = "Yellow";

		// let's assume that variables a and b
		// need to take on a different value temporarily here (for reasons)

		console.log(a, b); // this prints "Green Yellow"
	}

	// Outside of the block now
	console.log(a, b); // this prints "Green Blue",
	// can be a HUGE problem if a needs to be kept as "Red"
}

aRandomFunction(); // statement to invoke above function
```

By declaring variables using the `let` keyword, you can ensure that should they need to be temporarily reassigned a different value for only within the block context, it can be done without affecting it's original value outside of said block context.
This, being a trait that exists when declaring variables in many other programming languages, is something that `var` fails to emulate.

Within JavaScript, there exists a global context/object called `window` which contains a number of important preset values.
Think of it as like a large drawing canvas with preset items like a house with a roof of a certain color (e.g., blue).
In this instance, let's assume that this `window` object has one attribute called `color`.
By declaring a variable named `color` using the `var` keyword, you're essentially going to modify the default `color` value, which may be potentially important and will cause quite a ton of problems if tampered illegally.
You can view all the attributes/variables of concern if you type out `window` in the Inspector Console, or simply the following statement line in a JavaScript file:

```javascript
// Yep, there's a bootload of 'em!
for (let v of Object.keys(window)) document.write(v + "<br>");
```

The following video also gives a good explanation behind why using `var` to declare variables in JavaScript can be a **BAD** idea.

<div class="text-center">
<iframe class="youtube-iframe" src="https://www.youtube.com/embed/XgSjoHgy3Rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Naming Variables

When naming most things, it is a popular preference to adhere to the **Camel Case Naming Convention**.
This naming convention requires that:

- all letters in the first word in the name be strictly in lower case, and
- the first letter in each subsequent word (to be placed without spaces) in upper case

Examples of such names adhering to the Camel Case Naming Convention include: `ports`, `badgerMole`, `numberOfPots`, `timeOfDay`, `sensor1`

The other major naming convention, being **Pascal Case Naming Convention**, should be reserved for naming classes and objects.
This naming convention requires the first letter in **ALL** words in the name to be upper case, the rest of which are in lower case.
We will touch classes very briefly on this in Lecture 7, but know that they are not the primary focus of this module; thus there should be nearly no reason to use this convention now for the time being.

Some of you who may be familiar with Python may have already been introduced to the naming convention requiring all letters to be in lower case and underscores (`_`) to be separate each word in the name (e.g., `number_of_snakes`, `user_input`, `test_subject_1`).
This naming convention is also just as acceptable as the Camel Case Naming Convention, though from my point of view, not many use it here for JavaScript.

### Naming Constants

Constants are typically named differently, vaguely matching the convention used to name variables in Python with regards to how words are separated with underscores.
However, all letters in constants are presented in upper case (e.g., `NUMBER_OF_ROUNDS`, `KILOMETERS_TO_MILES`).

## Tasks

### Task 1

Create a HTML webpage with an empty paragraph element and a button with the text "Click Me!".
When the button is clicked, the paragraph element should then contain the text "You clicked the button!".
Create JavaScript code within `<script>` tags inside the webpage to enable this functionality.

#### Additional Sub-task

Modify the code such that it prints "You clicked the button!" in a new line in the browser window after each time after the button has been clicked on.

### Task 2

Create a HTML webpage that displays a confirm box asking users: "Select OK to proceed or Cancel to return.".

- If the **OK** button is selected, display an alert box that contains the message "You may proceed.".
- If the **Cancel** button is selected, display an alert box that contains the message "You have chosen to cancel.".

After either alert box is dismissed, display a message on the HTML page.

Create JavaScript code within `<script>` tags inside the webpage to enable this functionality.

### Task 3

Create a HTML webpage that displays a prompt box that requests users to enter their name.
Once entered, an alert box should follow up with a greeting that contains the entered name.

Use a **separate JavaScript file** to contain the JavaScript code for this functionality.

!!! tip How to Link Separate JavaScript Files

    To link another JavaScript file for use with your HTML page, you'll still need the `<script>` tags, but now with a `src` attribute added to it:

    ```html
    <script src="script.js"></script>
    ```

    The given line looks for a JavaScript file named `script.js` to include together with your HTML file.
    All rules pertaining to locating JavaScript files in subfolders or the parent folders work the same way as how it is for CSS and image files.

### Task 4

Create an empty HTML file containing the following in the `<body>` section:

```html linenums="1" hl_lines="5-7"
<script>
	let a = "red";
	let b = "blue";

	/* ---- INSERT CODE HERE ---- */

	/* ---- END INSERT CODE ---- */

	console.log(a);
	console.log(b);
</script>
```

You should now be able to view from the values of `a` and `b` being printed in the console.

Within the given boundaries as stated in the above code snippet, write some extra JavaScript code that will swap the values of variables `a` and `b`.
You may check your variable answers using your browser's console or insert additional lines of code to automatically print out their values.

??? hint

    Use another variable to temporarily hold one of their values during the swap process.
