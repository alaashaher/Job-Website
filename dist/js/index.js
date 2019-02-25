//to open nav bar in mobile
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
//to close nav bar in mobile
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const myFunction =()=> {
    let email;

    email = document.getElementById("textEmail").value;

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(textEmail.value) == false) {
        alert("invalid email");
        console.log("invalid");
        return false;
    }
    return true;
}
//# sourceMappingURL=index.js.map
