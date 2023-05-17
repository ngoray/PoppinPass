function mSeatMap() {
    var u = document.getElementById("manageSeatMap");
    var v = document.getElementById("manageOccupancy");
    var w = document.getElementById("manageScreenTime");
    var x = document.getElementById("manageMovies");
    var y = document.getElementById("manageMovieTicket");
    var z = document.getElementById("manageFoodBeveragesTicket");
7
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

    viewcinemaroomcontroller.fetchCinemaRoom();

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

    viewoccupancycontroller.fetchOccu();

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

    viewscreentimecontroller.fetchScreenTime();

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
    viewmoviecontroller.getMovieData4Manager();

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

    viewticketcontroller.fetchTicketType();

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

    viewmenucontroller.fetchMenu();

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

var loadMovie = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function displayMoviePic() {
    var input = document.getElementById('pictureMovie');
    var fileName = input.value.split('\\').pop();
    document.getElementById('picMovie').value = fileName;
}

var loadUpdateMovie = function(event) {
	var image = document.getElementById('updateMoviePic');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function displayUpdateMoviePic() {
    var input = document.getElementById('updatepictureMovie');
    var fileName = input.value.split('\\').pop();
    document.getElementById('updatepicMovie').value = fileName;
}


function closeUpdateMovieModal(){
    document.getElementById("updateMovietable").style.display="none";
   
}

var loadFile = function(event) {
	var image = document.getElementById('output1');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function displayCreateMenu() {
    var input = document.getElementById('picname');
    var fileName = input.value.split('\\').pop();
    document.getElementById('picname1').value = fileName;
  }


var loadFile1 = function(event) {
	var image = document.getElementById('updateOutput1');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function displayUpdateMenu() {
    var input = document.getElementById('updatepicname');
    var fileName = input.value.split('\\').pop();
    document.getElementById('updatePicname1').value = fileName;
  }

function closeUpdateMenuModal(){
    document.getElementById("updateMenutable").style.display="none";
   
}

function openAddScreenTimeModal(){
    document.getElementById("createScreenTimetable").style.display="block";
    movies.getMovieDataST();
    cinemaroom.fetchCinemaRoomST();
}

function closeAddScreenTimeModal() {
    document.getElementById("createScreenTimetable").style.display="none";   
}

function closeUpdateScreenTimeModal() {
    document.getElementById("updateScreenTimetable").style.display="none"; 
}