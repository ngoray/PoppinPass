function moviePage() {
    var w = document.getElementById("uProfile");
    var d = document.getElementById("customercontent");

    var x = document.getElementById("movie");
    var c = document.getElementById("moviepage");

    var y = document.getElementById("menu");
    var b = document.getElementById("menupage");

    var z = document.getElementById("feedback");
    var a = document.getElementById("feedbackpage");

    var slide = document.getElementById("slideshow");

    x.classList.add("active");
    z.classList.remove("active");
    w.classList.remove("active");

    resetbooking();

    if (c.style.display == "block") {
        a.style.display="none";
        d.style.display="none";

    } else {
        $("#moviepage").fadeIn()
        c.style.display="block";
        slide.style.display="block";
        a.style.display="none";
        d.style.display="none";
    }
 }

//  function menuPage() {
//     var w = document.getElementById("uProfile");
//     var d = document.getElementById("customercontent");

//     var x = document.getElementById("movie");
//     var c = document.getElementById("moviepage");

//     var y = document.getElementById("menu");
//     var b = document.getElementById("menupage");

//     var z = document.getElementById("feedback");
//     var a = document.getElementById("feedbackpage");

//     var slide = document.getElementById("slideshow");

//     menu.getSnacks();

//     y.classList.add("active");
//     z.classList.remove("active");
//     x.classList.remove("active");
//     w.classList.remove("active");


//     if (b.style.display == "block") {
//         a.style.display="none";
//         c.style.display="none";
//         d.style.display="none";
//     } else {
//         $("#menupage").fadeIn()
//         b.style.display="block";
//         slide.style.display="none";
//         a.style.display="none";
//         c.style.display="none";
//         d.style.display="none";
//     }
//  }

 function reviewPage() {
    var w = document.getElementById("uProfile");
    var d = document.getElementById("customercontent");

    var x = document.getElementById("movie");
    var c = document.getElementById("moviepage");

    // var y = document.getElementById("menu");
    // var b = document.getElementById("menupage");

    var z = document.getElementById("feedback");
    var a = document.getElementById("feedbackpage");

    var slide = document.getElementById("slideshow");

    z.classList.add("active");
    // y.classList.remove("active");
    x.classList.remove("active");
    w.classList.remove("active");

    resetbooking();

    if (a.style.display == "block") {
        // b.style.display="none";
        c.style.display="none";
        d.style.display="none";
    } else {
        $("#feedbackpage").fadeIn()
        a.style.display="block";
        slide.style.display="none";
        // b.style.display="none";
        c.style.display="none";
        d.style.display="none";

        viewreview.fetchReview();
        typewriter();
    }
 }

 function profilePage() {
    var w = document.getElementById("uProfile");
    var d = document.getElementById("customercontent");

    var x = document.getElementById("movie");
    var c = document.getElementById("moviepage");

    // var y = document.getElementById("menu");
    // var b = document.getElementById("menupage");

    var z = document.getElementById("feedback");
    var a = document.getElementById("feedbackpage");

    var slide = document.getElementById("slideshow");

    w.classList.add("active");
    // y.classList.remove("active");
    x.classList.remove("active");
    z.classList.remove("active");

    viewtransactionhistorycontroller.fetchTransactionHistory(this);

    resetbooking();

    if (d.style.display == "block") {
        a.style.display="block";
        // b.style.display="none";
        c.style.display="none";
    } else {
        $("#customercontent").fadeIn()
        d.style.display="block";
        slide.style.display="none";
        a.style.display="none";
        // b.style.display="none";
        c.style.display="none";

        review.fetchReview();
        typewriter();
    }
 }

 function bookMoviePage() {
    var e = document.getElementById("bookingpage");
    var d = document.getElementById("customercontent");
    var c = document.getElementById("moviepage");
    var b = document.getElementById("menupage");
    var a = document.getElementById("feedbackpage");
    var slide = document.getElementById("slideshow");

    if (e.style.display == "block") {
        a.style.display="none";
        b.style.display="none";
        c.style.display="none";
        d.style.display="none";
    } else {
        $("bookingpage").fadeIn()
        e.style.display="block";
        d.style.display="none";
        slide.style.display="none";
        a.style.display="none";
        b.style.display="none";
        c.style.display="none";

    }

    document.getElementById('bookST').style.display="block";
 }

 function custLoggingout(){
    $("custloggout1").fadeIn()
    var a = document.getElementById("custloggout1");
    a.style.display="block";
 }

 function CancelCustLogout(){
    $("custloggout1").fadeIn()
    document.getElementById("custloggout1").style.display="none";
 }
 function custLogout(){
    sessionStorage.clear();
    document.getElementById("custloggout1").style.display="none";
    document.getElementById("customercontent").style.display ="none";
    document.getElementById("userCart").style.display ="none";
    document.getElementById("uProfile").style.display ="none";
    document.getElementById("loginbtn").style.display ="block";
    moviePage();
 }