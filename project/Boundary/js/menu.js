function snackMenu(){
    var x = document.getElementById("snacksmenu");
    var a = document.getElementById("snackbtn");

    var y = document.getElementById("drinksmenu");
    var b = document.getElementById("drinkbtn");

    var z = document.getElementById("combomenu");
    var c = document.getElementById("combobtn");

    a.classList.add("active");
    b.classList.remove("active");
    c.classList.remove("active");

    customerviewmenucontroller.getSnacks();

    if (x.style.display == "block") {
        y.style.display="none";
        z.style.display="none";

    } else {
        $("#snacksmenu").fadeIn()
        x.style.display="block";
        y.style.display="none";
        z.style.display="none";
    }
}
function drinkMenu(){
    var x = document.getElementById("snacksmenu");
    var a = document.getElementById("snackbtn");

    var y = document.getElementById("drinksmenu");
    var b = document.getElementById("drinkbtn");

    var z = document.getElementById("combomenu");
    var c = document.getElementById("combobtn");

    a.classList.remove("active");
    b.classList.add("active");
    c.classList.remove("active");

    customerviewmenucontroller.getDrinks();

    if (y.style.display == "block") {
        x.style.display="none";
        z.style.display="none";

    } else {
        $("#drinksmenu").fadeIn()
        x.style.display="none";
        y.style.display="block";
        z.style.display="none";
    }
}
function comboMenu(){
    var x = document.getElementById("snacksmenu");
    var a = document.getElementById("snackbtn");

    var y = document.getElementById("drinksmenu");
    var b = document.getElementById("drinkbtn");

    var z = document.getElementById("combomenu");
    var c = document.getElementById("combobtn");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.add("active");

    customerviewmenucontroller.getCombo();

    if (z.style.display == "block") {
        x.style.display="none";
        y.style.display="none";

    } else {
        $("#combomenu").fadeIn()
        x.style.display="none";
        y.style.display="none";
        z.style.display="block";
    }
}

function check4Login(){
    // if (sessionStorage.getItem("name") === null){
    //     alert("PLS LOGIN TO CONTINUE");
    //     document.getElementById('id01').style.display="block";
    // }
    // else 
    // {
        console.log(document.getElementById('product-name').innerText);
        addToCart();
    // }
}