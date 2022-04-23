---
title: "Practical 04"
editlink: true
navbar: true
---

# Practical 04: Introduction to JavaScript

In this practical, you will begin to use JavaScript in making your web pages more dynamic.
JavaScript enables users to interact with the web page's elements (and may also consequently modify the appearance of web pages through a set of action(s)).

## Tasks

### Task 1

Create a HTML web page with an empty paragraph element and a button with the text "Click Me!".
When the button is clicked, the paragraph element should then contain the text "You clicked the button!".
Create JavaScript code within `<script>` tags inside the web page to enable this functionality.

_Additional Sub-task: Modify the code such that it prints "You clicked the button!" in a new line in the browser window after each time after the button has been clicked on._

### Task 2

Create a HTML web page that displays a confirm box asking users: "Select OK to proceed or Cancel to return.".

- If the **OK** button is selected, display an alert box that contains the message "You may proceed.".
- If the **Cancel** button is selected, display an alert box that contains the message "You have chosen to cancel.".

After either alert box is dismissed, display a message on the HTML page.

Create JavaScript code within `<script>` tags inside the web page to enable this functionality.

### Task 3

Create a HTML web page that displays a prompt box that requests users to enter their name.
Once entered, an alert box should follow up with a greeting that contains the entered name.

Use a **separate JavaScript file** to contain the JavaScript code for this functionality.

### Task 4

Create an empty HTML file containing the following in the `<body>` section:

```html{5-7}
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

Within the given boundaries as stated in the above code snippet, write some extra JavaScript code that will swap the values of variables a and b.
You may check your variable answers using your browser's console or insert additional lines of code to automatically print out their values.

::: details HINT
Use another variable to temporarily hold one of their values during the swap process.
:::

## Getting Started

There are two methods of implementing JavaScript into your HTML file:

- embedded style

  ```html
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

  ```html
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

<!-- ::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 5.**
::: -->
