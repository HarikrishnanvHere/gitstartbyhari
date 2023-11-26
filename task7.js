var firstListItem = document.querySelector(".list-group-item");
//console.log(firstListItem);

//Parent Element
let listContainer = firstListItem.parentElement;
let containerElement = firstListItem.parentElement.parentElement;
containerElement.style.backgroundColor = "#f4f4f4";

// lastChild and lastElementChild
console.log(listContainer.lastChild);
console.log(listContainer.lastElementChild);
let lastChildElement = listContainer.lastElementChild;
lastChildElement.style.color = "green";

// firstChild and firstElementChild
console.log(listContainer.firstChild);
console.log(listContainer.firstElementChild);
let firstChildElement = listContainer.firstElementChild;
firstChildElement.style.color = "red";

//nextSibling and nextelementSibling
console.log(firstListItem.nextSibling);
firstListItem.nextElementSibling.textContent = "Changed using nextElementSibling property";

//previousSibling and previousElementSibling
console.log(firstListItem.previousSibling);
lastChildElement.previousElementSibling.textContent = "Changed using previousElementSibling property";

//creating a div element
let newDivEle = document.createElement("div");
//console.log(newDivEle);
newDivEle.className = "hi";
newDivEle.id = "newDivElement";

//creating text node
let newTxtNode = document.createTextNode("Hello");

//setting attribute
newDivEle.setAttribute("title","testForAttribute");

//appending text node
newDivEle.appendChild(newTxtNode);
console.log(newDivEle);

let itemListerContainer = document.querySelector("header .container");
let itemLister = document.getElementById("header-title");

//adding hello before Item Lister
itemListerContainer.insertBefore(newDivEle,itemLister);

//adding hello before firdt item
listContainer.insertBefore(newDivEle,firstListItem);







