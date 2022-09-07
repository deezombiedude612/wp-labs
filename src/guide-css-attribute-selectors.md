---
template: base.html
---

# CSS Attribute Selectors

Attribute selectors target elements based on attribute names or values, which provides a lot of flexibility for selecting elements without needing to add a lot of `class` or `id` markup.
The CSS3 attribute selectors are listed here:

## `element[attribute]`

The **simple attribute selector** targets elements with a particular attribute regardless of its value.
The following example selects any image that has a `title` attribute.

```css
img[title] {
	border: 3px solid;
}
```

## `element[attribute="exact value"]`

The **exact attribute value selector** targets elements with a specific value for the attribute.
This selector matches images with exactly the `title` value _"first grade"_.

```css
img[title="first grade"] {
	border: 3px solid;
}
```

## `element[attribute~="value"]`

The **partial attribute value selector** (indicated with a tilde, `~`) allows you to specify one part of an attribute value.
The following example looks for the word _"grade"_ in the title, so images with the `title` value "first grade" and "second grade" would be selected.

```css
img[title~="grade"] {
	border: 3px solid;
}
```

## `element[attribute|="value"]`

The **hyphen-separated attribute value selector** (indicated with a bar, `|`) targets hyphen-separated values.
This selector matches any link that points to a document written in a variation on the English language (`en`), whether the attribute value is `en-us` (American English), `en-in` (Indian English), `en-au-tas` (Australian English), and so on.

```css
[hreflang|="en"] {
	border: 3px solid;
}
```

## `element[attribute^="first part of the value"]`

The **beginning substring attribute value selector** (indicated with a carat, `^`) matches elements whose specified attribute values start in the string of characters in the selector.
This example applies the style only to images that are found in the _images/icons_ directory.

```css
img[src^="/images/icons"] {
	border: 3px solid;
}
```

## `element[attribute$="last part of the value"]`

The **ending substring attribute value selector** (indicated with a dollar sign, `$`) matches elements whose specified attribute values end in the string of characters in the selector.
In this example, you can apply a style to just the `a` elements that link to PDF files.

```css
a[href$=".pdf"] {
	border-bottom: 3px solid;
}
```

## `element[attribute*="any part of the value"]`

The **arbitrary substring attribute value selector** (indicated with an asterisk, `*`) looks for the provided text string in any part of the attribute value specified.
This rule selects any image that contains the word "February" somewhere in its `title`.

```css
img[title*="February"] {
	border: 3px solid;
}
```

## Reference

- Robbins, J. N. (2018). _Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and
  Web Graphics_ (5th Edition). O'Reilly Media.
