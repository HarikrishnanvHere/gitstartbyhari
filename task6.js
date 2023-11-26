//making background of 2nd element green 

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

//making third item invisible

let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility = "hidden";

//making third item font color green using "Query Selector All"

let listItems = document.querySelectorAll(".list-group-item");
//console.log(listItems);
listItems[1].style.color = "green";

let oddItems = document.querySelectorAll(".list-group-item:nth-child(odd)");
//console.log(oddItems);
for(let i=0;i<oddItems.length;i++){
    oddItems[i].style.backgroundColor = "green";
}