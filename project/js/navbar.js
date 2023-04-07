function makeActive() {
    var x = document.getElementById("movie");
    var c = document.getElementById("moviepage");

    var y = document.getElementById("menu");
    var b = document.getElementById("menupage");

    var z = document.getElementById("feedback");
    var a = document.getElementById("feedbackpage");

    x.classList.add("active");
    y.classList.remove("active");
    z.classList.remove("active");

    if (c.style.display == "block") {
        a.style.display="none";
        b.style.display="none";
    } else {
        $("#moviepage").fadeIn()
        c.style.display="block";
        b.style.display="none";
        a.style.display="none";
    }
 }

 function makeActive1() {
    var x = document.getElementById("movie");
    var c = document.getElementById("moviepage");

    var y = document.getElementById("menu");
    var b = document.getElementById("menupage");

    var z = document.getElementById("feedback");
    var a = document.getElementById("feedbackpage");

    y.classList.add("active");
    z.classList.remove("active");
    x.classList.remove("active");


    if (b.style.display == "block") {
        a.style.display="none";
        c.style.display="none";
    } else {
        $("#menupage").fadeIn()
        b.style.display="block";
        a.style.display="none";
        c.style.display="none";
    }
 }

 function makeActive2() {
    var x = document.getElementById("movie");
    var c = document.getElementById("moviepage");

    var y = document.getElementById("menu");
    var b = document.getElementById("menupage");

    var z = document.getElementById("feedback");
    var a = document.getElementById("feedbackpage");

    z.classList.add("active");
    y.classList.remove("active");
    x.classList.remove("active");

    if (a.style.display == "block") {
        b.style.display="none";
        c.style.display="none";
    } else {
        $("#feedbackpage").fadeIn()
        a.style.display="block";
        b.style.display="none";
        c.style.display="none";
    }
 }