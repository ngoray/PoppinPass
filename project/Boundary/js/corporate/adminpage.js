function viewUserProfile() {
    var w = document.getElementById("viewUserAccount");
    var x = document.getElementById("viewUserProfile");

    var a = document.getElementById("viewUsA");
    var b = document.getElementById("viewUsP");

    viewuserprofilecontroller.fetchUserProfile();
    
    a.classList.remove("active");
    b.classList.add("active");

    $("#viewUseProfile").fadeIn()
    x.style.display = "block";
    w.style.display = "none";

}

function viewUserAccount() {
    var w = document.getElementById("viewUserAccount");
    var x = document.getElementById("viewUserProfile");

    var a = document.getElementById("viewUsA");
    var b = document.getElementById("viewUsP");
    
    a.classList.add("active");
    b.classList.remove("active");

    useraccount.fetchUserAccount();

    $("#viewUserAccount").fadeIn()
    w.style.display = "block";
    x.style.display = "none";

}


