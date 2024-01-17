/*

What is DOM
DOM = Document Object Model

- Programming interface for web/HTML elements
- Structure that we can interact with via JS
- Includes tags, attributes, text nodes
- Represents as a tree structure


*/

// Window is the Global object in this object we have Document object
console.log(window);
console.log(window.document);

// logging methods
console.dir(window.document);

// we do not need prefix window
console.log(document);

// body of the document
console.log(document.body);

// html of the body
console.log(document.body.innerHTML);

// getting text
console.log(document.body.innerText);

// getting all links in the document
console.log(document.links);
console.log(document.links[0]);

// changing the body
document.body.innerHTML = "<h1>Hello</h1>";

// methods
document.write("Hello FROM JS");
