let formEle = document.getElementById("my-form");
formEle.addEventListener("submit",storeDetails);


function storeDetails(e){
    e.preventDefault();

    //collecting info:

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    //creating object:

    let detailsObj = {
        "name" : name ,
        "email" : email ,
        "phone" : phone
    }

    //converting object to JSON format:


    let details_stringified = JSON.stringify(detailsObj);

    //storing converted object in local storage:

    localStorage.setItem(name , details_stringified);

    //displaying details in UI:

    let list = document.getElementById("details");
    let listEle = document.createElement("li");
    listEle.textContent = name+" - "+email+" - "+phone;
    list.appendChild(listEle);

    //adding delete button:

    let buttonEle = document.createElement("button");
    buttonEle.textContent = "Delete";
    list.appendChild(buttonEle);

    //adding edit button:

    let editbuttonEle = document.createElement("button");
    editbuttonEle.textContent = "Edit";
    list.appendChild(editbuttonEle);

    //removing list item from UI and localstorage:

    buttonEle.addEventListener("click",deleteElement);

    function deleteElement(){
        list.removeChild(listEle);
        list.removeChild(buttonEle);
        list.removeChild(editbuttonEle);

        localStorage.removeItem(name);
    }

    

    //removing list item from UI and localstorage:

    editbuttonEle.addEventListener("click",editElement);

    function editElement(){
        list.removeChild(listEle);
        list.removeChild(buttonEle);
        list.removeChild(editbuttonEle);


        localStorage.removeItem(name);

        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
        document.getElementById("phone").value = phone;
    }

}
