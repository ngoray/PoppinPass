function viewCust() {
    var x = document.getElementById("viewUserProfile");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var b = document.getElementById("viewUsP");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    b.classList.remove("active");
    c.classList.add("active");
    d.classList.remove("active");

    if (y.style.display == "block") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        $("#viewCustomerAccount").fadeIn()
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function viewStaff() {
    var x = document.getElementById("viewUserProfile");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var b = document.getElementById("viewUsP");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.add("active");

    $("#viewStaffAccount").fadeIn()
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

}

function viewUserProfile() {
    var x = document.getElementById("viewUserProfile");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var b = document.getElementById("viewUsP");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    userprofile.fetchUserProfile();
    
    b.classList.add("active");
    c.classList.remove("active");
    d.classList.remove("active");

    $("#viewUseProfile").fadeIn()
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

}