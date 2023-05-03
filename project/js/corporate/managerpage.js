function mSeatMap() {
    var u = document.getElementById("manageSeatMap");
    var v = document.getElementById("manageOccupancy");
    var w = document.getElementById("manageScreenTime");
    var x = document.getElementById("manageMovies");
    var y = document.getElementById("manageMovieTicket");
    var z = document.getElementById("manageFoodBeveragesTicket");

    var a = document.getElementById("seatMap");
    var b = document.getElementById("occupancy");
    var c = document.getElementById("screenTime");
    var d = document.getElementById("movies");
    var e = document.getElementById("movieTicket");
    var f = document.getElementById("foodbevaragesTicket");

    a.classList.add("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.remove("active");
    e.classList.remove("active");
    f.classList.remove("active");

    cinemaroom.fetchCinemaRoom();

    if (u.style.display == "block") {
        u.style.display = "block";
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        $("#manageSeatMap").fadeIn()
        u.style.display = "block";
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function mOccupancy() {
    var u = document.getElementById("manageSeatMap");
    var v = document.getElementById("manageOccupancy");
    var w = document.getElementById("manageScreenTime");
    var x = document.getElementById("manageMovies");
    var y = document.getElementById("manageMovieTicket");
    var z = document.getElementById("manageFoodBeveragesTicket");

    var a = document.getElementById("seatMap");
    var b = document.getElementById("occupancy");
    var c = document.getElementById("screenTime");
    var d = document.getElementById("movies");
    var e = document.getElementById("movieTicket");
    var f = document.getElementById("foodbevaragesTicket");

    a.classList.remove("active");
    b.classList.add("active");
    c.classList.remove("active");
    d.classList.remove("active");
    e.classList.remove("active");
    f.classList.remove("active");

    occupancy.fetchOccu();

    if (v.style.display == "block") {
        u.style.display = "none";
        v.style.display = "block";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        $("#manageOccupancy").fadeIn()
        v.style.display = "block";
        u.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function mScreenTime() {
    var u = document.getElementById("manageSeatMap");
    var v = document.getElementById("manageOccupancy");
    var w = document.getElementById("manageScreenTime");
    var x = document.getElementById("manageMovies");
    var y = document.getElementById("manageMovieTicket");
    var z = document.getElementById("manageFoodBeveragesTicket");

    var a = document.getElementById("seatMap");
    var b = document.getElementById("occupancy");
    var c = document.getElementById("screenTime");
    var d = document.getElementById("movies");
    var e = document.getElementById("movieTicket");
    var f = document.getElementById("foodbevaragesTicket");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.add("active");
    d.classList.remove("active");
    e.classList.remove("active");
    f.classList.remove("active");

    if (w.style.display == "block") {
        u.style.display = "none";
        v.style.display = "none";
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        $("#manageScreenTime").fadeIn()
        w.style.display = "block";
        u.style.display = "none";
        v.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function mMovies() {
    var u = document.getElementById("manageSeatMap");
    var v = document.getElementById("manageOccupancy");
    var w = document.getElementById("manageScreenTime");
    var x = document.getElementById("manageMovies");
    var y = document.getElementById("manageMovieTicket");
    var z = document.getElementById("manageFoodBeveragesTicket");

    var a = document.getElementById("seatMap");
    var b = document.getElementById("occupancy");
    var c = document.getElementById("screenTime");
    var d = document.getElementById("movies");
    var e = document.getElementById("movieTicket");
    var f = document.getElementById("foodbevaragesTicket");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.add("active");
    e.classList.remove("active");
    f.classList.remove("active");

    //HERE
    movies.getMovieData2();

    if (x.style.display == "block") {
        u.style.display = "none";
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        $("#manageMovies").fadeIn()
        x.style.display = "block";
        u.style.display = "none";
        v.style.display = "none";
        w.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function mMovieTicket() {
    var u = document.getElementById("manageSeatMap");
    var v = document.getElementById("manageOccupancy");
    var w = document.getElementById("manageScreenTime");
    var x = document.getElementById("manageMovies");
    var y = document.getElementById("manageMovieTicket");
    var z = document.getElementById("manageFoodBeveragesTicket");

    var a = document.getElementById("seatMap");
    var b = document.getElementById("occupancy");
    var c = document.getElementById("screenTime");
    var d = document.getElementById("movies");
    var e = document.getElementById("movieTicket");
    var f = document.getElementById("foodbevaragesTicket");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.remove("active");
    e.classList.add("active");
    f.classList.remove("active");

    if (y.style.display == "block") {
        u.style.display = "none";
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        $("#manageMovieTicket").fadeIn()
        y.style.display = "block";
        u.style.display = "none";
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        z.style.display = "none";
    }
}

function mFoodBeveragesTicket() {
    var u = document.getElementById("manageSeatMap");
    var v = document.getElementById("manageOccupancy");
    var w = document.getElementById("manageScreenTime");
    var x = document.getElementById("manageMovies");
    var y = document.getElementById("manageMovieTicket");
    var z = document.getElementById("manageFoodBeveragesTicket");

    var a = document.getElementById("seatMap");
    var b = document.getElementById("occupancy");
    var c = document.getElementById("screenTime");
    var d = document.getElementById("movies");
    var e = document.getElementById("movieTicket");
    var f = document.getElementById("foodbevaragesTicket");

    a.classList.remove("active");
    b.classList.remove("active");
    c.classList.remove("active");
    d.classList.remove("active");
    e.classList.remove("active");
    f.classList.add("active");

    menu.fetchMenu();

    if (z.style.display == "block") {
        u.style.display = "none";
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        $("#manageFoodBeveragesTicket").fadeIn()
        z.style.display = "block";
        u.style.display = "none";
        v.style.display = "none";
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
    }
}

function openAddMovieModal(){
    $("#createMovietable").fadeIn()
    document.getElementById("createMovietable").style.display="block";
}

function closeAddMovieModal(){
    document.getElementById("createMovietable").style.display="none";
   
}

function openAddMovie(){
    document.getElementById("manageMovieContent").style.display="none";
    $("#addMovie").fadeIn()
    document.getElementById("addMovie").style.display="block";
}

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
}

var loadFile1 = function(event) {
	var image = document.getElementById('output1');
	image.src = URL.createObjectURL(event.target.files[0]);
}

