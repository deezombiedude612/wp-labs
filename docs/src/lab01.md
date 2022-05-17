---
title: "Practical 01"
editlink: true
navbar: true
---

# Practical 01: Getting Started with HTML

This practical will serve as a starting point to learning how to create webpages.
You may have come across some of the tags used here in previous encounters, but be aware of deprecated tags! See [Getting Started](#getting-started) for more information.

## Task

Develop a webpage that contains a self-introduction of yourself. Your webpage should contain at least the following content:

- a picture of yourself (or your online avatar/sona, a goat 🐐 .. whatever rocks your boat)
- a short paragraph of yourself (use paragraph element)
- hobbies and interests (unordered list)
- favorite subjects in school (or college, you decide) (ordered list)

You may take this as a first initiative to work on the `index.html` page of your very first assignment.

### Table Exercise

At the bottom of the webpage, include a table element that replicates the following in terms of row and column span:

![Lab 01 Table](./images/lab01_table.png)

**HINT: Consider the use of the `rowspan` and `colspan` HTML attributes.**

What else would you put into a introduction page?

### Extra Task

Publish your webpage on GitHub Pages.
There are numerous sources that can help you to get a head start with GitHub Pages, and it's all free!
The simplest method is to use GitHub Desktop.

An official GitHub Docs guide can be found [here](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop).

<!-- ::: warning SUBMISSION
**Complete the given practical and submit it as your lecture attendance for Week 2.**
::: -->

## Website Design

Of course, this is completely optional based on what you see fit.
This is just my two cents on what can constitute a good website design.

Website front-end design is dependent on aesthetics; HTML and CSS has very rarely got to do with much logic implementation.
In the field of human-computer interaction (HCI), you will find that there are a few key design principles one would need to adhere to an interface that is useful and aesthetically pleasing at the same time.
While it is crucial to ensure that a website isn't bland, sometimes it's only right to go with simple and minimalistic designs.
By default, when designing a website, one has to consider the balance between functionality and aesthetics; whether one should be prioritized solely depends on what the website is to be used for.

Another thing that should be taken note of is the content density. Say, for example, you're working on a design for a website acting as an online manual.

- Novice users will tend to prefer a lower content density - that is, they will be more likely to prefer an interface that isn't too cluttered with information or options (so as to intimidate them, among many reasons).
  Such interfaces would warrant little to no effort in learning how to navigate them.
- Expert users will tend to prefer a higher content density - that is, with knowledge of more advanced/obscure settings and/or information, for instance, they would prefer to have an interface that can leverage as much control as possible.
  Such interfaces would warrant a comparably greater effort in learning how to navigate them.

In many professional (and actually functional) websites, you may tend to find very consistent design elements in play that constitute a website.
This can range from how each element appears, to the terminology used to convey information.
By having consistency, you can reduce the amount of effort needed to learn how a website works - this can be a key factor as to whether one would be compelled to explore your website more or not.

While planning the design of a webpage, some find it better to prepare mockups to visualize ideas they have in mind into something tangible and easier to formulate decisions on.
In fact, this is considered protocol if this were to be done within a software development standpoint, where web designers can find themselves needing to prepare visual mockups for key stakeholders (i.e., project sponsors, project managers, etc.) to see, and hopefully accept.
**Press `F` to pay respects to those working with very picky, indecisive and/or hard-to-please clients.** 😅

![Lab 01 Press F](./images/lab01_press_F.gif)<br>
[Image Source Here](https://twitter.com/CORSAIR/status/1509958894218461186)

This is only some advice I can offer from my standpoint, but what I do not possess is the intents you may have in creating your websites.
Feel free to use anything I've mentioned from here, or explore a style that you would like to emulate.
I think the best thing to do would be to look around and observe other websites online, and try to pick up anything you feel is interesting or vibes well with you.
At the end of it, classes on designing a website using HTML and CSS is something like an art class, but with code and computers - you can learn how to use each component based on what guides you have at your disposal, but only you can form a design that speaks to you and your target audience the most.

::: tip REFERENCE

- Dennis, A., Wixom, B. H. & Tegarden, D. (2020). _Systems Analysis and Design: An Object-Oriented Approach with UML_ (6th Edition). Wiley.

:::

## Getting Started

HTML files typically have the `.html` extension.
One can create a HTML file named `index.html` where `index` is the name designated to the page.

Files with the name `index` are often treated as home pages in web sites.
For example, when one visits [TIMeS](https://times.taylors.edu.my), the browser would immediately look for a file whose name is `index` if the name of the file is not specified.

Let's just say TIMeS has a page called `login.html`. One may visit that page instead of `index.html` by specifying the filename after the URL, namely:

    https://times.taylors.edu.my/login.html

::: danger TAKE NOTE
Going forward, **DO NOT** name any of your project folders or files with spaces.
This can inevitably complicate things when we start going through referencing files in your project directory.

For example, if a web site with domain `www.example.com` has a file named `page 1.html`, the address bar in a web browser will have to interpret the link to that page as:

    www.example.com/page%201.html

The best practice is to clump the words making up the file name together without spaces (i.e., `page1.html`), or to add a hyphen (`-`) or underscore (`_`) to separate each word (i.e., `page-1.html`, `page_1.html`).
:::

Your HTML file should take a form like as follows:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- To contain stylesheets and various webpage information (i.e., Tab Name) -->
	</head>
	<body>
		<!-- Browser viewable content should be placed here -->
	</body>
</html>
```

### Avoid Deprecated Tags!

Web developers are now expected to follow the HTML 5 standard when developing webpages.
With this standard comes the fact that some tags/elements/attributes which were prevalently used in prior versions of HTML should no longer be applicable - they are what we call **deprecated**.
In most cases, CSS is strongly recommended to be used as the ultimate alternative.

For instance, rather than using the `<u></u>` element to denote underlined text, implement CSS like as follows:

```html
<!-- In <head> section: -->
<style type="text/css">
	.underlined {
		text-decoration: underline;
	}
</style>

<!-- In <body> section: -->
<span class="underlined">Underlined text</span>
```

Using CSS rather than resorting to deprecated tags has its upsides.
For one, you can implement one style ruling to be shared across multiple HTML elements in multiple HTML documents.
We will delve more into CSS stylings in the next practical.
