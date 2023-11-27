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
}