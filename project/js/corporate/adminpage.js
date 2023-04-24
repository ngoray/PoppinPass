function viewCust() {
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    c.classList.add("active");
    d.classList.remove("active");

    if (y.style.display == "block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        $("#viewCustomerAccount").fadeIn()
        y.style.display = "block";
        z.style.display = "none";
    }
}

function viewStaff() {
    var y = document.getElementById("viewCustomerAccount");
    var z = document.getElementById("viewStaffAccount");

    var c = document.getElementById("viewCust");
    var d = document.getElementById("viewAdm");

    c.classList.remove("active");
    d.classList.add("active");

    $("#viewStaffAccount").fadeIn()
    y.style.display = "none";
    z.style.display = "block";

}