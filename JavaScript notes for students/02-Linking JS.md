# Linking JavaScript to HTML

Linking JavaScript to HTML is an essential process that allows you to enhance the functionality and interactivity of a web page. There are different ways to link JavaScript code to an HTML document. Here's an overview of some common methods:

1. Inline Scripting:
   You can include JavaScript directly within an HTML file using the `<script>` tag. Here's an example:

```html
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <script>
      // JavaScript code
      alert("This is an inline script!");
    </script>
  </body>
</html>
```

The `<script>` tag can be placed in the `<head>` or `<body>` section of the HTML document.

2. External JavaScript File:
   You can create a separate JavaScript file and link it to your HTML file using the `<script>` tag with the src attribute, like this:

HTML file:

```html
<html>
  <head>
    <title>My Web Page</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

JavaScript file (script.js):

```
// JavaScript code in script.js
alert('This is an external JavaScript file!');
```

The `src` attribute specifies the path to the external JavaScript file.

3. Async and Defer Attributes:
   Both async and defer attributes can be used with the `<script>` tag to control when and how the script is loaded.

**async:** Loads the script asynchronously without blocking the HTML parsing. It allows the script to download while the HTML content continues loading. Execution happens as soon as the script is available.

```html
<script src="script.js" async></script>
```

**defer:** Loads the script but defers execution until the HTML parsing is complete. Multiple scripts with defer will execute in the order they appear in the document.

```html
<script src="script.js" defer></script>
```

Both attributes are optional and can be combined. If neither async nor defer is present, the script is fetched and executed synchronously, blocking HTML parsing until it's downloaded and executed.
