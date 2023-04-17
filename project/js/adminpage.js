function createCust() {
    var w = document.getElementById("createCustomerAccount");
    var x = document.getElementById("createStaffAccount");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var a = document.getElementById("createCust");
    var b = document.getElementById("createAdm");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";

        a.classList.add("active");
        b.classList.remove("active");
        c.classList.remove("active");
        d.classList.remove("active");
    
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

        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";

        a.classList.remove("active");
        b.classList.add("active");
        c.classList.remove("active");
        d.classList.remove("active");
  
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

  
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";

        a.classList.remove("active");
        b.classList.remove("active");
        c.classList.add("active");
        d.classList.remove("active");
}

function viewStaff() {
    staff.getAllStaff(); 
    var w = document.getElementById("createCustomerAccount");
    var x = document.getElementById("createStaffAccount");
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var a = document.getElementById("createCust");
    var b = document.getElementById("createAdm");
    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";

        a.classList.remove("active");
        b.classList.remove("active");
        c.classList.remove("active");
        d.classList.add("active");

}