function searchUserProfile() {
    var input, filter, table, tr, td, a, i, txtValue;
    input = document.getElementById("profileSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("getUserProfile");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        x = tr[i].getElementsByTagName("a")[0];
        txtValue = x.textContent || x.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function searchUserAccount() {
    var input, filter, table, tr, td, a, i, txtValue;
    input = document.getElementById("userSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("getUser");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        x = tr[i].getElementsByTagName("a")[0];
        txtValue = x.textContent || x.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function searchMovies() {
    var input, filter, table, tr, td, a, i, txtValue;
    input = document.getElementById("movieSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("getMovies");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        x = tr[i].getElementsByTagName("a")[0];
        txtValue = x.textContent || x.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function searchOccupancy() {
    var input, filter, table, tr, td, a, i, txtValue;
    input = document.getElementById("occupancySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("getOccupancy");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        x = tr[i].getElementsByTagName("a")[0];
        txtValue = x.textContent || x.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function searchRoomNumber()
    {
        var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("RoomNumberSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getRoomNumber");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            x = tr[i].getElementsByTagName("a")[0];
            txtValue = x.textContent || x.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

function searchFood()
    {
        var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("menuSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getMenu");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            x = tr[i].getElementsByTagName("a")[0];
            txtValue = x.textContent || x.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

function searchScreenTime()
    {
        var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("screenTimeSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getScreenTime");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            x = tr[i].getElementsByTagName("a")[0];
            txtValue = x.textContent || x.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

function searchScreenTime()
    {
        var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("screenTimeSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getScreenTime");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            x = tr[i].getElementsByTagName("a")[0];
            txtValue = x.textContent || x.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

function searchTicket()
    {
        var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("ticketSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getTicket");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            x = tr[i].getElementsByTagName("a")[0];
            txtValue = x.textContent || x.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

function searchUserProfile()
    {
        var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("profileSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getUserProfile");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            x = tr[i].getElementsByTagName("a")[0];
            txtValue = x.textContent || x.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

function searchMovie()
    {
        var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("moovieSearchResult");
        filter = input.value.toUpperCase();
        table = document.getElementById("getMooviesdata");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            x = tr[i].getElementsByTagName("a")[0];
            txtValue = x.textContent || x.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }