var itemlist = document.querySelector('#items');


//console.log(itemlist.parentElement);
//itemlist.parentElement.style.background = 'pink';
//console.log(itemlist.parentElement.parentElement.parentElement);

//Child Nodes
//console.log(itemlist.childNodes);
//console.log(itemlist.children);

//first element child
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent = 'Hello 1';

//console.log(itemlist.nextSibling);
//console.log(itemlist.nextElementSibling);

//console.log(itemlist.previousSibling);
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = 'red';


var newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'hello';

newDiv.setAttribute('title','Hello Div');

var newdixText = document.createTextNode('Hello World');

newDiv.appendChild(newdixText);

console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

const newli = document.createElement("li");
// Create a text node:
const textNode = document.createTextNode("hello World");
// Append text node to "li" element:
newli.appendChild(textNode);

// Insert before existing child:
const list = document.getElementById("items");
list.insertBefore(newli, list.children[0]);