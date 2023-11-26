//manipulating new list item by class name


let listItem = document.getElementsByClassName("list-group-item");
//console.log(listItem);

for (let i=0;i<listItem.length;i++){
    listItem[i].style.backgroundColor="#f4f4f4";
}


//manipulating new list item by tag name

let listItemByTagName = document.getElementsByTagName("li");

for (let i=0;i<listItemByTagName.length;i++){
    listItemByTagName[i].style.backgroundColor="#f4f4f4";
    }
