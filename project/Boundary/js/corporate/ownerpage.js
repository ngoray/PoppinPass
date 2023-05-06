function gReport() {
    var y = document.getElementById("generateReport");
    var z = document.getElementById("viewReport");

    var c = document.getElementById("gReport");
    var d = document.getElementById("vReport");

    c.classList.add("active");
    d.classList.remove("active");

    if (y.style.display == "block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        $("#generateReport").fadeIn()
        y.style.display = "block";
        z.style.display = "none";
    }
}

function vReport() {
    var y = document.getElementById("generateReport");
    var z = document.getElementById("viewReport");

    var c = document.getElementById("gReport");
    var d = document.getElementById("vReport");

    c.classList.remove("active");
    d.classList.add("active");

    $("#viewReport").fadeIn()
    y.style.display = "none";
    z.style.display = "block";

}