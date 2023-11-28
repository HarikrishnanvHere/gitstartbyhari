let formEle = document.getElementById("my-form");
formEle.addEventListener("submit", storeDetails);

function storeDetails(e){
    e.preventDefault();
    let nameEle = document.getElementById("name");
    let name = nameEle.value;
    let emailEle = document.getElementById("email");
    let email = emailEle.value;
    //console.log(name,email);

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

    let newObj = {
        name : name ,
        email : email
    
    }

    let newObj_stringified = JSON.stringify(newObj);
    localStorage.setItem("stringified_obj",newObj_stringified);

}