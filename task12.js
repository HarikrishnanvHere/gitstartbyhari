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

}