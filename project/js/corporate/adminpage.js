function createCust() {
    var w = document.getElementById("createCustomerAccount");
    var x = document.getElementById("createStaffAccount");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var a = document.getElementById("createCust");
    var b = document.getElementById("createAdm");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    a.classList.add("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.remove("active");

    if (w.style.display == "block") {
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        $("#createCustomerAccount").fadeIn()
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
    
}

function createStaff() {
    var w = document.getElementById("createCustomerAccount");
    var x = document.getElementById("createStaffAccount");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var a = document.getElementById("createCust");
    var b = document.getElementById("createAdm");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    a.classList.remove("active");
    b.classList.add("active");
    c.classList.remove("active");
    d.classList.remove("active");

    if (x.style.display == "block") {
        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        $("#createStaffAccount").fadeIn()
        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
  
}

function viewCust() {
    var w = document.getElementById("createCustomerAccount");
    var x = document.getElementById("createStaffAccount");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var a = document.getElementById("createCust");
    var b = document.getElementById("createAdm");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.add("active");
    d.classList.remove("active");

    if (y.style.display == "block") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        $("#viewCustomerAccount").fadeIn()
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function viewStaff() {
    var w = document.getElementById("createCustomerAccount");
    var x = document.getElementById("createStaffAccount");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var a = document.getElementById("createCust");
    var b = document.getElementById("createAdm");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.add("active");

    $("#viewStaffAccount").fadeIn()
    w.style.display = "none";
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

}