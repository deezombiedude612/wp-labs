---
template: base.html
---

# Practical 02: Applying CSS

This practical is an extension of Practical 01 - you will now attempt to implement visual styles to the content prepared in HTML.. unless you've done so already (in which case, you put some more 😝).

## Task

In the webpages you created, apply the various CSS styles you've learnt in lecture (e.g., background color, fonts, image positioning, etc.).
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

```html linenums="1" hl_lines="6"
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

```css linenums="1"
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

### Local Custom Fonts

Ah, fonts. There's something about fonts that make it part of a document's or interface's aesthetic - when used right alongside complementing visual elements, you can produce an outlook that dictates a great efferevescence from how professional it looks or how creative the author's mind is.
There are various methods of including different types of fonts, one of which include using one that's locally installed in your computer; another being linking to a font that's available in an online repository (e.g., Google Fonts).
With regards to custom fonts stored locally on your computer though, there's something that you really, **REALLY NEED** to take note of.

!!! warning "Local Custom Font Location"

    	You may be tempted to just include the font straight away like how it's plug-and-play with your other applications.
    	For example, just by including the font inside a Fonts folder or installing it enables the font to be instantly recognized by Microsoft Word and be leveraged for use in your documents.
    	However, while this also includes your webpages, it only works because the webpages are inside your computer.

    	You need to be aware that the custom fonts you may have (perhaps painstakingly or jovially) installed in your computer **MAY OR MAY NOT** exist in other computers that don't belong to you.
    	This can be extended to external servers where websites are deployed into.
    	You should expect computers to have a handful of fonts that act as the bare minimum for a commonplace interface, like "Times New Roman", "Courier New", "SimSun", and "Arial".
    	Should you want to use custom fonts, you'll need to include it in your project folder.

    	<div class="fw-bold text-center" style="font-size: 24px;">
    	Also.. NO, the solution is not <br>
    		"Just ask the other person to install the font into their computer."
    	</div>

    	The folder structure should be something like this if you wanted to include a custom font (this case, Roboto) locally within your project folder:

    	```hl_lines="5-6"
    	project
    	|-- css
    		|-- styles.css
    		|-- footer.css
    	|-- fonts (store your custom fonts in here)
    		|-- Roboto.ttf
    	|-- images
    		|-- catdog.png
    		|-- icon.svg
    	|-- js
    		|-- main.js
    	|-- index.html
    	|-- about.html
    	|-- error-404.html
    	```

    	From here, you can link your font file using a relative URL easily without needing to resort to digging your C:\ drive or what Home directory you have in your computer just to elicit the font.
    	Of course, if you don't link it, the font may still appear to work in your computer, but this by itself does not solve your problem with it not appearing in another computer.
    	Make sure that in your CSS file (or wherever you're using your embedded CSS, inline CSS does not have this luxury) that's being used, you use `@font-face` to declare use of the font on top:

    	```css linenums="1"
    	@font-face {
    		font-family: "Roboto";
    		/* in this example, the font is located in a sibling folder,
    			so you want to exit from the `css` folder
    			before entering the `fonts` folder */
    		src: url("../fonts/Roboto.tff");
    		/* optional: font-weight */
    	}
    	```

## Mini-Tutorial: How to Center Images in HTML

In order to center `<img>` tags in your webpage, you may want to consider placing them into a block container element (e.g., `<div>`, `<section>`).
Then, set the `text-align` CSS property of that container element to `center`.
While `text-align` is seemingly meant to work only with text, it can be used to align any inline elements – this includes `<img>` elements.

You can view this mini-tutorial demonstration here to see this being applied in action:

<div class="text-center">
	<iframe class="youtube-iframe" src="https://www.youtube.com/embed/xQWoRaR-c6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
