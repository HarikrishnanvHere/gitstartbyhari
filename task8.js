var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
//filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }


//Adding edit button

let editButtonArray = [];

let editButtonele1 = document.createElement("button");
editButtonele1.className = 'btn btn-danger btn-sm float-right delete';
let textOfEdit1 = document.createTextNode("Edit");
editButtonele1.appendChild(textOfEdit1);
editButtonArray.push(editButtonele1);



let editButtonele2 = document.createElement("button");
editButtonele2.className = 'btn btn-danger btn-sm float-right delete';
let textOfEdit2 = document.createTextNode("Edit");
editButtonele2.appendChild(textOfEdit2);
editButtonArray.push(editButtonele2);


let editButtonele3 = document.createElement("button");
editButtonele3.className = 'btn btn-danger btn-sm float-right delete';
let textOfEdit3 = document.createTextNode("Edit");
editButtonele3.appendChild(textOfEdit3);
editButtonArray.push(editButtonele3);


let editButtonele4 = document.createElement("button");
editButtonele4.className = 'btn btn-danger btn-sm float-right delete';
let textOfEdit4 = document.createTextNode("Edit");
editButtonele4.appendChild(textOfEdit4);
editButtonArray.push(editButtonele4);


//console.log(editButtonArray);

let listElements = document.getElementsByClassName("list-group-item");
for(let i=0;i<listElements.length;i++){
    listElements[i].appendChild(editButtonArray[i]);
}


// implementing filter mechanism:

//getting input text:
let inputElement = document.getElementById("filter");

inputElement.addEventListener("keyup",filterText);


function filterText(e){
    let inputText = e.target.value.toLowerCase();

    //getting list item text;

    let Arr = Array.from(itemList.getElementsByTagName("li"));

    for(let i=0;i<Arr.length;i++){
        let t = Arr[i].firstChild.textContent.toLowerCase();
        if(t.indexOf(inputText)!=-1){
            Arr[i].style.display = "block";
        }
        else{
            Arr[i].style.display = "none";
        }
    }


}
