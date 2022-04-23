---
title: "Practical 02"
editlink: true
navbar: true
---

# Practical 02: Applying CSS

This practical is an extension of Practical 01 - you will now attempt to implement visual styles to the content prepared in HTML.. unless you've done so already.

## Task

In both webpages you created, apply the various CSS styles you've learnt in lecture (e.g., background color, fonts, image positioning, etc.).
When applying CSS to your webpages, look up some good aesthetic principles web designers or developers take when designing their websites.
Try to apply those principles in your webpages wherever possible.

### Optional Task: CSS Responsiveness

Try and implement a styling that only applies itself in mobile screens.
You may look up a screen resolution for a mobile device of your choice (e.g., iPhones, tablet screens).

## Getting Started

CSS can be applied in three different methods.
The encouraged method is having your CSS in an external CSS file (i.e., external style).

When referencing a CSS file, one ought to use the `<link>` tag within the **head** section of the HTML document.
For example, to reference `styles.css` in your HTML document, the placement of your CSS `<link>` reference should be like as follows:

```html{6}
<!DOCTYPE html>
<html>
	<head>
		<!-- some head content -->

		<link rel="stylesheet" type="text/css" href="styles.css" />
	</head>
	<body>
		<!-- body content here -->
	</body>
</html>
```

### CSS Responsiveness

CSS responsiveness typically has to do with making sure that websites can adapt to different screen resolutions from different devices.
You can specify how content appears in different resolutions by using the media query tag.

For example, the yellowgreen background color styling only applies to screens that are at least 768px wide:

```css
body {
	background-color: orange;
}

@media only screen and (min-width: 768px) {
	body {
		background-color: yellowgreen;
	}
}
```

Detailed information is available in Lecture 4: HTML & CSS (Part 3).
However, the concept behind it is easy to understand and should be considered if you plan to make your webpage accessible on mobile screens.

<!-- ::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 3.**
::: -->
