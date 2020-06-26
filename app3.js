
// Dom traversing .....moving on the doc ...
let val ; 

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');




val = listItem;
val = list;

//Get the child nodes 
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
// Get the children Elements only 
 val = list.children;
 val = list.children[0];
 val = list.children[3].children[0];

 val = list.firstChild;
 val = list.firstElementChild;
 val = list.lastChild;
 val = list.lastElementChild;
// count child elements 
val = list.childElementCount;

// Get parent element 

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get sibling 
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);